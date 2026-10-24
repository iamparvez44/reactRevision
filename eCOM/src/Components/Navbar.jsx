
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
      isActive
        ? "bg-blue-50 text-blue-600"
        : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="rounded-lg bg-blue-600 p-2 text-white">
            <span className="text-xl">🛍️</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Shop<span className="text-blue-600">Ease</span>
          </h1>
        </Link>

        {/* Navigation Links */}
        <div className="hidden items-center gap-2 md:flex">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          <NavLink to="/products" className={linkStyle}>
            Products
          </NavLink>

          <NavLink to="/cart" className={linkStyle}>
            Cart
          </NavLink>

          <NavLink to="/profile" className={linkStyle}>
            Profile
          </NavLink>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-3">
          <button
            aria-label="Search"
            className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          >
            🔍
          </button>

          <Link
            to="/profile"
            aria-label="Profile"
            className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          >
            👤
          </Link>

          <Link
            to="/cart"
            aria-label="Cart"
            className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
          >
            🛒
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
