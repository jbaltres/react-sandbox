(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{286:function(module,exports,__webpack_require__){__webpack_require__(287),__webpack_require__(395),module.exports=__webpack_require__(396)},308:function(module,exports){},396:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(278);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(602),module)}.call(this,__webpack_require__(397)(module))},602:function(module,exports,__webpack_require__){var map={"./0-Welcome.stories.js":603,"./1-Button.stories.js":612,"./2-PasswordInput.stories.js":628,"./3-IconButton.stories.js":625,"./4-Badge.stories.js":630,"./5-Card.stories.js":626};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=602},603:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"toStorybook",(function(){return toStorybook}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(282),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(87);__webpack_exports__.default={title:"Welcome"};var toStorybook=function toStorybook(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_1__.linkTo)("Button")})};toStorybook.story={name:"to Storybook"},toStorybook.__docgenInfo={description:"",methods:[],displayName:"toStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/0-Welcome.stories.js"]={name:"toStorybook",docgenInfo:toStorybook.__docgenInfo,path:"src/stories/0-Welcome.stories.js"})},612:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"text",(function(){return text})),__webpack_require__.d(__webpack_exports__,"emoji",(function(){return emoji}));var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(176),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(87);__webpack_exports__.default={title:"Button"};var text=function text(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},"Hello Button")},emoji=function emoji(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_2__.Button,{onClick:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.action)("clicked")},react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",{role:"img","aria-label":"so cool"},"😀 😎 👍 💯"))};text.__docgenInfo={description:"",methods:[],displayName:"text"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"text",docgenInfo:text.__docgenInfo,path:"src/stories/1-Button.stories.js"}),emoji.__docgenInfo={description:"",methods:[],displayName:"emoji"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Button.stories.js"]={name:"emoji",docgenInfo:emoji.__docgenInfo,path:"src/stories/1-Button.stories.js"})},625:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(64);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  width: 60px;\n  height: 60px;\n  background-color: blue;\n  padding: 14px;\n  border-radius: 10px;\n  fill: white;\n  box-shadow: 5px 8px 2px rgba(244, 0, 0, 0.3);\n"]);return _templateObject=function _templateObject(){return data},data}var Button=__webpack_require__(65).a.button(_templateObject());function IconButton(_ref){var children=_ref.children;return react_default.a.createElement(Button,null,children)}function Star(){return react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},react_default.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),react_default.a.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"}))}function Walk(){return react_default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},react_default.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"}),react_default.a.createElement("path",{d:"M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"}))}IconButton.__docgenInfo={description:"",methods:[],displayName:"IconButton"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconButton.js"]={name:"IconButton",docgenInfo:IconButton.__docgenInfo,path:"src/components/IconButton.js"}),Star.__docgenInfo={description:"",methods:[],displayName:"Star"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Icons/Star.js"]={name:"Star",docgenInfo:Star.__docgenInfo,path:"src/Icons/Star.js"}),Walk.__docgenInfo={description:"",methods:[],displayName:"Walk"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Icons/Walk.js"]={name:"Walk",docgenInfo:Walk.__docgenInfo,path:"src/Icons/Walk.js"}),__webpack_require__.d(__webpack_exports__,"Inactive",(function(){return _3_IconButton_stories_Inactive})),__webpack_require__.d(__webpack_exports__,"Active",(function(){return _3_IconButton_stories_Active}));__webpack_exports__.default={title:"IconButton"};var _3_IconButton_stories_Inactive=function Inactive(){return react_default.a.createElement(IconButton,null,react_default.a.createElement(Walk,null))},_3_IconButton_stories_Active=function Active(){return react_default.a.createElement(IconButton,null,react_default.a.createElement(Star,null))};_3_IconButton_stories_Inactive.__docgenInfo={description:"",methods:[],displayName:"Inactive"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/3-IconButton.stories.js"]={name:"Inactive",docgenInfo:_3_IconButton_stories_Inactive.__docgenInfo,path:"src/stories/3-IconButton.stories.js"}),_3_IconButton_stories_Active.__docgenInfo={description:"",methods:[],displayName:"Active"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/3-IconButton.stories.js"]={name:"Active",docgenInfo:_3_IconButton_stories_Active.__docgenInfo,path:"src/stories/3-IconButton.stories.js"})},626:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(64);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  display: flex;\n  width: 360px;\n  height: 133px;\n  background-color: rgba(222, 222, 222, 0.3);\n  border-radius: 10px;\n  color: black;\n  box-shadow: 0px 0px 10px rgba(10, 10, 10, 0.2);\n"]);return _templateObject=function _templateObject(){return data},data}var CardLayout=__webpack_require__(65).a.article(_templateObject());function Card(){return react_default.a.createElement(CardLayout,null,"KartenLayout")}Card.__docgenInfo={description:"",methods:[],displayName:"Card"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Card.js"]={name:"Card",docgenInfo:Card.__docgenInfo,path:"src/components/Card.js"}),__webpack_require__.d(__webpack_exports__,"StandardCard",(function(){return _5_Card_stories_StandardCard}));__webpack_exports__.default={title:"Card"};var _5_Card_stories_StandardCard=function StandardCard(){return react_default.a.createElement(Card,null)};_5_Card_stories_StandardCard.__docgenInfo={description:"",methods:[],displayName:"StandardCard"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/5-Card.stories.js"]={name:"StandardCard",docgenInfo:_5_Card_stories_StandardCard.__docgenInfo,path:"src/stories/5-Card.stories.js"})},628:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(284);function getInputStyle(length){var hue=0+11*length;if(hue<124)return{backgroundColor:"hsl(".concat(hue,", 100%, 50%)")};if(hue=124)return{backgroundColor:"hsl(124, 100%, 32%)"};return{backgroundColor:"red"}}function getbgColor(length){if(length>10)return{backgroundColor:"hsl(315, 100%, 69%)"}}function PasswordInput(onChange,value){var _React$useState=react_default.a.useState(""),_React$useState2=Object(slicedToArray.a)(_React$useState,2),password=_React$useState2[0],setPassword=_React$useState2[1],passwordLength=password.length;return react_default.a.createElement("div",{style:getbgColor(passwordLength)},react_default.a.createElement("input",{style:getInputStyle(passwordLength),className:"password-input",value:password,type:"password",onChange:function onChange(pimmel){setPassword(pimmel.target.value)}}),react_default.a.createElement("span",null,"Passwortlänge: ",password.length),react_default.a.createElement("p",null,"Passwort: ",password),react_default.a.createElement("p",null,"Das Passwort ist richtig"))}var components_PasswordInput=PasswordInput;PasswordInput.__docgenInfo={description:"",methods:[],displayName:"PasswordInput"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PasswordInput.js"]={name:"PasswordInput",docgenInfo:PasswordInput.__docgenInfo,path:"src/components/PasswordInput.js"}),__webpack_require__.d(__webpack_exports__,"withoutProps",(function(){return _2_PasswordInput_stories_withoutProps}));__webpack_exports__.default={title:"PasswordInput"};var _2_PasswordInput_stories_withoutProps=function withoutProps(){return react_default.a.createElement(components_PasswordInput,null)};_2_PasswordInput_stories_withoutProps.__docgenInfo={description:"",methods:[],displayName:"withoutProps"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-PasswordInput.stories.js"]={name:"withoutProps",docgenInfo:_2_PasswordInput_stories_withoutProps.__docgenInfo,path:"src/stories/2-PasswordInput.stories.js"})},630:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(64),styled_components_browser_esm=__webpack_require__(65),prop_types=__webpack_require__(86),prop_types_default=__webpack_require__.n(prop_types);function _templateObject(){var data=Object(taggedTemplateLiteral.a)(["\n  width: fit-content;\n  background-color: ",";\n  padding: 3px 11px;\n  border-radius: 5px;\n  color: ",";\n  font-size: 16px;\n  border: ",";\n"]);return _templateObject=function _templateObject(){return data},data}var Badge=styled_components_browser_esm.a.div(_templateObject(),(function(props){return props.m||(props.active?"#547FB3":"white")}),(function(props){return props.active?"white":"#547FB3"}),(function(props){return props.active?"":"solid #547FB3 1px"}));function NormalBadge(_ref){var _ref$a=_ref.a,a=void 0===_ref$a||_ref$a,backgroundColor=_ref.backgroundColor,children=_ref.children;return react_default.a.createElement(Badge,{active:a,m:backgroundColor,children:!0},children)}Badge.propTypes={active:prop_types_default.a.bool},NormalBadge.__docgenInfo={description:"",methods:[],displayName:"NormalBadge"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Badge.js"]={name:"NormalBadge",docgenInfo:NormalBadge.__docgenInfo,path:"src/components/Badge.js"}),__webpack_require__.d(__webpack_exports__,"active",(function(){return _4_Badge_stories_active})),__webpack_require__.d(__webpack_exports__,"inactive",(function(){return _4_Badge_stories_inactive})),__webpack_require__.d(__webpack_exports__,"redBadge",(function(){return _4_Badge_stories_redBadge}));__webpack_exports__.default={title:"Badge"};var _4_Badge_stories_active=function active(){return react_default.a.createElement(NormalBadge,null,"Türkisch")},_4_Badge_stories_inactive=function inactive(){return react_default.a.createElement(NormalBadge,{a:!1},"Türkisch")},_4_Badge_stories_redBadge=function redBadge(){return react_default.a.createElement(NormalBadge,{backgroundColor:"#FE6F61"},"Asiatisch")};_4_Badge_stories_active.__docgenInfo={description:"",methods:[],displayName:"active"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/4-Badge.stories.js"]={name:"active",docgenInfo:_4_Badge_stories_active.__docgenInfo,path:"src/stories/4-Badge.stories.js"}),_4_Badge_stories_inactive.__docgenInfo={description:"",methods:[],displayName:"inactive"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/4-Badge.stories.js"]={name:"inactive",docgenInfo:_4_Badge_stories_inactive.__docgenInfo,path:"src/stories/4-Badge.stories.js"}),_4_Badge_stories_redBadge.__docgenInfo={description:"",methods:[],displayName:"redBadge"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/4-Badge.stories.js"]={name:"redBadge",docgenInfo:_4_Badge_stories_redBadge.__docgenInfo,path:"src/stories/4-Badge.stories.js"})}},[[286,1,2]]]);
//# sourceMappingURL=main.7e8c7b463b44ba6a27a2.bundle.js.map