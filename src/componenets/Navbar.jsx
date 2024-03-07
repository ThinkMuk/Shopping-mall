import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TbHanger } from "react-icons/tb";
import { BsFillPencilFill } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

export default function Navbar() {
  const [user, setUser] = useState();
  useEffect(() => {
    onUserStateChange((user) => {
      console.log(user);
      setUser(user);
    });
  }, []);
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <header className="flex justify-between border-b border-gray-300 p-3">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <TbHanger />
        <h1>DailyLook</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="carts">Carts</Link>
        {user && user.isAdmin ? (
          <Link to="/products/new" className="text-2xl">
            <BsFillPencilFill />
          </Link>
        ) : null}
        {user && <User user={user} />}
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
