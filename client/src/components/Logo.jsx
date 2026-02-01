import React from "react";
import { Link } from "react-router";

const Logo = () => {
  return (
    <div>
      <Link
        to="/"
        className="text-xl flex items-center font-bold text-[var(--text-main)]"
      >
        <img className="w-8" src="/logo.png" alt="logo" />
        Mentor<span className="text-[#116E74]">Connect</span>
      </Link>
    </div>
  );
};

export default Logo;
