import * as React from 'react';
import "./MyFooter.css";

export default class MyFooter extends React.Component {
  render() {
    return (
      <footer className="footer">
        <nav className="familysite">
          <div className="familysite__list">
            <a href="#" className="familysite__hotel familysite__hotel--dragoncity">
              <span className="familysite__text"/>
            </a>
            <a href="#" className="familysite__hotel familysite__hotel--mercure">
              <span className="familysite__text"/>
            </a>
            <a href="#" className="familysite__hotel familysite__hotel--suites">
              <span className="familysite__text"/>
            </a>
            <a href="#" className="familysite__hotel familysite__hotel--novotel">
              <span className="familysite__text"/>
            </a>
            <a href="#" className="familysite__hotel familysite__hotel--ibis">
              <span className="familysite__text"/>
            </a>
          </div>
        </nav>
        <div className="footer__container">
          <div className="footer-sns">
            <h4 className="footer-sns__description">SNS</h4>
            <dl className="footer-sns__dl">
              <dt className="footer-sns__title footer-sns__title--instagram">
                <span  className="footer-sns__text">인스타그램</span></dt>
              <dd className="footer-sns__data">
                <a href="#" className="footer-sns__link" target="_blank" rel="noopener noreferrer">Seoul Dragon City</a>
              </dd>
            </dl>
            <dl className="footer-sns__dl">
              <dt className="footer-sns__title footer-sns__title--facebook"><span
                className="footer-sns__text">페이스북</span></dt>
              <dd className="footer-sns__data"><a href="#" target="_blank"
                                                  className="footer-sns__link" rel="noopener noreferrer">Seoul Dragon
                City</a></dd>
              <dd className="footer-sns__data"><a href="#" target="_blank" className="footer-sns__link"
                                                  rel="noopener noreferrer">Novotel</a></dd>
              <dd className="footer-sns__data"><a href="#"
                                                  target="_blank" className="footer-sns__link"
                                                  rel="noopener noreferrer">Grand Mercure</a></dd>
              <dd className="footer-sns__data"><a href="#"
                                                  target="_blank" className="footer-sns__link"
                                                  rel="noopener noreferrer">ibis Styles</a></dd>
              <dd className="footer-sns__data"><a href="#"
                                                  target="_blank" className="footer-sns__link"
                                                  rel="noopener noreferrer">Novotel Suites</a></dd>
            </dl>
          </div>
          <div className="organization">
            <div className="organization__menu">
              <ul className="organization__list">
                <li className="organization__item">
                  <a href="#" className="organization__link">공지사항</a>
                </li>
                <li className="organization__item">
                  <a href="#" className="organization__link">개인정보처리방침</a>
                </li>
                <li className="organization__item">
                  <a href="#" className="organization__link">이메일 무단 수집 거부</a>
                </li>
                <li className="organization__item">
                  <a href="#" className="organization__link">영상정보 관리 방침</a>
                </li>
              </ul>
            </div>
            <div className="organization__info">
              <p className="organization__sales">통신판매번호 제2020-서울어디-1004호 / 대표이사 홍길이</p>
              <p className="organization__address">㈜아무개 / 성남시 중원구 모로 20길 99 / 사업자등록번호 111-11-211111</p>
              <p className="organization__tel">TEL +82-2-2222-2222 FAX +33-3-3333-3333</p>
            </div>
          </div>
        </div>
      </footer>
    );
  };
};