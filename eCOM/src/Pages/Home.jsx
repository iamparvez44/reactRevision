
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Fashion", icon: "👕", color: "bg-pink-100" },
  { name: "Electronics", icon: "🎧", color: "bg-blue-100" },
  { name: "Footwear", icon: "👟", color: "bg-yellow-100" },
  { name: "Home & Living", icon: "🪴", color: "bg-green-100" },
  { name: "Accessories", icon: "⌚", color: "bg-purple-100" },
];

const features = [
  { icon: "🚚", title: "Free Shipping", text: "On orders above ₹499" },
  { icon: "📦", title: "Easy Returns", text: "7 days return policy" },
  { icon: "🔒", title: "Secure Payments", text: "Safe and secure checkout" },
  { icon: "💬", title: "Customer Support", text: "We're here to help" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <section className="mx-auto grid max-w-7xl items-center gap-8 px-5 py-12 md:grid-cols-2 md:py-20">

        <div>
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            YOUR EVERYDAY SHOPPING DESTINATION
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Discover Your
            <span className="block text-blue-600">
              Perfect Style
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-lg leading-8 text-gray-600">
            Explore fashion, electronics, footwear and more.
            Find your favourite products at great prices.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/products"
              className="rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Shop Now →
            </Link>

            <Link
              to="/products"
              className="rounded-lg border border-gray-300 px-7 py-3 font-semibold text-gray-700 transition hover:bg-gray-100"
            >
              Explore Products
            </Link>
          </div>

          <div className="mt-8 flex gap-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">100+</h3>
              <p className="text-sm text-gray-500">Products to explore</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Easy</h3>
              <p className="text-sm text-gray-500">Shopping experience</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="overflow-hidden rounded-3xl bg-blue-100">
          <img
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=85"
            alt="Shopping store collection"
            className="h-80 w-full object-cover md:h-[480px]"
          />
        </div>

      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-5 py-10">
        <div className="mb-7 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Shop by Category
            </h2>
            <p className="mt-2 text-gray-500">
              Explore what you love
            </p>
          </div>

          <Link
            to="/products"
            className="font-semibold text-blue-600 hover:text-blue-800"
          >
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((category) => (
            <Link
              to="/products"
              key={category.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-full text-3xl ${category.color}`}
              >
                {category.icon}
              </div>

              <h3 className="mt-4 font-semibold text-gray-800">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-5 py-8">
        <div className="grid grid-cols-1 gap-4 rounded-2xl bg-blue-50 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex items-center gap-4"
            >
              <span className="text-3xl">{feature.icon}</span>

              <div>
                <h3 className="font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {feature.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products CTA */}
      <section className="mx-auto max-w-7xl px-5 py-12">
        <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gray-900 p-8 text-white md:flex-row md:items-center md:p-12">
          <div>
            <p className="font-semibold text-blue-400">
              FIND YOUR NEXT FAVOURITE
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Great products. Great choices.
            </h2>

            <p className="mt-3 max-w-xl text-gray-300">
              Browse our complete collection and discover
              something you will love.
            </p>
          </div>

          <Link
            to="/products"
            className="shrink-0 rounded-lg bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Explore Products →
          </Link>
        </div>
      </section>

    </div>
  );
};

export default Home;
