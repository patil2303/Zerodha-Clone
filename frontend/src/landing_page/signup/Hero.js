import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 text-center">
        <h1 style={{ fontSize: "50px", opacity: "0.8", marginTop: "50px" }}>
          Open a free demat and trading account online
        </h1>
        <h4 className="mt-4 text-muted fw-medium mb-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h4>
        <div className="row mt-5 mb-5">
          <div className="col-6">
            <img
              src="media/images/account_open.svg" alt="image"
              style={{ marginLeft: "100px", width: "95%" }}
            />
          </div>
          <div className="col-6">
            <h2
              className="fs-1"
              style={{
                marginRight: "200px",
                marginTop: "50px",
                opacity: "0.9",
              }}
            >
              Signup Now
            </h2>
            <h5
              style={{
                opacity: "0.5",
                fontWeight: "400",
                marginRight: "135px",
                marginTop: "20px",
                marginBottom:"20px"
              }}
            >
              Or track your existing application
            </h5>
            <div className="phone-input-container">
              <img
                src="https://flagcdn.com/w40/in.png"
                alt="India Flag"
                className="flag"
              />
              <span className="country-code">+91</span>
              <input
                type="tel"
                className="phone-input"
                placeholder="Enter your mobile number"
                maxLength="10"
                pattern="[0-9]*"
                inputMode="numeric"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
              />
            </div>
            <button
              className="btn btn-primary"
              style={{
                width: "260px",
                height: "55px",
                fontSize: "20px",
                marginTop: "40px",
                marginRight: "170px",
              }}
            >
              Get OTP
            </button>
            <h6 style={{marginTop:'40px',marginLeft:"40px", opacity:'0.7'}}>
              By proceeding, you agree to the Zerodha <a href="/">terms</a> &{" "}
              <a href="/">privacy policy</a>
            </h6>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default Hero;
