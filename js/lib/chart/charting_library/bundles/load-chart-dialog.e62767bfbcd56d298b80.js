(self.webpackChunktradingview=self.webpackChunktradingview||[]).push([[5009],{846188:e=>{e.exports={container:"container-AhaeiE0y",list:"list-AhaeiE0y",overlayScrollWrap:"overlayScrollWrap-AhaeiE0y",scroll:"scroll-AhaeiE0y"}},712961:e=>{e.exports={container:"container-huGG8x61",title:"title-huGG8x61"}},140281:e=>{e.exports={container:"container-qm7Rg5MB",inputContainer:"inputContainer-qm7Rg5MB",withCancel:"withCancel-qm7Rg5MB",input:"input-qm7Rg5MB",icon:"icon-qm7Rg5MB",cancel:"cancel-qm7Rg5MB"}},982434:e=>{e.exports={scrollWrap:"scrollWrap-FaOvTD2r"}},977253:e=>{e.exports={wrap:"wrap-vSb6C0Bj","wrap--horizontal":"wrap--horizontal-vSb6C0Bj",bar:"bar-vSb6C0Bj",barInner:"barInner-vSb6C0Bj","barInner--horizontal":"barInner--horizontal-vSb6C0Bj","bar--horizontal":"bar--horizontal-vSb6C0Bj"}},464409:e=>{e.exports={container:"container-RZoAcQrm",labelWrap:"labelWrap-RZoAcQrm",icon:"icon-RZoAcQrm",text:"text-RZoAcQrm"}},633476:e=>{e.exports={sortButton:"sortButton-mMR_mxxG",icon:"icon-mMR_mxxG"}},275623:e=>{e.exports={highlighted:"highlighted-cwp8YRo6"}},231862:(e,t,n)=>{"use strict";n.d(t,{DialogSearch:()=>c});var a=n(50959),o=n(497754),r=n.n(o),i=n(509806),l=n(72571),s=n(969859),u=n(140281);function c(e){const{children:t,renderInput:o,onCancel:c,containerClassName:d,inputContainerClassName:h,iconClassName:g,...y}=e;return a.createElement("div",{className:r()(u.container,d)},a.createElement("div",{className:r()(u.inputContainer,h,c&&u.withCancel)},o||a.createElement(m,{...y})),t,a.createElement(l.Icon,{className:r()(u.icon,g),icon:s}),c&&a.createElement("div",{className:u.cancel,onClick:c},i.t(null,void 0,n(620036))))}function m(e){const{className:t,reference:n,value:o,onChange:i,onFocus:l,onBlur:s,onKeyDown:c,onSelect:m,placeholder:d,...h}=e;return a.createElement("input",{...h,ref:n,type:"text",className:r()(t,u.input),autoComplete:"off","data-role":"search",placeholder:d,value:o,onChange:i,onFocus:l,onBlur:s,onSelect:m,onKeyDown:c})}},73288:(e,t,n)=>{"use strict";n.d(t,{OverlayScrollContainer:()=>y});var a=n(50959),o=n(497754),r=n.n(o),i=n(710263),l=n(650151),s=n(44681);const u=n(977253),c={0:{isHorizontal:!1,isNegative:!1,sizePropName:"height",minSizePropName:"minHeight",startPointPropName:"top",currentMousePointPropName:"clientY",progressBarTransform:"translateY"},1:{isHorizontal:!0,isNegative:!1,sizePropName:"width",minSizePropName:"minWidth",startPointPropName:"left",currentMousePointPropName:"clientX",progressBarTransform:"translateX"},2:{isHorizontal:!0,isNegative:!0,sizePropName:"width",minSizePropName:"minWidth",startPointPropName:"right",currentMousePointPropName:"clientX",progressBarTransform:"translateX"}},m=40;function d(e){const{size:t,scrollSize:n,clientSize:o,scrollProgress:i,onScrollProgressChange:d,scrollMode:h,theme:g=u,onDragStart:y,onDragEnd:f,minBarSize:p=m}=e,v=(0,a.useRef)(null),_=(0,a.useRef)(null),[b,S]=(0,a.useState)(!1),w=(0,a.useRef)(0),{isHorizontal:C,isNegative:N,sizePropName:L,minSizePropName:D,startPointPropName:k,currentMousePointPropName:z,progressBarTransform:E}=c[h];(0,
a.useEffect)((()=>{const e=(0,l.ensureNotNull)(v.current).ownerDocument;return b?(y&&y(),e&&(e.addEventListener("mousemove",B),e.addEventListener("mouseup",H))):f&&f(),()=>{e&&(e.removeEventListener("mousemove",B),e.removeEventListener("mouseup",H))}}),[b]);const x=t/n||0,A=o*x||0,M=Math.max(A,p),I=(t-M)/(t-A),P=n-t,T=N?-P:0,Z=N?0:P,R=W((0,s.clamp)(i,T,Z))||0;return a.createElement("div",{ref:v,className:r()(g.wrap,C&&g["wrap--horizontal"]),style:{[L]:t},onMouseDown:function(e){if(e.isDefaultPrevented())return;e.preventDefault();const t=F(e.nativeEvent,(0,l.ensureNotNull)(v.current)),n=Math.sign(t),a=(0,l.ensureNotNull)(_.current).getBoundingClientRect();w.current=n*a[L]/2;let o=Math.abs(t)-Math.abs(w.current);const r=W(P);o<0?(o=0,w.current=t):o>r&&(o=r,w.current=t-n*r);d(j(n*o)),S(!0)}},a.createElement("div",{ref:_,className:r()(g.bar,C&&g["bar--horizontal"]),style:{[D]:p,[L]:M,transform:`${E}(${R}px)`},onMouseDown:function(e){e.preventDefault(),w.current=F(e.nativeEvent,(0,l.ensureNotNull)(_.current)),S(!0)}},a.createElement("div",{className:r()(g.barInner,C&&g["barInner--horizontal"])})));function B(e){const t=F(e,(0,l.ensureNotNull)(v.current))-w.current;d(j(t))}function H(){S(!1)}function F(e,t){const n=t.getBoundingClientRect()[k];return e[z]-n}function W(e){return e*x*I}function j(e){return e/x/I}}var h=n(921258),g=n(982434);function y(e){const{reference:t,className:n,containerHeight:r=0,containerWidth:l=0,contentHeight:s=0,contentWidth:u=0,scrollPosTop:c=0,scrollPosLeft:m=0,onVerticalChange:y,onHorizontalChange:f,visible:p}=e,[v,_]=(0,h.useHover)(),[b,S]=(0,a.useState)(!1),w=r<s,C=l<u,N=w&&C?8:0;return a.createElement("div",{..._,ref:t,className:o(n,g.scrollWrap),style:{visibility:p||v||b?"visible":"hidden"}},w&&a.createElement(d,{size:r-N,scrollSize:s-N,clientSize:r-N,scrollProgress:c,onScrollProgressChange:function(e){y&&y(e)},onDragStart:L,onDragEnd:D,scrollMode:0}),C&&a.createElement(d,{size:l-N,scrollSize:u-N,clientSize:l-N,scrollProgress:m,onScrollProgressChange:function(e){f&&f(e)},onDragStart:L,onDragEnd:D,scrollMode:(0,i.isRtl)()?2:1}));function L(){S(!0)}function D(){S(!1)}}},512991:(e,t,n)=>{"use strict";n.d(t,{createRegExpList:()=>r,getHighlightedChars:()=>i,rankedSearch:()=>o});var a=n(372605);function o(e){const{data:t,rules:n,queryString:o,isPreventedFromFiltering:r,primaryKey:i,secondaryKey:l=i,optionalPrimaryKey:s,tertiaryKey:u}=e;return t.map((e=>{const t=s&&e[s]?e[s]:e[i],r=e[l],c=u&&e[u];let m,d=0;return n.forEach((e=>{var n,i,l,s,u;const{re:h,fullMatch:g}=e;if(h.lastIndex=0,(0,a.isString)(t)&&t&&t.toLowerCase()===o.toLowerCase())return d=4,void(m=null===(n=t.match(g))||void 0===n?void 0:n.index);if((0,a.isString)(t)&&g.test(t))return d=3,void(m=null===(i=t.match(g))||void 0===i?void 0:i.index);if((0,a.isString)(r)&&g.test(r))return d=2,void(m=null===(l=r.match(g))||void 0===l?void 0:l.index);if((0,a.isString)(r)&&h.test(r))return d=2,void(m=null===(s=r.match(h))||void 0===s?void 0:s.index);if(Array.isArray(c))for(const e of c)if(g.test(e))return d=1,
void(m=null===(u=e.match(g))||void 0===u?void 0:u.index)})),{matchPriority:d,matchIndex:m,item:e}})).filter((e=>r||e.matchPriority)).sort(((e,t)=>{if(e.matchPriority<t.matchPriority)return 1;if(e.matchPriority>t.matchPriority)return-1;if(e.matchPriority===t.matchPriority){if(void 0===e.matchIndex||void 0===t.matchIndex)return 0;if(e.matchIndex>t.matchIndex)return 1;if(e.matchIndex<t.matchIndex)return-1}return 0})).map((({item:e})=>e))}function r(e,t){const n=[],a=e.toLowerCase(),o=e.split("").map(((e,t)=>`(${0!==t?`[/\\s-]${l(e)}`:l(e)})`)).join("(.*?)")+"(.*)";return n.push({fullMatch:new RegExp(`(${l(e)})`,"i"),re:new RegExp(`^${o}`,"i"),reserveRe:new RegExp(o,"i"),fuzzyHighlight:!0}),t&&t.hasOwnProperty(a)&&n.push({fullMatch:t[a],re:t[a],fuzzyHighlight:!1}),n}function i(e,t,n){const a=[];return e&&n?(n.forEach((e=>{const{fullMatch:n,re:o,reserveRe:r}=e;n.lastIndex=0,o.lastIndex=0;const i=n.exec(t),l=i||o.exec(t)||r&&r.exec(t);if(e.fuzzyHighlight=!i,l)if(e.fuzzyHighlight){let e=l.index;for(let t=1;t<l.length;t++){const n=l[t],o=l[t].length;if(t%2){const t=n.startsWith(" ")||n.startsWith("/")||n.startsWith("-");a[t?e+1:e]=!0}e+=o}}else for(let e=0;e<l[0].length;e++)a[l.index+e]=!0})),a):a}function l(e){return e.replace(/[!-/[-^{-}?]/g,"\\$&")}},260598:(e,t,n)=>{"use strict";n.d(t,{HighlightedText:()=>l});var a=n(50959),o=n(497754),r=n(512991),i=n(275623);function l(e){const{queryString:t,rules:n,text:l,className:s}=e,u=(0,a.useMemo)((()=>(0,r.getHighlightedChars)(t,l,n)),[t,n,l]);return a.createElement(a.Fragment,null,u.length?l.split("").map(((e,t)=>a.createElement(a.Fragment,{key:t},u[t]?a.createElement("span",{className:o(i.highlighted,s)},e):a.createElement("span",null,e)))):l)}},330344:(e,t,n)=>{"use strict";n.d(t,{useDimensions:()=>r});var a=n(50959),o=n(664332);function r(){const[e,t]=(0,a.useState)(null),n=(0,a.useCallback)((([n])=>{const a=n.target.getBoundingClientRect();a.width===(null==e?void 0:e.width)&&a.height===e.height||t(a)}),[e]);return[(0,o.useResizeObserver)(n),e]}},139043:(e,t,n)=>{"use strict";n.d(t,{useOverlayScroll:()=>s});var a=n(50959),o=n(650151),r=n(921258),i=n(601227);const l={onMouseOver:()=>{},onMouseOut:()=>{}};function s(e,t=i.CheckMobile.any()){const n=(0,a.useRef)(null),s=e||(0,a.useRef)(null),[u,c]=(0,r.useHover)(),[m,d]=(0,a.useState)({reference:n,containerHeight:0,containerWidth:0,contentHeight:0,contentWidth:0,scrollPosTop:0,scrollPosLeft:0,onVerticalChange:function(e){d((t=>({...t,scrollPosTop:e}))),(0,o.ensureNotNull)(s.current).scrollTop=e},onHorizontalChange:function(e){d((t=>({...t,scrollPosLeft:e}))),(0,o.ensureNotNull)(s.current).scrollLeft=e},visible:u}),h=(0,a.useCallback)((()=>{if(!s.current)return;const{clientHeight:e,scrollHeight:t,scrollTop:a,clientWidth:o,scrollWidth:r,scrollLeft:i}=s.current,l=n.current?n.current.offsetTop:0;d((n=>({...n,containerHeight:e-l,contentHeight:t-l,scrollPosTop:a,containerWidth:o,contentWidth:r,scrollPosLeft:i})))}),[]);function g(){d((e=>({...e,scrollPosTop:(0,o.ensureNotNull)(s.current).scrollTop,scrollPosLeft:(0,
o.ensureNotNull)(s.current).scrollLeft})))}return(0,a.useEffect)((()=>{u&&h(),d((e=>({...e,visible:u})))}),[u]),(0,a.useEffect)((()=>{const e=s.current;return e&&e.addEventListener("scroll",g),()=>{e&&e.removeEventListener("scroll",g)}}),[s]),[m,t?l:c,s,h]}},629276:e=>{e.exports={highlight:"highlight-6tu1aYjZ",active:"active-6tu1aYjZ"}},394420:e=>{e.exports={dialog:"dialog-T4Q8BJPb",contentList:"contentList-T4Q8BJPb",contentHeader:"contentHeader-T4Q8BJPb"}},208955:(e,t,n)=>{"use strict";n.r(t),n.d(t,{LoadChartDialogRenderer:()=>re});var a=n(50959),o=n(500962),r=n(497754),i=n.n(r),l=n(650151),s=n(509806),u=n(870122),c=n(601227),m=n(533408),d=n(624216),h=n(476853),g=n(72571),y=n(544563),f=n(300645),p=n(633476);function v(e){const{sortDirection:t,children:n,...o}=e,i=(0,a.useRef)(null),[l,s]=(0,a.useState)(!1);return a.createElement("div",{...o,ref:i,className:r(p.sortButton,"apply-common-tooltip","common-tooltip-vertical"),onClick:function(){s(!l)}},a.createElement(g.Icon,{className:p.icon,icon:0===t?y:f}),a.createElement(d.PopupMenu,{doNotCloseOn:i.current,isOpened:l,onClose:()=>{s(!1)},position:(0,h.getPopupPositioner)(i.current,{verticalMargin:-35,verticalAttachEdge:0})},n))}var _=n(192063),b=n(464409);function S(e){const{label:t,listSortField:n,itemSortField:o,listSortDirection:i,itemSortDirection:l,onClick:s,className:u,...c}=e,m=o===n&&l===i;return a.createElement(_.PopupMenuItem,{...c,className:r(b.container,u),label:a.createElement("div",{className:b.labelWrap},a.createElement(g.Icon,{className:b.icon,icon:0===l?y:f}),a.createElement("span",{className:b.text},t)),isActive:m,onClick:function(){s(o,l)},"data-active":m.toString(),"data-sort-field":o,"data-sort-direction":0===l?"asc":"desc"})}var w=n(231862),C=n(712961);function N(e){const{children:t,className:n}=e;return a.createElement("div",{className:i()(C.container,n)},t)}function L(e){const{title:t}=e;return a.createElement("div",{className:C.title},t)}var D=n(150335);var k=n(220037),z=n(710263),E=n(330344),x=n(139043);var A=n(73288),M=n(846188);function I(e){const{className:t,onScroll:n,onTouchStart:o,reference:r,children:l,scrollbar:s,...u}=e,[m,d]=(0,E.useDimensions)(),[h,g,y,f]=(0,x.useOverlayScroll)();return(0,a.useEffect)((()=>{const e=()=>{};return c.isFF?(document.addEventListener("wheel",(()=>e)),()=>{document.removeEventListener("wheel",e)}):e}),[]),a.createElement("div",{..."overlay"===s&&g,className:i()(M.container,t),onTouchStart:o,onScrollCapture:n,ref:m},"overlay"===s&&a.createElement(A.OverlayScrollContainer,{...h,className:M.overlayScrollWrap}),a.createElement(k.FixedSizeList,{ref:r,className:i()("native"===s?M.scroll:M.list),outerRef:"overlay"===s?y:void 0,onItemsRendered:f,layout:"vertical",width:"100%",height:(null==d?void 0:d.height)||0,children:l,direction:(0,z.isRtl)()?"rtl":"ltr",...u}))}var P=n(69111);var T=n(156963),Z=n(73572),R=n(739343),B=n(630795),H=n(153055);var F=n(906355),W=n(981011),j=n(260598),Y=n(512991),q=n(629276)
;const O=new F.DateFormatter("dd-MM-yyyy"),U=new W.TimeFormatter(W.hourMinuteFormat),K=T.enabled("items_favoriting");function V(e){const{chart:t,chartWidgetCollection:o,trackEvent:r,localFavorites:l,setLocalFavorites:u,onClose:c,searchString:m,onClickRemove:d,onRemoveCanceled:h,isSelected:g}=e,[y,f]=(0,a.useState)((()=>t.active())),[p,v]=(0,a.useState)(!1),_=t.url?function(e){const t=e.chartId?`/chart/${e.chartId}/`:"/chart/",n=new URL(t,location.href);return e.symbol&&n.searchParams.append("symbol",e.symbol),e.interval&&n.searchParams.append("interval",e.interval),e.style&&n.searchParams.append("style",e.style),(0,P.urlWithMobileAppParams)(n.href)}({chartId:t.url}):void 0,b=(0,a.useContext)(B.SlotContext),S=(0,a.useMemo)((()=>new Date(1e3*t.modified)),[t]),w=(0,a.useMemo)((()=>(0,Y.createRegExpList)(m)),[m]),C=i()(q.highlight,y&&q.active);return(0,a.useEffect)((()=>(o&&o.metaInfo.id.subscribe(L),()=>{o&&o.metaInfo.id.unsubscribe(L)})),[]),a.createElement(Z.DialogContentItem,{url:_,title:a.createElement(j.HighlightedText,{className:C,queryString:m,rules:w,text:t.title}),subtitle:a.createElement(a.Fragment,null,a.createElement(j.HighlightedText,{className:C,queryString:m,rules:w,text:t.description})," ","(",O.format(S).replace(/-/g,".")," ",U.formatLocal(S),")"),onClick:function(e){0;t.openAction(),!1},onClickFavorite:function(){0;const e={...l};e[t.id]?delete e[t.id]:e[t.id]=!0;t.favoriteAction(e).then((()=>{0}))},showFavorite:K,onClickRemove:async function(){if(p)return;v(!0);const e=await async function(e){return s.t(null,{replace:{name:e.title}},n(569368))}(t);v(!1),function(e,t,n,a){(0,H.showConfirm)({text:e,onConfirm:({dialogClose:e})=>{t(),e()},onClose:()=>{n()}},a)}(e,N,h,b)},isFavorite:Boolean(l[t.id]),isActive:y,isSelected:g,"data-name":"load-chart-dialog-item"});function N(){t.deleteAction().then((()=>d(t.id)))}function L(e){f(t.id===e)}}var $=n(370981),G=n(180185);var Q=n(394420);const J={sortField:"modified",sortDirection:1},X=function(e){const{paddingTop:t=0,paddingBottom:n=0}=e;return(0,a.forwardRef)((({style:e,...o},r)=>{const{height:i=0}=e;return a.createElement("div",{ref:r,style:{...e,height:`${((0,D.isNumber)(i)?i:parseFloat(i))+t+n}px`},...o})}))}({paddingBottom:6});function ee(e){let t;try{t=(0,R.getTranslatedResolution)(e)}catch(n){t=e}return t}const te=T.enabled("items_favoriting"),ne=s.t(null,void 0,n(375789));function ae(e){const{charts:t,onClose:o,favoriteChartsService:r,chartWidgetCollection:d}=e,[h,g]=(0,a.useState)(""),[y,f]=(0,a.useState)(h),[p,_]=(0,a.useState)([]),b=(0,a.useRef)(null),[C,D]=(0,a.useState)((function(){if(r)return r.get();const e={};return t.filter((e=>e.favorite)).forEach((t=>{e[t.id]=!0})),e})),[k,z]=(0,a.useState)((()=>u.getJSON("loadChartDialog.viewState",J))),E=(0,a.useRef)(null),x=(0,a.useRef)(null),A=(0,a.useMemo)((()=>t.map((e=>({...e,description:`${e.symbol}, ${ee(e.interval)}`})))),[t]);(0,a.useEffect)((()=>{c.CheckMobile.any()||(0,l.ensureNotNull)(E.current).focus()}),[]);const M=(0,a.useRef)();(0,a.useEffect)((()=>(M.current=setTimeout((()=>{g(y)}),300),()=>{
clearTimeout(M.current)})),[y]),(0,a.useEffect)((()=>(null==r||r.getOnChange().subscribe(null,q),()=>{null==r||r.getOnChange().unsubscribe(null,q)})),[]);const P=(0,a.useCallback)((()=>!0),[]),T=(0,a.useMemo)((()=>{return(0,Y.rankedSearch)({data:A.filter((e=>!p.includes(e.id))).sort((e=k.sortDirection,(t,n)=>{if(C[t.id]&&!C[n.id])return-1;if(!C[t.id]&&C[n.id])return 1;const a=0===e?1:-1;return"modified"===k.sortField?a*(t.modified-n.modified):a*t.title.localeCompare(n.title)})),rules:(0,Y.createRegExpList)(h),queryString:h,primaryKey:"title",secondaryKey:"description"});var e}),[h,k,p,C]),{selectedItemIndex:Z,setSelectedItemIndex:R,handleKeyboardSelection:B}=function(e,t,n){const[o,r]=(0,a.useState)(-1);return(0,a.useEffect)((()=>{var e;-1!==o&&(null===(e=n.current)||void 0===e||e.scrollToItem(o))}),[o]),{selectedItemIndex:o,setSelectedItemIndex:r,handleKeyboardSelection:function(n){switch((0,G.hashFromEvent)(n)){case 40:if(o===e-1)return;r(o+1);break;case 38:if(0===o)return;if(-1===o)return void r(o+1);r(o-1);break;case 13:t(n)}}}}(T.length,(function(e){const t=T[Z];if(-1===Z||!t)return;0;t.openAction(),!1}),x);return a.createElement(m.AdaptivePopupDialog,{ref:b,onClose:o,onClickOutside:o,onKeyDown:B,isOpened:!0,className:Q.dialog,title:ne,dataName:"load-layout-dialog",render:function(){return a.createElement(a.Fragment,null,a.createElement(w.DialogSearch,{reference:E,onChange:F,placeholder:s.t(null,void 0,n(252298))}),a.createElement(N,{className:i()(!te&&Q.contentHeader)},a.createElement(L,{title:s.t(null,void 0,n(425653))}),a.createElement(v,{sortDirection:k.sortDirection,title:s.t(null,void 0,n(141583)),"data-name":"load-chart-dialog-sort-button"},a.createElement(S,{label:s.t(null,void 0,n(263479)),listSortField:k.sortField,itemSortField:"title",listSortDirection:k.sortDirection,itemSortDirection:0,onClick:U,"data-name":"load-chart-dialog-sort-menu-item"}),a.createElement(S,{label:s.t(null,void 0,n(96189)),listSortField:k.sortField,itemSortField:"title",listSortDirection:k.sortDirection,itemSortDirection:1,onClick:U,"data-name":"load-chart-dialog-sort-menu-item"}),a.createElement(S,{label:s.t(null,void 0,n(38212)),listSortField:k.sortField,itemSortField:"modified",listSortDirection:k.sortDirection,itemSortDirection:0,onClick:U,"data-name":"load-chart-dialog-sort-menu-item"}),a.createElement(S,{label:s.t(null,void 0,n(463037)),listSortField:k.sortField,itemSortField:"modified",listSortDirection:k.sortDirection,itemSortDirection:1,onClick:U,"data-name":"load-chart-dialog-sort-menu-item"}))),a.createElement(I,{scrollbar:"native",reference:x,itemCount:T.length,itemSize:52,className:Q.contentList,onScroll:H,innerElementType:X,itemKey:e=>(C[T[e].id]?"f_":"")+T[e].id,children:({style:e,index:t})=>a.createElement("div",{style:e},a.createElement(V,{chart:T[t],onClose:o,chartWidgetCollection:d,trackEvent:W,onRemoveCanceled:O,localFavorites:C,setLocalFavorites:D,searchString:h,onClickRemove:j,isSelected:t===Z}))}))},forceCloseOnEsc:P});function H(){$.globalCloseDelegate.fire()}function F(e){const t=e.currentTarget.value
;f(t),R(-1)}function W(e){0}function j(e){_([e,...p])}function q(e){D(e)}function O(){(0,l.ensureNotNull)(b.current).focus()}function U(e,t){const n={sortField:e,sortDirection:t};z(n),u.setValue("loadChartDialog.viewState",JSON.stringify(n),{forceFlush:!0}),W()}}var oe=n(19406);class re extends oe.DialogRenderer{constructor(e){super(),this._options=e}show(){o.render(a.createElement(ae,{...this._options,onClose:()=>this.hide()}),this._container),this._setVisibility(!0)}hide(){o.unmountComponentAtNode(this._container),this._setVisibility(!1)}}},333765:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="currentColor" d="M9.707 9l4.647-4.646-.707-.708L9 8.293 4.354 3.646l-.708.708L8.293 9l-4.647 4.646.708.708L9 9.707l4.646 4.647.708-.707L9.707 9z"/></svg>'},300645:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 7v13.5M4.5 16.5l4 4 4-4"/></svg>'},544563:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" width="28" height="28" fill="none"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.5 18.5h-3M21.5 13.5h-5M23.5 8.5h-7M8.5 20.5V7M12.5 11l-4-4-4 4"/></svg>'},969859:e=>{e.exports='<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none"><path stroke="currentColor" d="M12.4 12.5a7 7 0 1 0-4.9 2 7 7 0 0 0 4.9-2zm0 0l5.101 5"/></svg>'},620036:e=>{e.exports={ar:["إلغاء"],ca_ES:["Cancel·la"],cs:["Zrušit"],de:["Abbrechen"],el:["Άκυρο"],en:"Cancel",es:["Cancelar"],fa:["لغو"],fr:["Annuler"],he_IL:["ביטול"],hu_HU:["Törlés"],id_ID:["Batal"],it:["Annulla"],ja:["キャンセル"],ko:["취소"],ms_MY:["Batal"],nl_NL:["Annuleren"],pl:["Anuluj"],pt:["Cancelar"],ro:"Cancel",ru:["Отмена"],sv:["Avbryt"],th:["ยกเลิก"],tr:["İptal"],vi:["Hủy bỏ"],zh:["取消"],zh_TW:["取消"]}},715795:e=>{e.exports={ar:["جميع تنسيقاتي"],ca_ES:"All my layouts",cs:"All my layouts",de:["Alle meine Layouts"],el:"All my layouts",en:"All my layouts",es:["Todos mis diseños"],fa:"All my layouts",fr:["Toutes mes mises en page"],he_IL:["כל הפריסות שלי"],hu_HU:"All my layouts",id_ID:["Seluruh layout saya"],it:["Tutti i miei layout"],ja:["すべてのレイアウト"],ko:["내 모든 레이아웃"],ms_MY:["Semua susun atur saya"],nl_NL:"All my layouts",pl:["Wszystkie moje układy"],pt:["Todos meus layouts"],ro:"All my layouts",ru:["Все мои графики"],sv:["Alla mina layouter"],th:["เค้าโครงทั้งหมดของฉัน"],tr:["Tüm yerleşimlerim"],vi:["Tất cả bố cục của tôi"],zh:["所有我的布局"],zh_TW:["我的所有版面"]}},569368:e=>{e.exports={ar:["هل تريد فعلا مسح تصميم مخطط الرسم البيانى‎ ‎{name}‎؟"],ca_ES:["De debò que voleu eliminar el disseny del gràfic '{name}'?"],cs:"Do you really want to delete Chart Layout '{name}' ?",de:["Möchten Sie das Chartlayout '{name}' wirklich löschen?"],el:"Do you really want to delete Chart Layout '{name}' ?",en:"Do you really want to delete Chart Layout '{name}' ?",
es:["¿Está seguro de que desea eliminar el Diseño del gráfico '{name}'?"],fa:"Do you really want to delete Chart Layout '{name}' ?",fr:["Voulez-vous vraiment supprimer la configuration du graphique '{name}' ?"],he_IL:["האם אתה באמת רוצה למחוק פריסת גרף '{name}'?"],hu_HU:["Biztos, hogy törölni akarod ezt a chart elrendezést: {name}?"],id_ID:["Apakah benar anda ingin menghapus Layout Chart '{name}' ?"],it:["Cancellare la configurazione '{name}' ?"],ja:["本当にチャートレイアウト '{name}' を削除しますか？"],ko:["정말로 차트 레이아웃 '{name}' 을 지우시겠습니까?"],ms_MY:["Anda benar-benar ingin memadam Susunatur Carta '{name}' ?"],nl_NL:"Do you really want to delete Chart Layout '{name}' ?",pl:["Czy na pewno chcesz usunąć układ graficzny '{name}'?"],pt:["Você quer realmente deletar o leiaute do gráfico '{name}'?"],ro:"Do you really want to delete Chart Layout '{name}' ?",ru:['Вы действительно хотите удалить сохранённый график "{name}"?'],sv:["Vill du verkligen ta bort diagramlayout '{name}' ?"],th:["คุณต้องการลบชาทส์ '{name}' จริง ๆ หรือไม?"],tr:["'{name}' isimli Grafik Yerleşimini silmek istediğinizden emin misiniz?"],vi:["Bạn có thực sự muốn xóa Bố cục Biểu đồ {name}?"],zh:["确定删除图表布局'{name}' ?"],zh_TW:["確定刪除圖表版面「{name}」？"]}},658013:e=>{e.exports={ar:['هل تريد حقًا حذف تنسيق ارسم البياني "{name}" الذي يحتوي على ‎{n_drawings_on_n_symbols}‎؟'],ca_ES:["De debò que voleu eliminar el disseny del gràfic '{name}' que conté {n_drawings_on_n_symbols}?"],cs:"Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",de:["Möchten Sie wirklich das Chart-Layout '{name}' löschen, das {n_drawings_on_n_symbols} enthält?"],el:"Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",en:"Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",es:["¿Realmente quiere eliminar el diseño del gráfico '{name}' que contiene {n_drawings_on_n_symbols}?"],fa:"Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",fr:['Voulez-vous vraiment supprimer le modèle de graphique " {name} " qui contient {n_drawings_on_n_symbols}?'],he_IL:["האם אתה באמת רוצה למחוק את פריסת הגרף '{name}' שמכילה {n_drawings_on_n_symbols}?"],hu_HU:"Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",id_ID:["Apakah Anda benar-benar ingin menghapus Layout Chart '{name}' yang berisi {n_drawings_on_n_symbols}?"],it:["Vuoi davvero eliminare il salvataggio '{name}' che contiene {n_drawings_on_n_symbols}?"],ja:["本当に{n_drawings_on_n_symbols}を含むチャートレイアウト「{name}」を削除しますか？"],ko:["{n_drawings_on_n_symbols}이 포함된 차트 레이아웃 '{name}'을 삭제하시겠습니까?"],ms_MY:["Adakah anda pasti untuk padamkan Susun Atur Carta '{name}' yang mengandungi {n_drawings_on_n_symbols}?"],nl_NL:"Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",pl:["Czy na pewno chcesz usunąć układ wykresu '{name}', który zawiera {n_drawings_on_n_symbols}?"],
pt:["Você realmente quer deletar o Layout do Gráfico '{name}' que contém {n_drawings_on_n_symbols}?"],ro:"Do you really want to delete Chart Layout '{name}' that contains {n_drawings_on_n_symbols}?",ru:['Вы действительно хотите удалить график "{name}", который содержит {n_drawings_on_n_symbols}?'],sv:["Ska du verkligen radera diagramlayout '{name}' som innehåller {n_drawings_on_n_symbols}?"],th:["คุณต้องการลบเลยเอาต์ชาร์ต '{name}' ที่มี {n_drawings_on_n_symbols} หรือไม่?"],tr:["{n_drawings_on_n_symbols} içeren Grafik Düzenini '{name}' gerçekten silmek istiyor musunuz?"],vi:["Bạn có thực sự muốn xóa Bố cục Biểu đồ '{name}' có chứa {n_drawings_on_n_symbols} không?"],zh:["您真的要删除包含{n_drawings_on_n_symbols}的图表布局“{name}”吗？"],zh_TW:["您真的要刪除包含{n_drawings_on_n_symbols}的圖表版面“{name}”嗎？"]}},38212:e=>{e.exports={ar:["تاريخ التعديل (الأقدم أولاً)"],ca_ES:["Data de modificació (la més antiga primer)"],cs:"Date modified (oldest first)",de:["Bearbeitungs-Datum (ältestes zuerst)"],el:"Date modified (oldest first)",en:"Date modified (oldest first)",es:["Fecha de modificación (la más antigua primero)"],fa:"Date modified (oldest first)",fr:["Date de modification (la plus ancienne d'abord)"],he_IL:["התאריך שונה (הישן ראשון)"],hu_HU:"Date modified (oldest first)",id_ID:["Tanggal modifikasi (dari yang terlama)"],it:["Data ultima modifica (vecchi prima)"],ja:["変更日 (古い順)"],ko:["바뀐 날짜 (옛것부터)"],ms_MY:["Tarikh diubah (lama dahulu)"],nl_NL:"Date modified (oldest first)",pl:["Data modyfikacji (od najstarszych)"],pt:["Data da modificação (mais antiga primeiro)"],ro:"Date modified (oldest first)",ru:["Дата изменения (сначала старые)"],sv:["Ändringsdatum (äldst först)"],th:["วันที่แก้ไข (เก่าก่อน)"],tr:["Değişim tarihine göre sırala (önce en eski)"],vi:["Ngày chỉnh sửa (cũ lên trước)"],zh:["修改日期(由旧到新)"],zh_TW:["修改日期(舊到新)"]}},463037:e=>{e.exports={ar:["تاريخ التعديل (الأحدث أولاً)"],ca_ES:["Data de modificació (la més nova primer)"],cs:"Date modified (newest first)",de:["Bearbeitungs-Datum (neuestes zuerst)"],el:"Date modified (newest first)",en:"Date modified (newest first)",es:["Fecha de modificación (la más reciente primero)"],fa:"Date modified (newest first)",fr:["Date de modification (la plus récente d'abord)"],he_IL:["התאריך שונה (החדש ראשון)"],hu_HU:"Date modified (newest first)",id_ID:["Tanggal modifikasi (dari yang terbaru)"],it:["Data ultima modifica (recenti prima)"],ja:["変更日 (新しい順)"],ko:["바뀐 날짜 (새것부터)"],ms_MY:["Tarikh diubah (terbaru dahulu)"],nl_NL:"Date modified (newest first)",pl:["Data modyfikacji (od najnowszych)"],pt:["Data da modificação (mais recente 1°)"],ro:"Date modified (newest first)",ru:["Дата изменения (сначала новые)"],sv:["Ändringsdatum (nyast först)"],th:["วันที่แก้ไข (ใหม่ก่อน)"],tr:["Değişim tarihine göre sırala (önce en yeni)"],vi:["Ngày chỉnh sửa (mới lên trước)"],zh:["修改日期(由新到旧)"],zh_TW:["修改日期(新到舊)"]}},375789:e=>{e.exports={ar:["تحميل التنسيق"],ca_ES:["Carrega disseny"],cs:"Load layout",de:["Layout öffnen"],el:"Load layout",en:"Load layout",es:["Cargar diseño"],fa:"Load layout",fr:["Charger la mise en page"],
he_IL:["טען גרף"],hu_HU:"Load layout",id_ID:["Muat layout"],it:["Carica layout"],ja:["レイアウトの読み込み"],ko:["레이아웃 불러오기"],ms_MY:["Memuatkan susun atur"],nl_NL:"Load layout",pl:["Załaduj układ"],pt:["Carregar layout"],ro:"Load layout",ru:["Загрузить график"],sv:["Ladda layout"],th:["โหลดเลย์เอาท์"],tr:["Yerleşimi yükle"],vi:["Tải bố cục"],zh:["加载布局"],zh_TW:["加載版面"]}},425653:e=>{e.exports={ar:["اسم التنسيق"],ca_ES:["Nom del disseny del gràfic"],cs:"Layout name",de:["Layout Name"],el:"Layout name",en:"Layout name",es:["Nombre del diseño del gráfico"],fa:"Layout name",fr:["Nom de la mise en page"],he_IL:["שם פריסת גרף"],hu_HU:"Layout name",id_ID:["Nama Layout"],it:["Nome layout"],ja:["レイアウト名"],ko:["레이아웃 네임"],ms_MY:["Aturan nama"],nl_NL:"Layout name",pl:["Nazwa układu"],pt:["Nome do layout"],ro:"Layout name",ru:["Имя графика"],sv:["Layoutnamn"],th:["ชื่อเลย์เอาท์"],tr:["Yerleşim adı"],vi:["Tên bố cục"],zh:["布局名称"],zh_TW:["版面名稱"]}},263479:e=>{e.exports={ar:["اسم التنسيق (A إلى Z)"],ca_ES:["Nom de disseny (de la A a la Z)"],cs:"Layout name (A to Z)",de:["Layout Name (A bis Z)"],el:"Layout name (A to Z)",en:"Layout name (A to Z)",es:["Nombre de diseño (de la A a la Z)"],fa:"Layout name (A to Z)",fr:["Nom de la mise en page (A à Z)"],he_IL:["שם הפריסה (א' עד ת')"],hu_HU:"Layout name (A to Z)",id_ID:["Nama layout (A ke Z)"],it:["Nome layout (A-Z)"],ja:["レイアウト名 (AからZ)"],ko:["레이아웃 이름 (A - Z)"],ms_MY:["Nama susun atur (A hingga Z)"],nl_NL:"Layout name (A to Z)",pl:["Nazwa układu (A do Z)"],pt:["Nome do layout (A a Z)"],ro:"Layout name (A to Z)",ru:["Название графиков (А → Я)"],sv:["Layoutnamn (A till Z)"],th:["ชื่อเลย์เอาท์ (A ไปยัง Z)"],tr:["Yerleşim adı (A'dan Z'ye)"],vi:["Tên bố cục (A đến Z)"],zh:["布局名称(A到Z)"],zh_TW:["版面名稱(A到Z)"]}},96189:e=>{e.exports={ar:["اسم التنسيق (Z إلى A)"],ca_ES:["Nom de disseny (de la Z a la A)"],cs:"Layout name (Z to A)",de:["Layout Name (Z-A)"],el:"Layout name (Z to A)",en:"Layout name (Z to A)",es:["Nombre de diseño (de la Z a la A)"],fa:"Layout name (Z to A)",fr:["Nom de la mise en page (Z à A)"],he_IL:["שם הפריסה (ת' עד א')"],hu_HU:"Layout name (Z to A)",id_ID:["Nama layout (Z ke A)"],it:["Nome layout (Z-A)"],ja:["レイアウト名 (ZからA)"],ko:["레이아웃 이름 (Z - A)"],ms_MY:["Nama susun atur (Z hingga A)"],nl_NL:"Layout name (Z to A)",pl:["Nazwa układu (Z do A)"],pt:["Nome do layout (Z a A)"],ro:"Layout name (Z to A)",ru:["Название графиков (Я → А)"],sv:["Layoutnamn (Z till A)"],th:["ชื่อเลย์เอาท์ (Z ไปยัง A)"],tr:["Yerleşim adı (Z'den A'ya)"],vi:["Tên bố cục (Z đến A)"],zh:["布局名称(Z到A)"],zh_TW:["版面名稱(Z到A)"]}},141583:e=>{e.exports={ar:["تصنيف حسب اسم التنسيق، وتاريخ التعديل"],ca_ES:["Ordena per nom de disseny del gràfic, data de modificació"],cs:"Sort by layout name, date changed",de:["Nach Layout-Name sortieren, Änderungsdatum"],el:"Sort by layout name, date changed",en:"Sort by layout name, date changed",es:["Ordenar por nombre de diseño del gráfico, fecha de modificación"],fa:"Sort by layout name, date changed",fr:["Trier par nom de mise en page, date modifiée"],he_IL:["מיין לפי שם הפריסה layout , התאריך השתנה"],
hu_HU:"Sort by layout name, date changed",id_ID:["Urut berdasarkan nama layout, tanggal perubahan"],it:["Ordina in base a nome, data"],ja:["レイアウト名や変更日で並び替え"],ko:["레이아웃 네임, 바뀐 날짜로 소팅"],ms_MY:["Susun mengikut aturan nama, perubahan tarikh"],nl_NL:"Sort by layout name, date changed",pl:["Sortuj według nazwy układu, data zmiany"],pt:["Ordenar por nome do layout, data de alteração"],ro:"Sort by layout name, date changed",ru:["Сортировать по имени, дате изменения"],sv:["Sortera med layoutnamn, datum ändrat"],th:["เรียงตามชื่อเลย์เอาท์, วันที่เปลี่ยนแปลง"],tr:["Yerleşim adına, tarih değişikliğine göre sırala"],vi:["Sắp xếp theo tên bố cục, ngày thay đổi"],zh:["排序依布局名称、修改日期"],zh_TW:["排序按版面名稱、修改日期"]}},252298:e=>{e.exports={ar:["بحث"],ca_ES:["Cercar"],cs:["Hledat"],de:["Suche"],el:["Αναζήτησή"],en:"Search",es:["Buscar"],fa:["جستجو"],fr:["Chercher"],he_IL:["חפש"],hu_HU:["Keresés"],id_ID:["Cari"],it:["Cerca"],ja:["検索"],ko:["찾기"],ms_MY:["Cari"],nl_NL:["Zoeken"],pl:["Szukaj"],pt:["Pesquisar"],ro:"Search",ru:["Поиск"],sv:["Sök"],th:["ค้นหา"],tr:["Ara"],vi:["Tìm kiếm"],zh:["搜索"],zh_TW:["搜尋"]}},939966:e=>{e.exports={ar:["على {amount} من الرموز","على {amount} من الرموز","على {amount} من الرموز","على {amount} من الرموز","على {amount} من الرموز","على {amount} من الرموز"],ca_ES:["en {amount} símbol","en {amount} símbols"],cs:"on {amount} symbol",de:["auf {amount} Symbol","auf {amount} Symbolen"],el:"on {amount} symbol",en:"on {amount} symbol",es:["en {amount} símbolo","en {amount} símbolos"],fa:["on {amount} symbols"],fr:["sur {amount} symbole","sur {amount} symbols"],he_IL:["על סימול {amount}","על סימולים {amount}","על סימולים {amount}","על סימולים {amount}"],hu_HU:["on {amount} symbols"],id_ID:["pada {amount} simbol"],it:["su {amount} simbolo","su {amount} simboli"],ja:["（{amount}個のシンボル上に）"],ko:["on {amount} 심볼"],ms_MY:["pada simbol {amount}"],nl_NL:"on {amount} symbol",pl:["na {amount} symbolu","na {amount} symbolach","na {amount} symbolach","na {amount} symbolach"],pt:["em {amount} símbolo","em {amount} símbolos"],ro:"on {amount} symbol",ru:["на {amount} инструменте","на {amount} инструментах","на {amount} инструментах","на {amount} инструментах"],sv:["på {amount} symbol","på {amount} symboler"],th:["บน {amount} สัญลักษณ์"],tr:["{amount} sembolünde","{amount} sembolünde"],vi:["trên {amount} mã giao dịch"],zh:["在{amount}个商品"],zh_TW:["在{amount}商品"]}},293030:e=>{e.exports={ar:["{amount} من الرسوم ","{amount} من الرسوم ","{amount} من الرسوم ","{amount} من الرسوم ","{amount} من الرسوم ","{amount} من الرسوم "],ca_ES:["{amount} dibuix","{amount} dibuixos"],cs:"{amount} drawing",de:["{amount} Zeichnung","{amount} Zeichnungen"],el:"{amount} drawing",en:"{amount} drawing",es:["{amount} dibujo","{amount} dibujos"],fa:["{amount} drawings"],fr:["{amount} dessin","{amount} dessins"],he_IL:["שרטוט {amount}","שרטוטים {amount}","שרטוטים {amount}","שרטוטים {amount}"],hu_HU:["{amount} drawings"],id_ID:["{amount} gambar"],it:["{amount} disegno","{amount} disegni"],ja:["{amount}個の描画"],ko:["{amount} 드로잉"],ms_MY:["{amount} lukisan"],
nl_NL:"{amount} drawing",pl:["{amount} rysunek","{amount} rysunki","{amount} rysunków","{amount} rysunków"],pt:["{amount} desenho","{amount} desenhos"],ro:"{amount} drawing",ru:["{amount} объект рисования","{amount} объекта рисования","{amount} объектов рисования","{amount} объектов рисования"],sv:["{amount} ritning","{amount} ritningar"],th:["{amount} การวาด"],tr:["{amount} çizim","{amount} çizim"],vi:["{amount} bản vẽ"],zh:["{amount}个绘图"],zh_TW:["{amount}繪圖"]}}}]);