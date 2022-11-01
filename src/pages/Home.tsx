import items from '../data/items.json'
import "../style/style.css"
import { Link } from 'react-router-dom';
import { Products } from '../components/Products';
import { Banner } from '../components/Banner';

export function Home(){
  return (
    <>
      <div className='banner' style={{ display: "flex", flexDirection: "column" }}>
        <Banner/>
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