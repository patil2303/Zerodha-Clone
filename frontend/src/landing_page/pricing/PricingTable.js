import React, { useState } from "react";
import EquityTable from "./EquityTable";
import CurrencyTable from "./CurrencyTable";
import CommodityTable from "./CommodityTable";


function PricingTable() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderTable = () => {
    switch (activeTab) {
      case "equity":
        return <EquityTable />;
      case "currency":
        return <CurrencyTable />;
      case "commodity":
        return <CommodityTable />;
      default:
        return null;
    }
  };

  return (
    <div className="container my-5">
      <ul className="nav nav-tabs custom-tabs mb-3 border-0">
        {["equity", "currency", "commodity"].map((tab) => (
          <li className="nav-item" key={tab}>
            <button
              className={`nav-link custom-tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          </li>
        ))}
      </ul>

      <div className="card shadow-sm">
        <table className="table custom-table mb-0">{renderTable()}</table>
      </div>

      <div className="mt-3">
        <a href="#" className="text-primary fw-medium">
          Calculate your costs upfront using our brokerage calculator
        </a>
      </div>
    </div>
  );
}

export default PricingTable;
