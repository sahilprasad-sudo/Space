import React from 'react'

const CartCard = ({ product }) => {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

      {/* Product Image */}
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-xl bg-gray-50 p-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="min-w-0 flex-1">
        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
          {product.category}
        </p>

        <h2 className="line-clamp-2 text-lg font-semibold text-gray-900">
          {product.title}
        </h2>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-yellow-400">★</span>
          <span className="text-sm font-medium">
            {product.rating.rate}
          </span>
          <span>quantity:{quantity}</span>

          <span className="text-sm text-gray-400">
            ({product.rating.count})
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="shrink-0 text-right">
        <p className="text-xl font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Remove */}
      <button
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-gray-400 transition hover:bg-red-50 hover:text-red-500"
      >
        ×
      </button>
    </div>
  );
};

export default CartCard;
