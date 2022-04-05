import React, { useState, useEffect, useCallback } from "react";
import "./greenStore.css";
import Count from "./Count";
import { Store } from "../contexts/Store";

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
    <Store.Provider
      value={{
        count: count,
        tooltip: tooltip,
        handleIncrease: handleIncrease,
        handleDecrease: handleDecrease,
        handleInputValue: handleInputValue,
      }}
    >
      <div className="container">
        <div className="box_store">
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
        <div className="box_store">
          <h2 className="a11yHidden">배송정보</h2>
          <em className="delivery_price">
            택배배송<span className="price_num">3,000원</span>
            <span className="price_notice">(주문시 결제)</span>
          </em>
          <span className="delivery_notice">10개마다 부과</span>
        </div>
        <div className="box_store">
          <Count
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
            count={count}
            handleInputValue={handleInputValue}
          />
        </div>
        <div className="box_store">
          <h2 className="a11yHidden">총 상품 금액</h2>
          <div className={tooltip ? "wrap_help on" : "wrap_help"}>
            <strong className="tit_help">총 상품 금액</strong>
            <button
              type="button"
              className="btn_help"
              onClick={() => {
                setTooltip(true);
              }}
            >
              <span className="ico_store"></span>
            </button>
            <div className="inner_help">
              <h3 className="a11yHidden">배송비 도움말</h3>
              <p className="desc_help">
                총 상품금액에{" "}
                <em className="emph_help">배송비는 포함되어 있지 않습니다.</em>
                <br />
                결제시 배송비가 추가될 수 있습니다.
              </p>
              <button
                type="button"
                onClick={() => {
                  setTooltip(false);
                }}
                className="btn_close"
              >
                <span className="ico_store">닫기</span>
              </button>
            </div>
          </div>
          <div className="wrap_priceinfo">
            <span className="group_prodectlength">
              <em className="txt_length">총 수량</em>
              {count}개
            </span>
            <span className="txt_price">
              <em className="a11yHidden">금액</em>
              {(count * 6370).toLocaleString()}원
            </span>
          </div>
        </div>
        <div className="box_store">
          <button
            type="button"
            className={count ? "bth_start" : "bth_start disable"}
          >
            <span className="txt_start">
              <span className="ico_store"></span>구매하기
            </span>
          </button>
        </div>
      </div>
    </Store.Provider>
  );
}

export default React.memo(Coupang);
