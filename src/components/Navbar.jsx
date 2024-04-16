import Navlinks from "./Navlinks";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-300 align-element">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary lg:btn-lg flex md:hidden">
            MyKitchen
          </Link>
          <div className="dropdown lg:btn-lg lg:hidden ">
            <button
              tabIndex={0}
              role="button"
              className="btn m-1 dropdown-toggle  btn btn-primary lg:hidden  "
              data-bs-toggle="dropdown"
            >
              MyGoo
            </button>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52  lg:btn-lg hidden "
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div
          className="navbar-center hidden lg:flex
         "
        >
          <Navlinks />
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
