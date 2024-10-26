import { CartIcon } from "../assets/icons";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">1</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
