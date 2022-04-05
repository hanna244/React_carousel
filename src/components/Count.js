import React, { useContext } from "react";
import { Store } from "../contexts/Store";

function Count() {
  const store = useContext(Store);
  const { handleIncrease, handleDecrease, count, handleInputValue } = store;

  return (
    <React.Fragment>
      <h2 className="a11yHidden">구매수량</h2>
      <div>
        <button
          type="button"
          onClick={handleDecrease}
          className="ico_store btn_decrease"
        >
          빼기
        </button>
        <label htmlFor="productLength"></label>
        <input
          type="text"
          value={count}
          id="productLength"
          onChange={handleInputValue}
          pattern="[0-9]+"
          className="inp_length"
        />
        <button
          type="button"
          onClick={handleIncrease}
          className="ico_store btn_increase"
        >
          더하기
        </button>
      </div>
    </React.Fragment>
  );
}

export default Count;
