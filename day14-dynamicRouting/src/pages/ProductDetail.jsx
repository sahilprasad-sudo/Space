import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router'
import axios from 'axios'

const ProductDetail = () => {

  const [singleProductData, setSingleProductData] = useState({})
  console.log(singleProductData)

  let {id} = useParams();
  
  let getSingleProductData = async () =>{
    try{
      let data = await axios(`https://fakestoreapi.com/products/${id}`)
      console.log(data.data)
      setSingleProductData(data.data)
    }
    catch(error){
      console.log("Error:",error)
    }
  }

  useEffect(() => {
    getSingleProductData()
  }, [])
  

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-5 md:p-10">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-10">

          {/* Product Image */}
          <div className="flex items-center justify-center bg-gray-50 rounded-xl p-8">
            <img
              src={singleProductData.image}
              alt={singleProductData.title}
              className="w-full max-w-md h-[450px] object-contain hover:scale-105 transition duration-300"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">

            {/* Category */}
            <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
              {singleProductData.category}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              {singleProductData.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-5">
              <div className="flex items-center gap-1 bg-green-600 text-white px-3 py-1 rounded-lg">
                {/* <span>{singleProductData.rating.rate}</span> */}
                <span>★</span>
              </div>

              <span className="text-gray-500">
                {/* {singleProductData.rating.count} Reviews */}
              </span>
            </div>

            {/* Price */}
            <div className="mt-6">
              <span className="text-4xl font-bold text-gray-900">
                ${singleProductData.price}
              </span>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            {/* Description */}
            <h2 className="text-lg font-semibold mb-2">
              Description
            </h2>

            <p className="text-gray-600 leading-7">
              {singleProductData.description}
            </p>

            {/* Quantity */}
            <div className="flex items-center gap-4 mt-7">

              <span className="font-semibold">
                Quantity
              </span>

              <div className="flex items-center border rounded-lg overflow-hidden">

                <button
                  
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  −
                </button>

                <span className="px-5 py-2 border-x">
                 
                </span>

                <button
                  
                  className="px-4 py-2 text-xl hover:bg-gray-100"
                >
                  +
                </button>

              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-8">

              <button
                
                className="flex-1 bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 transition"
              >
                Add to Cart
              </button>

              <button
                className="flex-1 border-2 border-black py-4 rounded-xl font-semibold hover:bg-black hover:text-white transition"
              >
                Buy Now
              </button>

            </div>

          </div>
        </div>

        {/* Bottom Info */}
        <div className="border-t bg-gray-50 grid grid-cols-1 md:grid-cols-3 text-center">

          <div className="p-6">
            <h3 className="font-semibold">
              🚚 Free Delivery
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Free delivery on your order
            </p>
          </div>

          <div className="p-6 border-y md:border-y-0 md:border-x">
            <h3 className="font-semibold">
              🔄 Easy Returns
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              7 days easy return policy
            </p>
          </div>

          <div className="p-6">
            <h3 className="font-semibold">
              🔒 Secure Payment
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              100% secure payment
            </p>
          </div>

        </div>

      </div>
    </div>
    </div>
  )
}

export default ProductDetail
