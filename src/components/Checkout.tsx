import {useState} from 'react'

type CheckoutProp = {
  isCheckoutOpen: boolean
  event: string
};

export function Checkout({ isCheckoutOpen }: CheckoutProp) {

  const [fnmessage, setFnmessage] = useState('')
  const [lnmessage, setLnmessage] = useState('')
  const [emessage, setEmessage] = useState('')
  const [nmessage, setNmessage] = useState('')
  const [amessage, setAmessage] = useState('')

  const handleChangeFn = (event) => {
    setFnmessage(event.target.value);
  };
  const handleChangeLn = (event) => {
    setLnmessage(event.target.value);
  };
  const handleChangeE = (event) => {
    setEmessage(event.target.value);
  };
  const handleChangeN = (event) => {
    setNmessage(event.target.value);
  };
  const handleChangeA = (event) => {
    setAmessage(event.target.value);
  };

  const checkoutValid = () => {
    if(fnmessage && lnmessage && emessage && nmessage && amessage){
      window.location.reload(false);
    } else{
      const checkoutBtn = document.querySelector('.checkout-button')
      checkoutBtn.style.backgroundColor = "#e63946";
      setTimeout(() => {
      checkoutBtn.style.backgroundColor = "#2a9d8f";
      }, 250)
    }
  }

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
            display: "grid",
            placeContent: "center",
          }}
        >
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
              <input
                className="first-name"
                type="text"
                name="name"
                onChange={handleChangeFn}
                value={fnmessage}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>Last Name:</label>
              <input
                className="last-name"
                type="text"
                name="name"
                onChange={handleChangeLn}
                value={lnmessage}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>Email:</label>
              <input
                className="email"
                type="email"
                name="name"
                onChange={handleChangeE}
                value={emessage}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>Number:</label>
              <input
                className="number"
                type="text"
                name="name"
                onChange={handleChangeN}
                value={nmessage}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label>Adress:</label>
              <input
                className="adress"
                type="text"
                name="name"
                onChange={handleChangeA}
                value={amessage}
              />
            </div>
            <div
              onClick={checkoutValid}
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
      )}
    </div>
  );
}