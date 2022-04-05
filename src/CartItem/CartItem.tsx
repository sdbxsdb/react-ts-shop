import Button from "@material-ui/core/Button";
//TYPES
import { CartItemType } from "../App";
//STYLES
import { Wrapper } from "./CartItem.styles";

type Props = {
  item: CartItemType;
  addToCart: (clickedItem: CartItemType) => void;
  removeFromCart: (id: number) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h3>{item.title}</h3>

      <div className="detailsWrapper">
        <div className="pricing">
          <div className="itemPriceWrapper">
            <p>Item Price - </p>
            <p>£{(item.price).toFixed(2)}</p>
          </div>
          <div className="subTotalWrapper">
            <p>Subtotal -</p>
            <p>£{(item.amount * item.price).toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="imgAndQty">
        <div className="imgWrapper">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="qtyWrapper">
          <div className="qty">
            <div className="buttonsWrapper">
              <Button
                disableElevation
                variant="contained"
                onClick={() => removeFromCart(item.id)}
              >
                -
              </Button>
              <Button
                disableElevation
                variant="contained"
                onClick={() => addToCart(item)}
              >
                +
              </Button>
            </div>
          </div>
          <p>{item.amount}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default CartItem;
