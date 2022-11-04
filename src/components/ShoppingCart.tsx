import { AiOutlineClose } from "react-icons/ai";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json"

type ShopingCartProp = {
  isOpen: boolean
}

export function ShoppingCart( { isOpen }: ShopingCartProp ){
  const {closeCart, cartItems, openCheckout} = useShoppingCart()
  return (
    <>
      {isOpen && (
        <div
          style={{
            position: "fixed",
            width: "100vw",
            minHeight: "100vh",
            top: "0",
          }}
        >
          <div
            onClick={closeCart}
            style={{
              position: "absolute",
              width: "25vw",
              minHeight: "100vh",
              top: "0",
              left: "-10px",
              backgroundColor: "black",
              opacity: "0.7",
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              width: "calc(75vw + 10px)",
              minHeight: "100vh",
              top: "0",
              right: "0",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflowX: "auto",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontFamily: "monospace",
                fontSize: "30px",
                justifyContent: "space-between",
                width: "80%",
                color: "#001d3d",
              }}
            >
              <p>Cart</p>
              <button
                onClick={closeCart}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  fontSize: "30px",
                }}
              >
                <AiOutlineClose />
              </button>
            </div>
            <div
              style={{
                marginTop: "50px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {cartItems.map((item) => (
                <CartItem {...item} />
              ))}
            </div>
            {cartItems.length > 0 && (
              <div>
                <p
                  style={{
                    fontSize: "20px",
                    marginTop: "20px",
                    fontFamily: "monospace",
                    color: "#001d3d",
                  }}
                >
                  Total: $
                  {cartItems.reduce((total, cartItem) => {
                    const item = storeItems.find((i) => i.id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)}
                </p>
                <button
                  onClick={openCheckout}
                  style={{
                    border: "none",
                    backgroundColor: "#d62828",
                    padding: "15px 65px",
                    fontSize: "20px",
                    fontFamily: "monospace",
                    marginTop: "30px",
                    color: "white",
                    borderRadius: "10px",
                  }}
                >
                  Buy
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}