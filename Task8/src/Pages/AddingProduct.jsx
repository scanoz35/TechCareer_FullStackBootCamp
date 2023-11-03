import axios from 'axios';
import React from 'react'

function AddingProduct() {



  const add = () => {

    var name = document.getElementById('name').value;
    var unitPrice = document.getElementById('unitprice').value;
    var unitsInStock = document.getElementById('stock').value;

    var newProduct = {
      name,
      unitPrice,
      unitsInStock,
    }

    axios.post('https://northwind.vercel.app/api/products/', newProduct)
    .then(res => {
    })

  }

  return (
    <>
    <div style={{margin: '5%'}}>
    <div>
    <label htmlFor="">Name: </label>
    <input type="text"  id='name' />
    </div>
    <div>
    <label htmlFor="">Unit Price: </label>
    <input type="text" id='unitprice' />
    </div>
    <div>
    <label htmlFor="">Stock: </label>
    <input type="text" id='stock' />
    </div>
    <div>
    <button onClick={() => add()}>Add</button>
    </div>
    </div>
    </>
  )
}

export default AddingProduct