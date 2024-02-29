import React from "react";
import { Link } from "react-router-dom";
import { TbHanger } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";

export default function Navbar() {
  return (
    <header>
      <Link to="/">
        <TbHanger />
        <h1>DailyLook</h1>
      </Link>
      <nav>
        <Link to="/products">Products</Link>
        <Link to="carts">Carts</Link>
        <Link to="/products/new">
          <BsFillPencilFill />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}
