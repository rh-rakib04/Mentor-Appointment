import React from "react";
import { NavLink, Link } from "react-router";

const Navbar = () => {
  const navLinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium  transition ${
            isActive
              ? "text-accent"
              : "text-[var(--text-muted)] hover:text-accent "
          }`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/mentors"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive
              ? "text-accent"
              : "text-[var(--text-muted)] hover:text-accent"
          }`
        }
      >
        Mentors
      </NavLink>

      <NavLink
        to="/be-a-mentor"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive
              ? "text-accent"
              : "text-[var(--text-muted)] hover:text-accent"
          }`
        }
      >
        Become a Mentor
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive
              ? "text-accent"
              : "text-[var(--text-muted)] hover:text-accent"
          }`
        }
      >
        About
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `px-3 py-2 rounded-md text-sm font-medium transition ${
            isActive
              ? "text-accent"
              : "text-[var(--text-muted)] hover:text-accent"
          }`
        }
      >
        Contact
      </NavLink>
    </>
  );

  return (
    <header className="bg-[var(--bg-main)] shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="navbar px-0">

          {/* LEFT */}
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-[var(--text-main)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-3 shadow bg-white rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>

            <Link
              to="/"
              className="text-xl font-bold text-[var(--text-main)]"
            >
              Mentor<span className="text-accent">Connect</span>
            </Link>
          </div>

          {/* CENTER */}
          <div className="navbar-center hidden lg:flex">
            <nav className="flex gap-1">{navLinks}</nav>
          </div>

          {/* RIGHT */}
          <div className="navbar-end">
            <Link
              to="/login"
              className="bg-primary text-white px-6 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
