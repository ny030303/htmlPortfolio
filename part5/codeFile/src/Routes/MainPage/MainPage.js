import * as React from 'react';
import "./MainPage.css";
import {MainVisual} from "./MainVisual/MainVisual";
import MainMembership from "./MainMembership/MainMembership";
import MainSpecial from "./MainSpecial/MainSpecial";
import PromotionBanner from "./PromotionBanner/PromotionBanner";

export class MainPage extends React.Component {
  render() {
    return (
      <div className="MainPage">
        <MainVisual/>
        <MainMembership/>
        <MainSpecial/>
        <PromotionBanner/>
      </div>
    );
  };
};