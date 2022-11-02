import { useShoppingCart } from "../context/ShoppingCartContext";
import "../style/style.css";

type ProductsProp = {
  id: number
  name: string
  price: number
  imgUrl: string
  details: string
  stars: number
}

export function Products({id, name, price, imgUrl}: ProductsProp) {
  
  const {
    increaseCartQuantity,
  } = useShoppingCart();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          flexDirection: "column",
        }}
      >
        <div
          className="product-container"
          style={{
            borderRadius: "20px",
            padding: "10px",
          }}
        >
          <img src={imgUrl} alt="" height="250px" />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingRight: "30px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingInline: "20px",
              fontFamily: "fantasy",
              fontSize: "18px",
              fontWeight: "lighter",
              height: "80px",
            }}
          >
            <p style={{ color: "gray", fontFamily: "monospace" }}>{name}</p>
            <p
              style={{
                transform: "translateY(-30px)",
                fontWeight: "bolder",
                fontFamily: "cursive",
              }}
            >
              ${price}
            </p>
          </div>
          <button
            onClick={() => increaseCartQuantity(id)}
            className="add-to-cart-button"
            style={{
              fontSize: "20px",
              padding: "10px 15px",
              borderRadius: "10px",
            }}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}