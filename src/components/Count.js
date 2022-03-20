import React from "react";

function Count({ handleIncrease, handleDecrease, count, handleInputValue }) {
  return (
    <div className="box_qoupang">
      <h2 className="a11yHidden">구매수량</h2>
      <div>
        <button type="button" onClick={handleDecrease}>
          빼기
        </button>
        <label htmlFor="productLength"></label>
        <input
          type="text"
          value={count}
          id="productLength"
          onChange={handleInputValue}
          pattern="[0-9]+"
        />
        <button type="button" onClick={handleIncrease}>
          더하기
        </button>
      </div>
    </div>
  );
}

export default Count;
