(this.webpackJsonpsandbox=this.webpackJsonpsandbox||[]).push([[5,10,17,19,25,36,43,60,61,62,63,64],{110:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(3),r=n(1);function u(){var e=Object(a.a)(["\n  & + & {\n    margin-top: ",";\n  }\n"]);return u=function(){return e},e}var l=i.a.div(u(),r.spacing.xlg);t.default=l},111:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(3),r=n(10),u=n(1);function l(){var e=Object(a.a)(["\n  position: relative;\n\n  font-weight: ",";\n\n  &:hover {\n    background: none;\n\n    &::after {\n      transform: scale(1);\n    }\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    display: block;\n    height: 2px;\n    background: ",";\n    transform: scale(",");\n    transform-origin: bottom center;\n    transition: 0.1s cubic-bezier(0.25, 0.7, 0.01, 0.8) transform;\n  }\n"]);return l=function(){return e},e}var s=Object(i.a)(r.default)(l(),(function(e){return e["aria-selected"]?"bold":"normal"}),u.colors.accentRed,(function(e){return e["aria-selected"]?1:0}));t.default=s},118:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(111);t.default=function(e){var t=e.id,n=e.isActive,u=e.label,l=e.targetId,s=e.onClick,c=Object(a.useRef)(null);return Object(a.useEffect)((function(){n&&c.current.focus()}),[n]),i.a.createElement(r.default,{"aria-selected":n,"aria-controls":l,id:t,ref:c,role:"tab",tabIndex:n?0:-1,type:"button",onClick:s},u)}},119:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(3),r=n(1);function u(){var e=Object(a.a)(["\n  border-bottom: ",";\n"]);return u=function(){return e},e}var l=i.a.div.attrs({role:"tablist"})(u(),r.border.shorthand);t.default=l},131:function(e,t,n){"use strict";n.r(t);var a=n(19),i=n(20),r=n(22),u=n(21),l=n(0),s=n.n(l),c=n(118),o=n(119),d=n(97),m=function(e){Object(r.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).handleKeyPress=function(e){39===e.keyCode&&i.setState((function(e){return{activeTab:e.activeTab+1===i.count?0:e.activeTab+1}})),37===e.keyCode&&i.setState((function(e){return{activeTab:0===e.activeTab?i.count-1:e.activeTab-1}}))},i.state={activeTab:0},i.count=0,i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.count=s.a.Children.count(this.props.children)}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.state.activeTab;return s.a.createElement("div",{onKeyDown:this.handleKeyPress},s.a.createElement(o.default,null,s.a.Children.map(t,(function(t,a){return s.a.createElement(c.default,{id:"".concat(Object(d.normalizeLabel)(t.props.label)),isActive:a===n,label:t.props.label,targetId:"".concat(Object(d.normalizeLabel)(t.props.label),"-tab"),onClick:function(){return e.setState({activeTab:a})}})}))),s.a.Children.map(t,(function(e,t){return s.a.cloneElement(e,{id:"".concat(Object(d.normalizeLabel)(e.props.label),"-tab"),isActive:t===n,labelledBy:"".concat(Object(d.normalizeLabel)(e.props.label))})})))}}]),n}(s.a.Component);t.default=m},135:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(3),r=n(12);function u(){var e=Object(a.a)([""]);return u=function(){return e},e}var l=Object(i.a)(r.default).attrs((function(e){var t=e.isActive;return{role:"tabpanel",tabIndex:0,"aria-labelledby":e.labelledBy,hidden:!t}}))(u());t.default=l},56:function(e,t,n){"use strict";n.r(t);var a=n(96);t.default=a.default},63:function(e,t,n){"use strict";n.r(t);var a=n(110);t.default=a.default},65:function(e,t,n){"use strict";n.r(t);var a=n(131);t.default=a.default},76:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(56),u=n(63),l=n(65),s=n(135);t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.default,null,i.a.createElement(r.default,null,i.a.createElement("h2",null,"Tabs Example"),i.a.createElement("p",null,"Keyboard accessible tabs component. Once tabbed to a tab item or tab pane, pressing left or right arrow keys will automatically cycle through the panes."))),i.a.createElement(u.default,null,i.a.createElement(r.default,null,i.a.createElement(l.default,null,i.a.createElement(s.default,{label:"Tab 1",padding:"lg"},i.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce egestas condimentum aliquam. Donec nec libero magna. Nullam malesuada rhoncus purus vitae sagittis. Etiam bibendum venenatis nisi quis congue. Aenean porta, nulla et varius elementum, tortor tortor sagittis odio, id tincidunt lacus risus quis diam. Nunc id facilisis leo, at rhoncus nisl. Aenean tincidunt, sem vel commodo dapibus, lectus felis venenatis magna, quis mollis tellus dolor non augue. Morbi eget neque auctor diam luctus ullamcorper. Integer lacus risus, ullamcorper faucibus elementum et, accumsan eu turpis. Duis cursus ipsum sed tempor lobortis.")),i.a.createElement(s.default,{label:"Tab 2",padding:"lg"},i.a.createElement("p",null,"Donec tristique nulla a sem condimentum, id tincidunt nulla egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sollicitudin elementum dui, vitae efficitur nunc eleifend eget. Fusce sit amet ex ut nisl pulvinar feugiat. Aliquam in odio a lectus tincidunt aliquet. In tincidunt non ante non sollicitudin. In vitae purus nulla. In commodo arcu elit, nec semper orci sodales eget. Nunc nec velit rhoncus, gravida dolor eget, aliquet lorem. Nulla eget ultrices augue. Pellentesque ornare erat eu tristique ornare. Donec vitae vulputate orci, nec pulvinar dolor. Sed a efficitur lacus.")),i.a.createElement(s.default,{label:"Tab 3",padding:"lg"},i.a.createElement("p",null,"Sed posuere laoreet sem, id ultrices urna dignissim ut. Sed sit amet convallis ligula. Pellentesque aliquet felis quam, vitae volutpat enim accumsan et. Suspendisse nec libero et nisl imperdiet porta. Suspendisse fermentum velit ut egestas iaculis. Donec dignissim blandit lorem a semper. Suspendisse tellus nunc, accumsan a mauris at, ullamcorper lobortis quam. Aenean hendrerit tempor ligula, ac eleifend tellus laoreet ut. Nunc a nisi sed urna viverra accumsan. Aliquam sem nisl, aliquet ut massa vel, hendrerit facilisis eros. Suspendisse vitae convallis eros. Mauris quis vulputate nisi. Aenean luctus, nisi at feugiat sollicitudin, leo est tincidunt massa, quis vehicula massa elit vel libero. Ut efficitur augue vel orci molestie convallis."))))))}},96:function(e,t,n){"use strict";n.r(t);var a=n(2),i=n(3),r=n(1);function u(){var e=Object(a.a)(["\n  overflow: hidden;\n  padding: "," ",";\n  border-radius: ",";\n  background: ",";\n  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3);\n\n  h2 {\n    margin-bottom: ",";\n    font-family: 'Roboto', sans-serif;\n    text-transform: none;\n  }\n"]);return u=function(){return e},e}var l=i.a.section(u(),r.spacing.xlg,r.spacing.lg,r.border.radius,r.neutrals.neutral00,r.spacing.xlg);t.default=l},97:function(e,t,n){"use strict";n.r(t),n.d(t,"normalizeLabel",(function(){return a}));var a=function(e){return e.replace(/ /g,"-").toLowerCase()}}}]);
//# sourceMappingURL=5.e543e12e.chunk.js.map