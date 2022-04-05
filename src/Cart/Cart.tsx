import CartItem from "../CartItem/CartItem";

//STYLES
import { Wrapper } from "./Cart.styles";

//TYPES
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
      <div className="totalBasketWrapper">
        {cartItems.length > 0 ? (
          <>
            <h4>Total - </h4>
            <h2 className="totalBasketPrice">
              £{calculateTotal(cartItems).toFixed(2)}
            </h2>
          </>
        ) : null}
      </div>
      
    </Wrapper>
  );
};

export default Cart;
