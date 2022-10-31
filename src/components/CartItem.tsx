import { useShoppingCart } from "../context/ShoppingCartContext"
import storeItems from '../data/items.json'
import {AiOutlineClose} from 'react-icons/ai'

type CartItemProp = {
  id: number
  quantity: number
}

export function CartItem({ id, quantity }: CartItemProp){
  const {removeFromCart} = useShoppingCart()
  const item = storeItems.find(i => i.id === id)
  if(item == null) return null

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        borderRadius: "10px",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        <img src={item.imgUrl} width="100px" height="100px" alt="" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "17px",
              transform: "translateY(15px)",
            }}
          >
            {item.name}
            {quantity > 1 && (
              <span
                style={{ fontSize: "14px", color: "gray", marginLeft: "5px" }}
              >
                x{quantity}
              </span>
            )}
          </p>
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "17px",
              transform: "translateY(-15px)",
              color: "gray",
            }}
          >
            ${item.price}
          </p>
        </div>
      </div>
      <div
        style={{
          marginLeft: "50px",
          display: "flex",
          alignItems: "center",
          gap: "5px",
        }}
      >
        <p
          style={{
            fontSize: "17px",
            fontFamily: "monospace",
            color: "#000814",
          }}
        >
          ${item.price * quantity}
        </p>
        <button onClick={() => removeFromCart(item.id)} style={{ background: "transparent", border: "1px solid gray", display: 'grid', placeContent: 'center', padding:'5px', borderRadius: '4px' }}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
}