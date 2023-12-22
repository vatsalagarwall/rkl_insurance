import React from "react";

function Header() {
  return (
    <div>
      <h1>Company's Budget Allocation</h1>

      <div style={{ display: "flex" }}>
        <div>
          <p>
            Budget: $<input></input>
          </p>
        </div>
        <div>
          <p>
            Remaining: <input></input>
          </p>
        </div>{" "}
        <div>
          <p>
            Spent so far: <input></input>
          </p>
        </div>{" "}
        <div>
          <select>
            <option>$ Dollar</option>
            <option>£ Pound</option>
            <option>€ Euro</option>
            <option>₹ Ruppee</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Header;
