import React, { useEffect, useState } from 'react'
import { Link, Outlet} from 'react-router-dom'

const Products = () => {

  const [products,setProducts]=useState([])
  
  useEffect(()=>{
    const fetchProducts=async ()=>{
      let r=await fetch(`http://localhost:8080/products`)
      let d=await r.json()
      setProducts(d)
    }
    fetchProducts()
  },[])


  return (
    <div>
      <h1>Products</h1>
      <div className="prod">
        <div className='prodlink'>
          {products.map((el) => (
            <div key={el.id}>
              <Link to={`/products/${el.id}/${el.name}`}>
                <h4>{el.name}</h4>
              </Link>
            </div>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Products