import React from "react";

function NumberTable({ totalPage, page, setPage }) {
  const array = [];
  for (let index = 1; index <= totalPage; index++) {
    if (page === index) {
      array.push(
        <li className="page-item active-button-my-class" key={index}>
          <button
            className="page-link"
            onClick={() => {
              setPage(index);
            }}
          >
            {index}
          </button>
        </li>
      );
    } else {
      array.push(
        <li className="page-item" key={index}>
          <button
            className="page-link"
            onClick={() => {
              setPage(index);
            }}
          >
            {index}
          </button>
        </li>
      );
    }
  }
  return array;
}

export default NumberTable;
