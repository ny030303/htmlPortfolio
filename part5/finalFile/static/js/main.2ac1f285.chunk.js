(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{23:function(e,a,t){e.exports=t(56)},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},56:function(e,a,t){"use strict";t.r(a);var n=t(0),m=t.n(n),s=t(19),l=t.n(s),r=(t(28),t(2)),i=t(3),c=t(4),_=t(5),u=t(22),o=t(1),d=(t(29),t(30),t(31),function(e){Object(_.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).setCount=function(){clearInterval(n.count),n.count=setInterval((function(){if(n.state.countP>=100){var e=(n.state.pgBulletActive+1)%5;n.setState({pgBulletActive:e,imgDataUrl:"/images/bg_main_banner_".concat(e,".jpg"),countP:0})}else n.setState({countP:n.state.countP+.15})}),10)},n.changeBulletActive=function(e){n.setState({pgBulletActive:e,imgDataUrl:"/images/bg_main_banner_".concat(e,".jpg"),countP:0}),n.setCount()},n.state={pgBulletActive:0,bulletList:[{className:"swiper-pagination-bullet--sdc",text:"SEOUL DRAGON CITY",logo:"logo_hotel_seouldragoncity.png",hoverLogo:"logo_hotel_seouldragoncity_v2.png"},{className:"swiper-pagination-bullet--grand",text:"GRAND MERCURE",logo:"logo_hotel_grand_mercure.png",hoverLogo:"logo_hotel_grand_mercure_v2.png"},{className:"swiper-pagination-bullet--suites",text:"NOVOTEL SUITES",logo:"logo_hotel_novotel_suites_v2.png",hoverLogo:"logo_hotel_novotel_suites_v3.png"},{className:"swiper-pagination-bullet--novotel",text:"NOVOTEL",logo:"logo_hotel_novotel_v2.png",hoverLogo:"logo_hotel_novotel_v3.png"},{className:"swiper-pagination-bullet--ibis",text:"IBIS STYLES",logo:"logo_hotel_ibis.png",hoverLogo:"logo_hotel_ibis_v2.png"}],imgDataUrl:"/images/bg_main_banner_0.jpg",countP:0},n.count=null,n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setCount()}},{key:"render",value:function(){var e=this,a=this.state,t=a.bulletList,m=a.pgBulletActive,s=a.imgDataUrl,l=a.countP;return n.createElement("div",{className:"main-visual"},n.createElement("div",{className:"main-visual__item swiper-slide-duplicate-active",style:{backgroundImage:"url(".concat(s,")"),width:"100%",height:"100vh",transition:".5s"},"data-swiper-slide-index":"4"},n.createElement("h3",{className:"main-visual__name"},t[m].text),n.createElement("div",{className:"main-visual__contents"},n.createElement("div",{className:"main-visual__info main-visual__info--active"},n.createElement("span",{className:"main-visual__info-item"},"SEOUL"),n.createElement("span",{className:"main-visual__info-item"},"10:53 AM"),n.createElement("span",{className:"main-visual__info-item"},"Rainy 24\u02daC")))),n.createElement("div",{className:"progress-bar"},n.createElement("span",{className:"progress-bar__bar",style:{width:"".concat(l,"%")}})),n.createElement("div",{className:"swiper-pagination swiper-pagination-bullets"},t.map((function(a,s){return n.createElement("span",{key:s,onClick:function(){return e.changeBulletActive(s)},className:"swiper-pagination-bullet \n                      ".concat(a.className," ").concat(s===m?"swiper-pagination-bullet-active":""),style:{backgroundImage:"url(images/".concat(s===m?t[s].hoverLogo:t[s].logo,")")},tabIndex:"0",role:"button"},n.createElement("span",{className:"swiper-pagination-bullet-text"},a.text))}))))}}]),t}(n.Component)),h=(t(32),function(e){Object(_.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"main-membership"},n.createElement("h3",{className:"main-membership__title"},"MEMBERSHIP"),n.createElement("div",{className:"main-membership__container swiper-container"},n.createElement("div",{className:"swiper-wrapper main-membership__list"},n.createElement("div",{className:"swiper-slide main-membership__item swiper-slide-duplicate swiper-slide-duplicate-next","data-swiper-slide-index":"2",style:{width:"100%"}},n.createElement("div",{className:"main-membership__name"},n.createElement("p",{className:"main-membership__name-sub"},"\uc11c\uc6b8\ub4dc\ub798\uace4\uc2dc\ud2f0 \ud504\ub9ac\ubbf8\uc5c4 \ud638\ud154 \uba64\ubc84\uc2ed"),n.createElement("h4",{className:"main-membership__name-main","data-name":"MEMBERSHIP"},"SDC MEMBERSHIP")),n.createElement("div",{className:"main-membership__card"},n.createElement("figure",{className:"main-membership__figure main-membership__card-green"},n.createElement("img",{className:"main-membership__image",src:"/images/img_main_card_membership_green.png",alt:"MEMBERSHIP GREEN CARD"})),n.createElement("figure",{className:"main-membership__figure main-membership__card-blue"},n.createElement("img",{className:"main-membership__image",src:"/images/img_main_card_membership_blue.png",alt:"MEMBERSHIP BLUE CARD"})),n.createElement("figure",{className:"main-membership__figure main-membership__card-black"},n.createElement("img",{className:"main-membership__image",src:"/images/img_main_card_membership_black.png",alt:"MEMBERSHIP BLACK CARD"}))),n.createElement("div",{className:"main-membership__text"},"SDC MEMBERSHIP\uc740 \uc11c\uc6b8\ub4dc\ub798\uace4\uc2dc\ud2f0 4\uac1c \ube0c\ub79c\ub4dc\uc758 \ud638\ud154\uc5d0\uc11c \ubb34\ub8cc \uc219\ubc15, \uac1d\uc2e4 \ubc0f",n.createElement("br",null),"\ub808\uc2a4\ud1a0\ub791&\ubc14 \ud560\uc778 \uc11c\ube44\uc2a4\ub97c \ubc1b\uc73c\uc2e4 \uc218 \uc788\ub294 \uc5f0\uac04 \uba64\ubc84\uc2ed\uc785\ub2c8\ub2e4.",n.createElement("br",null),"\ud488\uc704\uc640 \uba85\uc608\ub97c \uacb8\ube44\ud55c SDC Membership \ud68c\uc6d0\uc774 \ub418\uc2dc\uc5b4 \uc11c\uc6b8\ub4dc\ub798\uace4\uc2dc\ud2f0\uc758 \ucc28\uc6d0 \ub192\uc740 \uc11c\ube44\uc2a4\ub97c \uacbd\ud5d8\ud574\ubcf4\uc138\uc694."),n.createElement("div",{className:"main-membership__button"},n.createElement("a",{href:"#",className:"main-membership__link main-membership__link--detail"},n.createElement("span",{className:"main-membership__link-text"},"\uc790\uc138\ud788\ubcf4\uae30")),n.createElement("a",{href:"#",className:"main-membership__link main-membership__link--join"},n.createElement("span",{className:"main-membership__link-text"},"\uac00\uc785\ubb38\uc758")))))))}}]),t}(n.Component)),E=(t(33),t(20)),N=t.n(E),p=function(e){Object(_.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).settings={dots:!1,centerMode:!0,infinite:!0,centerPadding:"60px",slidesToShow:4,slidesToScroll:1},n.spcialList=[{backImage:"/images/b7ac8bafb324336029c23eb1b92b8da8.jpg",name:"GRAND MERCURE",summary:"GRAND MERCURE X CROWN GOOSE",text:"\uadf8\ub79c\ub4dc \uba38\ud050\uc5b4 \uc570\ubc30\uc11c\ub354 \ud638\ud154 \uc564 \ub808\uc9c0\ub358\uc2a4 \uc11c\uc6b8 \uc6a9\uc0b0\uc5d0\uc11c\ub7ed\uc154\ub9ac \ubca0\ub529 \ube0c\ub79c\ub4dc \ud06c\ub77c\uc6b4\uad6c\uc2a4\uac00 \uc120\uc0ac\ud558\ub294\ud488\uaca9\uc788\ub294 \ud734\uc2dd\uc744 \uacbd\ud5d8\ud574 \ubcf4\uc138\uc694. \u25b6  \ud22c\uc219 \uae30\uac04 \n        2020\ub144 7\uc6d4 20\uc77c (\uc6d4) - 8\uc6d4 31\uc77c (\uc6d4) \u25b6\ud61c\ud0dd \ud06c\ub77c\uc6b4\uad6c\uc2a4 \uce68\uad6c\ub958\ub85c \uafb8\uba70\uc9c4 \uc218\ud398\ub9ac\uc5b4 \uc2a4\uc704\ud2b8 (\ud55c\uac15\ubdf0) \uac1d\uc2e4 1\ubc15\uc870\uc2dd 2\uc778\uc54c\ub77c\uba54\uc885\n        \uc640\uc778 \uc564 \ub2e4\uc778 \ub7f0\uce58 \ub610\ub294 \ub514\ub108 3\ucf54\uc2a4 + \ud2f0/\ucee4\ud53c (2\uc778 \uae30\uc900)\ud06c\ub77c\uc6b4\uad6c\uc2a4 \ud638\ud154 \uceec\ub809\uc158 \ud0c0\uc6d4 SET\ud638\ud154 \ub0b4 \ud53c\ud2b8\ub2c8\uc2a4, \uc0ac\uc6b0\ub098, \uc218\uc601\uc7a5 \uc2dc\uc124 \uc774\uc6a9\u25b6 \uac1d\uc2e4 \ubb38\uc758 (02) 2223-7000",date:"2020-07-20 ~ 2020-08-31",iconClassName:"main-special__type--room package"},{backImage:"/images/1994635656869dde332ec470cd2f68ea.jpg",name:"GRAND MERCURE",summary:"GRAND MERCURE X CROWN GOOSE",text:"\ub5a0\ub098\uace0 \uc2f6\uc740 \ub9c8\uc74c, \uadf8 \ub9c8\uc74c\uc744 \ub2f4\uc544 7\uc6d4 \uc170\ud504 \ucd08\uc774\uc2a4\uc5d0\uc11c\ub294 \ubca0\ub124\uce58\uc544 \uc9c0\uc5ed \ud2b9\uc0b0 \uc694\ub9ac\ub97c \uc120\ubcf4\uc785\ub2c8\ub2e4.\ub728\uac70\uc6b4 \uc5ec\ub984 \uc0b0 \ub9c8\ub974\ucf54 \uad11\uc7a5\uc5d0\uc11c \uc990\uae30\ub294 \ubca0\ub124\uce58\uc544\uc758 \ub9db\uc740 \uc5b4\ub5a8\uae4c\uc694?\ud574\uc678\uc5ec\ud589 \ubabb\uac00\ub294 \uc544\uc26c\uc6c0, \n        \uc54c\ub77c\uba54\uc885 \uc640\uc778 \uc564 \ub2e4\uc778\uc5d0\uc11c \ubbf8\uc2dd \ud22c\uc5b4\ub85c \ub2ec\ub798\uc138\uc694.7\uc6d4\ubd80\ud130\ub294 \uc170\ud504 \ucd08\uc774\uc2a4\ub97c \ub7f0\uce58\uc5d0\ub3c4 \ub9cc\ub0a0 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",date:"2020-07-25 ~ 2020-07-31",iconClassName:"main-special__type--dining promotion"},{backImage:"/images/5f8711a6bf6f557d8ea01978dbb5d4db.jpg",name:"GRAND MERCURE NOVOTEL SUITES NOVOTEL",summary:"Ready For Summer",text:"\uc5ec\ub984\ub9de\uc774 \uc900\ube44 \uc644\ub8cc!\ub9c8\uc2a4\ud06c\uc5d0 \uc9c0\uce5c \ud53c\ubd80 \ud504\ub9ac\uba54\ub77c\ub85c \ub2ec\ub798\uace0\uc62c\uc5ec\ub984 \ud53c\ubd80\ubbf8\uc778 \ub418\uc790~#HOCANCE #Skincare #Picnic #Beverage \uac1d\uc2e4 1\ubc15\u25b6 \uc608\uc57d \ubb38\uc758\u200b02 2223 7777 Res@SeoulDraonCity.com ",date:"2020-07-09 ~ 2020-08-31",iconClassName:"main-special__type--room package"},{backImage:"/images/59af9dc15b6594924176b79018ccb0a8.jpg",name:"GRAND MERCURE NOVOTEL SUITES NOVOTEL",summary:"Ready For Summer",text:"\uc5ec\ub984\ub9de\uc774 \uc900\ube44 \uc644\ub8cc!\ub9c8\uc2a4\ud06c\uc5d0 \uc9c0\uce5c \ud53c\ubd80 \ud504\ub9ac\uba54\ub77c\ub85c \ub2ec\ub798\uace0\uc62c\uc5ec\ub984 \ud53c\ubd80\ubbf8\uc778 \ub418\uc790~#HOCANCE #Skincare #Picnic #Beverage \uac1d\uc2e4 1\ubc15\u25b6 \uc608\uc57d \ubb38\uc758\u200b02 2223 7777 Res@SeoulDraonCity.com ",date:"2020-07-09 ~ 2020-08-31",iconClassName:"main-special__type--room package"},{backImage:"/images/a815548e6d2ccb29e1bd618f8e355a07.jpg",name:"Mega Bites",summary:"Mega Together",text:"\ub85c\ube44 \ub77c\uc6b4\uc9c0 \ubc14 '\uba54\uac00 \ubc14\uc774\ud2b8' \ud504\ub77c\uc774\ube57 \ub8f8\uc5d0\uc11c \ub290\uae0b\ud558\uac8c \uc990\uae30\ub294 \uc18c\uaddc\ubaa8 \ud30c\ud2f0 \ud328\ud0a4\uc9c0.",date:"2020-06-08 ~ 2020-08-31",iconClassName:"main-special__type--dining promotion"},{backImage:"/images/a5722e69cea9c9d42f98d42a67b4151e.jpg",name:"A La Maison Wine  Dine",summary:"Pick Your Own Dessert Tea",text:"\ucde8\ud5a5\ub300\ub85c \uace8\ub77c \uad6c\uc131\ud558\ub294 \ub098\ub9cc\uc758 DIY \uc560\ud504\ud130\ub208 \ud2f0 \ud504\ub85c\ubaa8\uc158. \ubaa8\ub358 \ud504\ub80c\uce58\n           \ube44\uc2a4\ud2b8\ub85c \uc54c\ub77c\uba54\uc885 \uc640\uc778 \uc564 \ub2e4\uc778\uc5d0\uc11c \ud2b9\ubcc4\ud55c \uc560\ud504\ud130\ub208 \ud2f0\ud0c0\uc784\uc744 \uc120\uc0ac\ud569\ub2c8\ub2e4. \uc6d0\ud558\ub294 \ub300\ub85c, \uc6d0\ud558\ub294 \ub9cc\ud07c \ub2e4\uc591\ud55c \ub514\uc800\ud2b8\uc640 \ud504\ub9ac\ubbf8\uc5c4 \uc2a4\ubbf8\uc2a4\ud2f0 \uceec\ub809\uc158\uacfc \ud568\uaed8 \ub2ec\ucf64\ud558\uace0\n            \uc5ec\uc720\ub85c\uc6b4 \uc624\ud6c4\ub97c \uc990\uaca8\ubcf4\uc138\uc694! \u25b6 \uae30\uac04\ub9e4\uc8fc \ubaa9,\uae08,\ud1a0,\uc77c\uc694\uc77c\uc624\ud6c4 2\uc2dc - \uc624\ud6c4 4\uc2dc 30\ubd84 \u25b6 \uac00\uaca9 1\uc778 35,000\uc6d0 \n             \uad6c\uc131 - \uc2dc\uc988\ub110 \ub514\uc800\ud2b8, \uc0d0\ub7ec\ub4dc \ubc0f \uc0cc\ub4dc\uc704\uce58- \uc2a4\ud2f0\ube10 \uc2a4\ubbf8\uc2a4 \ud2f0  \ucee4\ud53c \ubb34\uc81c\ud55c \uc81c\uacf5 \u25b6 \uc608\uc57d \ubc0f \ubb38\uc758 \uc54c\ub77c\uba54\uc885\n             \uc640\uc778 \uc564 \ub2e4\uc778 02 2223 7100 ",date:"2020-05-28 ~ 2020-12-31",iconClassName:"main-special__type--dining promotion"}],n}return Object(i.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"main-special"},n.createElement("h3",{className:"main-special__title"},n.createElement("p",{className:"main-special__title main-special__title--sub"},"SEOUL DRAGON CITY"),"SPECIAL EVENTS"),n.createElement("div",{className:"swiper-container"},n.createElement("div",{className:"main-spcial__list"},n.createElement(N.a,this.settings,this.spcialList.map((function(e,a){return n.createElement("div",{key:a,className:"swiper-slide main-special__item swiper-slide-duplicate swiper-slide-duplicate-active","data-swiper-slide-index":"0"},n.createElement("div",{className:"main-special__link"},n.createElement("figure",{className:"main-special__figure"},n.createElement("img",{className:"main-special__image",src:e.backImage,alt:"Back Image"}),n.createElement("figcaption",{className:"main-special__type ".concat(e.iconClassName)},n.createElement("span",{className:"main-special__type-text"}))),n.createElement("div",{className:"main-special__hotel"},n.createElement("span",{className:"main-special__name"},"".concat(e.name)))),n.createElement("div",{className:"main-special__etc"},n.createElement("h4",{className:"main-special__summary"},"".concat(e.summary)),n.createElement("p",{className:"main-special__text"},"".concat(e.text)," "),n.createElement("time",{className:"main-special__date"},e.date)))}))))))}}]),t}(n.Component),b=(t(49),function(e){Object(_.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"promotion-banner"},n.createElement("div",{className:"promotion-text-slide"},n.createElement("div",{className:"promotion-text-slide__container"},n.createElement("div",{className:"promotion-text-slide__pagenation"},n.createElement("button",{type:"button",className:"promotion-text-slide__control promotion-text-slide__control--button promotion-text-slide__control--prev",tabIndex:"0",role:"button","aria-label":"Previous slide"},n.createElement("span",{className:"promotion-text-slide__control promotion-text-slide__control--text"})),n.createElement("span",{className:"promotion-text-slide__pagination swiper-pagination-fraction"},n.createElement("span",{className:"swiper-pagination-current"},"01")," / ",n.createElement("span",{className:"swiper-pagination-total"},"03")),n.createElement("button",{type:"button",className:"promotion-text-slide__control promotion-text-slide__control--button promotion-text-slide__control--next",tabIndex:"0",role:"button","aria-label":"Next slide"},n.createElement("span",{className:"promotion-text-slide__control promotion-text-slide__control--text"}))),n.createElement("div",{className:"promotion-text-slide__item"},n.createElement("div",{className:"promotion-text-slide__title promotion-text-slide__title--main"}," SEOUL DRAGON CITY NEWS "),n.createElement("div",{className:"promotion-text-slide__title promotion-text-slide__title--sub"},"\xb42020 \ud2b8\ub9bd\uc5b4\ub4dc\ubc14\uc774\uc800 \ud2b8\ub798\ube14\ub7ec\uc988 \ucd08\uc774\uc2a4 \uc5b4\uc6cc\ub4dc\xb4 3\uad00\uc655"),n.createElement("p",{className:"promotion-text-slide__title_sub-title"},"\uc11c\uc6b8 \ub4dc\ub798\uace4\uc2dc\ud2f0 \uadf8\ub79c\ub4dc \uba38\ud050\uc5b4 \uc570\ubc30\uc11c\ub354 \ud638\ud154 \uc564 \ub808\uc9c0\ub358\uc2a4 \uc11c\uc6b8 \uc6a9\uc0b020"),n.createElement("time",{className:"promotion-text-slide__date"},"2020.08.05")))))}}]),t}(n.Component)),f=function(e){Object(_.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"MainPage"},n.createElement(d,null),n.createElement(h,null),n.createElement(p,null),n.createElement(b,null))}}]),t}(n.Component),g=(t(50),function(e){Object(_.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={},n}return Object(i.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"header"},n.createElement("div",{className:"header__container"},n.createElement("h1",{className:"header__logo"},n.createElement("a",{href:"#",className:"header__logo-link"},n.createElement("span",{className:"header__logo-text"},"SEOUL DRAGON CITY"))),n.createElement("nav",{className:"header-menu"},n.createElement("ul",{className:"header-menu__list"},n.createElement("li",{className:"header-menu__item header-menu__item--city"},n.createElement("div",{className:"header-menu__main"},n.createElement("a",{href:"#",className:"header-menu__main-link"},n.createElement("span",{className:"header-menu__main-text"},"SEOUL DRAGON CITY"))),n.createElement("div",{className:"header-menu__sub"},n.createElement("ul",{className:"header-menu__sub-list"},n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"SEOUL DRAGON CITY \uc18c\uac1c")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"LOCATION ")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"FLOOR GUIDE ")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"TRAVEL GUIDE "))))),n.createElement("li",{className:"header-menu__item header-menu__item--hotel"},n.createElement("div",{className:"header-menu__main"},n.createElement("a",{href:"#",className:"header-menu__main-link"},n.createElement("span",{className:"header-menu__main-text"},"HOTELS"))),n.createElement("div",{className:"header-menu__sub"},n.createElement("ul",{className:"header-menu__sub-list"},n.createElement("li",{className:"header-menu__sub-item header-menu__sub-item--hotels"},n.createElement("span",{className:"header-menu__sub-link header-menu__sub-link--main"},"GRAND MERCURE"),n.createElement("div",{className:"header-menu__sub-depth header-menu__sub-depth--hidden"},n.createElement("ul",{className:"header-menu__sub-depth-list"},n.createElement("li",{className:"header-menu__sub-depth-item header-menu__sub-depth-item--main"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Overview")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Room")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Dining")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Life style"))))),n.createElement("li",{className:"header-menu__sub-item header-menu__sub-item--hotels"},n.createElement("span",{className:"header-menu__sub-link header-menu__sub-link--main"},"NOVOTEL SUITES"),n.createElement("div",{className:"header-menu__sub-depth header-menu__sub-depth--hidden"},n.createElement("ul",{className:"header-menu__sub-depth-list"},n.createElement("li",{className:"header-menu__sub-depth-item header-menu__sub-depth-item--main"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Overview")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Room")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Dining")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Life style"))))),n.createElement("li",{className:"header-menu__sub-item header-menu__sub-item--hotels"},n.createElement("span",{className:"header-menu__sub-link header-menu__sub-link--main"},"NOVOTEL"),n.createElement("div",{className:"header-menu__sub-depth header-menu__sub-depth--hidden"},n.createElement("ul",{className:"header-menu__sub-depth-list"},n.createElement("li",{className:"header-menu__sub-depth-item header-menu__sub-depth-item--main"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Overview")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Room")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Dining")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Life style"))))),n.createElement("li",{className:"header-menu__sub-item header-menu__sub-item--hotels"},n.createElement("span",{className:"header-menu__sub-link header-menu__sub-link--main"},"IBIS STYLES"),n.createElement("div",{className:"header-menu__sub-depth header-menu__sub-depth--hidden"},n.createElement("ul",{className:"header-menu__sub-depth-list"},n.createElement("li",{className:"header-menu__sub-depth-item header-menu__sub-depth-item--main"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Overview")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Room")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Dining")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"Life style")))))))),n.createElement("li",{className:"header-menu__item header-menu__item--dining"},n.createElement("div",{className:"header-menu__main"},n.createElement("a",{href:"#",className:"header-menu__main-link"},n.createElement("span",{className:"header-menu__main-text"},"DINING"))),n.createElement("div",{className:"header-menu__sub header-menu__sub--hide"},n.createElement("ul",{className:"header-menu__sub-list"},n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"ALL")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"A LA MAISON WINE & DINE")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"FOOD EXCHANGE")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"MEGA BITES")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"THE 26")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"IN STYLE")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"A LA MAISON DELI"))))),n.createElement("li",{className:"header-menu__item header-menu__item--sky"},n.createElement("div",{className:"header-menu__main"},n.createElement("a",{href:"#",className:"header-menu__main-link"},n.createElement("span",{className:"header-menu__main-text"},"SKY KINGDOM"))),n.createElement("div",{className:"header-menu__sub"},n.createElement("ul",{className:"header-menu__sub-list"},n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"KING'S VACATION")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"THE RIBBON")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"SPY& PARTYROOM")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"SKY BEACH"))))),n.createElement("li",{className:"header-menu__item header-menu__item--meeting"},n.createElement("div",{className:"header-menu__main"},n.createElement("a",{href:"#",className:"header-menu__main-link"},n.createElement("span",{className:"header-menu__main-text"},"CONVENTION & MEETING"))),n.createElement("div",{className:"header-menu__sub"},n.createElement("ul",{className:"header-menu__sub-list"},n.createElement("li",{className:"header-menu__sub-item"},n.createElement("span",{className:"header-menu__sub-link header-menu__sub-link--depth"},"GRAND BALLROOM"),n.createElement("div",{className:"header-menu__sub-depth"},n.createElement("ul",{className:"header-menu__sub-depth-list"},n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"\ud55c\ub77c")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"\ubc31\ub450"))))),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("span",{className:"header-menu__sub-link header-menu__sub-link--depth"},"MEETING ROOM"),n.createElement("div",{className:"header-menu__sub-depth"},n.createElement("ul",{className:"header-menu__sub-depth-list"},n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"\uace0\uad6c\ub824")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"\ubc31\uc81c")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"\uc2e0\ub77c")),n.createElement("li",{className:"header-menu__sub-depth-item"},n.createElement("a",{href:"#",className:"header-menu__sub-depth-link"},"\uce5c\ud0c0\ub9c8\ub2c8")))))))),n.createElement("li",{className:"header-menu__item header-menu__item--wedding"},n.createElement("div",{className:"header-menu__main"},n.createElement("a",{href:"#",className:"header-menu__main-link"},n.createElement("span",{className:"header-menu__main-text"},"WEDDING")))),n.createElement("li",{className:"header-menu__item header-menu__item--special"},n.createElement("div",{className:"header-menu__main"},n.createElement("a",{href:"#",className:"header-menu__main-link"},n.createElement("span",{className:"header-menu__main-text"},"SPECIAL EVENTS")))),n.createElement("li",{className:"header-menu__item header-menu__item--membership"},n.createElement("div",{className:"header-menu__main"},n.createElement("a",{href:"#",className:"header-menu__main-link"},n.createElement("span",{className:"header-menu__main-text"},"MEMBERSHIP"))),n.createElement("div",{className:"header-menu__sub"},n.createElement("ul",{className:"header-menu__sub-list"},n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"SDC CITIZENSHIP")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"SDC MEMBERSHIP")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"SDC FITNESS CLUB")),n.createElement("li",{className:"header-menu__sub-item"},n.createElement("a",{href:"#",className:"header-menu__sub-link"},"MEMBERSHIP FAQ"))))))),n.createElement("nav",{className:"header-etc"},n.createElement("div",{className:"header-etc__list"},n.createElement("div",{className:"header-etc__item header-etc__item--book"},n.createElement("a",{href:"#",className:"header-etc__link header-etc__link--depth"},n.createElement("span",{className:"header-etc__text"},"BOOK NOW"))),n.createElement("div",{className:"header-etc__item header-etc__item--login"},n.createElement("a",{href:"#",className:"header-etc__link"},n.createElement("span",{className:"header-etc__text"},"LOGIN"))),n.createElement("div",{className:"header-etc__item header-etc__item--language"},n.createElement("a",{href:"#",className:"header-etc__link"},n.createElement("span",{className:"header-etc__text"},n.createElement("span",{className:"header-etc__language--kr header-etc__language--state"},"KR"),n.createElement("span",{className:"header-etc__language"},"EN"))))))))}}]),t}(n.Component)),v=(t(51),function(e){Object(_.a)(t,e);var a=Object(c.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return n.createElement("footer",{className:"footer"},n.createElement("nav",{className:"familysite"},n.createElement("div",{className:"familysite__list"},n.createElement("a",{href:"#",className:"familysite__hotel familysite__hotel--dragoncity"},n.createElement("span",{className:"familysite__text"})),n.createElement("a",{href:"#",className:"familysite__hotel familysite__hotel--mercure"},n.createElement("span",{className:"familysite__text"})),n.createElement("a",{href:"#",className:"familysite__hotel familysite__hotel--suites"},n.createElement("span",{className:"familysite__text"})),n.createElement("a",{href:"#",className:"familysite__hotel familysite__hotel--novotel"},n.createElement("span",{className:"familysite__text"})),n.createElement("a",{href:"#",className:"familysite__hotel familysite__hotel--ibis"},n.createElement("span",{className:"familysite__text"})))),n.createElement("div",{className:"footer__container"},n.createElement("div",{className:"footer-sns"},n.createElement("h4",{className:"footer-sns__description"},"SNS"),n.createElement("dl",{className:"footer-sns__dl"},n.createElement("dt",{className:"footer-sns__title footer-sns__title--instagram"},n.createElement("span",{className:"footer-sns__text"},"\uc778\uc2a4\ud0c0\uadf8\ub7a8")),n.createElement("dd",{className:"footer-sns__data"},n.createElement("a",{href:"#",className:"footer-sns__link",target:"_blank",rel:"noopener noreferrer"},"Seoul Dragon City"))),n.createElement("dl",{className:"footer-sns__dl"},n.createElement("dt",{className:"footer-sns__title footer-sns__title--facebook"},n.createElement("span",{className:"footer-sns__text"},"\ud398\uc774\uc2a4\ubd81")),n.createElement("dd",{className:"footer-sns__data"},n.createElement("a",{href:"#",target:"_blank",className:"footer-sns__link",rel:"noopener noreferrer"},"Seoul Dragon City")),n.createElement("dd",{className:"footer-sns__data"},n.createElement("a",{href:"#",target:"_blank",className:"footer-sns__link",rel:"noopener noreferrer"},"Novotel")),n.createElement("dd",{className:"footer-sns__data"},n.createElement("a",{href:"#",target:"_blank",className:"footer-sns__link",rel:"noopener noreferrer"},"Grand Mercure")),n.createElement("dd",{className:"footer-sns__data"},n.createElement("a",{href:"#",target:"_blank",className:"footer-sns__link",rel:"noopener noreferrer"},"ibis Styles")),n.createElement("dd",{className:"footer-sns__data"},n.createElement("a",{href:"#",target:"_blank",className:"footer-sns__link",rel:"noopener noreferrer"},"Novotel Suites")))),n.createElement("div",{className:"organization"},n.createElement("div",{className:"organization__menu"},n.createElement("ul",{className:"organization__list"},n.createElement("li",{className:"organization__item"},n.createElement("a",{href:"#",className:"organization__link"},"\uacf5\uc9c0\uc0ac\ud56d")),n.createElement("li",{className:"organization__item"},n.createElement("a",{href:"#",className:"organization__link"},"\uac1c\uc778\uc815\ubcf4\ucc98\ub9ac\ubc29\uce68")),n.createElement("li",{className:"organization__item"},n.createElement("a",{href:"#",className:"organization__link"},"\uc774\uba54\uc77c \ubb34\ub2e8 \uc218\uc9d1 \uac70\ubd80")),n.createElement("li",{className:"organization__item"},n.createElement("a",{href:"#",className:"organization__link"},"\uc601\uc0c1\uc815\ubcf4 \uad00\ub9ac \ubc29\uce68")))),n.createElement("div",{className:"organization__info"},n.createElement("p",{className:"organization__sales"},"\ud1b5\uc2e0\ud310\ub9e4\ubc88\ud638 \uc81c2020-\uc11c\uc6b8\uc5b4\ub514-1004\ud638 / \ub300\ud45c\uc774\uc0ac \ud64d\uae38\uc774"),n.createElement("p",{className:"organization__address"},"\u321c\uc544\ubb34\uac1c / \uc131\ub0a8\uc2dc \uc911\uc6d0\uad6c \ubaa8\ub85c 20\uae38 99 / \uc0ac\uc5c5\uc790\ub4f1\ub85d\ubc88\ud638 111-11-211111"),n.createElement("p",{className:"organization__tel"},"TEL +82-2-2222-2222 FAX +33-3-3333-3333")))))}}]),t}(n.Component)),k=function(e){Object(_.a)(t,e);var a=Object(c.a)(t);function t(e){var n;return Object(r.a)(this,t),(n=a.call(this,e)).state={isPanorama:!1},n}return Object(i.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"App"},m.a.createElement(g,null),m.a.createElement(u.a,null,m.a.createElement(o.c,null,m.a.createElement(o.a,{exact:!0,path:"/",component:f}))),m.a.createElement(v,null))}}]),t}(m.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(m.a.createElement(m.a.StrictMode,null,m.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.2ac1f285.chunk.js.map