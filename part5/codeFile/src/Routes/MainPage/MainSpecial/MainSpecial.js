import * as React from 'react';
import "./MainSpecial.css";
import Slider from "react-slick";

export default class MainSpecial extends React.Component {

  constructor(props) {
    super(props);
    this.settings = {
      dots: false,
      // className: "swiper-slide-active",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      slidesToScroll: 1,

    };
    this.spcialList = [
      {
        backImage: "/images/b7ac8bafb324336029c23eb1b92b8da8.jpg",
        name: "GRAND MERCURE",
        summary: "GRAND MERCURE X CROWN GOOSE",
        text: `그랜드 머큐어 앰배서더 호텔 앤 레지던스 서울 용산에서럭셔리 베딩 브랜드 크라운구스가 선사하는품격있는 휴식을 경험해 보세요. ▶  투숙 기간 
        2020년 7월 20일 (월) - 8월 31일 (월) ▶혜택 크라운구스 침구류로 꾸며진 수페리어 스위트 (한강뷰) 객실 1박조식 2인알라메종
        와인 앤 다인 런치 또는 디너 3코스 + 티/커피 (2인 기준)크라운구스 호텔 컬렉션 타월 SET호텔 내 피트니스, 사우나, 수영장 시설 이용▶ 객실 문의 (02) 2223-7000`,
        date:"2020-07-20 ~ 2020-08-31",
        iconClassName: "main-special__type--room package"
      },

      {
        backImage: "/images/1994635656869dde332ec470cd2f68ea.jpg",
        name: "GRAND MERCURE",
        summary: "GRAND MERCURE X CROWN GOOSE",
        text: `떠나고 싶은 마음, 그 마음을 담아 7월 셰프 초이스에서는 베네치아 지역 특산 요리를 선보입니다.뜨거운 여름 산 마르코 광장에서 즐기는 베네치아의 맛은 어떨까요?해외여행 못가는 아쉬움, 
        알라메종 와인 앤 다인에서 미식 투어로 달래세요.7월부터는 셰프 초이스를 런치에도 만날 수 있습니다.`,
        date:"2020-07-25 ~ 2020-07-31",
        iconClassName: "main-special__type--dining promotion"
      },
      {
        backImage: "/images/5f8711a6bf6f557d8ea01978dbb5d4db.jpg",
        name: `GRAND MERCURE NOVOTEL SUITES NOVOTEL`,
        summary: "Ready For Summer",
        text: `여름맞이 준비 완료!마스크에 지친 피부 프리메라로 달래고올여름 피부미인 되자~#HOCANCE #Skincare #Picnic #Beverage 객실 1박▶ 예약 문의​02 2223 7777 Res@SeoulDraonCity.com `,
        date:"2020-07-09 ~ 2020-08-31",
        iconClassName: "main-special__type--room package"
      },

      {
        backImage: "/images/59af9dc15b6594924176b79018ccb0a8.jpg",
        name: `GRAND MERCURE NOVOTEL SUITES NOVOTEL`,
        summary: "Ready For Summer",
        text: `여름맞이 준비 완료!마스크에 지친 피부 프리메라로 달래고올여름 피부미인 되자~#HOCANCE #Skincare #Picnic #Beverage 객실 1박▶ 예약 문의​02 2223 7777 Res@SeoulDraonCity.com `,
        date:"2020-07-09 ~ 2020-08-31",
        iconClassName: "main-special__type--room package"
      },
      {
        backImage: "/images/a815548e6d2ccb29e1bd618f8e355a07.jpg",
        name: `Mega Bites`,
        summary: "Mega Together",
        text: `로비 라운지 바 '메가 바이트' 프라이빗 룸에서 느긋하게 즐기는 소규모 파티 패키지.`,
        date:"2020-06-08 ~ 2020-08-31",
        iconClassName: "main-special__type--dining promotion"
      },
      {
        backImage: "/images/a5722e69cea9c9d42f98d42a67b4151e.jpg",
        name: `A La Maison Wine  Dine`,
        summary: "Pick Your Own Dessert Tea",
        text: `취향대로 골라 구성하는 나만의 DIY 애프터눈 티 프로모션. 모던 프렌치
           비스트로 알라메종 와인 앤 다인에서 특별한 애프터눈 티타임을 선사합니다. 원하는 대로, 원하는 만큼 다양한 디저트와 프리미엄 스미스티 컬렉션과 함께 달콤하고
            여유로운 오후를 즐겨보세요! ▶ 기간매주 목,금,토,일요일오후 2시 - 오후 4시 30분 ▶ 가격 1인 35,000원 
             구성 - 시즈널 디저트, 샐러드 및 샌드위치- 스티븐 스미스 티  커피 무제한 제공 ▶ 예약 및 문의 알라메종
             와인 앤 다인 02 2223 7100 `,
        date:"2020-05-28 ~ 2020-12-31",
        iconClassName: "main-special__type--dining promotion"
      },

    ]
  }


  render() {
    return (
      <div className="main-special">
        <h3 className="main-special__title">
          <p className="main-special__title main-special__title--sub">SEOUL DRAGON CITY</p>
          SPECIAL EVENTS
        </h3>
        <div className="swiper-container">
          <div className="main-spcial__list">
            <Slider {...this.settings}>
              {
                this.spcialList.map((v,i) => (
                  <div key={i} className="swiper-slide main-special__item swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="0">
                    <div className="main-special__link">
                      <figure className="main-special__figure">
                        <img className="main-special__image" src={v.backImage} alt="Back Image"/>
                        <figcaption className={`main-special__type ${v.iconClassName}`}>
                          <span className="main-special__type-text"/>
                        </figcaption>
                      </figure>
                      <div className="main-special__hotel">
                        <span className="main-special__name">{`${v.name}`}</span>
                      </div>
                    </div>
                    <div className="main-special__etc">
                      <h4 className="main-special__summary">{`${v.summary}`}</h4>
                      <p className="main-special__text">{`${v.text}`} </p>
                      <time className="main-special__date">{v.date}</time>
                    </div>
                  </div>
                ))
              }
            </Slider>
          </div>
          {/* <div className="main-special__navigation">
            <div style={{position: "relative", display:"inline-block"}}>
              <div className="swiper-button-prev main-special__control main-special__control--prev" tabIndex="0"
                   role="button" aria-label="Previous slide"><span
                className="main-special__control--text">Previus</span>
              </div>
            </div>
            <div style={{position: "relative", display:"inline-block"}}>
              <div className="swiper-button-next main-special__control main-special__control--next" tabIndex="0"
                   role="button" aria-label="Next slide"><span className="main-special__control--text">Next</span>
              </div>
            </div>
          </div> */}
        </div>

      </div>
    );
  };
};