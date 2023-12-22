import React from "react";

function Footer({ selectedCurrency }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Change Allocation</h4>
      <div style={{ display: "flex" }}>
        <div>
          <span
            style={{
              backgroundColor: "#E2E3E5",
              borderRadius: "5px",
              padding: "7px",
            }}
          >
            Department
          </span>
          <select style={{ padding: "5px" }}>
            <option>Choose...</option>
          </select>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <span
            style={{
              backgroundColor: "#E2E3E5",
              borderRadius: "5px",
              padding: "7px",
            }}
          >
            Allocation
          </span>
          <select style={{ padding: "5px" }}>
            <option>Add</option>
          </select>
        </div>

        <div style={{ marginLeft: "20px" }}>
          {selectedCurrency}
          <input></input>
        </div>
        <div style={{ marginLeft: "20px" }}>
          <button type="button" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
