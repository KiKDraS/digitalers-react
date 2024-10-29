import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { selectModal } from "../feature/modal/modalSlice";
import { useEffect } from "react";
import {
  calculateTotals,
  getCartItems,
  selectCart,
} from "../feature/cart/cartSlice";

const Cart = () => {
  const { isOpen } = useSelector(selectModal);
  const { cartItems } = useSelector(selectCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, [dispatch]);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
};

export default Cart;
