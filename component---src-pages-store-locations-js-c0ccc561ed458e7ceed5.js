/*! For license information please see component---src-pages-store-locations-js-c0ccc561ed458e7ceed5.js.LICENSE.txt */
(self.webpackChunkrands_supply_gatsby=self.webpackChunkrands_supply_gatsby||[]).push([[65],{8103:function(e,t){!function(){var r={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},a=Array.prototype.map,o=Array.isArray,n=Object.prototype.toString;function i(e){return!!(""===e||e&&e.charCodeAt&&e.substr)}function s(e){return o?o(e):"[object Array]"===n.call(e)}function l(e){return e&&"[object Object]"===n.call(e)}function c(e,t){var r;for(r in e=e||{},t=t||{})t.hasOwnProperty(r)&&null==e[r]&&(e[r]=t[r]);return e}function p(e,t,r){var o,n,i=[];if(!e)return i;if(a&&e.map===a)return e.map(t,r);for(o=0,n=e.length;o<n;o++)i[o]=t.call(r,e[o],o,e);return i}function m(e,t){return e=Math.round(Math.abs(e)),isNaN(e)?t:e}function u(e){var t=r.settings.currency.format;return"function"==typeof e&&(e=e()),i(e)&&e.match("%v")?{pos:e,neg:e.replace("-","").replace("%v","-%v"),zero:e}:e&&e.pos&&e.pos.match("%v")?e:i(t)?r.settings.currency.format={pos:t,neg:t.replace("%v","-%v"),zero:t}:t}var d=r.unformat=r.parse=function(e,t){if(s(e))return p(e,(function(e){return d(e,t)}));if("number"==typeof(e=e||0))return e;t=t||r.settings.number.decimal;var a=new RegExp("[^0-9-"+t+"]",["g"]),o=parseFloat((""+e).replace(/\((.*)\)/,"-$1").replace(a,"").replace(t,"."));return isNaN(o)?0:o},h=r.toFixed=function(e,t){t=m(t,r.settings.number.precision);var a=Math.pow(10,t);return(Math.round(r.unformat(e)*a)/a).toFixed(t)},f=r.formatNumber=r.format=function(e,t,a,o){if(s(e))return p(e,(function(e){return f(e,t,a,o)}));e=d(e);var n=c(l(t)?t:{precision:t,thousand:a,decimal:o},r.settings.number),i=m(n.precision),u=e<0?"-":"",g=parseInt(h(Math.abs(e||0),i),10)+"",y=g.length>3?g.length%3:0;return u+(y?g.substr(0,y)+n.thousand:"")+g.substr(y).replace(/(\d{3})(?=\d)/g,"$1"+n.thousand)+(i?n.decimal+h(Math.abs(e),i).split(".")[1]:"")},g=r.formatMoney=function(e,t,a,o,n,i){if(s(e))return p(e,(function(e){return g(e,t,a,o,n,i)}));e=d(e);var h=c(l(t)?t:{symbol:t,precision:a,thousand:o,decimal:n,format:i},r.settings.currency),y=u(h.format);return(e>0?y.pos:e<0?y.neg:y.zero).replace("%s",h.symbol).replace("%v",f(Math.abs(e),m(h.precision),h.thousand,h.decimal))};r.formatColumn=function(e,t,a,o,n,h){if(!e)return[];var g=c(l(t)?t:{symbol:t,precision:a,thousand:o,decimal:n,format:h},r.settings.currency),y=u(g.format),v=y.pos.indexOf("%s")<y.pos.indexOf("%v"),b=0,F=p(e,(function(e,t){if(s(e))return r.formatColumn(e,g);var a=((e=d(e))>0?y.pos:e<0?y.neg:y.zero).replace("%s",g.symbol).replace("%v",f(Math.abs(e),m(g.precision),g.thousand,g.decimal));return a.length>b&&(b=a.length),a}));return p(F,(function(e,t){return i(e)&&e.length<b?v?e.replace(g.symbol,g.symbol+new Array(b-e.length+1).join(" ")):new Array(b-e.length+1).join(" ")+e:e}))},e.exports&&(t=e.exports=r),t.accounting=r}()},4952:function(e,t){"use strict";t.A={properties:[{index:0,_id:5302411615,storeNumber:1,storeOpened:1977,storeManager:"Alan Shufelberger",street:"5858 Westside Rd",city:"Redding",stateFull:"California",state:"CA",zip:96001,phone:"(530) 241-1615",phoneFormated:5302411615,fax:"(530) 244-5043",faxFormated:5302445043,latitude:40.5295995,longitude:-122.3864545,price:937180,bedrooms:1,bathrooms:1,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:1,_id:9163832266,storeNumber:2,storeOpened:1983,storeManager:"Eric Entz",street:"5294 83rd St",city:"Sacramento",stateFull:"California",state:"CA",zip:95826,phone:"(916) 383-2266",phoneFormated:9163832266,fax:"(916) 383-7643",faxFormated:9163837643,latitude:38.5281596,longitude:-121.4020693,price:937180,bedrooms:1,bathrooms:1,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:2,_id:7074421515,storeNumber:3,storeOpened:1991,storeManager:"Nick Rice",street:"3810 Jacobs Ave",city:"Eureka",stateFull:"California",state:"CA",zip:95501,phone:"(707) 442-1515",phoneFormated:7074421515,fax:"(707) 442-1565",faxFormated:7074421565,latitude:40.804262,longitude:-124.1268216,price:820041,bedrooms:0,bathrooms:1,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:3,_id:8054732080,storeNumber:4,storeOpened:1992,storeManager:"Steve May",street:"390 Manhattan Ave",city:"Grover Beach",stateFull:"California",state:"CA",zip:93433,phone:"(805) 473-2080",phoneFormated:8054732080,fax:"(805) 473-2084",faxFormated:8054732084,latitude:35.1187176,longitude:-120.6271997,price:837963,bedrooms:3,bathrooms:3,carSpaces:1,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:4,_id:8316331715,storeNumber:9,storeOpened:2e3,storeManager:"John Roach",street:"10450 Tembladera St",city:"Castroville",stateFull:"California",state:"CA",zip:95012,phone:"(831) 633-1715",phoneFormated:8316331715,fax:"(831) 633-0176",faxFormated:8316330176,latitude:36.7665869,longitude:-121.7634313,price:771543,bedrooms:3,bathrooms:1,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:5,_id:5594991615,storeNumber:10,storeOpened:2001,storeManager:"Joe Davis",street:"1266 N Maple Ave",city:"Fresno",stateFull:"California",state:"CA",zip:93703,phone:"(559) 499-1615",phoneFormated:5594991615,fax:"(559) 499-1010",faxFormated:5594991010,latitude:36.7586539,longitude:-119.7468835,price:892956,bedrooms:0,bathrooms:2,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:6,_id:5303431418,storeNumber:14,storeOpened:2005,storeManager:"Randy Togstad",street:"1060 Marauder St",city:"Chico",stateFull:"California",state:"CA",zip:95973,phone:"(530) 343-1418",phoneFormated:5303431418,fax:"(530)  343-7796",faxFormated:5303437796,latitude:39.8030791,longitude:-121.8525207,price:868335,bedrooms:2,bathrooms:2,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:7,_id:5417701615,storeNumber:5,storeOpened:1995,storeManager:"Luke Morey",street:"4768 Crater Lake Ave",city:"Medford",stateFull:"Oregon",state:"OR",zip:97504,phone:"(541) 770-1615",phoneFormated:5417701615,fax:"(541) 773-9555",faxFormated:5417739555,latitude:42.3858899,longitude:-122.8569657,price:506377,bedrooms:0,bathrooms:3,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:8,_id:7753230888,storeNumber:6,storeOpened:1995,storeManager:"Chris Ponto",street:"2395 Valley Rd",city:"Reno",stateFull:"Nevada",state:"NV",zip:89512,phone:"(775) 323-0888",phoneFormated:7753230888,fax:"(775) 323-6310",faxFormated:7753236310,latitude:39.5498231,longitude:-119.8118087,price:733421,bedrooms:2,bathrooms:2,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:9,_id:7025971615,storeNumber:18,storeOpened:2014,storeManager:"Kevin Shields",street:"5655 Procyon St",city:"Las Vegas",stateFull:"Nevada",state:"NV",zip:89118,phone:"(702) 597-1615",phoneFormated:7025971615,fax:"(702) 740-7470",faxFormated:7027407470,latitude:36.0873417,longitude:-115.1904969,price:710355,bedrooms:0,bathrooms:2,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:10,_id:7757381615,storeNumber:23,storeOpened:2016,storeManager:"Ed Small",street:"120 Main St",city:"Elko",stateFull:"Nevada",state:"NV",zip:89801,phone:"(775) 738-1615",phoneFormated:7757381615,fax:"(775) 738-1636",faxFormated:7757381636,latitude:40.8287597,longitude:-115.7667917,price:702969,bedrooms:3,bathrooms:0,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:11,_id:2083621900,storeNumber:7,storeOpened:1998,storeManager:"Dan Kaufman",street:"7880 W Mossy Cup St",city:"Boise",stateFull:"Idaho",state:"ID",zip:83709,phone:"(208) 362-1900",phoneFormated:2083621900,fax:"(208) 362-8930",faxFormated:2083628930,latitude:43.5781749,longitude:-116.282575,price:880665,bedrooms:1,bathrooms:3,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:12,_id:2087352400,storeNumber:8,storeOpened:1998,storeManager:"Tony Haines",street:"250 S Park Ave W",city:"Twin Falls",stateFull:"Idaho",state:"ID",zip:83301,phone:"(208) 735-2400",phoneFormated:2087352400,fax:"(208) 735-0400",faxFormated:2087350400,latitude:42.5502319,longitude:-114.4847617,price:656611,bedrooms:1,bathrooms:1,carSpaces:1,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:13,_id:2085525858,storeNumber:12,storeOpened:2003,storeManager:"Tory Woodling",street:"4610 N Haroldsen Dr",city:"Idaho Falls",stateFull:"Idaho",state:"ID",zip:83401,phone:"(208) 552-5858",phoneFormated:2085525858,fax:"(208) 552-2776",faxFormated:2085522776,latitude:43.5372459,longitude:-112.0089447,price:688900,bedrooms:3,bathrooms:3,carSpaces:3,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:14,_id:4062521626,storeNumber:11,storeOpened:2002,storeManager:"Joe Conner",street:"1345 Monad Rd",city:"Billings",stateFull:"Montana",state:"MT",zip:59101,phone:"(406) 252-1626",phoneFormated:4062521626,fax:"(406) 252-3119",faxFormated:4062523119,latitude:45.7629917,longitude:-108.5530047,price:862884,bedrooms:2,bathrooms:0,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:15,_id:4065495050,storeNumber:13,storeOpened:2004,storeManager:"Denise Galland",street:"4480 Expressway",city:"Missoula",stateFull:"Montana",state:"MT",zip:59808,phone:"(406) 549-5050",phoneFormated:4065495050,fax:"(406) 542-3782",faxFormated:4065423782,latitude:46.9134356,longitude:-114.0606757,price:589045,bedrooms:1,bathrooms:2,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:16,_id:4065821615,storeNumber:15,storeOpened:2010,storeManager:"Emily Barton",street:"860 Winnow Cir",city:"Bozeman",stateFull:"Montana",state:"MT",zip:59718,phone:"(406) 582-1615",phoneFormated:4065821615,fax:"(406) 582-8231",faxFormated:4065828231,latitude:45.6705587,longitude:-111.1076737,price:537523,bedrooms:1,bathrooms:0,carSpaces:1,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:17,_id:4064525411,storeNumber:25,storeOpened:2017,storeManager:"Chad Such",street:"2224 Vaughn Rd",city:"Great Falls",stateFull:"Montana",state:"MT",zip:59404,phone:"(406) 452-5411",phoneFormated:4064525411,fax:"(406) 452-5418",faxFormated:4064525418,latitude:47.5145559,longitude:-111.3524731,price:722397,bedrooms:0,bathrooms:3,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:18,_id:4056021999,storeNumber:17,storeOpened:2012,storeManager:"Clay Curtis",street:"3200 W Reno Ave",city:"Oklahoma City",stateFull:"Oklahoma",state:"OK",zip:73107,phone:"(405) 602-1999",phoneFormated:4056021999,fax:"(405) 601-3060",faxFormated:4056013060,latitude:35.4628613,longitude:-97.5749517,price:522574,bedrooms:2,bathrooms:0,carSpaces:0,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:19,_id:9187941999,storeNumber:16,storeOpened:2012,storeManager:"Scott Campbell",street:"7727 E 41st St",city:"Tulsa",stateFull:"Oklahoma",state:"OK",zip:74145,phone:"(918) 794-1999",phoneFormated:9187941999,fax:"(918) 794-6063",faxFormated:9187946063,latitude:36.1054053,longitude:-95.8915946,price:612635,bedrooms:3,bathrooms:2,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:20,_id:9407671615,storeNumber:19,storeOpened:2014,storeManager:"Jody Roberts",street:"3300 Industrial Dr",city:"Wichita Falls",stateFull:"Texas",state:"TX",zip:76306,phone:"(940) 767-1615",phoneFormated:9407671615,fax:"(940) 716-9644",faxFormated:9407169644,latitude:33.9295994,longitude:-98.5397927,price:918814,bedrooms:3,bathrooms:0,carSpaces:1,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:21,_id:9406271600,storeNumber:24,storeOpened:2016,storeManager:"Steve Garske",street:"2023 US-287",city:"Decatur",stateFull:"Texas",state:"TX",zip:76234,phone:"(940) 627-1600",phoneFormated:9406271600,fax:"(940) 627-1765",faxFormated:9406271765,latitude:33.2622892,longitude:-97.6157785,price:505723,bedrooms:2,bathrooms:1,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:22,_id:9286801589,storeNumber:20,storeOpened:2014,storeManager:"Mike Buxton",street:"2225 N Kiowa Blvd",city:"Lake Havasu City",stateFull:"Arizona",state:"AZ",zip:86403,phone:"(928) 680-1589",phoneFormated:9286801589,fax:"(928) 680-1636",faxFormated:9286801636,latitude:34.5085364,longitude:-114.3404627,price:652298,bedrooms:2,bathrooms:3,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:23,_id:9287571615,storeNumber:21,storeOpened:2016,storeManager:"Tony Corona",street:"3463 Townsend St",city:"Kingman",stateFull:"Arizona",state:"AZ",zip:86409,phone:"(928) 757-1615",phoneFormated:9287571615,fax:"(928) 757-0148",faxFormated:9287570148,latitude:35.2238684,longitude:-114.0087177,price:917910,bedrooms:1,bathrooms:1,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"},{index:24,_id:9285262615,storeNumber:22,storeOpened:2016,storeManager:"Ben Allen",street:"3585 E Industrial Dr",city:"Flagstaff",stateFull:"Arizona",state:"AZ",zip:86004,phone:"(928) 526-2615",phoneFormated:9285262615,fax:"(928) 526-5466",faxFormated:9285265466,latitude:35.2138263,longitude:-111.5984855,price:703280,bedrooms:1,bathrooms:3,carSpaces:2,picture:"https://i.imgur.com/4eRj4Dn.jpg"}]}},4254:function(e){e.exports={pathPrefix:"/rands-supply-gatsby",siteTitle:"R&S Supply",siteTitleAlt:"R&S Supply - Your Full Service Roofing and Building",siteUrl:"https://www.randssupply.net",siteLanguage:"en",siteLogo:"/logos/logo-1024.png",siteDescription:"Offical website of R&S Supply Roofing Company",siteFBAppID:"123456789",userTwitter:"emilia",ogSiteName:"RandSFresno",googleAnalyticsID:"UA-12345689-1",dateFormat:"DD.MM.YYYY",themeColor:"#001e3c",backgroundColor:"#f8f8f8",headerFontFamily:"Roboto",bodyFontFamily:"Roboto",baseFontSize:"16px",avatar:"/logos/social.png",name:"R&S Supply",location:"United States",email:"info@randssupply.com",phone:"1555555555",phoneFormated:"(555) 555-5555",socialMedia:[{url:"https://www.facebook.com/RandSFresno",name:"Facebook"},{url:"https://www.linkedin.com/company/r&s-supply",name:"LinkedIn"}]}},2594:function(e,t,r){"use strict";r.d(t,{CB:function(){return c},GN:function(){return n},fd:function(){return i},hz:function(){return a},oH:function(){return o},qJ:function(){return s},sK:function(){return l}});const a="#ff7d77",o="#d74b4b",n="#61778b",i="#354b5e",s="#0a2334",l="24px",c="12px"},3238:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var a=r(6540),o=r(7387),n=(r(6910),function(e,t,r,a){return(e/=a/2)<1?r/2*e*e+t:-r/2*(--e*(e-2)-1)+t}),i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){var e=void 0,t=void 0,r=void 0,a=void 0,o=void 0,s=void 0,l=void 0,c=void 0,p=void 0,m=void 0,u=void 0,d=void 0;function h(e){return e.getBoundingClientRect().top+t}function f(r){p||(p=r),u=o(m=r-p,t,l,c),window.scrollTo(0,u),m<c?window.requestAnimationFrame(f):function(){window.scrollTo(0,t+l),e&&s&&(e.setAttribute("tabindex","-1"),e.focus());"function"==typeof d&&d();p=!1}()}return function(p){var m=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(c=m.duration||1e3,a=m.offset||0,d=m.callback,o=m.easing||n,s=m.a11y||!1,t=window.scrollY||window.pageYOffset,void 0===p?"undefined":i(p)){case"number":e=void 0,s=!1,r=t+p;break;case"object":r=h(e=p);break;case"string":e=document.querySelector(p),r=h(e)}switch(l=r-t+a,i(m.duration)){case"number":c=m.duration;break;case"function":c=m.duration(l)}window.requestAnimationFrame(f)}}(),l=s,c=r(4952),p=r(4254),m=r.n(p);var u=e=>{let{property:t,activeProperty:r,setActiveProperty:o}=e;const{picture:n,index:i,street:s,city:l,state:c,zip:p,phone:u,phoneFormated:d,fax:h,faxFormated:f,storeManager:g,storeOpened:y,storeNumber:v}=t;return a.createElement("div",{onClick:()=>o(t,!1),id:"card-"+i,role:"menuitem",tabIndex:i,className:"card "+(t===r?"is-active":"")},a.createElement("figure",{className:"store-img__wrap"},a.createElement("img",{src:n,alt:m().name+" "+l})),a.createElement("div",{className:"details"},a.createElement("h3",{className:"store__city"},l,a.createElement("small",null," ",y)),a.createElement("span",{className:"index"},v),a.createElement("address",{className:"store__address"},""+s,a.createElement("br",null),l+", "+c+" "+p),a.createElement("ul",{className:"store__contact"},a.createElement("li",{itemScope:!0,itemType:"http://schema.org/LocalBusiness"},a.createElement("span",{style:{display:"none"},itemProp:"name"},m().name+" "+l),a.createElement("span",{style:{display:"none"}},"Phone: "),a.createElement("span",{itemProp:"telephone"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 348.1 347.3"},a.createElement("path",{d:"M340.3 274.7l-53.8-53.8c-10.7-10.6-28.4-10.3-39.5.8l-27.1 27-5.3-2.9c-17.1-9.5-40.5-22.5-65.2-47.1s-37.7-48.2-47.2-65.3c-1-1.8-1.9-3.6-2.9-5.2l18.2-18.2 8.9-8.9c11.1-11.1 11.4-28.8.7-39.5L73.4 7.8C62.7-2.9 45-2.6 33.9 8.5L18.7 23.8l.4.4a87.5 87.5 0 0 0-12.4 22 86.8 86.8 0 0 0-5.6 22.3C-6 127.4 20.9 181.2 93.9 254.1 194.7 355 276 347.4 279.5 347a90.4 90.4 0 0 0 44.4-18l.3.3 15.4-15.1c11-11.1 11.4-28.8.7-39.5z"})),a.createElement("a",{href:"tel:+1"+d,rel:"nofollow",name:"Call "+m().name+" "+l+" at "+d},u))),a.createElement("li",{itemScope:!0,itemType:"http://schema.org/faxNumber"},a.createElement("span",{style:{display:"none"},itemProp:"name"},m().name+" "+l),a.createElement("span",{style:{display:"none"}},"Fax: "),a.createElement("span",{itemProp:"faxNumber"},a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 31.73 31.73"},a.createElement("path",{d:"M0 29.66h2.537V9.571H0V29.66zM28.549 9.571V.917H15.871v8.654H10.91v20.09h20.82V9.571h-3.181zm-8.926 15.908h-2.447v-2.446h2.447v2.446zm0-4.045h-2.447V18.99h2.447v2.444zm0-3.855h-2.447v-2.446h2.447v2.446zm4.516 7.9h-2.447v-2.446h2.447v2.446zm0-4.045h-2.447V18.99h2.447v2.444zm0-3.855h-2.447v-2.446h2.447v2.446zm4.513 7.9h-2.445v-2.446h2.445v2.446zm0-4.045h-2.445V18.99h2.445v2.444zm0-3.855h-2.445v-2.446h2.445v2.446zm1.506-4.574H14.26V10.84h1.611v1.082h12.678V10.84h1.609v2.165zM3.535 30.813h6.398V7.332H3.535v23.481zm23.33-27.486h-9.029V2.48h9.029v.847zm0 2.256h-9.029v-.844h9.029v.844z"})),a.createElement("a",{href:"fax:+1"+f,rel:"nofollow",name:"Fax "+m().name+" "+l+" at "+f},h)))),a.createElement("dl",{className:"store__manager"},a.createElement("dt",null,"Store Manager"),a.createElement("dd",null,g))))},d=r(8103),h=r.n(d);const f=e=>h().formatMoney(e,{symbol:"$",precision:0});let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,o.A)(t,e),t.prototype.render=function(){const{toggleFilter:e,handleFilterChange:t,clearFilter:r}=this.props;return a.createElement("form",{ref:e=>{this.form=e},className:"filter"},a.createElement("div",{className:"filterBox"},a.createElement("label",{htmlFor:"filterBedrooms"},"Bedrooms",a.createElement("select",{onChange:e=>t(e),id:"filterBedrooms",name:"filterBedrooms"},a.createElement("option",{value:"any"},"Any"),a.createElement("option",{value:"1"},"1"),a.createElement("option",{value:"2"},"2"),a.createElement("option",{value:"3"},"3")))),a.createElement("div",{className:"filterBox"},a.createElement("label",{htmlFor:"filterBathrooms"},"Bathrooms",a.createElement("select",{onChange:e=>t(e),id:"filterBathrooms",name:"filterBathrooms"},a.createElement("option",{value:"any"},"Any"),a.createElement("option",{value:"1"},"1"),a.createElement("option",{value:"2"},"2")))),a.createElement("div",{className:"filterBox"},a.createElement("label",{htmlFor:"filterCars"},"Car Spaces",a.createElement("select",{onChange:e=>t(e),id:"filterCars",name:"filterCars"},a.createElement("option",{value:"any"},"Any"),a.createElement("option",{value:"0"},"0"),a.createElement("option",{value:"1"},"1"),a.createElement("option",{value:"2"},"2")))),a.createElement("div",{className:"filterBox filterFrom"},a.createElement("label",{htmlFor:"priceFrom"},"Min Price",a.createElement("select",{onChange:e=>t(e),id:"priceFrom",name:"priceFrom"},a.createElement("option",{value:"0"},"Any"),a.createElement("option",{value:"500000"},f(5e5)),a.createElement("option",{value:"600000"},f(6e5)),a.createElement("option",{value:"700000"},f(7e5)),a.createElement("option",{value:"800000"},f(8e5)),a.createElement("option",{value:"900000"},f(9e5))))),a.createElement("div",{className:"filterBox"},a.createElement("label",{htmlFor:"priceTo"},"Max Price",a.createElement("select",{onChange:e=>t(e),id:"priceTo",name:"priceTo"},a.createElement("option",{value:"1000001"},"Any"),a.createElement("option",{value:"600000"},f(6e5)),a.createElement("option",{value:"700000"},f(7e5)),a.createElement("option",{value:"800000"},f(8e5)),a.createElement("option",{value:"900000"},f(9e5)),a.createElement("option",{value:"1000000"},f(1e6))))),a.createElement("div",{className:"filterBox"},a.createElement("label",{htmlFor:"filterSort"},"Order by",a.createElement("select",{onChange:e=>t(e),id:"filterSort",name:"filterSort"},a.createElement("option",{value:"any"},"Default"),a.createElement("option",{value:"0"},"Price: - Low to High"),a.createElement("option",{value:"1"},"Price: - High to Low")))),a.createElement("div",{className:"filterBox"},a.createElement("label",{htmlFor:"clear"},a.createElement("span",{style:{display:"none"}},"Clear"),a.createElement("button",{onClick:e=>r(e,this.form),id:"clear",name:"clear",className:"btn-clear"},"Clear"))),a.createElement("button",{onClick:t=>e(t),className:"btn-filter"},a.createElement("strong",null,"X"),a.createElement("span",null,"Close")))},t}(a.Component);var y=g;var v=e=>{let{filterIsVisible:t,toggleFilter:r,handleFilterChange:o,clearFilter:n}=e;return a.createElement("header",{className:"stores__header "+(t?"filter-is-visible":"")},a.createElement(y,{handleFilterChange:o,toggleFilter:r,clearFilter:n}),a.createElement("div",{className:"stores__headline"},a.createElement("h1",null,"Store Locations"),a.createElement("button",{onClick:e=>r(e),className:"btn btn-filter"},"Filter")))},b=r(7880),F=r.n(b),x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAA3CAYAAADwpEFfAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACspJREFUeNrEmAlQlEcWgF//18zAICAGUUGCghcKeAFR12g02USNMTHuaoxnjBWzq9m4u4nr5sJcu6mkcmvpJpXaxI1my6glHjEYI15cKoeDgMjlgCKiXMOcf3fv+38GBIOIRmu7qhn+/vu9r1/36/feDMD/oZFuzQobPxz/zhop0fvDRRYbLPCA1lc1jNRXUCE3WxVT8XEnWI9Zfh00bFxiqMBee9LIJs9UPJK/wAQUENoL8ZbOGpjAdrllus0pHKxkwjqwHk+/NWjofQZfgX+x1MRmLzC4FZlwUcJhEbsAHalMI+InRbaK+jycqF+7FPdXDmF7MyPLoDLNdXNoaOLAgbLw/Xu+zugIkUoKDsk4y045pKN4vhsg00WAI4zg+FiFw3AD8EQDgA+uxoPzcQopo6LnpWZjQYmHPQGV6SU3hvZLiAiTxYNf+DnC+wiMIJC7UPnH9ZxkBfSB30wZD488OAGGDY2CgB5mqG+0wZmCYtiXchSO/HQMHmi4yJf6EzDgmjTwRdzyZU0mq9VDH4CqjLJfQvvFS+GKlL7B7BgVJjDQLDyGliU5fcjqNX+EuU9OA6NBAZPRALIktol5VAoOpwst5/Dtd8nw3jufwmuGZj7eiGBcsJUJsMJmyq5wq4lQlamC95j0ZgqKWP+Z2TE9UmREO78UJ4HPAgeQHds3wZSJ8bplBkUGURA6bI72rI2nZuRAbMxQmD7rYVj7UzYJaKzngyTO/QiHWIn23qOa+qgN53dfk+w7ZsSSQfH2vNhYbomNpTuj41h0wix++mwZ707bfziT94qbzqct+itn+KzJafI7hsWp+TExntMxMeqSqLHNGqeNGXzvhK1pMXE6MAd71MDxPDUzr1vAlKMnEDiDg3kEh/4T+OLVb+vjmvzoqPE8F6EIdqePiFVDIiZsbdnePqOC5vryTZNkVdDu3HanRMIWzCfL585A7+z6Gh9MOwXzVybB5Qs1sOnzJEjPPgNZeQXoKAQWPPEQnKi8DFZLAY+WGDOic5UzEpVv6L0RoP/Ep7dFj2QW3IKi2Bh1QNREfqW+8aYW4hnyvmNncbhnDN+yK4U73R6elVvIoU8CN0Q+wL/6715ear3IYwZNZEUxMS7U7/oueqRH4wmhgjo1SqRUCyz5qghD7ouHnv5+XVp4NCsP5q9KggtlVti86W2Y8+hUMMgSjIkZDOv/+TIEBwXAhm92gCSKEH5fPLFQ3V/5EJGq/QT1QSlEYKMlbzg7porkoUkJXQKPn7TA/BfWQeW5Cvj3xrdh7qyHgNTVQfGyZdBv7Vp4ZsHjMHncaFBVFYJ7+sOU+xMgN/0QGSyoVNZij8AGCtEii+TeEGrjhA+LDL8hMD3nDDz9wptwvrAUvsAznD/7YRAa6qEyKQnuWbwYLr7/PtCsLBgysD8MHzwADHivNX21TDtlPYhp1g6XzIRrcUC/tNoNVBS5U2BmbgE8vWodlOWfhY0IXPz7GSA0NoD1jSToNW8e+CQkQI9+faF63w9gGju2TU7TR6/lBjAD+ApiC0u3FAM3l9pFm9Z24nQRLHzxLSjJK4T1n7wGzzw1E4SmRrAmrYOgOXN04Dz04qPcAH2XLukgq+lj7RKSHYgkVDChXB9Aj9RsLK+s7iCUnV8MePeg6Pgp+PjDV+BZPDPRZoPKdW9Cz8ceA99x4+DZl9+DhLih8K/NO+GAtbaDvKYvkDCmx0nOWR2DXA1aIuGTdiOjBUqPZF3LwTlnzsEiBOYfzoKlqxbB80ueBMnpgMp33oHAadPAPHEiPLf2A4gZOhCeX/g4rFw0GyrKzneAavqiUC/qZ2gUP02laqGYCjlNTA8CbIyk0r0//KxPzsKtnLfyDTidmgGLVi6Ad9c8BxJaWPHiajCNGAHmyZPhD69+CEMiw2D5U4+CIssQj9Y+MimxDehye2AP6osTqZbx+CU0rZwJ6aKn5yD7EMG9fJDIXFpKKqhrJlU9gsRvtu2DU5azMH3mVPjo9VXQO8AMF97/AOSQEN1TP/xqGwT4+aKFT+jZp7X5mX3a/l//bTK49u52zTBQt+a9OzxKYCo3v0TAt7chLnhA3hazrQ8eOKlGqxdKob6vr1lBBkeEQv9+IXBvaAjmKTfYMjLAd9QoEHx9ITU9BxJGDusAbN9qrtbDlGmL2SdNpY0hhFHNW2fb/c7n15SNE8HTTC8FDrIPJ+45kSJ1BgJjzGZjp/yD5T8vnaOnND3xYnQxhIcDUVog2kI683St2V0umPeXf8DUvDTb/QpzC0D4QVUO/Jr2eJ7XWPJbpKizqFDp9eBM2RMiEaAxCqcZGLw3W69KkxLjwBcTd3dbTUMTLHv1IwhM3m5/zswcuFzexEFZ7QmyXLlcuAbcNtYCdds8VwMHlzgY/d1UyYPbT+homXlyc/L5ntJqyW4wktjI/jcFfr3/KHz+0ZfcL3mH/U9majMSwvFmiO+6fMmhmor50HTB2qFyAOYutxj7XjECnRIvqiIWYzRRYZ7qXAvNshRDalGFmFF1mTi18g+rBe3zUn0TZJ4th837j8GOLTt56X+2uiLSD9uW+xO7WcASEvVvdBthA/X/G1zKS+68MOsRhmVL5IoVUuNbC2Un80FvxjDJsuxUTGvyyI1B90i9BkcJruAQyWRU9NrIUHNJrS0spj2u1Hgm+UnuWB/J08SJ0MCJtIX5Ses9plectec2QKO1ixLUH7exZ+TLnypXX8GtbtaGsMZiWGWCE4uwMqcqFLtBxOCiJXkepRA1wihSkyRxByfE7VWz2WMU36qpfRX//RIaznej2PYPh98G9a7+1GRjVKsDtBDmnSxpkQWLLa8gx+JazxasXdGPC+QTmgMLqyqOP9yZeqFTaEMFnKDSj81Mj8nMq1Mv5j1a0MYU2Oztbm+i0Od5ewkVxSpi/PFGDifc6MUVYvjewiSFeIEdejtAa9fmtfZ9qhIADeW7bxmK53D8GJWp0KKU3wjQ2lsXJKDhWUyqgrrSs7cOrSu5/JOqWGgXgHaW09YFOXHL85j8Y1f3WejqZTEY95cy/Qsb7WRb6XWWa+mLnmSSqZ4oB24bCk1V+w5R2dAGalHcCmgDtVqMXq6dp4RyB28feuWs5RBVKjGUtYFu4Ey61ejd9DhVClHOdvtQbLl4dTDJ8+sB7axt62VMlK1gSL6ZzptC3URK+ZkZ/K7b1laLqXcRek+hig/Ya3b9aig4alN3qAYuXHOc9qA2K0U8gjSm1MNlLKx+NbQmn57m0mEt8nR6P71wGx5BEc7rTs4VujOpDuRdOVQ2XmdlS2/xXnqEKX61IO+7Y1Bw1qfsYQYf7/WgpH1HsLb1+xmWF8769DsHvZRbh+dVhdFQg7DrLMVKGthJLhfgvKt3DoqtBJTkcq7/wtPqwVxbgGZpBReVKpD3dldXt6FYR23ZxYyBHSz1bvdOZgrE93vuPPTiqYpsLjcJnZxnNpNs+L7szkOxnWTKz81cT9iq3vErpgNriJPccORW9NwS1A7C3q3MJ9hrpR7gdzNjTwcIdw8K1JWWyRUT8WYczdID3BiA43vvHrQq057LlSMq3h3tPJlWD3H5JI477h4UWzWIB45yo/bzi3oGrT4Hcuqt6rhlKHB6JJXrV4ceAGMQcPXw3Yda0yoPgeGKdk8zuOLA5/y7D8VWCvJhC8imfFAKbkf+tqDYdv0deo5uBOGH2xH+nwADAFnHUNMF013HAAAAAElFTkSuQmCC",A=r(2594);var E=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"landscape.natural",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:"-23"},{lightness:"27"},{visibility:"on"},{gamma:"1"},{hue:""+A.oH},{weight:"0.75"}]},{featureType:"road",elementType:"geometry.fill",stylers:[{visibility:"on"},{color:""+A.hz},{saturation:"-59"},{lightness:"30"}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"on"},{hue:""+A.oH},{saturation:"2"},{lightness:"2"},{weight:"0.75"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"on"},{saturation:"-51"},{color:"#cbcbcb"}]},{featureType:"transit.station",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:""+A.fd},{visibility:"on"}]}];const w={key:"AIzaSyAVeoFGD3DxTOzt9uCZPm6eoK9LRU0HYCE"};let S,C=function(e){function t(){for(var t,r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))||this).state={markers:[]},t}(0,o.A)(t,e);var r=t.prototype;return r.componentDidMount=function(){const{properties:e,activeProperty:t}=this.props,{latitude:r,longitude:a}=t;F()(w).then((()=>{S=new google.maps.Map(document.getElementById("map"),{center:{lat:r,lng:a},zoom:5,styles:E})})).then((()=>{this.createMarkers(e)}))},r.componentWillReceiveProps=function(e){const{activeProperty:t,filteredProperties:r,isFiltering:a}=e,{latitude:o,longitude:n,index:i}=t;a&&0===r.length?this.hideAll():(this.hideAll(),this.showIW(i))},r.componentDidUpdate=function(){const{filteredProperties:e,isFiltering:t}=this.props,{markers:r}=this.state;r.forEach((a=>{const{property:o}=a;t?e.includes(o)?r[o.index].setVisible(!0):r[o.index].setVisible(!1):r[o.index].setVisible(!0)}))},r.showIW=function(e){const{markers:t}=this.state;t[e]&&t[e].iw.open(S,t[e])},r.hideAll=function(){const{markers:e}=this.state;e.forEach((e=>{e.iw.close()}))},r.createMarkers=function(e){const t=new google.maps.LatLngBounds,{setActiveProperty:r,activeProperty:a}=this.props,o=a.index,{markers:n}=this.state;e.map((e=>{const{latitude:a,longitude:i,index:s,city:l,state:c,street:p}=e;this.marker=new google.maps.Marker({position:{lat:a,lng:i},map:S,animation:google.maps.Animation.DROP,icon:{url:""+x,size:new google.maps.Size(29,55)},property:e});const m=new google.maps.InfoWindow({content:"\n\t\t\t\t<header>\n\t\t\t\t\t<h3>"+l+", "+c+"</h3>\n\t\t\t\t\t<h4>"+p+'</h4>\n\t\t\t\t</header>\n\t\t\t\t<div class="map-box" style="background: url(\''+x+"' ) center no-repeat, url(https://maps.googleapis.com/maps/api/staticmap?center="+a+","+i+'&zoom=15&size=300x200&key=AIzaSyC5TT1pQaF8rS0pxFuGjS_rzaVlcWh_cGo)"></div>\n\n\t\t\t\t'});return this.marker.iw=m,n.push(this.marker),t.extend(this.marker.getPosition()),this.showIW(o),this.marker.addListener("click",(()=>{this.hideAll(),r(e)})),this.marker})),S.fitBounds(t)},r.render=function(){return a.createElement("div",{className:"mapContainer"},a.createElement("div",{id:"map",ref:"map"}))},t}(a.Component);var M=C;function D(e,t,r,a){return(e/=a/2)<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t}var j=function(e){function t(t){var r;return(r=e.call(this,t)||this).state={properties:c.A.properties,activeProperty:c.A.properties[0],filterIsVisible:!1,filterBedrooms:"any",filterBathrooms:"any",filterCars:"any",filterSort:"any",priceFrom:5e5,priceTo:1e6,filteredProperties:[],isFiltering:!1},r.setActiveProperty=r.setActiveProperty.bind(r),r.toggleFilter=r.toggleFilter.bind(r),r.clearFilter=r.clearFilter.bind(r),r.handleFilterChange=r.handleFilterChange.bind(r),r.filterProperties=r.filterProperties.bind(r),r}(0,o.A)(t,e);var r=t.prototype;return r.setActiveProperty=function(e,t){void 0===t&&(t=!0);const{index:r}=e;this.setState({activeProperty:e});t&&l("#card-"+r,{duration:800,easing:D})},r.toggleFilter=function(e){e.preventDefault(),this.setState({filterIsVisible:!this.state.filterIsVisible})},r.filterProperties=function(){const{properties:e,filterBedrooms:t,filterBathrooms:r,filterCars:a,filterSort:o,priceFrom:n,priceTo:i}=this.state,s="any"!==t||"any"!==r||"any"!==a||"0"!==n||"1000001"!==i||"any"!==o,l=e=>{const s=[];switch(e.map((e=>{const{bedrooms:o,bathrooms:l,carSpaces:c,price:p}=e;return(o===parseInt(t)||"any"===t)&&(l===parseInt(r)||"any"===r)&&(c===parseInt(a)||"any"===a)&&p>=n&&p<=i&&s.push(e)})),o){case"0":s.sort(((e,t)=>e.price-t.price));break;case"1":s.sort(((e,t)=>t.price-e.price))}return s};this.setState({filteredProperties:l(e),isFiltering:s,activeProperty:l(e)[0]||e[0]})},r.clearFilter=function(e,t){e.preventDefault(),this.setState({properties:this.state.properties.sort(((e,t)=>e.index-t.index)),filterBedrooms:"any",filterBathrooms:"any",filterCars:"any",filterSort:"any",priceFrom:5e5,priceTo:1e6,filteredProperties:[],isFiltering:!1,activeProperty:this.state.properties[0]}),t.reset()},r.handleFilterChange=function(e){const{target:t}=e,{value:r,name:a}=t;this.setState({[a]:r},(function(){this.filterProperties()}))},r.render=function(){const{properties:e,activeProperty:t,filterIsVisible:r,filteredProperties:o,isFiltering:n}=this.state,i=n?o:e;return a.createElement("div",{className:"container-full"},a.createElement(M,{properties:e,activeProperty:t,setActiveProperty:this.setActiveProperty,filteredProperties:o,isFiltering:n}),a.createElement("div",{className:"listings"},a.createElement(v,{handleFilterChange:this.handleFilterChange,toggleFilter:this.toggleFilter,clearFilter:this.clearFilter,filterIsVisible:r}),a.createElement("div",{className:"cards container"},a.createElement("div",{className:"cards-list row "+(0===i.length?"is-empty":"")},i.map((e=>a.createElement(u,{activeProperty:t,key:e.storeNumber,property:e,setActiveProperty:this.setActiveProperty}))),n&&0===i.length&&a.createElement("p",{className:"warning"},a.createElement("br",null),"No properties were found.")))))},t}(a.Component);var z=()=>a.createElement("div",null,a.createElement(j,null))},7880:function(e){var t="__googleMapsApiOnLoadCallback",r=["channel","client","key","language","region","v"],a=null;e.exports=function(e){return e=e||{},a||(a=new Promise((function(a,o){var n=setTimeout((function(){window[t]=function(){},o(new Error("Could not load the Google Maps API"))}),e.timeout||1e4);window[t]=function(){null!==n&&clearTimeout(n),a(window.google.maps),delete window[t]};var i=document.createElement("script"),s=["callback="+t];r.forEach((function(t){e[t]&&s.push(t+"="+e[t])})),e.libraries&&e.libraries.length&&s.push("libraries="+e.libraries.join(",")),i.src="https://maps.googleapis.com/maps/api/js?"+s.join("&"),document.body.appendChild(i)}))),a}},2217:function(e,t,r){"use strict";var a=r(9039);e.exports=function(e,t){var r=[][e];return!!r&&a((function(){r.call(null,t||function(){return 1},1)}))}},7680:function(e,t,r){"use strict";var a=r(9504);e.exports=a([].slice)},4488:function(e,t,r){"use strict";var a=r(7680),o=Math.floor,n=function(e,t){var r=e.length;if(r<8)for(var i,s,l=1;l<r;){for(s=l,i=e[l];s&&t(e[s-1],i)>0;)e[s]=e[--s];s!==l++&&(e[s]=i)}else for(var c=o(r/2),p=n(a(e,0,c),t),m=n(a(e,c),t),u=p.length,d=m.length,h=0,f=0;h<u||f<d;)e[h+f]=h<u&&f<d?t(p[h],m[f])<=0?p[h++]:m[f++]:h<u?p[h++]:m[f++];return e};e.exports=n},6955:function(e,t,r){"use strict";var a=r(2140),o=r(4901),n=r(2195),i=r(8227)("toStringTag"),s=Object,l="Arguments"===n(function(){return arguments}());e.exports=a?n:function(e){var t,r,a;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(r=function(e,t){try{return e[t]}catch(r){}}(t=s(e),i))?r:l?n(t):"Object"===(a=n(t))&&o(t.callee)?"Arguments":a}},4606:function(e,t,r){"use strict";var a=r(6823),o=TypeError;e.exports=function(e,t){if(!delete e[t])throw new o("Cannot delete property "+a(t)+" of "+a(e))}},3709:function(e,t,r){"use strict";var a=r(2839).match(/firefox\/(\d+)/i);e.exports=!!a&&+a[1]},3763:function(e,t,r){"use strict";var a=r(2839);e.exports=/MSIE|Trident/.test(a)},3607:function(e,t,r){"use strict";var a=r(2839).match(/AppleWebKit\/(\d+)\./);e.exports=!!a&&+a[1]},2140:function(e,t,r){"use strict";var a={};a[r(8227)("toStringTag")]="z",e.exports="[object z]"===String(a)},655:function(e,t,r){"use strict";var a=r(6955),o=String;e.exports=function(e){if("Symbol"===a(e))throw new TypeError("Cannot convert a Symbol value to a string");return o(e)}},6910:function(e,t,r){"use strict";var a=r(6518),o=r(9504),n=r(9306),i=r(8981),s=r(6198),l=r(4606),c=r(655),p=r(9039),m=r(4488),u=r(2217),d=r(3709),h=r(3763),f=r(9519),g=r(3607),y=[],v=o(y.sort),b=o(y.push),F=p((function(){y.sort(void 0)})),x=p((function(){y.sort(null)})),A=u("sort"),E=!p((function(){if(f)return f<70;if(!(d&&d>3)){if(h)return!0;if(g)return g<603;var e,t,r,a,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:r=3;break;case 68:case 71:r=4;break;default:r=2}for(a=0;a<47;a++)y.push({k:t+a,v:r})}for(y.sort((function(e,t){return t.v-e.v})),a=0;a<y.length;a++)t=y[a].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));a({target:"Array",proto:!0,forced:F||!x||!A||!E},{sort:function(e){void 0!==e&&n(e);var t=i(this);if(E)return void 0===e?v(t):v(t,e);var r,a,o=[],p=s(t);for(a=0;a<p;a++)a in t&&b(o,t[a]);for(m(o,function(e){return function(t,r){return void 0===r?-1:void 0===t?1:void 0!==e?+e(t,r)||0:c(t)>c(r)?1:-1}}(e)),r=s(o),a=0;a<r;)t[a]=o[a++];for(;a<p;)l(t,a++);return t}})}}]);
//# sourceMappingURL=component---src-pages-store-locations-js-c0ccc561ed458e7ceed5.js.map