import React from "react";
import Hero from "./Hero";
import Brokerage from "./Brokerage";
import OpenAccount from "../OpenAccount";
import PricingTable from "./PricingTable";

function PricingPage() {
  return (
    <>
      <Hero />
      <PricingTable/>
      <Brokerage />
    </>
  );
}

export default PricingPage;
