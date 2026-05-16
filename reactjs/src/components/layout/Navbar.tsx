import { Link } from "@tanstack/react-router";
import { navItems } from "../../lib/utils";

export function Navbar() {
  return (
    <nav className="navbar bg-base-200 shadow-sm px-4">
      <div className="navbar-start">
        <Link to="/" className="btn btn-ghost text-xl">
          Universal App
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-1">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="[&.active]:font-bold [&.active]:text-primary">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="[&.active]:font-bold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
