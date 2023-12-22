import React, { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";

function Header() {
  const [selectedCurrency, setSelectedCurrency] = useState("$");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div className="container">
      <h1>Company's Budget Allocation</h1>

      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row g-3 align-items-start">
          <div
            className="col text-left"
            style={{ backgroundColor: "#E2E3E5", borderRadius: "10px" }}
          >
            <p style={{ paddingTop: "10px" }}>
              Budget: {selectedCurrency}
              <input style={{ width: "70%" }} type="number"></input>
            </p>
          </div>
          <div
            className="col text-left"
            style={{
              backgroundColor: "#D1E6DD",
              borderRadius: "10px",
              marginLeft: "20px",
            }}
          >
            <p style={{ paddingTop: "10px" }}>
              Remaining: {selectedCurrency}1040
            </p>
          </div>
          <div
            className="col text-left"
            style={{
              backgroundColor: "#CFE2FF",
              borderRadius: "10px",
              marginLeft: "20px",
            }}
          >
            <p style={{ paddingTop: "10px" }}>
              Spent so far: {selectedCurrency}960
            </p>
          </div>
          <div className="col text-left">
            <select
              className="form-select"
              onChange={handleCurrencyChange}
              style={{ backgroundColor: "#93E498", color: "white" }}
            >
              <option value="$">$ Dollar</option>
              <option value="£">£ Pound</option>
              <option value="€">€ Euro</option>
              <option value="₹">₹ Rupee</option>
            </select>
          </div>
        </div>
      </div>
      <Main selectedCurrency={selectedCurrency} />
      <Footer selectedCurrency={selectedCurrency} />
    </div>
  );
}

export default Header;
