import { useGlobalContext } from "../hook/useGlobalContext";
import { FaShoppingCart, FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../hook/useTheme";
import { Link } from "react-router-dom";

function Navbar() {
  const { totalAmount } = useGlobalContext();
  const { changeTheme, currentTheme } = useTheme();

  return (
    <header className="bg-base-200 mb-5">
      <div className="navbar main-container">
        <div className="navbar-start">
          <Link className="logo" to={"/"}>
            <b className="text-xl md:text-2xl">Ituzum</b>
            <img src="../blueberry.png" width={40} alt="" />
          </Link>
        </div>

        <div className="navbar-center">
          <ul className="menu md:menu-horizontal bg-base-200 rounded-box hidden md:flex">
            <li>
              <Link to={"/"}>About</Link>
            </li>
            <li>
              <Link to={"/"}>Contact</Link>
            </li>
            <li>
              <Link to={"/"}>Team</Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input
              type="checkbox"
              onChange={changeTheme}
              defaultChecked={currentTheme == "dark"}
            />

            <FaSun className="swap-on h-7 w-7 fill-current" />

            <FaMoon className="swap-off h-7 w-7 fill-current" />
          </label>

          <Link className="cart-logo" to={"/cart"}>
            <FaShoppingCart />
            <span>Amount:{totalAmount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
