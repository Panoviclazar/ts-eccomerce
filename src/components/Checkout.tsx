import {useState} from 'react'

type CheckoutProp = {
  isCheckoutOpen: boolean
};

export function Checkout({ isCheckoutOpen }: CheckoutProp) {

  const pageReload = () => {
    window.location.reload()
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
      )}
    </div>
  );
}