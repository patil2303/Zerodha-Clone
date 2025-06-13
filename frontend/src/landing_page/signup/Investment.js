import React from "react";
function Investment() {
  return (
    <div className="container mt-5">
      <div className="row text-center p-5">
        <h1 className="text-muted">
          Investment options with Zerodha demat account
        </h1>
      </div>
      <div className="row my-5">
        <div className="col-6 d-flex">
          <span style={{ marginLeft: "150px" }}>
            <img src="media\images\stocks-acop.svg" style={{ width: "110%" }} />
          </span>
          <div className="ms-4">
            <h2 className="text-muted">Stocks</h2>
            <p style={{ opacity: "0.6", fontSize: "18px" }}>
              Invest in all exchange-listed <br /> securities
            </p>
          </div>
        </div>
        <div className="col-6 d-flex">
          <span style={{ marginLeft: "100px" }}>
            <img src="media\images\mf-acop.svg" style={{ width: "110%" }} />
          </span>
          <div className="ms-4">
            <h2 className="text-muted">Mutual Funds</h2>
            <p style={{ opacity: "0.6", fontSize: "18px" }}>
              Invest in commission-free direct <br /> mutual funds
            </p>
          </div>
        </div>
      </div>
      <div className="row my-5">
        <div className="col-6 d-flex">
          <span style={{ marginLeft: "150px" }}>
            <img src="media\images\ipo-acop.svg" style={{ width: "110%" }} />
          </span>
          <div className="ms-4">
            <h2 className="text-muted">IPO</h2>
            <p style={{ opacity: "0.6", fontSize: "18px" }}>
              Apply to the latest IPOs instantly <br />
              via UPI
            </p>
          </div>
        </div>
        <div className="col-6 d-flex">
          <span style={{ marginLeft: "100px" }}>
            <img src="media\images\fo-acop.svg" style={{ width: "110%" }} />
          </span>
          <div className="ms-4">
            <h2 className="text-muted">Futures & options</h2>
            <p style={{ opacity: "0.6", fontSize: "18px" }}>
              Hedge and mitigate market risk <br /> through simplified F&O
              trading
            </p>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-primary fs-4 " style={{width:"280px",height:"55px", opacity:"0.9" , marginBottom:"100px"}}>Explore Investments</button>
      </div>
    </div>
  );
}

export default Investment;
