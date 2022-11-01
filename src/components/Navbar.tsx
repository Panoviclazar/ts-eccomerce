import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {

  const {openCart, cartQuantity} = useShoppingCart()

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: "10px",
        marginBottom: "20px",
        textAlign: 'center'
      }}
    >
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <p style={{ fontFamily: "monospace", fontSize: "18px", color: "gray" }}>
          Lazar Web-Shop
        </p>
      </Link>
      <button
        style={{
          border: "none",
          position: "relative",
          fontFamily: "monospace",
          backgroundColor: "transparent",
        }}
      >
        <button style={{backgroundColor: 'transparent', border: 'none'}} onClick={openCart}>
          <AiOutlineShopping style={{ fontSize: "30px", color: "grey" }} />
        </button>
        {cartQuantity > 0 && (
          <p
          style={{
            position: "absolute",
            bottom: "5px",
            right: "-0px",
            borderRadius: "50%",
            backgroundColor: "red",
            color: "white",
            width: "17px",
            aspectRatio: "1",
            display: "grid",
            placeContent: "center",
          }}
        >
          {cartQuantity}
        </p>
        )}
      </button>
    </div>
  );
}