import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ProductList() {

    const [products, setproducts] = useState([])
    
    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products/')
        .then(res => {
            setproducts(res.data)
        })
    }

        useEffect(() => {
            loadProducts()
        }, [])

    const deleteProduct = (id) => {
        axios.delete('https://northwind.vercel.app/api/products/'+ id)
        .then(res => {
            loadProducts()
        })
    }
        

  
    

  return (
    <>
    <table className="w3-table w3-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Unit Price</th>
                <th>Units in Stock</th>
            </tr>
        </thead>
    <tbody>
       {products && products.map((item) => {
        return <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.unitPrice}</td>
            <td>{item.unitsInStock}</td>
            <button onClick={() => deleteProduct(item.id)} >Delete</button>
        </tr>
       })
    }
    </tbody>
        
    </table>
    
    </>
  )
}

export default ProductList