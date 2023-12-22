import React, { useState } from "react";

function Header() {
  const [selectedCurrency, setSelectedCurrency] = useState("$");

  const handleCurrencyChange = (event) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      <h1>Company's Budget Allocation</h1>

      <div class="container text-center" style={{ marginTop: "30px" }}>
        <div class="row align-items-start">
          <div class="col" style={{ backgroundColor: "grey" }}>
            <p>
              Budget: {selectedCurrency}
              <input></input>
            </p>
          </div>
          <div class="col" style={{ backgroundColor: "#D1FFBD" }}>
            <p>Remaining: {selectedCurrency}</p>
          </div>
          <div class="col" style={{ backgroundColor: "#ADD8E6" }}>
            <p>Spent so far: {selectedCurrency}</p>
          </div>
          <div class="col" style={{ backgroundColor: "#98FB98" }}>
            <select onChange={handleCurrencyChange}>
              <option value="$">Dollar</option>
              <option value="£">Pound</option>
              <option value="€">Euro</option>
              <option value="₹">Rupee</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
