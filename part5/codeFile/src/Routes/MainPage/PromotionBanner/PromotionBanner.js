import * as React from 'react';
import "./PromotionBanner.css";

export default class PromotionBanner extends React.Component {
  render() {
    return (
      <div className="promotion-banner">
        <div className="promotion-text-slide">
          <div className="promotion-text-slide__container">
            <div className="promotion-text-slide__pagenation">
              <button type="button" className="promotion-text-slide__control promotion-text-slide__control--button promotion-text-slide__control--prev"
                      tabIndex="0" role="button" aria-label="Previous slide">
                <span className="promotion-text-slide__control promotion-text-slide__control--text"/>
              </button>
              <span className="promotion-text-slide__pagination swiper-pagination-fraction"><span
                className="swiper-pagination-current">01</span> / <span
                className="swiper-pagination-total">03</span></span>
              <button type="button"
                      className="promotion-text-slide__control promotion-text-slide__control--button promotion-text-slide__control--next"
                      tabIndex="0" role="button" aria-label="Next slide">
                <span className="promotion-text-slide__control promotion-text-slide__control--text"/>
              </button>
            </div>

            <div className="promotion-text-slide__item">
              <div className="promotion-text-slide__title promotion-text-slide__title--main"> SEOUL DRAGON CITY NEWS </div>
              <div className="promotion-text-slide__title promotion-text-slide__title--sub">´2020 트립어드바이저 트래블러즈 초이스 어워드´ 3관왕</div>
              <p className="promotion-text-slide__title_sub-title">서울 드래곤시티 그랜드 머큐어 앰배서더 호텔 앤 레지던스 서울 용산20</p>
              <time className="promotion-text-slide__date">2020.08.05</time>
            </div>

          </div>
        </div>
      </div>
    );
  };
};