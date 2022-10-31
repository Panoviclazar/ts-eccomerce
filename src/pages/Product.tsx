import items from "../data/items.json";
import "../style/style.css";
import {
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import { useParams } from "react-router-dom";
import {Products} from '../components/Products'

type idProps = {
  id: number;
};

export function Product({ id }: idProps) {
  var { id } = useParams();
  var item = items.filter((item) => item.id === Number(id));

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {item.map((item) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "35px",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                textDecoration: "none",
                color: "black",
              }}
            >
              <Products {...item} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', transform: 'translateY(-20px)' }}>
              <p
                style={{
                  color: "#023e8a",
                  fontFamily: "monospace",
                  fontSize: "20px",
                }}
              >
                {item.name}
              </p>
              <div
                style={{
                  display: "flex",
                  color: "#e63946",
                  alignItems: "center",
                }}
              >
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <p style={{ marginLeft: "10px", color: "#023e8a" }}>({item.stars})</p>
              </div>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "17px",
                  color: "#023e8a",
                }}
              >
                Details:
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "17px",
                }}
              >
                {item.details}
              </p>
              <p
                style={{
                  fontFamily: "monospace",
                  fontSize: "40px",
                  color: "#e63946",
                  transform: 'translateY(-40px)'
                }}
              >${item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
