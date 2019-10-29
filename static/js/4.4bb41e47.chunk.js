(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[4,6,16,17,19,21,26,29,32,33,42,43,44,45,46,47,48,60],{106:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),u=n(18),c=n(1);function l(){var e=Object(a.a)(["\n  display: flex;\n  justify-content: center;\n  padding: ",";\n  border-radius: 50%;\n  background: ",";\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);\n  transition: 0.2s ease-out all;\n\n  &:active:not([disabled]),\n  &:hover:not([disabled]) {\n    background: ",";\n  }\n\n  &[disabled] {\n    background: ",";\n    color: ",";\n  }\n"]);return l=function(){return e},e}var o=Object(r.a)(u.default)(l(),c.spacing.md,c.neutrals.neutral00,c.neutrals.neutral20,c.neutrals.neutral10,c.neutrals.neutral20);t.default=o},111:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),u=n(1);function c(){var e=Object(a.a)(["\n  & + & {\n    margin-top: ",";\n  }\n"]);return c=function(){return e},e}var l=r.a.div(c(),u.spacing.xlg);t.default=l},116:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),u=n(59),c=n(17),l=n(1);function o(){var e=Object(a.a)(["\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  z-index: ",";\n\n  pointer-events: none;\n  transform: translateY(-50%);\n\n  "," {\n    pointer-events: auto;\n\n    &[disabled] {\n      transform: scale(0);\n    }\n  }\n"]);return o=function(){return e},e}var i=Object(r.a)(c.default).attrs({alignItems:"center",justifyContent:"space-between",padding:"md"})(o(),l.zIndex.z1,u.default);t.default=i},117:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),u=n(17);function c(){var e=Object(a.a)(["\n  transition: ",";\n"]);return c=function(){return e},e}var l=Object(r.a)(u.default).attrs((function(e){return{style:{transform:"translateX(".concat(e.translateX?"".concat(-1*e.translateX,"px"):"0",")")}}}))(c(),(function(e){return e.isDragActive?"none":"0.3s cubic-bezier(0.25, 0.7, 0.01, 0.8) transform"}));t.default=l},123:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(59),c=n(7),l=n(14),o=n(116);t.default=function(e){var t=e.activeItem,n=e.nextIndex,a=e.prevIndex,i=e.onNextItem,s=e.onPrevItem;return r.a.createElement(o.default,null,r.a.createElement(c.default,{flex:"0 0 auto"},r.a.createElement(u.default,{"aria-controls":"slide-".concat(a),"aria-label":"Show previous item",disabled:a===t,onClick:s},r.a.createElement(l.default,{icon:"chevron_left"}))),r.a.createElement(c.default,{flex:"0 0 auto"},r.a.createElement(u.default,{"aria-controls":"slide-".concat(n),"aria-label":"Show next item",disabled:n===t,onClick:i},r.a.createElement(l.default,{icon:"chevron_right"}))))}},124:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),u=n(18),c=n(1);function l(){var e=Object(a.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background: ",";\n  border-radius: 50%;\n  box-shadow: inset 0px 2px 2px -1px rgba(0, 0, 0, 0.3);\n  transition: 0.2s ease-out background-color;\n"]);return l=function(){return e},e}var o=Object(r.a)(u.default)(l(),1.5*c.unit,1.5*c.unit,(function(e){return e["aria-selected"]?c.neutrals.neutral40:c.neutrals.neutral20}));t.default=o},125:function(e,t,n){"use strict";n.r(t);var a=n(2);function r(){var e=Object(a.a)(["\n  position: relative;\n  overflow: hidden;\n"]);return r=function(){return e},e}var u=n(3).a.div(r());t.default=u},126:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),u=n(1);function c(){var e=Object(a.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: ",";\n\n  li {\n    flex: 0 0 auto;\n    margin: 0 ",";\n  }\n"]);return c=function(){return e},e}var l=r.a.ol(c(),u.spacing.md,u.layout.subUnit);t.default=l},127:function(e,t,n){"use strict";n.r(t);var a=n(84),r=n(0),u=n.n(r),c=n(117);t.default=function(e){var t=e.activeItem,n=e.children,l=e.onNextItem,o=e.onPrevItem,i=Object(r.useRef)(null),s=[],f=Object(r.useState)(0),d=Object(a.a)(f,2),b=d[0],m=d[1],v=Object(r.useState)(null),p=Object(a.a)(v,2),g=p[0],h=p[1],x=Object(r.useState)(null),j=Object(a.a)(x,2),E=j[0],O=j[1],I=Object(r.useState)(null),y=Object(a.a)(I,2),w=y[0],k=y[1],S=function(e){return/touch/.test(e.type)?e.touches[0].clientX:e.clientX},C=function(){m(t*i.current.offsetWidth),h(null),k(null)},A=function(e){h(S(e)),O(b)},M=function(e){g&&(m(Math.round(E+g-S(e))),k(S(e)))},T=function(e){if(g&&w){var a=g-w,r=i.current.offsetWidth/4;t+1>=u.a.Children.count(n)&&a>0||0===t&&a<0||Math.abs(a)<=r?C():a>0?l():o(),h(null),k(null)}else C()},z=function(){return C()};return Object(r.useEffect)((function(){return window.addEventListener("resize",z),function(){window.removeEventListener("resize",z)}})),u.a.createElement(c.default,{id:"carousel-scroller",isDragActive:!!g,ref:i,translateX:b,onKeyDown:function(e){39===e.keyCode&&l(),37===e.keyCode&&o()},onTouchStart:A,onTouchEnd:T,onTouchMove:M,onMouseDown:A,onMouseUp:T,onMouseMove:M,onMouseOut:C,onTransitionEnd:function(){return s[t].current.focus()}},u.a.Children.map(n,(function(e,n){return s[n]=u.a.createRef(),u.a.cloneElement(e,{"aria-hidden":n!==t,"aria-labelledby":"item-".concat(n),id:"slide-".concat(n),role:"tabpanel",tabIndex:n===t?0:-1,ref:s[n],onScrollToItem:function(){return m(n*i.current.offsetWidth)}})})))}},134:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),u=n(7);function c(){var e=Object(a.a)(["\n  width: 100%;\n"]);return c=function(){return e},e}var l=Object(r.a)(u.default).attrs({flex:"0 0 auto"})(c());t.default=l},137:function(e,t,n){"use strict";function a(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.r(t);var r=n(84),u=n(0),c=n.n(u),l=n(123),o=n(127),i=n(124),s=n(125),f=n(126),d=function(e,t){return e+1===t?e:e+1},b=function(e){return e<=1?0:e-1};t.default=function(e){var t=e.children,n=c.a.Children.count(t),m=Object(u.useState)(0),v=Object(r.a)(m,2),p=v[0],g=v[1],h=function(e){return g(e)},x=function(){return h(d(p,n))},j=function(){return h(b(p))};return c.a.createElement("div",null,c.a.createElement(s.default,null,c.a.createElement(l.default,{activeItem:p,nextIndex:d(p,n),prevIndex:b(p),onNextItem:x,onPrevItem:j}),c.a.createElement(o.default,{activeItem:p,onNextItem:x,onPrevItem:j},t)),c.a.createElement(f.default,null,a(Array(n)).map((function(e,t){return c.a.createElement("li",{key:t},c.a.createElement(i.default,{id:"item-".concat(t),"aria-controls":"slide-".concat(t),"aria-label":"Item ".concat(t+1),"aria-selected":p===t,role:"tab",onClick:function(){return h(t)}}))}))))}},138:function(e,t,n){"use strict";n.r(t);var a=n(33),r=n(0),u=n.n(r),c=n(134),l=u.a.forwardRef((function(e,t){var n=e.children,l=e.onScrollToItem,o=Object(a.a)(e,["children","onScrollToItem"]),i=Object(r.useRef)(0);return Object(r.useEffect)((function(){-1===i.current&&0===o.tabIndex&&l(),i.current=o.tabIndex})),u.a.createElement(c.default,Object.assign({},o,{ref:t}),n)}));t.default=l},58:function(e,t,n){"use strict";n.r(t);var a=n(97);t.default=a.default},59:function(e,t,n){"use strict";n.r(t);var a=n(106);t.default=a.default},65:function(e,t,n){"use strict";n.r(t);var a=n(111);t.default=a.default},69:function(e,t,n){"use strict";n.r(t);var a=n(137);t.default=a.default},72:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(58),c=n(69),l=n(138),o=n(65);t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.default,null,r.a.createElement(u.default,null,r.a.createElement("h2",null,"Carousel Example"),r.a.createElement("p",null,"Keyboard accessible carousel component. Once tabbed to a carousel item, pressing left or right arrow keys will automatically cycle through the carousel."))),r.a.createElement(o.default,null,r.a.createElement(u.default,null,r.a.createElement(c.default,null,r.a.createElement(l.default,null,r.a.createElement("img",{src:"".concat("/sandbox","/shiba-1.jpg"),alt:"Shiba Inu",draggable:"false"})),r.a.createElement(l.default,null,r.a.createElement("img",{src:"".concat("/sandbox","/shiba-2.jpg"),alt:"Shiba Inu",draggable:"false"})),r.a.createElement(l.default,null,r.a.createElement("img",{src:"".concat("/sandbox","/shiba-3.jpg"),alt:"Shiba Inu",draggable:"false"}))))))}},97:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(3),u=n(1);function c(){var e=Object(a.a)(["\n  overflow: hidden;\n  padding: "," ",";\n  border-radius: ",";\n  background: ",";\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);\n\n  h2 {\n    margin-bottom: ",";\n    font-family: 'Roboto', sans-serif;\n    text-transform: none;\n  }\n"]);return c=function(){return e},e}var l=r.a.section(c(),u.spacing.xlg,u.spacing.lg,u.border.radius,u.neutrals.neutral00,u.spacing.xlg);t.default=l}}]);
//# sourceMappingURL=4.4bb41e47.chunk.js.map