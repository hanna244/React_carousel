import React, { useState, useEffect, useCallback } from "react";
import "./greenStore.css";
import Count from "./Count";

function Coupang(props) {
  const [count, setCount] = useState(1);
  const [tooltip, setTooltip] = useState(false);

  const handleIncrease = () => {
    setCount((length) => length + 1);
  };

  const handleDecrease = () => {
    setCount((length) => length - 1);
  };

  const handleInputValue = (event) => {
    setCount(event.target.value);
  };

  return (
    <div className="container">
      <div className="box_qoupang">
        <figure className="thumb_product">
          <img
            src={process.env.PUBLIC_URL + "/img_thumb.png"}
            alt=""
            className="img_g"
          />
        </figure>
        <h1 className="tit_product">
          래피젠 코로나 자가 검사 키트
          <br />
          2개입X1박스
        </h1>
        <div className="wrap_price">
          <dl className="list_price">
            <span className="price_items del_item">
              <dt>
                <span className="a11yHidden">할인 전 가격</span>
              </dt>
              <dd>
                <del>56,760원</del>
              </dd>
            </span>
            <span className="price_items">
              <dt>
                <span className="a11yHidden">할인 후 가격</span>
              </dt>
              <dd>
                <span>6,370원</span>
              </dd>
            </span>
          </dl>
          <dl className="list_percent">
            <div className="percent_items">
              <dt>
                <span className="a11yHidden">할인율</span>
              </dt>
              <dd>
                <span>88%</span>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="box_qoupang">
        <h2 className="a11yHidden">배송정보</h2>
        <em>
          택배배송<span>3,000원</span>
          <span>주문시 결제</span>
        </em>
        <span>10개마다 부과</span>
      </div>
      <Count
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        count={count}
        handleInputValue={handleInputValue}
      />
      <div className="box_qoupang">
        <h2 className="a11yHidden">총 상품 금액</h2>
        <div className={tooltip ? "wrap_help on" : "wrap_help"}>
          <button
            type="button"
            className="ico_coupang"
            onClick={() => {
              setTooltip(true);
            }}
          ></button>
          <div className="inner_help">
            <h3 className="a11yHidden">배송비 도움말</h3>
            <p>
              총 상품금액에 <em>배송비는 포함되어 있지 않습니다.</em>
              <br />
              결제시 배송비가 추가될 수 있습니다.
            </p>
            <button
              type="button"
              onClick={() => {
                setTooltip(false);
              }}
            >
              닫기
            </button>
          </div>
        </div>
        <div className="">
          <span>
            <em>총 수량</em>
            {count}개
          </span>
          <span>
            <em>금액</em>
            {count * 6370}원
          </span>
        </div>
      </div>
      <div className="box_qoupang">
        <button
          type="button"
          className={count ? "bth_start" : "bth_start disable"}
        >
          <span className="txt_start">
            <span className="ico_coupang"></span>구매하기
          </span>
        </button>
      </div>
    </div>
  );
}

export default React.memo(Coupang);
