import React from 'react'
import data from "./Fruits.jsx"


const Products = () => {

  const fruitsEl = data.map((item) => (
        <li key={item.id} style={{color:item.isFruit ? "green" : "red"}} >{item.title} </li>
    ))



  return (
    <ol>{fruitsEl}</ol>
  )
}

export default Products