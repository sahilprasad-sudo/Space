import React from "react";

const ProductCard = ({ product,setCartItems,isInCart }) => {

const addToCart = ()=>{
  setCartItems((prev) =>[...prev,{product,quantity:1}])
  alert("Product Added")
}

  return (
    <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Product Image */}
      <div className="relative flex h-72 items-center justify-center bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Category Badge */}
        <span className="absolute left-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-medium capitalize text-white">
          {product.category}
        </span>

        {/* Wishlist */}
        <button
          className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 shadow-sm transition hover:bg-red-50 hover:text-red-500"
          aria-label="Add to wishlist"
        >
          ♡
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h2 className="mb-2 line-clamp-2 min-h-[48px] text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
          {product.description}
        </p>

        {/* Rating */}
        <div className="mb-4 flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span className="font-semibold text-gray-800">
              {product.rating.rate}
            </span>
          </div>

          <span className="text-sm text-gray-400">
            ({product.rating.count} reviews)
          </span>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between gap-3">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${product.price}
            </span>
          </div>

          {/* <button onClick={addToCart} className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95">
            Add to Cart
          </button> */}
          {
            isInCart?(<button className="w-full bg-grey-600 flex items-center justify-center gap-2">
              <span className="text-3xl">-</span>
              <span className="text-4xl">1</span>
              <span className="text-3xl">+</span>
            </button>):(<button onClick={addToCart} className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95">
            Add to Cart
          </button>)
          }
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
