import React , { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import { Button } from '@mui/material'
    

function DataGridSample() {

    const [products, setproducts] = useState([])

    useEffect(() => {
        loadProducts()
    
      
    }, [])

    const loadProducts = () => {
        axios.get('https://northwind.vercel.app/api/products/')
        .then(res => {
            setproducts(res.data)
        })
    }

    const deleteProduct = (id) => {
        axios.delete('https://northwind.vercel.app/api/products/'+id)
        .then(res => {
            loadProducts()
        })
    }

    const deleteButton  = (params) => {
        return (
            <strong>
            <Button
                variant='contained'
                color='primary'
                size='small'
                onClick={() => deleteProduct(params.row.id)}
            >
            Delete!
            </Button>
            </strong>
        )
    }

    const columns = [
        { field: 'id', headerName: 'Id', width: 150 },
        { field: 'name', headerName: 'Name of Product', width: 250},
        { field: 'unitPrice', headerName: 'Price', type: 'number', width: 150},
        { field: 'unitsInStock', headerName: 'Stock', type: 'number', width: 150,},
        { field: 'deleteProduct', headerName: 'Delete', width: 150, sortable: false, 
        renderCell: deleteButton },
    ];

    




  return (
    <>
     <DataGrid columns={columns} rows={products} 
     sx={{
        "& .red": {
            color: "red !important"
        }
     }}
     getRowClassName={(params) => {
        if (params.row.unitsInStock <= 0) {
            return "red";
        }
     }}
     
     
     
     />
    </>
  )
}

export default DataGridSample