import * as React from 'react';
import "./MainVisual.css";

export class MainVisual extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pgBulletActive: 0,
      bulletList: [
        {
          className: "swiper-pagination-bullet--sdc",
          text: "SEOUL DRAGON CITY",
          logo: "logo_hotel_seouldragoncity.png",
          hoverLogo: "logo_hotel_seouldragoncity_v2.png",
        },
        {
          className: "swiper-pagination-bullet--grand",
          text: "GRAND MERCURE",
          logo: "logo_hotel_grand_mercure.png",
          hoverLogo: "logo_hotel_grand_mercure_v2.png",
        },
        {
          className: "swiper-pagination-bullet--suites",
          text: "NOVOTEL SUITES",
          logo: "logo_hotel_novotel_suites_v2.png",
          hoverLogo: "logo_hotel_novotel_suites_v3.png",
        },
        {
          className: "swiper-pagination-bullet--novotel",
          text: "NOVOTEL",
          logo: "logo_hotel_novotel_v2.png",
          hoverLogo: "logo_hotel_novotel_v3.png",
        },
        {
          className: "swiper-pagination-bullet--ibis",
          text: "IBIS STYLES",
          logo: "logo_hotel_ibis.png",
          hoverLogo: "logo_hotel_ibis_v2.png",
        }
        ],
      imgDataUrl: `/images/bg_main_banner_0.jpg`,
      countP: 0
    };

    this.count = null;
  }

  componentDidMount() {
    this.setCount();
  };

  setCount = () => {
    clearInterval(this.count);
    this.count = setInterval(() => {

      if(this.state.countP >= 100) {
        let nextImage = (this.state.pgBulletActive + 1) % 5;

        this.setState({pgBulletActive: nextImage, imgDataUrl: `/images/bg_main_banner_${nextImage}.jpg`, countP: 0});

      } else {
        this.setState({countP: this.state.countP + 0.15});
      }
    }, 10);
  };

  changeBulletActive = (num) => {
    this.setState({pgBulletActive: num, imgDataUrl: `/images/bg_main_banner_${num}.jpg`, countP: 0 });
    this.setCount();
  };




  render() {
    const {bulletList, pgBulletActive,imgDataUrl, countP} = this.state;
    return (
      <div className="main-visual">
        <div className="main-visual__item swiper-slide-duplicate-active"
             style={{backgroundImage: `url(${imgDataUrl})`,
               width: "100%", height: "100vh", transition: ".5s" }}
             data-swiper-slide-index="4">
          <h3 className="main-visual__name">{bulletList[pgBulletActive].text}</h3>
          <div className="main-visual__contents">
            <div className="main-visual__info main-visual__info--active">
              <span className="main-visual__info-item">SEOUL</span>
              <span className="main-visual__info-item">10:53 AM</span>
              <span className="main-visual__info-item">Rainy 24˚C</span>
            </div>
          </div>
        </div>
        <div className="progress-bar">
          <span className="progress-bar__bar" style={{width: `${countP}%`}}/>
        </div>
        <div className="swiper-pagination swiper-pagination-bullets">
          {
            bulletList.map((v,i) =>
              (
                <span key={i} onClick={() => this.changeBulletActive(i)}
                      className={`swiper-pagination-bullet 
                      ${v.className} ${(i === pgBulletActive) ? "swiper-pagination-bullet-active" : ""}`}
                      style={{backgroundImage:`url(images/${(i === pgBulletActive) ? bulletList[i].hoverLogo: bulletList[i].logo})`}}
                      tabIndex="0" role="button">
                  <span className="swiper-pagination-bullet-text">{v.text}</span>
                </span>
              )
            )
          }

        </div>
      </div>
    );
  };
};