import React from "react";

function AccountTypes() {
  const accounts = [
    {
      title: "Individual Account",
      desc: "Invest in equity, mutual funds and derivatives",
      icon: <i className="fa-solid fa-user"></i>,
    },
    {
      title: "HUF Account",
      desc: "Make tax-efficient investments for your family",
      icon: <i className="fa-solid fa-users"></i>,
    },
    {
      title: "NRI Account",
      desc: "Invest in equity, mutual funds, debentures, and more",
      icon: <i className="fa-solid fa-globe"></i>,
    },
    {
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future with them",
      icon: <i className="fa-solid fa-child"></i>,
    },
    {
      title: "Corporate / LLP/ Partnership",
      desc: "Manage your business surplus and investments easily",
      icon: <i className="fa-solid fa-building"></i>,
    },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5">Explore different account types</h2>
      <div className="row justify-content-center">
        {accounts.map((acc, idx) => (
          <div
            key={idx}
            className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex justify-content-center"
          >
            <div
              className="position-relative p-5 shadow-sm bg-white rounded border"
              style={{
                minHeight: "170px",
                width: "100%",
                maxWidth: "350px",
              }}
            >
              <div
                className="position-absolute bg-light d-flex align-items-center justify-content-center"
                style={{
                  left: "-20px",
                  top: "24px",
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  fontSize: "16px",
                  color: "#1e1e1e",
                }}
              >
                {acc.icon}
              </div>
              <h5 className="ms-4 fw-semibold" style={{ fontSize: "19px" }}>
                {acc.title}
              </h5>
              <p
                className="ms-4 text-muted mb-0"
                style={{ fontSize: "16px", lineHeight: "1.6" }}
              >
                {acc.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AccountTypes;
