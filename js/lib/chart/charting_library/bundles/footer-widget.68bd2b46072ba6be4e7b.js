(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[7707,959,6437],{259142:function(e,t){var n,r,o;r=[t],n=function(e){"use strict";function t(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}Object.defineProperty(e,"__esModule",{value:!0});var n=!1;if("undefined"!=typeof window){var r={get passive(){n=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var o="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&/iP(ad|hone|od)/.test(window.navigator.platform),i=[],a=!1,s=-1,l=void 0,u=void 0,c=function(e){return i.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},d=function(e){var t=e||window.event;return!!c(t.target)||1<t.touches.length||(t.preventDefault&&t.preventDefault(),!1)},f=function(){setTimeout((function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==l&&(document.body.style.overflow=l,l=void 0)}))};e.disableBodyScroll=function(e,r){if(o){if(!e)return void console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");if(e&&!i.some((function(t){return t.targetElement===e}))){var f={targetElement:e,options:r||{}};i=[].concat(t(i),[f]),e.ontouchstart=function(e){1===e.targetTouches.length&&(s=e.targetTouches[0].clientY)},e.ontouchmove=function(t){var n,r,o,i;1===t.targetTouches.length&&(r=e,i=(n=t).targetTouches[0].clientY-s,!c(n.target)&&(r&&0===r.scrollTop&&0<i||(o=r)&&o.scrollHeight-o.scrollTop<=o.clientHeight&&i<0?d(n):n.stopPropagation()))},a||(document.addEventListener("touchmove",d,n?{passive:!1}:void 0),a=!0)}}else{p=r,setTimeout((function(){if(void 0===u){var e=!!p&&!0===p.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;e&&0<t&&(u=document.body.style.paddingRight,document.body.style.paddingRight=t+"px")}void 0===l&&(l=document.body.style.overflow,document.body.style.overflow="hidden")}));var m={targetElement:e,options:r||{}};i=[].concat(t(i),[m])}var p},e.clearAllBodyScrollLocks=function(){o?(i.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),a&&(document.removeEventListener("touchmove",d,n?{passive:!1}:void 0),a=!1),i=[],s=-1):(f(),i=[])},e.enableBodyScroll=function(e){if(o){if(!e)return void console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");e.ontouchstart=null,e.ontouchmove=null,i=i.filter((function(t){return t.targetElement!==e})),a&&0===i.length&&(document.removeEventListener("touchmove",d,n?{passive:!1}:void 0),a=!1)}else 1===i.length&&i[0].targetElement===e?(f(),i=[]):i=i.filter((function(t){return t.targetElement!==e}))}},void 0===(o="function"==typeof n?n.apply(t,r):n)||(e.exports=o)},718736:(e,t,n)=>{"use strict";n.d(t,{useFunctionalRefObject:()=>i});var r=n(50959),o=n(855393);function i(e){const t=(0,r.useMemo)((()=>function(e){const t=n=>{e(n),t.current=n};return t.current=null,t
}((e=>{s.current(e)}))),[]),n=(0,r.useRef)(null),i=t=>{if(null===t)return a(n.current,t),void(n.current=null);n.current!==e&&(n.current=e,a(n.current,t))},s=(0,r.useRef)(i);return s.current=i,(0,o.useIsomorphicLayoutEffect)((()=>{if(null!==t.current)return s.current(t.current),()=>s.current(null)}),[e]),t}function a(e,t){null!==e&&("function"==typeof e?e(t):e.current=t)}},855393:(e,t,n)=>{"use strict";n.d(t,{useIsomorphicLayoutEffect:()=>o});var r=n(50959);function o(e,t){("undefined"==typeof window?r.useEffect:r.useLayoutEffect)(e,t)}},72571:(e,t,n)=>{"use strict";n.d(t,{Icon:()=>o});var r=n(50959);const o=r.forwardRef(((e,t)=>{const{icon:n="",...o}=e;return r.createElement("span",{...o,ref:t,dangerouslySetInnerHTML:{__html:n}})}))},111706:(e,t,n)=>{"use strict";function r(e){return 0===e.detail}n.d(t,{isKeyboardClick:()=>r})},269842:(e,t,n)=>{"use strict";function r(...e){return t=>{for(const n of e)void 0!==n&&n(t)}}n.d(t,{createSafeMulticastEventHandler:()=>r})},865266:(e,t,n)=>{"use strict";n.d(t,{useRovingTabindexElement:()=>a});var r=n(50959),o=n(718736),i=n(892932);function a(e,t=[]){const[n,a]=(0,r.useState)(!1),s=(0,o.useFunctionalRefObject)(e);return(0,r.useLayoutEffect)((()=>{if(!i.PLATFORM_ACCESSIBILITY_ENABLED)return;const e=s.current;if(null===e)return;const t=e=>{switch(e.type){case"roving-tabindex:main-element":a(!0);break;case"roving-tabindex:secondary-element":a(!1)}};return e.addEventListener("roving-tabindex:main-element",t),e.addEventListener("roving-tabindex:secondary-element",t),()=>{e.removeEventListener("roving-tabindex:main-element",t),e.removeEventListener("roving-tabindex:secondary-element",t)}}),t),[s,i.PLATFORM_ACCESSIBILITY_ENABLED?n?0:-1:void 0]}},695257:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),m=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,v={};function b(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||p}function g(){}function _(e,t,n){this.props=e,this.context=t,this.refs=v,this.updater=n||p}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=b.prototype;var E=_.prototype=new g;E.constructor=_,h(E,b.prototype),E.isPureReactComponent=!0;var y=Array.isArray,w=Object.prototype.hasOwnProperty,M={current:null},T={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,i={},a=null,s=null
;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,o)&&!T.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(1===l)i.children=r;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(o in l=e.defaultProps)void 0===i[o]&&(i[o]=l[o]);return{$$typeof:n,type:e,key:a,ref:s,props:i,_owner:M.current}}function k(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var C=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===i?"."+A(l,0):i,y(a)?(o="",null!=e&&(o=e.replace(C,"$&/")+"/"),I(a,t,o,"",(function(e){return e}))):null!=a&&(k(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(C,"$&/")+"/")+e)),t.push(a)),1;if(l=0,i=""===i?".":i+":",y(e))for(var u=0;u<e.length;u++){var c=i+A(s=e[u],u);l+=I(s,t,o,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(s=e.next()).done;)l+=I(s=s.value,t,o,c=i+A(s,u++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function L(e,t,n){if(null==e)return e;var r=[],o=0;return I(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function B(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var x={current:null},z={transition:null},N={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:z,ReactCurrentOwner:M};t.Children={map:L,forEach:function(e,t,n){L(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return L(e,(function(){t++})),t},toArray:function(e){return L(e,(function(e){return e}))||[]},only:function(e){if(!k(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=b,t.Fragment=o,t.Profiler=a,t.PureComponent=_,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=h({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=M.current),void 0!==t.key&&(i=""+t.key),
e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)w.call(t,u)&&!T.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:n,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=k,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:B}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=z.transition;z.transition={};try{e()}finally{z.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return x.current.useCallback(e,t)},t.useContext=function(e){return x.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return x.current.useDeferredValue(e)},t.useEffect=function(e,t){return x.current.useEffect(e,t)},t.useId=function(){return x.current.useId()},t.useImperativeHandle=function(e,t,n){return x.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return x.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return x.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return x.current.useMemo(e,t)},t.useReducer=function(e,t,n){return x.current.useReducer(e,t,n)},t.useRef=function(e){return x.current.useRef(e)},t.useState=function(e){return x.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return x.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return x.current.useTransition()},t.version="18.2.0"},50959:(e,t,n)=>{"use strict";e.exports=n(695257)},502869:e=>{e.exports={button:"button-xNqEcuN2"}},311138:e=>{e.exports={tab:"tab-jJ_D7IlA",accessible:"accessible-jJ_D7IlA"}},560881:e=>{e.exports={tabbar:"tabbar-n3UmcVi3",tabs:"tabs-n3UmcVi3",fakeTabs:"fakeTabs-n3UmcVi3",tab:"tab-n3UmcVi3",menuButtonWrap:"menuButtonWrap-n3UmcVi3",hover:"hover-n3UmcVi3",active:"active-n3UmcVi3",title:"title-n3UmcVi3",titleText:"titleText-n3UmcVi3",menuButton:"menuButton-n3UmcVi3"}},265577:e=>{e.exports={"css-value-footer-widget-horizontal-margin":"4px"}},163787:e=>{e.exports={footerPanel:"footerPanel-dA6R3Y1X",buttons:"buttons-dA6R3Y1X",hidden:"hidden-dA6R3Y1X",button:"button-dA6R3Y1X",firstButton:"firstButton-dA6R3Y1X",overlap:"overlap-dA6R3Y1X"}},179807:(e,t,n)=>{"use strict";n.d(t,{focusFirstMenuItem:()=>u,handleAccessibleMenuFocus:()=>s,handleAccessibleMenuKeyDown:()=>l,queryMenuElements:()=>f});var r=n(892932),o=n(27164),i=n(180185);const a=[37,39,38,40];function s(e,t){
e.target&&r.PLATFORM_ACCESSIBILITY_ENABLED&&e.relatedTarget===t.current&&u(e.target)}function l(e){if(!r.PLATFORM_ACCESSIBILITY_ENABLED)return;if(e.defaultPrevented)return;const t=(0,i.hashFromEvent)(e);if(!a.includes(t))return;const n=document.activeElement;if(!(document.activeElement instanceof HTMLElement))return;const s=f(e.currentTarget).sort(r.navigationOrderComparator);if(0===s.length)return;const l=document.activeElement.closest('[data-role="menuitem"]');if(!(l instanceof HTMLElement))return;const u=s.indexOf(l);if(-1===u)return;const p=m(l),h=p.indexOf(document.activeElement),v=-1!==h,b=e=>{n&&(0,o.becomeSecondaryElement)(n),(0,o.becomeMainElement)(e),e.focus()};switch(t){case 37:if(!p.length)return;e.preventDefault(),b(0===h?s[u]:v?c(p,h,-1):p[p.length-1]);break;case 39:if(!p.length)return;e.preventDefault(),h===p.length-1?b(s[u]):b(v?c(p,h,1):p[0]);break;case 38:{e.preventDefault();const t=c(s,u,-1);if(v){const e=d(t,h);b(e||t);break}b(t);break}case 40:{e.preventDefault();const t=c(s,u,1);if(v){const e=d(t,h);b(e||t);break}b(t)}}}function u(e){const[t]=f(e);t&&((0,o.becomeMainElement)(t),t.focus())}function c(e,t,n){return e[(t+e.length+n)%e.length]}function d(e,t){const n=m(e);return n.length?n[(t+n.length)%n.length]:null}function f(e){return Array.from(e.querySelectorAll('[data-role="menuitem"]:not([disabled], [aria-disabled])')).filter((0,r.createScopedVisibleElementFilter)(e))}function m(e){return Array.from(e.querySelectorAll("[tabindex]:not([disabled], [aria-disabled])")).filter((0,r.createScopedVisibleElementFilter)(e))}},27164:(e,t,n)=>{"use strict";function r(e){e.dispatchEvent(new CustomEvent("roving-tabindex:main-element"))}function o(e){e.dispatchEvent(new CustomEvent("roving-tabindex:secondary-element"))}n.d(t,{becomeMainElement:()=>r,becomeSecondaryElement:()=>o})},869194:(e,t,n)=>{"use strict";n.d(t,{useMouseClickAutoBlur:()=>a});var r=n(50959),o=n(111706),i=n(892932);function a(e,t=!0){(0,r.useEffect)((()=>{if(!i.PLATFORM_ACCESSIBILITY_ENABLED||!t)return;const n=t=>{const n=e.current;null!==n&&document.activeElement instanceof HTMLElement&&((0,o.isKeyboardClick)(t)||n.contains(document.activeElement)&&"INPUT"!==document.activeElement.tagName&&document.activeElement.blur())};return window.addEventListener("click",n,!0),()=>window.removeEventListener("click",n,!0)}),[t])}},395907:(e,t,n)=>{"use strict";n.d(t,{ToolWidgetIconButton:()=>s});var r=n(50959),o=n(497754),i=n(747633),a=n(502869);const s=r.forwardRef((function(e,t){const{className:n,id:s,...l}=e;return r.createElement(i.ToolWidgetButton,{"data-name":s,...l,ref:t,className:o(n,a.button)})}))},332913:(e,t,n)=>{"use strict";n.d(t,{ToolbarIconButton:()=>s});var r=n(50959),o=n(865266),i=n(892932),a=n(395907);const s=(0,r.forwardRef)((function(e,t){const{tooltip:n,...s}=e,[l,u]=(0,o.useRovingTabindexElement)(t);return r.createElement(a.ToolWidgetIconButton,{"aria-label":i.PLATFORM_ACCESSIBILITY_ENABLED?n:void 0,...s,tag:i.PLATFORM_ACCESSIBILITY_ENABLED?"button":"div",ref:l,tabIndex:u,"data-tooltip":n})}))},53431:(e,t,n)=>{"use strict"
;n.d(t,{ToolbarMenuButton:()=>c});var r=n(50959),o=n(718736),i=n(518799),a=n(865266),s=n(892932),l=n(869194),u=n(179807);const c=(0,r.forwardRef)((function(e,t){const{tooltip:n,menuReference:c=null,...d}=e,[f,m]=(0,a.useRovingTabindexElement)(null),p=(0,o.useFunctionalRefObject)(c);return(0,l.useMouseClickAutoBlur)(p),r.createElement(i.ToolWidgetMenu,{"aria-label":s.PLATFORM_ACCESSIBILITY_ENABLED?n:void 0,...d,ref:t,tag:s.PLATFORM_ACCESSIBILITY_ENABLED?"button":"div",reference:f,tabIndex:m,"data-tooltip":n,menuReference:p,onMenuKeyDown:u.handleAccessibleMenuKeyDown,onMenuFocus:e=>(0,u.handleAccessibleMenuFocus)(e,f)})}))},622614:(e,t,n)=>{"use strict";n.d(t,{Toolbar:()=>d});var r=n(50959),o=n(650151),i=n(269842),a=n(930202),s=n(892932),l=n(27164),u=n(718736),c=n(869194);const d=(0,r.forwardRef)((function(e,t){const{onKeyDown:n,orientation:d,blurOnEscKeydown:f=!0,blurOnClick:m=!0,...p}=e,h=s.PLATFORM_ACCESSIBILITY_ENABLED?{role:"toolbar","aria-orientation":d}:{},v=(0,u.useFunctionalRefObject)(t);return(0,r.useLayoutEffect)((()=>{if(!s.PLATFORM_ACCESSIBILITY_ENABLED)return;const e=(0,o.ensureNotNull)(v.current),t=()=>{const t=(0,s.queryTabbableElements)(e).sort(s.navigationOrderComparator);if(0===t.length){const[t]=(0,s.queryFocusableElements)(e).sort(s.navigationOrderComparator);if(void 0===t)return;(0,l.becomeMainElement)(t)}if(t.length>1){const[,...e]=t;for(const t of e)(0,l.becomeSecondaryElement)(t)}};return window.addEventListener("keyboard-navigation-activation",t),()=>window.removeEventListener("keyboard-navigation-activation",t)}),[]),(0,c.useMouseClickAutoBlur)(v,m),r.createElement("div",{...p,...h,ref:v,onKeyDown:(0,i.createSafeMulticastEventHandler)((function(e){if(!s.PLATFORM_ACCESSIBILITY_ENABLED)return;if(e.defaultPrevented)return;if(!(document.activeElement instanceof HTMLElement))return;const t=(0,a.hashFromEvent)(e);if(27===t)return e.preventDefault(),void document.activeElement.blur();if("vertical"!==d&&37!==t&&39!==t)return;if("vertical"===d&&38!==t&&40!==t)return;const n=e.currentTarget,r=(0,s.queryFocusableElements)(n).sort(s.navigationOrderComparator);if(0===r.length)return;const o=r.indexOf(document.activeElement);if(-1===o)return;e.preventDefault();const i=()=>{const e=(o+r.length-1)%r.length;(0,l.becomeSecondaryElement)(r[o]),(0,l.becomeMainElement)(r[e]),r[e].focus()},u=()=>{const e=(o+r.length+1)%r.length;(0,l.becomeSecondaryElement)(r[o]),(0,l.becomeMainElement)(r[e]),r[e].focus()};switch(t){case 37:"vertical"!==d&&i();break;case 39:"vertical"!==d&&u();break;case 38:"vertical"===d&&i();break;case 40:"vertical"===d&&u()}}),n)})}))},17212:(e,t,n)=>{"use strict";n.d(t,{FooterToolbarTab:()=>u});var r=n(50959),o=n(497754),i=n.n(o),a=n(865266),s=n(892932),l=n(311138);function u(e){const{tooltip:t,children:n,className:o,...u}=e,[c,d]=(0,a.useRovingTabindexElement)(null),f=s.PLATFORM_ACCESSIBILITY_ENABLED?"button":"div";return r.createElement(f,{"aria-label":s.PLATFORM_ACCESSIBILITY_ENABLED?t:void 0,...u,ref:c,tabIndex:d,type:s.PLATFORM_ACCESSIBILITY_ENABLED?"button":void 0,"data-tooltip":t,
className:i()(l.tab,s.PLATFORM_ACCESSIBILITY_ENABLED&&l.accessible,o)},n)}},754738:(e,t,n)=>{"use strict";n.r(t),n.d(t,{FooterWidgetRenderer:()=>z});var r=n(50959),o=n(500962),i=n(497754),a=n(53431),s=n(192063),l=n(72571),u=n(650151),c=n(32133),d=n(17212),f=n(560881);class m extends r.PureComponent{constructor(){super(...arguments),this._ref=e=>{const{name:t,reference:n}=this.props;n&&n(t,e)},this._onToggle=()=>{this._toggleWidget()},this._activationCallback=()=>{this._toggleWidget(!0)}}render(){const{name:e,isActive:t,title:n,customTitleComponent:o,buttonOpenTooltip:a,buttonCloseTooltip:s,dataName:l,className:u}=this.props,c=t?s:a,m=o;return r.createElement("div",{className:i(f.tab,m&&f.customTab,t&&f.active,u),ref:this._ref},m?r.createElement(m,{onClick:this._onToggle,activationCallback:this._activationCallback,isActive:t,dataName:l,tooltip:c}):r.createElement(d.FooterToolbarTab,{onClick:this._onToggle,className:i(f.title,c&&"apply-common-tooltip"),"data-name":this.props.dataName,"data-active":t,"aria-pressed":t,tooltip:c},r.createElement("span",{className:f.titleText},n||e)))}_toggleWidget(e){const{name:t,onToggle:n,_gaEvent:r}=this.props;r&&(0,c.trackEvent)("Platform widgets",r),n(t,e)}}var p=n(844996);class h extends r.PureComponent{constructor(e){super(e),this._fakeTabs={},this._fakeMenuButton=null,this._resizeObserver=null,this._refFakeTabs=(e,t)=>{var n;this._fakeTabs[e]=t,t&&(null===(n=this._resizeObserver)||void 0===n||n.observe(t))},this._handleMeasure=()=>{this._resize(this.props.width)},this._refFakeMenuButton=e=>{this._fakeMenuButton=e},this._resize=e=>{if(!e)return;const t=(0,u.ensureNotNull)(this._fakeMenuButton).offsetWidth,{activeWidgetName:n}=this.props;let r=[],o=[],i=0;"string"==typeof n&&(o=[n],i=(0,u.ensureNotNull)(this._fakeTabs[n]).offsetWidth);const a=this.props.widgets.map((e=>e.name)),s=a.filter((e=>e!==n));let l=!1;s.forEach((n=>{if(!this._fakeTabs[n])return;const s=(0,u.ensureNotNull)(this._fakeTabs[n]).offsetWidth,c=a.length-o.length==1?e:e-t;!l&&i+s<c?(i+=s,o.push(n)):(l=!0,r.push(n))})),0===o.length&&(o=[a[0]],r=r.filter((e=>e!==a[0]))),o=a.filter((e=>o.includes(e))),this.setState({visibleTabs:o,hiddenTabs:r})},this._onToggle=(e,t)=>{void 0!==e&&(this._trackButtonClick(e),(0,o.flushSync)((()=>this.props.setActiveWidget(e,t))),this._resize(this.props.width))},this._onMenuItemClick=e=>{this._onToggle(e,!0)},this._handleMenuClick=()=>{this._trackButtonClick("menu"),this._toggleMenu()},this._toggleMenu=()=>{this.setState((e=>({isMenuOpened:!e.isMenuOpened})))},this._trackButtonClick=e=>{0},this._resizeObserver=new ResizeObserver(this._handleMeasure),this.state={visibleTabs:[],hiddenTabs:[],isMenuOpened:!1}}componentDidMount(){this._resize(this.props.width)}componentDidUpdate(e){const{widgets:t,activeWidgetName:n,width:r}=this.props;e.widgets===t&&e.activeWidgetName===n&&e.width===r||this._resize(r)}componentWillUnmount(){var e;null===(e=this._resizeObserver)||void 0===e||e.disconnect()}getMinWidth(){const e=this.props.activeWidgetName||this.props.widgets[0].name;return(0,
u.ensureNotNull)(this._fakeTabs[e]).offsetWidth+(0,u.ensureNotNull)(this._fakeMenuButton).offsetWidth}render(){const{visibleTabs:e}=this.state,{widgets:t}=this.props,n=t.filter((t=>e.includes(t.name)));return r.createElement("div",{className:f.tabbar},r.createElement("div",{className:f.tabs},this._renderTabs(n,!1)),r.createElement("div",{className:i(f.tabs,f.fakeTabs)},this._renderTabs(t,!0)))}_renderTabs(e,t){const{activeWidgetName:n,widgets:o}=this.props,{hiddenTabs:u,isMenuOpened:c}=this.state,d=e.map((e=>r.createElement(m,{...e,key:e.name,isActive:n===e.name,onToggle:this._onToggle,dataName:t?void 0:e.name,reference:t?this._refFakeTabs:void 0,className:"screener"===e.name&&f.screenerTab})));return(t||u.length>0)&&d.push(r.createElement("div",{key:"menu-button",className:f.menuButtonWrap,ref:t?this._refFakeMenuButton:void 0},r.createElement(a.ToolbarMenuButton,{className:i(f.menuButton,c&&f.active),onClick:this._handleMenuClick,content:r.createElement(l.Icon,{icon:p}),arrow:!1},o.filter((e=>u.includes(e.name))).map((e=>r.createElement(s.PopupMenuItem,{key:e.name,onClick:this._onMenuItemClick,onClickArg:e.name,label:e.title||e.name})))))),d}}var v=n(199663),b=n(265577);const g=parseInt(b["css-value-footer-widget-horizontal-margin"]);var _=n(509806),E=n(332913),y=n(544460),w=n(19182),M=n(978592),T=n(587257),S=n(163787);const k=_.t(null,void 0,n(368144)),C=_.t(null,void 0,n(670151)),A=_.t(null,void 0,n(402949)),I=_.t(null,void 0,n(298205));class L extends r.PureComponent{constructor(e){super(e),this._updateMode=()=>{this.setState({mode:this.props.mode.value()})},this.state={mode:e.mode.value()}}componentDidMount(){this.props.mode.subscribe(this._updateMode)}componentWillUnmount(){this.props.mode.unsubscribe(this._updateMode)}render(){const{toggleMinimize:e,toggleMaximize:t}=this.props,{mode:n}=this.state,o="minimized"===n,a="maximized"===n;return r.createElement(r.Fragment,null,r.createElement(E.ToolbarIconButton,{className:i(S.button,S.firstButton),tooltip:o?k:C,onClick:e,"data-name":"toggle-visibility-button","data-active":o,icon:r.createElement(l.Icon,{icon:o?w:y})}),r.createElement(E.ToolbarIconButton,{className:i(S.button),tooltip:a?I:A,onClick:t,"data-name":"toggle-maximize-button","data-active":a,icon:r.createElement(l.Icon,{icon:a?T:M})}))}}var B=n(622614);class x extends r.PureComponent{constructor(e){super(e),this._buttons=null,this._refButtons=e=>{this._buttons=e},this._handleMode=e=>{this.setState({isOpened:"minimized"!==e})},this._handleOverlap=e=>{this.setState({isOverlap:e})},this._handleActiveWidgetName=e=>{const{resizerBridge:t}=this.props;this.setState({activeWidgetName:e},(()=>this._resize(t.width.value())))},this._setActiveWidget=(e,t,n)=>{this.props.bottomWidgetBar.toggleWidget(e,t,n)},this._resize=e=>{e&&(e-=g+g,this.setState({width:e}))};const{bottomWidgetBar:t,resizerBridge:n}=this.props;this.state={isOpened:"minimized"!==t.mode().value(),isOverlap:t.isOverlap().value(),activeWidgetName:t.activeWidget().value(),width:n.width.value()}}componentDidMount(){
const{bottomWidgetBar:e,resizerBridge:t}=this.props;e.mode().subscribe(this._handleMode),e.isOverlap().subscribe(this._handleOverlap),e.activeWidget().subscribe(this._handleActiveWidgetName,{callWithLast:!0}),t.width.subscribe(this._resize),this._resize(t.width.value())}componentWillUnmount(){const{bottomWidgetBar:e,resizerBridge:t}=this.props;e.mode().unsubscribe(this._handleMode),e.isOverlap().unsubscribe(this._handleOverlap),e.activeWidget().unsubscribe(this._handleActiveWidgetName),t.width.unsubscribe(this._resize)}render(){const{bottomWidgetBar:e}=this.props,{isOverlap:t,activeWidgetName:n,width:o}=this.state,a=this._buttons?this._buttons.offsetWidth:0,s=e.enabledWidgets(),l="minimized"!==e.mode().value()&&n;return r.createElement(B.Toolbar,{id:"footer-chart-panel",className:i(S.footerPanel,t&&S.overlap),onContextMenu:v.preventDefault},r.createElement(h,{widgets:s,activeWidgetName:l,setActiveWidget:this._setActiveWidget,settingsActiveWidget:n,close:e.close,width:o-a}),r.createElement("div",{className:S.buttons,ref:this._refButtons},r.createElement(L,{toggleMinimize:e.toggleMinimize,toggleMaximize:e.toggleMaximize,mode:e.mode()})))}}class z{constructor(e,t,n){this._component=null,this._handleRef=e=>this._component=e,this._container=e;const i=r.createElement(x,{resizerBridge:t,bottomWidgetBar:n,ref:this._handleRef});o.render(i,this._container)}getComponent(){return(0,u.ensureNotNull)(this._component)}destroy(){o.unmountComponentAtNode(this._container)}}},978592:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 6H8.68A2.68 2.68 0 0 0 6 8.68V11h1V8.68C7 7.75 7.75 7 8.68 7h10.64c.93 0 1.68.75 1.68 1.68V11h1V8.68C22 7.2 20.8 6 19.32 6ZM7 19.32c0 .93.75 1.68 1.68 1.68h10.64c.93 0 1.68-.75 1.68-1.68V17h1v2.32C22 20.8 20.8 22 19.32 22H8.68A2.68 2.68 0 0 1 6 19.32V17h1v2.32Z"/></svg>'},587257:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28"><path fill="currentColor" d="M19.32 17H8.68A2.68 2.68 0 0 0 6 19.68V22h1v-2.32c0-.93.75-1.68 1.68-1.68h10.64c.93 0 1.68.75 1.68 1.68V22h1v-2.32C22 18.2 20.8 17 19.32 17ZM7 8.32C7 9.25 7.75 10 8.68 10h10.64c.93 0 1.68-.75 1.68-1.68V6h1v2.32C22 9.8 20.8 11 19.32 11H8.68A2.68 2.68 0 0 1 6 8.32V6h1v2.32Z"/></svg>'},544460:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" d="M7 20h14v1H7z"/></svg>'},19182:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="19" height="12" fill="none"><path stroke="currentColor" d="M1 8l8.5-6.5L18 8"/></svg>'},844996:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none"><path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M7.5 13a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM12 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm9.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM19 14.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"/></svg>'},
670151:e=>{e.exports={ar:["إخفاء اللوحة"],ca_ES:"Hide panel",cs:"Hide panel",de:["Panel verbergen"],el:"Hide panel",en:"Hide panel",es:["Ocultar el panel"],fa:"Hide panel",fr:["Masquer le panneau"],he_IL:["הסתר פאנל"],hu_HU:"Hide panel",id_ID:["Sembunyikan panel"],it:["Nascondi pannello"],ja:["パネルを非表示"],ko:["패널 숨기기"],ms_MY:["Sembunyi panel"],nl_NL:"Hide panel",pl:["Ukryj panel"],pt:["Ocultar painel"],ro:"Hide panel",ru:["Скрыть панель"],sv:["Dölj panel"],th:["ซ่อนพาเนล"],tr:["Paneli gizle"],vi:["Ẩn bảng điều khiển"],zh:["隐藏面板"],zh_TW:["隱藏面板"]}},402949:e=>{e.exports={ar:["تكبير اللوحة"],ca_ES:"Maximize panel",cs:"Maximize panel",de:["Panel maximieren"],el:"Maximize panel",en:"Maximize panel",es:["Maximizar el panel"],fa:"Maximize panel",fr:["Maximiser le panneau"],he_IL:["הגדל את הפאנל"],hu_HU:"Maximize panel",id_ID:["Perbesar panel"],it:["Massimizza pannello"],ja:["パネルを最大化"],ko:["패널 최대화"],ms_MY:["Maksimumkan panel"],nl_NL:"Maximize panel",pl:["Maksymalizuj panel"],pt:["Maximizar painel"],ro:"Maximize panel",ru:["Развернуть панель"],sv:["Maximera panel"],th:["พาเนลสูงสุด"],tr:["Paneli büyüt"],vi:["Phóng to bảng điều khiển"],zh:["最大化面板"],zh_TW:["最大化面板"]}},298205:e=>{e.exports={ar:["تصغير اللوحة"],ca_ES:"Minimize panel",cs:"Minimize panel",de:["Panel minimieren"],el:"Minimize panel",en:"Minimize panel",es:["Minimizar el panel"],fa:"Minimize panel",fr:["Minimiser le panneau"],he_IL:["צמצם את הפאנל"],hu_HU:"Minimize panel",id_ID:["Perkecil panel"],it:["Minimizza pannello"],ja:["パネルを最小化"],ko:["패널 최소화"],ms_MY:["Minimumkan panel"],nl_NL:"Minimize panel",pl:["Minimalizuj panel"],pt:["Minimizar painel"],ro:"Minimize panel",ru:["Свернуть панель"],sv:["Minimera panel"],th:["พาเนลต่ำสุด"],tr:["Paneli simge durumuna küçült"],vi:["Thu nhỏ bảng điều khiển"],zh:["最小化面板"],zh_TW:["最小化面板"]}},368144:e=>{e.exports={ar:["عرض اللوحة"],ca_ES:"Show panel",cs:"Show panel",de:["Panel anzeigen"],el:"Show panel",en:"Show panel",es:["Mostrar el panel"],fa:"Show panel",fr:["Afficher le panneau"],he_IL:["הצג פאנל"],hu_HU:"Show panel",id_ID:["Tampilkan panel"],it:["Mostra pannello"],ja:["パネルを表示"],ko:["패널 보이기"],ms_MY:["Tunjuk panel"],nl_NL:"Show panel",pl:["Pokaż panel"],pt:["Mostrar painel"],ro:"Show panel",ru:["Показать панель"],sv:["Visa panel"],th:["แสดงพาเนล"],tr:["Paneli göster"],vi:["Hiển thị bảng điều khiển"],zh:["显示面板"],zh_TW:["顯示面板"]}}}]);