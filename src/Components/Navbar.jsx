import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate=useNavigate()
    const gotoError=()=>{
        navigate("/notfound")
    }
  return (
    <div className="link">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/products">Products</Link>
      <button className="errorbtn" onClick={gotoError}>Error Page</button>
    </div>
  );
}

export default Navbar