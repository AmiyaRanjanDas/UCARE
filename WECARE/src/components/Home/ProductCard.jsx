import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
const ProductCard = () => {
  return (
    <div className="card rounded shadow-sm border-0 my-2 cursor-pointer">
    <div className="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" className="img-fluid d-block mx-auto mb-3"/>
      <h5  className="text-dark">Awesome product</h5>
      <h5></h5>
      <h6 className='small'>MRP <span className='text-decoration-line-through text-muted'>₹ 100</span> <span className='text-success fw-bold'>10% OFF</span></h6>
      <h5 className='fs-4 fw-bold d-flex justify-content-between'><span>₹ 90</span> <span className='bg-success  fw-lighter px-2 text-center pb-1 rounded-2 d-flex align-items-center fs-6 text-white'>4.5 <span><AiOutlineStar/></span> </span></h5>
      <button className='btn w-100 fw-bold text-white btn-red ' style={{background:"#ff6f6f"}}>Add to cart</button>
    </div>
  </div>
  )
}

export default ProductCard