import {AiOutlineClose} from 'react-icons/ai'
import { CartItem } from './CartItem';
import {useShoppingCart} from '../context/ShoppingCartContext'
import allItems from "../data/items.json"

type CheckoutProp = {
  isCheckoutOpen: boolean
};

export function Checkout({ isCheckoutOpen }: CheckoutProp) {

  const pageReload = () => {
    window.location.reload()
  }

  const { cartItems, closeCheckout } = useShoppingCart();

  return (
    <div>
      {isCheckoutOpen && (
        <div
          style={{
            position: "fixed",
            width: "100vw",
            height: "100vh",
            background: "white",
            top: "0",
            right: "0",
            display: "flex",
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '30px',
            overflowY: "scroll",
          }}
        >
          {cartItems.length > 0 && (
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                border: "1px solid grey",
                padding: "3px 10px",
              }}
            >
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "18px",
                  alignSelf: "center",
                }}
              >
                Total:$
                {cartItems.reduce((total, cartItem) => {
                  const item = allItems.find((i) => i.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)}
              </p>
            </div>
          )}
          <div>
            <p
              style={{
                fontFamily: "monospace",
                fontSize: "17px",
                width: "300px",
                textAlign: "center",
                color: "#003049",
                marginBottom: "60px",
              }}
            >
              Please fill in all the information to proceed with the payment
            </p>
            <form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                fontFamily: "monospace",
                fontSize: "20px",
                color: "#003049",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>First Name:</label>
                <input className="first-name" type="text" name="name" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>Last Name:</label>
                <input className="last-name" type="text" name="name" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>Email:</label>
                <input className="email" type="email" name="name" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>Number:</label>
                <input className="number" type="text" name="name" />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <label>Adress:</label>
                <input className="adress" type="text" name="name" />
              </div>
              <div
                onClick={pageReload}
                className="checkout-button"
                style={{
                  height: "40px",
                  width: "130px",
                  transform: "translateX(-50%)",
                  marginLeft: "50%",
                  borderRadius: "15px",
                  border: "none",
                  color: "white",
                  fontSize: "20px",
                  display: "grid",
                  placeContent: "center",
                }}
              >
                Proceed
              </div>
            </form>
          </div>
          <div
            onClick={closeCheckout}
            style={{
              position: "absolute",
              right: "30px",
              top: "20px",
              fontSize: "20px",
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
      )}
    </div>
  );
}