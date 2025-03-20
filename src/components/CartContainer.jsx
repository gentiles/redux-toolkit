import React from "react";
import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { openModal } from "../features/cart/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, amount, total } = useSelector((items) => items.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <h2>your bag</h2>
        <h4 className="empty-cart">is currently empty</h4>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>your bag</h2>
      </header>
      <div className="cart-total">
        {cartItems.map((items) => {
          return <CartItem key={items.id} {...items} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
