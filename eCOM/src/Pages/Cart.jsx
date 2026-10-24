
import React from "react";

const Cart = ({ data = [] }) => {
  const totalPrice = data.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <p className="mt-2 text-gray-500">
          You have {data.length} items in your cart
        </p>

        {data.length === 0 ? (
          <div className="mt-10 rounded-xl bg-white p-10 text-center shadow-sm">
            <div className="text-5xl">🛒</div>

            <h2 className="mt-4 text-xl font-semibold">
              Your cart is empty
            </h2>

            <p className="mt-2 text-gray-500">
              Add some products to get started.
            </p>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="space-y-4 lg:col-span-2">

              {data.map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex flex-col gap-5 rounded-xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row"
                >

                  {/* Product Image */}
                  <div className="flex h-36 items-center justify-center rounded-lg bg-gray-50 p-3 sm:w-36 sm:shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between gap-4">

                    <div>
                      <p className="text-sm capitalize text-gray-500">
                        {item.category}
                      </p>

                      <h2 className="mt-1 font-semibold text-gray-900">
                        {item.title}
                      </h2>

                      <p className="mt-2 text-lg font-bold text-blue-600">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <button
                      className="self-start text-sm font-medium text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>

                  </div>
                </div>
              ))}

            </div>

            {/* Order Summary */}
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

              <h2 className="text-xl font-bold text-gray-900">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-gray-600">
                <span>Items ({data.length})</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="mt-4 flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">
                  Free
                </span>
              </div>

              <div className="my-5 border-t border-gray-200" />

              <div className="flex justify-between text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <button
                className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>

              <p className="mt-3 text-center text-xs text-gray-500">
                Shipping is free on this demo store.
              </p>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Cart;
