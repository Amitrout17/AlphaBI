import React from "react";
import "../Navbar/Navbar.css";
import Link from "next/link";

function Nabvar() {
  return (
    <>
      <ul className="Navbar">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <li>
          <Link href="/signup">Signup</Link>
        </li>
      </ul>
    </>
  );
}

export default Nabvar;
