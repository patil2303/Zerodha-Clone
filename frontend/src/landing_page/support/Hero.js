import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5 " id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" className="fs-5">
          Track Tickets
        </a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-5">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" />
          <br />
          <div className="fs-5 mt-2 ms-2 lh-lg">
            <a href="">Track account opening</a> &nbsp; &nbsp;
            <a href="">Track segment activation</a> &nbsp; &nbsp;
            <a href="">Intraday margins</a>
            <br />
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-6 p-3">
          <div style={{ marginLeft: "100px" }}>
            <h1 className="fs-3 mb-3">Featured</h1>
            <ol className="fs-5 lh-lg">
              <li>
                <a href="" >
                  MCX Crude option contract expiry - June 2025
                </a>
              </li>
              <li>
                <a href="" >Latest Intraday leverages - MIS & CO</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
