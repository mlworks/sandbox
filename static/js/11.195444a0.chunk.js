(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[11,27,34,52,53],{101:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e(3),u=e(1);function o(){var n=Object(r.a)(["\n  display: block;\n  width: 100%;\n  padding: ",";\n  min-height: ",";\n  border-radius: ",";\n  border: 1px solid ",";\n  background: ",";\n\n  outline: 0;\n\n  &:focus {\n    border-color: ",";\n  }\n\n  ","\n"]);return o=function(){return n},n}var i=a.a.input(o(),u.spacing.md,u.layout.tapSize,u.border.radius,u.border.color,u.neutrals.neutral10,u.border.focusColor,(function(n){return!!n.maxLength&&"\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n  "}));t.default=i},102:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e(3),u=e(17),o=e(95),i=e(1);function c(){var n=Object(r.a)(["\n  &:focus-within {\n    "," {\n      background: ",";\n      color: ",";\n    }\n  }\n"]);return c=function(){return n},n}var l=Object(a.a)(u.default)(c(),o.default,i.border.focusColor,i.neutrals.neutral00);t.default=l},109:function(n,t,e){"use strict";e.r(t);var r=e(84),a=e(33),u=e(0),o=e.n(u),i=e(7),c=e(101),l=e(95),d=e(102),s=function(n){var t=n.maxLength,e=n.type,s=n.value,f=n.onChange,b=Object(a.a)(n,["maxLength","type","value","onChange"]),g=Object(u.useState)(t-s.length),h=Object(r.a)(g,2),m=h[0],p=h[1],v=t-m;return Object(u.useEffect)((function(){p(s.length)}),[t,s]),o.a.createElement(d.default,null,o.a.createElement(i.default,null,o.a.createElement(c.default,Object.assign({},b,{"aria-describedby":t&&"char-limit",maxLength:t,value:s,type:e,onChange:function(n){p(n.target.value.length),f(n)}}))),t&&o.a.createElement(l.default,{id:"char-limit","aria-label":"".concat(v," characters remaining"),title:"".concat(v," characters remaining")},m,"/",t))};s.defaultProps={type:"text",value:"",onChange:function(){}},t.default=s},63:function(n,t,e){"use strict";e.r(t);var r=e(109);t.default=r.default},95:function(n,t,e){"use strict";e.r(t);var r=e(2),a=e(3),u=e(17),o=e(1);function i(){var n=Object(r.a)(["\n  flex: 0 0 auto;\n  align-self: stretch;\n  background: ",";\n  border-top-right-radius: ",";\n  border-bottom-right-radius: ",";\n  font-size: ",";\n"]);return i=function(){return n},n}var c=Object(a.a)(u.default).attrs({alignItems:"center",justifyContent:"center",padding:"md"})(i(),o.neutrals.neutral30,o.border.radius,o.border.radius,o.fontSizes.small);t.default=c}}]);
//# sourceMappingURL=11.195444a0.chunk.js.map