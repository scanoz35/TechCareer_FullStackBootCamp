import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup';
import { Grid } from '@mui/material'

function AppProduct() {

  const addProductSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Can not be empty!'),
    unitsInStock: Yup.number()
      .required('Can not be empty!'),
      unitPrice: Yup.number()
      .min(1, 'Too Low')
      .max(9999, 'Too Much')
      .required('Can not be empty!'),
      quantityPerUnit: Yup.number()
      .required('Can not be empty!')
  });

    const formik = useFormik({
        initialValues: {
          name: '',
          unitsInStock: '',
          unitPrice: '',
          quantityPerUnit: '',
        },
        validationSchema:addProductSchema,
        onSubmit: values => {
          addProduct(values)
        },
      });

      const addProduct = (data) => {
        axios.post('https://northwind.vercel.app/api/products/', data)
        .then(res => {
          console.log(res)
          alert("Success")
        })
      }


  return (
    <>

    <form onSubmit={formik.handleSubmit} >
    <Grid container>
      <Grid item md={6} xs={12}>
        <div>
            <label htmlFor="">Name: </label>
            <input 
            type="text"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name} />
            {
          formik.errors.name ? <span style={{ color: 'red' }}> {formik.errors.name}</span> : <></>
        }
        </div>
        </Grid>

        <Grid item md={6} xs={12}>
        <div>
            <label htmlFor="">Stock: </label>
            <input 
            type="number"
            name="unitsInStock"
            onChange={formik.handleChange}
            value={formik.values.unitsInStock} />
            {
          formik.errors.unitsInStock ? <span style={{ color: 'red' }}> {formik.errors.unitsInStock}</span> : <></>
        }
        </div>
        </Grid>

        <Grid item md={6} xs={12}>
        <div>
            <label htmlFor="">Unit Price: </label>
            <input 
            type="number"
            name="unitPrice"
            onChange={formik.handleChange}
            value={formik.values.unitPrice} />
            {
          formik.errors.unitPrice ? <span style={{ color: 'red' }}> {formik.errors.unitPrice}</span> : <></>
        }
        </div>
        </Grid>

        <Grid item md={6} xs={12}>
        <div>
            <label htmlFor="">Quantity Per Unit: </label>
            <input 
            type="number"
            name="quantityPerUnit"
            onChange={formik.handleChange}
            value={formik.values.quantityPerUnit} />
            {
          formik.errors.quantityPerUnit ? <span style={{ color: 'red' }}> {formik.errors.quantityPerUnit}</span> : <></>
        }
        </div>
        </Grid>

        <Grid>
        <div>
            <button type='submit'>Add</button>
        </div>
        </Grid>
        
        </Grid>
    </form>

    </>
  )
}

export default AppProduct