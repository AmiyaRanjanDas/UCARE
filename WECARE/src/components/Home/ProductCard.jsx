import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
const ProductCard = () => {
  return (
    <div className="card rounded shadow-sm border-0 my-2 cursor-pointer">
    <div className="card-body p-4"><img src="https://bootstrapious.com/i/snippets/sn-cards/shoes-2_g4qame.jpg" alt="" className="img-fluid d-block mx-auto mb-3"/>
      <h5  className="text-dark">Awesome product</h5>
      <h5></h5>
      <h6 className='small'>MRP <span className='text-decoration-line-through text-muted'>₹ 100</span> <span className='text-success fw-bold'>10% OFF</span></h6>
      <h5 className='fs-4 fw-bold'>₹ 90</h5>
      <button className='btn btn-primary w-100 fw-bold '>Add to cart</button>
    </div>
  </div>
  )
}

export default ProductCard