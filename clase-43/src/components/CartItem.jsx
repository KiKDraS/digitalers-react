import { ChevronDown, ChevronUp } from "../assets/icons";

const CartItem = () => {
  return (
    <article className="cart-item">
      <img src="" alt="" />
      <div>
        <h4>Titulo</h4>
        <h4 className="item-price">$100</h4>
        <button className="remove-btn">remove</button>
      </div>
      <div>
        <button className="amount-btn">
          <ChevronUp />
        </button>
        <p className="amount">1</p>
        <button className="amount-btn">
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};
export default CartItem;
