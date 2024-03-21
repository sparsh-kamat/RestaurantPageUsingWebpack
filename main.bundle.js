(()=>{"use strict";var e={990:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),c=t.n(a)()(o());c.push([e.id,"\n#contact{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    padding: 10px;\n    width: 100%;\n    height: auto;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\nh2 {\n    text-align: center;\n    color: white;\n    font-size: 5rem;\n    margin: 10px;\n}\n\np {\n    font-size: 1.5rem;\n    color: #ffffff;\n    text-align: center;\n    width: 70%;\n}",""]);const i=c},526:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),a=t(314),c=t.n(a),i=t(417),d=t.n(i),l=new URL(t(868),t.b),s=c()(o()),u=d()(l);s.push([e.id,`#content {\n    background-image: url(${u});\n    background-size: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    height: auto;\n}\n\n#home {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n    background-color: rgba(0, 0, 0, 0.5);\n    width: 100%;\n}\n\nh2 {\n    font-size: 4rem;\n    color: #ffffff;\n    text-align: center;\n}\n\np {\n    font-size: 1.5rem;\n    color: #ffffff;\n    text-align: center;\n    width: 70%;\n}`,""]);const p=s},30:(e,n,t)=>{t.d(n,{A:()=>i});var r=t(601),o=t.n(r),a=t(314),c=t.n(a)()(o());c.push([e.id,"#content {\n    \n    align-items: center;\n    height: auto;\n}\n\n#menu {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 5px;\n    padding: 10px;\n    width: 100%;\n    height: auto;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\nh2 {\n    text-align: center;\n    color: white;\n    font-size: 5rem;\n    margin: 10px;\n}\n\ntable {\n    width: 40%;\n    border-collapse: collapse;\n    margin-bottom: 20px;\n}\n\ntd{\n    border: 1px solid black;\n    padding: 10px;\n    background-color: aliceblue\n}\n\ntd:first-child {\n    width: 10%;\n    text-align: left;\n}\n\n td:nth-child(2) {\n    width: 70%;\n    text-align: left;\n}\n\n td:last-child {\n    width: 20%;\n    text-align: left;\n}\n\n\n\n",""]);const i=c},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),o&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=o):s[4]="".concat(o)),n.push(s))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=r.base?d[0]+r.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=t(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)n[p].references++,n[p].updater(f);else{var m=o(f,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}c.push(u)}return c}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=t(a[c]);n[i].references--}for(var d=r(e,o),l=0;l<a.length;l++){var s=t(a[l]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}a=d}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},868:(e,n,t)=>{e.exports=t.p+"e2646f4fd6d90d09de22.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),a=t(659),c=t.n(a),i=t(56),d=t.n(i),l=t(540),s=t.n(l),u=t(113),p=t.n(u),f=t(526),m={};m.styleTagTransform=p(),m.setAttributes=d(),m.insert=c().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=s(),n()(f.A,m),f.A&&f.A.locals&&f.A.locals;var h=t(30),g={};g.styleTagTransform=p(),g.setAttributes=d(),g.insert=c().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=s(),n()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=[{name:"Chicken Biryani",price:"$10.00"},{name:"Kebab",price:"$5.00"},{name:"Shawarma",price:"$7.00"},{name:"Falafel",price:"$6.00"},{name:"Hummus",price:"$4.00"}];var b=t(990),x={};x.styleTagTransform=p(),x.setAttributes=d(),x.insert=c().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=s(),n()(b.A,x),b.A&&b.A.locals&&b.A.locals;const y=function(){const e=document.createElement("div");e.id="contact";const n=document.createElement("h2");n.textContent="Contact Us",e.appendChild(n);const t=document.createElement("p");return t.textContent="We are located at 123 Forklore Street, Forklore City, Forklore Country. You can reach us at 123-456-7890 or email us at forklore@gmail.com",e.appendChild(t),e},C=document.querySelectorAll("button"),w=document.getElementById("content");C.forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.id;"homebtn"===n&&(w.textContent="",w.appendChild(function(){const e=document.createElement("div");e.id="home";const n=document.createElement("h2");n.textContent="Welcome to Forklore",e.appendChild(n);const t=document.createElement("p");return t.textContent="We are a family-owned restaurant that serves delicious food made from fresh ingredients. We have been in business for over 20 years and have been serving our customers with love and care. We are proud to be a part of the community and we look forward to serving you.",e.appendChild(t),e}())),"menubtn"===n&&(w.textContent="",w.appendChild(function(){const e=document.createElement("div");e.id="menu";const n=document.createElement("h2");n.textContent="Menu.",e.appendChild(n);const t=document.createElement("table"),r=document.createElement("tr"),o=document.createElement("td");o.textContent="No.";const a=document.createElement("td");a.textContent="Item";const c=document.createElement("td");return c.textContent="Price",r.appendChild(o),r.appendChild(a),r.appendChild(c),t.appendChild(r),v.forEach(((e,n)=>{const r=document.createElement("tr"),o=document.createElement("td");o.textContent=n+1;const a=document.createElement("td");a.textContent=e.name;const c=document.createElement("td");c.textContent=e.price,r.appendChild(o),r.appendChild(a),r.appendChild(c),t.appendChild(r)})),e.appendChild(t),e}())),"contactbtn"===n&&(w.textContent="",w.appendChild(y()))}))})),w.appendChild(y())})()})();