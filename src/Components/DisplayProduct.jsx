import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DisplayProduct = () => {
  const [disprod ,setDisProd]=useState({})
  const {id} = useParams();
  useEffect(()=>{
    fetch(`http://localhost:8080/products/${id}`)
    .then(r=>r.json())
    .then(d=>{setDisProd(d)})
  },[id])

  return (
    <div>
      <h1>Selected Product</h1>
      <h4>Product Id : {id}</h4>
      <h4>Product Name : {disprod.name}</h4>
      <h4>Product Price : {disprod.price}</h4>
    </div>
  )
}

export default DisplayProduct