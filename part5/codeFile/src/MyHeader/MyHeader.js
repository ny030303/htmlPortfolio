import * as React from 'react';
import "./MyHeader.css";

export default class MyHeader extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div className="header">
        <div className="header__container">
          <h1 className="header__logo">
            <a href="#" className="header__logo-link">
              <span className="header__logo-text">SEOUL DRAGON CITY</span>
            </a>
          </h1>

          <nav className="header-menu">
            <ul className="header-menu__list">
              <li className="header-menu__item header-menu__item--city">
                <div className="header-menu__main">
                  <a href="#" className="header-menu__main-link">
                    <span className="header-menu__main-text">SEOUL DRAGON CITY</span>
                  </a>
                </div>
                <div className="header-menu__sub">
                  <ul className="header-menu__sub-list">
                    <li className="header-menu__sub-item">
                      <a href="#" className="header-menu__sub-link">SEOUL DRAGON CITY 소개</a>
                    </li>
                    <li className="header-menu__sub-item">
                      <a href="#" className="header-menu__sub-link">LOCATION </a>
                    </li>
                    <li className="header-menu__sub-item">
                      <a href="#" className="header-menu__sub-link">FLOOR GUIDE </a>
                    </li>
                    <li className="header-menu__sub-item">
                      <a href="#" className="header-menu__sub-link">TRAVEL GUIDE </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-menu__item header-menu__item--hotel">
                <div className="header-menu__main">
                  <a href="#" className="header-menu__main-link">
                    <span className="header-menu__main-text">HOTELS</span>
                  </a>
                </div>
                <div className="header-menu__sub">
                  <ul className="header-menu__sub-list">
                    <li className="header-menu__sub-item header-menu__sub-item--hotels">
                      <span className="header-menu__sub-link header-menu__sub-link--main">GRAND MERCURE</span>
                      <div className="header-menu__sub-depth header-menu__sub-depth--hidden">
                        <ul className="header-menu__sub-depth-list">
                          <li className="header-menu__sub-depth-item header-menu__sub-depth-item--main">
                            <a href="#" className="header-menu__sub-depth-link">Overview</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Room</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Dining</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Life style</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="header-menu__sub-item header-menu__sub-item--hotels">
                      <span className="header-menu__sub-link header-menu__sub-link--main">NOVOTEL SUITES</span>
                      <div className="header-menu__sub-depth header-menu__sub-depth--hidden">
                        <ul className="header-menu__sub-depth-list">
                          <li className="header-menu__sub-depth-item header-menu__sub-depth-item--main">
                            <a href="#" className="header-menu__sub-depth-link">Overview</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Room</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Dining</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Life style</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="header-menu__sub-item header-menu__sub-item--hotels">
                      <span className="header-menu__sub-link header-menu__sub-link--main">NOVOTEL</span>
                      <div className="header-menu__sub-depth header-menu__sub-depth--hidden">
                        <ul className="header-menu__sub-depth-list">
                          <li className="header-menu__sub-depth-item header-menu__sub-depth-item--main">
                            <a href="#" className="header-menu__sub-depth-link">Overview</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Room</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Dining</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Life style</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="header-menu__sub-item header-menu__sub-item--hotels">
                      <span className="header-menu__sub-link header-menu__sub-link--main">IBIS STYLES</span>
                      <div className="header-menu__sub-depth header-menu__sub-depth--hidden">
                        <ul className="header-menu__sub-depth-list">
                          <li className="header-menu__sub-depth-item header-menu__sub-depth-item--main">
                            <a href="#" className="header-menu__sub-depth-link">Overview</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Room</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Dining</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">Life style</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-menu__item header-menu__item--dining">
                <div className="header-menu__main">
                  <a href="#" className="header-menu__main-link"><span
                    className="header-menu__main-text">DINING</span></a>
                </div>
                <div className="header-menu__sub header-menu__sub--hide">
                  <ul className="header-menu__sub-list">
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">ALL</a>
                    </li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">A LA
                      MAISON WINE &amp; DINE</a></li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">FOOD
                      EXCHANGE</a></li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">MEGA
                      BITES</a></li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">THE 26</a>
                    </li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">IN
                      STYLE</a></li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">A LA MAISON
                      DELI</a></li>
                  </ul>
                </div>
              </li>
              <li className="header-menu__item header-menu__item--sky">
                <div className="header-menu__main">
                  <a href="#" className="header-menu__main-link"><span
                    className="header-menu__main-text">SKY KINGDOM</span></a>
                </div>
                <div className="header-menu__sub">
                  <ul className="header-menu__sub-list">
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">KING'S
                      VACATION</a></li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">THE
                      RIBBON</a></li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">SPY&amp;
                      PARTYROOM</a></li>
                    <li className="header-menu__sub-item"><a href="#"
                                                             className="header-menu__sub-link">SKY
                      BEACH</a></li>
                  </ul>
                </div>
              </li>
              <li className="header-menu__item header-menu__item--meeting">
                <div className="header-menu__main">
                  <a href="#" className="header-menu__main-link"><span
                    className="header-menu__main-text">CONVENTION &amp; MEETING</span></a>
                </div>
                <div className="header-menu__sub">
                  <ul className="header-menu__sub-list">
                    <li className="header-menu__sub-item">
                      <span className="header-menu__sub-link header-menu__sub-link--depth">GRAND BALLROOM</span>
                      <div className="header-menu__sub-depth">
                        <ul className="header-menu__sub-depth-list">
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">한라</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">백두</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="header-menu__sub-item">
                      <span className="header-menu__sub-link header-menu__sub-link--depth">MEETING ROOM</span>
                      <div className="header-menu__sub-depth">
                        <ul className="header-menu__sub-depth-list">
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">고구려</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">백제</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">신라</a>
                          </li>
                          <li className="header-menu__sub-depth-item">
                            <a href="#" className="header-menu__sub-depth-link">친타마니</a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="header-menu__item header-menu__item--wedding">
                <div className="header-menu__main">
                  <a href="#" className="header-menu__main-link"><span
                    className="header-menu__main-text">WEDDING</span></a>
                </div>
              </li>
              <li className="header-menu__item header-menu__item--special">
                <div className="header-menu__main">
                  <a href="#" className="header-menu__main-link"><span
                    className="header-menu__main-text">SPECIAL EVENTS</span></a>
                </div>
              </li>
              <li className="header-menu__item header-menu__item--membership">
                <div className="header-menu__main">
                  <a href="#" className="header-menu__main-link"><span
                    className="header-menu__main-text">MEMBERSHIP</span></a>
                </div>
                <div className="header-menu__sub">
                  <ul className="header-menu__sub-list">
                    <li className="header-menu__sub-item">
                      <a href="#" className="header-menu__sub-link">SDC CITIZENSHIP</a>
                    </li>
                    <li className="header-menu__sub-item">
                      <a href="#" className="header-menu__sub-link">SDC MEMBERSHIP</a>
                    </li>
                    <li className="header-menu__sub-item">
                      <a href="#" className="header-menu__sub-link">SDC FITNESS CLUB</a>
                    </li>
                    <li className="header-menu__sub-item">
                      <a href="#" className="header-menu__sub-link">MEMBERSHIP FAQ</a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
          <nav className="header-etc">
            <div className="header-etc__list">

              <div className="header-etc__item header-etc__item--book">
                <a href="#" className="header-etc__link header-etc__link--depth">
                  <span className="header-etc__text">BOOK NOW</span>
                </a>
              </div>

              <div className="header-etc__item header-etc__item--login">
                <a href="#" className="header-etc__link">
                  <span className="header-etc__text">LOGIN</span>
                </a>
              </div>
              <div className="header-etc__item header-etc__item--language">
                <a href="#" className="header-etc__link">
                  <span className="header-etc__text">
                      <span className="header-etc__language--kr header-etc__language--state">KR</span>
                      <span className="header-etc__language">EN</span>
                  </span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  };
};