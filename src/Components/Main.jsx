import React from "react";

function Main({ selectedCurrency }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h4>Allocation</h4>
      <table className="table">
        <thead>
          <tr>
            <th>Department</th>
            <th>Allocated Budget</th>
            <th>Increase by 10</th>
            <th>Decrease by 10</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Marketing</td>
            <td>{selectedCurrency}60</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#4BAC5A" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-minus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#B12314" />
                <path d="M8 12h8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-circle"
              >
                <circle cx="12" cy="12" r="10" fill="black" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </td>
          </tr>
          <tr>
            <td>Finance</td>
            <td>{selectedCurrency}300</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#4BAC5A" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-minus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#B12314" />
                <path d="M8 12h8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-circle"
              >
                <circle cx="12" cy="12" r="10" fill="black" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </td>
          </tr>
          <tr>
            <td>Sales</td>
            <td>{selectedCurrency}70</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#4BAC5A" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-minus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#B12314" />
                <path d="M8 12h8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-circle"
              >
                <circle cx="12" cy="12" r="10" fill="black" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </td>
          </tr>
          <tr>
            <td>Human Resource</td>
            <td>{selectedCurrency}40</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#4BAC5A" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-minus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#B12314" />
                <path d="M8 12h8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-circle"
              >
                <circle cx="12" cy="12" r="10" fill="black" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </td>
          </tr>
          <tr>
            <td>IT</td>
            <td>{selectedCurrency}500</td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-plus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#4BAC5A" />
                <path d="M8 12h8" />
                <path d="M12 8v8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-minus-circle"
              >
                <circle cx="12" cy="12" r="10" fill="#B12314" />
                <path d="M8 12h8" />
              </svg>
            </td>
            <td>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x-circle"
              >
                <circle cx="12" cy="12" r="10" fill="black" />
                <path d="m15 9-6 6" />
                <path d="m9 9 6 6" />
              </svg>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Main;
