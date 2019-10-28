(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[4],{31:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(70);function c(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var i=t(40),l=t(1),u=t(2),s=t(41),f=t(3);function d(){var e=Object(l.a)(["\n  display: flex;\n  justify-content: center;\n  padding: ",";\n  border-radius: 50%;\n  background: ",";\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);\n  transition: 0.2s ease-out all;\n\n  &:active:not([disabled]),\n  &:hover:not([disabled]) {\n    background: ",";\n  }\n\n  &[disabled] {\n    background: ",";\n    color: ",";\n  }\n"]);return d=function(){return e},e}var b=Object(u.a)(s.a)(d(),f.f.md,f.e.neutral00,f.e.neutral20,f.e.neutral10,f.e.neutral20),m=t(9),v=t(25),p=t(39);function h(){var e=Object(l.a)(["\n  position: absolute;\n  top: 50%;\n  right: 0;\n  left: 0;\n  z-index: ",";\n\n  pointer-events: none;\n  transform: translateY(-50%);\n\n  "," {\n    pointer-events: auto;\n\n    &[disabled] {\n      transform: scale(0);\n    }\n  }\n"]);return h=function(){return e},e}var g=Object(u.a)(p.a).attrs({alignItems:"center",justifyContent:"space-between",padding:"md"})(h(),f.h.z1,b),x=function(e){var n=e.activeItem,t=e.nextIndex,a=e.prevIndex,o=e.onNextItem,c=e.onPrevItem;return r.a.createElement(g,null,r.a.createElement(m.a,{flex:"0 0 auto"},r.a.createElement(b,{"aria-controls":"slide-".concat(a),"aria-label":"Show previous item",disabled:a===n,onClick:c},r.a.createElement(v.a,{icon:"chevron_left"}))),r.a.createElement(m.a,{flex:"0 0 auto"},r.a.createElement(b,{"aria-controls":"slide-".concat(t),"aria-label":"Show next item",disabled:t===n,onClick:o},r.a.createElement(v.a,{icon:"chevron_right"}))))};function j(){var e=Object(l.a)(["\n  transition: ",";\n"]);return j=function(){return e},e}var E=Object(u.a)(p.a).attrs((function(e){return{style:{transform:"translateX(".concat(e.translateX?"".concat(-1*e.translateX,"px"):"0",")")}}}))(j(),(function(e){return e.isDragActive?"none":"0.3s cubic-bezier(0.25, 0.7, 0.01, 0.8) transform"})),O=function(e){var n=e.activeItem,t=e.children,o=e.onNextItem,c=e.onPrevItem,l=Object(a.useRef)(null),u=[],s=Object(a.useState)(0),f=Object(i.a)(s,2),d=f[0],b=f[1],m=Object(a.useState)(null),v=Object(i.a)(m,2),p=v[0],h=v[1],g=Object(a.useState)(null),x=Object(i.a)(g,2),j=x[0],O=x[1],I=Object(a.useState)(null),y=Object(i.a)(I,2),w=y[0],k=y[1],S=function(e){return/touch/.test(e.type)?e.touches[0].clientX:e.clientX},C=function(){b(n*l.current.offsetWidth),h(null),k(null)},A=function(e){h(S(e)),O(d)},M=function(e){p&&(b(Math.round(j+p-S(e))),k(S(e)))},T=function(e){if(p&&w){var a=p-w,i=l.current.offsetWidth/4;n+1>=r.a.Children.count(t)&&a>0||0===n&&a<0||Math.abs(a)<=i?C():a>0?o():c(),h(null),k(null)}else C()},X=function(){return C()};return Object(a.useEffect)((function(){return window.addEventListener("resize",X),function(){window.removeEventListener("resize",X)}})),r.a.createElement(E,{id:"carousel-scroller",isDragActive:!!p,ref:l,translateX:d,onKeyDown:function(e){39===e.keyCode&&o(),37===e.keyCode&&c()},onTouchStart:A,onTouchEnd:T,onTouchMove:M,onMouseDown:A,onMouseUp:T,onMouseMove:M,onMouseOut:C,onTransitionEnd:function(){return u[n].current.focus()}},r.a.Children.map(t,(function(e,t){return u[t]=r.a.createRef(),r.a.cloneElement(e,{"aria-hidden":t!==n,"aria-labelledby":"item-".concat(t),id:"slide-".concat(t),role:"tabpanel",tabIndex:t===n?0:-1,ref:u[t],onScrollToItem:function(){return b(t*l.current.offsetWidth)}})})))};function I(){var e=Object(l.a)(["\n  display: block;\n  width: ","px;\n  height: ","px;\n  background: ",";\n  border-radius: 50%;\n  box-shadow: inset 0px 2px 2px -1px rgba(0, 0, 0, 0.3);\n  transition: 0.2s ease-out background-color;\n"]);return I=function(){return e},e}var y=Object(u.a)(s.a)(I(),1.5*f.g,1.5*f.g,(function(e){return e["aria-selected"]?f.e.neutral40:f.e.neutral20}));function w(){var e=Object(l.a)(["\n  position: relative;\n  overflow: hidden;\n"]);return w=function(){return e},e}var k=u.a.div(w());function S(){var e=Object(l.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: ",";\n\n  li {\n    flex: 0 0 auto;\n    margin: 0 ",";\n  }\n"]);return S=function(){return e},e}var C=u.a.ol(S(),f.f.md,f.d.subUnit),A=function(e,n){return e+1===n?e:e+1},M=function(e){return e<=1?0:e-1},T=function(e){var n=e.children,t=r.a.Children.count(n),o=Object(a.useState)(0),l=Object(i.a)(o,2),u=l[0],s=l[1],f=function(e){return s(e)},d=function(){return f(A(u,t))},b=function(){return f(M(u))};return r.a.createElement("div",null,r.a.createElement(k,null,r.a.createElement(x,{activeItem:u,nextIndex:A(u,t),prevIndex:M(u),onNextItem:d,onPrevItem:b}),r.a.createElement(O,{activeItem:u,onNextItem:d,onPrevItem:b},n)),r.a.createElement(C,null,c(Array(t)).map((function(e,n){return r.a.createElement("li",{key:n},r.a.createElement(y,{id:"item-".concat(n),"aria-controls":"slide-".concat(n),"aria-label":"Item ".concat(n+1),"aria-selected":u===n,role:"tab",onClick:function(){return f(n)}}))}))))},X=t(24);function z(){var e=Object(l.a)(["\n  width: 100%;\n"]);return z=function(){return e},e}var R=Object(u.a)(m.a).attrs({flex:"0 0 auto"})(z()),D=r.a.forwardRef((function(e,n){var t=e.children,o=e.onScrollToItem,c=Object(X.a)(e,["children","onScrollToItem"]),i=Object(a.useRef)(0);return Object(a.useEffect)((function(){-1===i.current&&0===c.tabIndex&&o(),i.current=c.tabIndex})),r.a.createElement(R,Object.assign({},c,{ref:n}),t)})),N=t(71);n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,null,r.a.createElement(o.a,null,r.a.createElement("h2",null,"Carousel Example"),r.a.createElement("p",null,"Keyboard accessible carousel component. Once tabbed to a carousel item, pressing left or right arrow keys will automatically cycle through the carousel."))),r.a.createElement(N.a,null,r.a.createElement(o.a,null,r.a.createElement(T,null,r.a.createElement(D,null,r.a.createElement("img",{src:"".concat("/sandbox","/shiba-1.jpg"),alt:"Shiba Inu",draggable:"false"})),r.a.createElement(D,null,r.a.createElement("img",{src:"".concat("/sandbox","/shiba-2.jpg"),alt:"Shiba Inu",draggable:"false"})),r.a.createElement(D,null,r.a.createElement("img",{src:"".concat("/sandbox","/shiba-3.jpg"),alt:"Shiba Inu",draggable:"false"}))))))}},70:function(e,n,t){"use strict";var a=t(1),r=t(2),o=t(3);function c(){var e=Object(a.a)(["\n  overflow: hidden;\n  padding: "," ",";\n  border-radius: ",";\n  background: ",";\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);\n\n  h2 {\n    margin-bottom: ",";\n    font-family: 'Roboto', sans-serif;\n    text-transform: none;\n  }\n"]);return c=function(){return e},e}var i=r.a.section(c(),o.f.xlg,o.f.lg,o.a.radius,o.e.neutral00,o.f.xlg);n.a=i},71:function(e,n,t){"use strict";var a=t(1),r=t(2),o=t(3);function c(){var e=Object(a.a)(["\n  & + & {\n    margin-top: ",";\n  }\n"]);return c=function(){return e},e}var i=r.a.div(c(),o.f.xlg);n.a=i}}]);
//# sourceMappingURL=4.cf43a746.chunk.js.map