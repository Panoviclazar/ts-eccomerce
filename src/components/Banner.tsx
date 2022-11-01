import '../style/style.css'

export function Banner(){
  return (
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
        marginBottom: "50px",
      }}
    >
      <p className="black-friday">Black friday</p>
      <p className="sale">SALE 60%</p>
      <div
        className="image-cont"
        style={{ display: "flex", alignItems: "center" }}
      >
        <img className="image" src="/imgs/earphones2.webp" alt="" />
        <div>
          <p
            style={{
              fontSize: "40px",
              fontFamily: "monospace",
              textDecoration: "line-through",
              margin: "0px",
              color: "white",
              opacity: "1",
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
  );
}