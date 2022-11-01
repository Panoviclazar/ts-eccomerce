import items from '../data/items.json'
import "../style/style.css"
import { Link } from 'react-router-dom';
import { Products } from '../components/Products';
import {CiDiscount1} from 'react-icons/ci'

export function Home(){
  return (
    <>
      <div className='banner' style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            width: "95vw",
            background: "#ffb703",
            alignSelf: "center",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            flexWrap: "wrap",
            position: "relative",
            marginBottom: '50px'
          }}
        >
          <p className="black-friday">Black friday</p>
          <p className="sale">SALE 60%</p>
          <div className='image-cont' style={{ display: "flex", alignItems: "center" }}>
            <img className="image" src="/imgs/earphones2.webp" alt="" />
            <div>
              <p
                style={{
                  fontSize: "40px",
                  fontFamily: "monospace",
                  textDecoration: "line-through",
                  margin: "0px",
                  color: "white",
                  opacity: '1'
                }}
              >
                $59
              </p>
              <p
                style={{
                  fontSize: "55px",
                  fontFamily: "monospace",
                  margin: "0px",
                  fontWeight: "bolder",
                  color: "#343a40",
                }}
              >
                $19
              </p>
            </div>
          </div>
          <div style={{ position: "absolute", width: "90%", height: "90%" }}>
            <div></div>
          </div>
          <p className="coming-soon">Coming soon...</p>
        </div>
        <p
          style={{
            alignSelf: "center",
            fontFamily: "monospace",
            color: "#003049",
            fontSize: "50px",
            marginBottom: "80px",
          }}
        >
          Best Sellers
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {items.map((item) => (
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to={`/product/${item.id}`}
              id={`${item.id}`}
            >
              <Products {...item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}