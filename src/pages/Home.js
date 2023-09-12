import React, { useState, useEffect } from 'react'
import { useLoaderData } from "react-router-dom";
import Banner from '../components/Banner'
import Products from '../components/Products'

const Home = () => {
    const [products, setProducts] = useState([])
    const data = useLoaderData()
    // console.log(data)
    useEffect(()=>{
      setProducts(data.data)
    },[data])
  return (
    <div>
      <Banner/>
      <Products products={products}/>
    </div>
  )
}

export default Home