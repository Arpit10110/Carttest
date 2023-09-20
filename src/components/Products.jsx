import React from 'react'
import "../style/productcsrd.css"
const Products = ({id , imgsrc , name ,price, handler}) => {
  return (
   <div className='productCard'>
    <img className='productimg' alt={name} src={imgsrc}  />
    <h3>{name} id:{id}</h3>
    <h4>₹{price}</h4>
    <button className='addtocartbtn' onClick={()=>handler({name , id ,price,imgsrc,qty:1 })}>Add to Cart</button>
   </div>
  )
}

export default Products