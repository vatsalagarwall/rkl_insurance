import React, { useState } from "react";
import Main from "./Main";

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
            style={{ backgroundColor: "#CCCCCC", borderRadius: "10px" }}
          >
            <p style={{ paddingTop: "10px" }}>
              Budget: {selectedCurrency}
              <input style={{ width: "70%" }} type="number"></input>
            </p>
          </div>
          <div
            className="col text-left"
            style={{
              backgroundColor: "#D1FFBD",
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
              backgroundColor: "#ADD8E6",
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
              style={{ backgroundColor: "#50C878", color: "white" }}
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
    </div>
  );
}

export default Header;
