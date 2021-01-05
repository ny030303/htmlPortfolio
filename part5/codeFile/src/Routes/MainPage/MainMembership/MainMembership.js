import * as React from 'react';
import "./MainMembership.css";

export default class MainMembership extends React.Component {
  render() {
    return (
      <div className="main-membership">
        <h3 className="main-membership__title">MEMBERSHIP</h3>
        <div className="main-membership__container swiper-container">
          <div className="swiper-wrapper main-membership__list">

            <div className="swiper-slide main-membership__item swiper-slide-duplicate swiper-slide-duplicate-next"
                 data-swiper-slide-index="2"style={{width:"100%"}}>
              <div className="main-membership__name">
                <p className="main-membership__name-sub">서울드래곤시티 프리미엄 호텔 멤버십
                </p>
                <h4 className="main-membership__name-main" data-name="MEMBERSHIP">SDC MEMBERSHIP</h4>
              </div>
              <div className="main-membership__card">
                <figure className="main-membership__figure main-membership__card-green">
                  <img className="main-membership__image" src="/images/img_main_card_membership_green.png"
                       alt="MEMBERSHIP GREEN CARD"/>
                </figure>
                <figure className="main-membership__figure main-membership__card-blue">
                  <img className="main-membership__image" src="/images/img_main_card_membership_blue.png"
                       alt="MEMBERSHIP BLUE CARD"/>
                </figure>
                <figure className="main-membership__figure main-membership__card-black">
                  <img className="main-membership__image" src="/images/img_main_card_membership_black.png"
                       alt="MEMBERSHIP BLACK CARD"/>
                </figure>
              </div>
              <div className="main-membership__text">
                SDC MEMBERSHIP은 서울드래곤시티 4개 브랜드의 호텔에서 무료 숙박, 객실 및<br/>
                레스토랑&amp;바 할인 서비스를 받으실 수 있는 연간 멤버십입니다.<br/>
                품위와 명예를 겸비한 SDC Membership 회원이 되시어 서울드래곤시티의 차원 높은 서비스를 경험해보세요.
              </div>
              <div className="main-membership__button">
                <a href="#" className="main-membership__link main-membership__link--detail">
                  <span className="main-membership__link-text">자세히보기</span>
                </a>
                <a href="#" className="main-membership__link main-membership__link--join">
                  <span className="main-membership__link-text">가입문의</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  };
};