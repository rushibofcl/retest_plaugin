(self.webpackChunkretest_plaugin=self.webpackChunkretest_plaugin||[]).push([[708],{80760:(E,S,a)=>{var o=a(89881);function f(x,v){var R=[];return o(x,function(b,e,s){v(b,e,s)&&R.push(b)}),R}E.exports=f},63105:(E,S,a)=>{var o=a(34963),f=a(80760),x=a(67206),v=a(1469);function R(b,e){var s=v(b)?o:f;return s(b,x(e,3))}E.exports=R},17204:E=>{function S(a){for(var o=-1,f=a==null?0:a.length,x={};++o<f;){var v=a[o];x[v[0]]=v[1]}return x}E.exports=S},64721:(E,S,a)=>{var o=a(42118),f=a(98612),x=a(47037),v=a(40554),R=a(52628),b=Math.max;function e(s,P,O,L){s=f(s)?s:R(s),O=O&&!L?v(O):0;var u=s.length;return O<0&&(O=b(u+O,0)),x(s)?O<=u&&s.indexOf(P,O)>-1:!!u&&o(s,P,O)>-1}E.exports=e},94885:E=>{var S="Expected a function";function a(o){if(typeof o!="function")throw new TypeError(S);return function(){var f=arguments;switch(f.length){case 0:return!o.call(this);case 1:return!o.call(this,f[0]);case 2:return!o.call(this,f[0],f[1]);case 3:return!o.call(this,f[0],f[1],f[2])}return!o.apply(this,f)}}E.exports=a},16028:(E,S,a)=>{var o=a(4819);function f(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var x=f(o);function v(){return v=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(t[d]=l[d])}return t},v.apply(this,arguments)}function R(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,b(t,r)}function b(t,r){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(d,m){return d.__proto__=m,d},b(t,r)}function e(t,r){if(t==null)return{};var l={},d=Object.keys(t),m,T;for(T=0;T<d.length;T++)m=d[T],!(r.indexOf(m)>=0)&&(l[m]=t[m]);return l}function s(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function P(t){var r=typeof t;return t!=null&&(r=="object"||r=="function")}var O=P,L=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof a.g<"u"?a.g:typeof self<"u"?self:{},u=typeof L=="object"&&L&&L.Object===Object&&L,n=u,i=typeof self=="object"&&self&&self.Object===Object&&self,c=n||i||Function("return this")(),w=c,h=function(){return w.Date.now()},j=h,W=/\s/;function $(t){for(var r=t.length;r--&&W.test(t.charAt(r)););return r}var z=$,Y=/^\s+/;function q(t){return t&&t.slice(0,z(t)+1).replace(Y,"")}var tt=q,et=w.Symbol,M=et,G=Object.prototype,nt=G.hasOwnProperty,it=G.toString,N=M?M.toStringTag:void 0;function rt(t){var r=nt.call(t,N),l=t[N];try{t[N]=void 0;var d=!0}catch{}var m=it.call(t);return d&&(r?t[N]=l:delete t[N]),m}var st=rt,at=Object.prototype,ot=at.toString;function ct(t){return ot.call(t)}var ft=ct,ut="[object Null]",lt="[object Undefined]",K=M?M.toStringTag:void 0;function dt(t){return t==null?t===void 0?lt:ut:K&&K in Object(t)?st(t):ft(t)}var ht=dt;function pt(t){return t!=null&&typeof t=="object"}var mt=pt,gt="[object Symbol]";function vt(t){return typeof t=="symbol"||mt(t)&&ht(t)==gt}var bt=vt,X=NaN,wt=/^[-+]0x[0-9a-f]+$/i,yt=/^0b[01]+$/i,xt=/^0o[0-7]+$/i,Ot=parseInt;function Tt(t){if(typeof t=="number")return t;if(bt(t))return X;if(O(t)){var r=typeof t.valueOf=="function"?t.valueOf():t;t=O(r)?r+"":r}if(typeof t!="string")return t===0?t:+t;t=tt(t);var l=yt.test(t);return l||xt.test(t)?Ot(t.slice(2),l?2:8):wt.test(t)?X:+t}var V=Tt,Et="Expected a function",jt=Math.max,St=Math.min;function Rt(t,r,l){var d,m,T,_,g,y,C=0,F=!1,D=!1,B=!0;if(typeof t!="function")throw new TypeError(Et);r=V(r)||0,O(l)&&(F=!!l.leading,D="maxWait"in l,T=D?jt(V(l.maxWait)||0,r):T,B="trailing"in l?!!l.trailing:B);function U(p){var I=d,k=m;return d=m=void 0,C=p,_=t.apply(k,I),_}function Ct(p){return C=p,g=setTimeout(A,r),F?U(p):_}function Wt(p){var I=p-y,k=p-C,Q=r-I;return D?St(Q,T-k):Q}function Z(p){var I=p-y,k=p-C;return y===void 0||I>=r||I<0||D&&k>=T}function A(){var p=j();if(Z(p))return J(p);g=setTimeout(A,Wt(p))}function J(p){return g=void 0,B&&d?U(p):(d=m=void 0,_)}function Nt(){g!==void 0&&clearTimeout(g),C=0,d=y=m=g=void 0}function Dt(){return g===void 0?_:J(j())}function H(){var p=j(),I=Z(p);if(d=arguments,m=this,y=p,I){if(g===void 0)return Ct(y);if(D)return clearTimeout(g),g=setTimeout(A,r),U(y)}return g===void 0&&(g=setTimeout(A,r)),_}return H.cancel=Nt,H.flush=Dt,H}var _t=Rt,Lt=["innerRef"],It=typeof window<"u";function Pt(t,r){return t===void 0&&(t=150),function(l){var d=function(m){R(T,m);function T(g){var y;return y=m.call(this,g)||this,y.state={winWidth:It?window.innerWidth:0},y.onResize=_t(y.onResize.bind(s(y)),t,r),y}var _=T.prototype;return _.componentDidMount=function(){window.addEventListener("resize",this.onResize)},_.componentWillUnmount=function(){window.removeEventListener("resize",this.onResize),this.onResize.cancel()},_.onResize=function(){this.setState({winWidth:window.innerWidth})},_.render=function(){var y=this.props,C=y.innerRef,F=e(y,Lt);return x.default.createElement(l,v({ref:C},F,this.state))},T}(x.default.Component);return d.displayName="Responsive("+(l.displayName||l.name)+")",d.defaultProps={innerRef:function(){}},d}}E.exports=Pt},14057:(E,S,a)=>{a.d(S,{Hn:()=>v,oO:()=>f,s9:()=>x});var o=a(6557);class f{decorated;wrapper;constructor(e,s=o){this.decorated=e,this.wrapper=s}forDefinition(e){return this.wrap(this.decorated.forDefinition(e))}forItems(e,s){return this.wrap(this.decorated.forItems(e,s))}forBuckets(e,s){return this.wrap(this.decorated.forBuckets(e,s))}forInsight(e,s){return this.wrap(this.decorated.forInsight(e,s))}forInsightByRef(e,s){return this.wrap(this.decorated.forInsightByRef(e,s))}wrap=e=>this.wrapper(e)}class x{decorated;definition;constructor(e){this.decorated=e,this.definition=e.definition}equals(e){return this.decorated.equals(e)}execute(){return this.decorated.execute()}explain(e){return this.decorated.explain(e)}fingerprint(){return this.decorated.fingerprint()}withDimensions(...e){return this.createNew(this.decorated.withDimensions(...e))}withSorting(...e){return this.createNew(this.decorated.withSorting(...e))}withBuckets(...e){return this.createNew(this.decorated.withBuckets(...e))}withDateFormat(e){return this.createNew(this.decorated.withDateFormat(e))}withExecConfig(e){return this.createNew(this.decorated.withExecConfig(e))}}class v{decorated;wrapper;definition;dimensions;constructor(e,s=o){this.decorated=e,this.wrapper=s,this.definition=e.definition,this.dimensions=e.dimensions}export(e){return this.decorated.export(e)}readAll(){return this.decorated.readAll()}readWindow(e,s){return this.decorated.readWindow(e,s)}transform(){return this.wrapper(this.decorated.transform())}equals(e){return this.decorated.equals(e)}fingerprint(){return this.decorated.fingerprint()}}class R{decorated;offset;count;totalCount;headerItems;data;totals;totalTotals;definition;result;warnings;constructor(e,s){this.decorated=e,this.result=s??e.result,this.count=e.count,this.data=e.data,this.definition=e.definition,this.headerItems=e.headerItems,this.offset=e.offset,this.totalCount=e.totalCount,this.totals=e.totals,this.totalTotals=e.totalTotals,this.warnings=e.warnings}equals(e){return this.decorated.equals(e)}fingerprint(){return this.decorated.fingerprint()}}},6870:(E,S,a)=>{a.d(S,{Z:()=>L});var o=a(4819);function f(){return f=Object.assign?Object.assign.bind():function(u){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var c in i)Object.prototype.hasOwnProperty.call(i,c)&&(u[c]=i[c])}return u},f.apply(this,arguments)}function x(u,n){if(u==null)return{};var i={},c=Object.keys(u),w,h;for(h=0;h<c.length;h++)w=c[h],!(n.indexOf(w)>=0)&&(i[w]=u[w]);return i}const v={position:"absolute",bottom:0,left:0,height:0,overflow:"hidden","padding-top":0,"padding-bottom":0,border:"none"},R=["box-sizing","width","font-size","font-weight","font-family","font-style","letter-spacing","text-indent","white-space","word-break","overflow-wrap","padding-left","padding-right"];function b(u,n){if(!u||typeof u!="object")return u;const i={};return Object.keys(u).forEach(c=>{n.indexOf(c)>-1||(i[c]=u[c])}),i}const e=["component","ellipsis","trimRight","className"];function s(u,n){for(;u&&n--;)u=u.previousElementSibling;return u}const P={basedOn:void 0,className:"",component:"div",ellipsis:"\u2026",maxLine:1,onReflow(){},text:"",trimRight:!0,winWidth:void 0},O=Object.keys(P);class L extends o.Component{constructor(n){super(n),this.state={text:n.text,clamped:!1},this.units=[],this.maxLine=0,this.canvas=null}componentDidMount(){this.initCanvas(),this.reflow(this.props)}componentDidUpdate(n){n.winWidth!==this.props.winWidth&&this.copyStyleToCanvas(),this.props!==n&&this.reflow(this.props)}componentWillUnmount(){this.canvas&&(this.canvas.parentNode.removeChild(this.canvas),this.canvas=null)}setState(n,i){return typeof n.clamped<"u"&&(this.clamped=n.clamped),super.setState(n,i)}initCanvas(){if(this.canvas)return;const n=this.canvas=document.createElement("div");n.className=`LinesEllipsis-canvas ${this.props.className}`,n.setAttribute("aria-hidden","true"),this.copyStyleToCanvas(),Object.keys(v).forEach(i=>{n.style[i]=v[i]}),document.body.appendChild(n)}copyStyleToCanvas(){const n=window.getComputedStyle(this.target);R.forEach(i=>{this.canvas.style[i]=n[i]})}reflow(n){const i=n.basedOn||(/^[\x00-\x7F]+$/.test(n.text)?"words":"letters");switch(i){case"words":this.units=n.text.split(/\b|(?=\W)/);break;case"letters":this.units=Array.from(n.text);break;default:throw new Error(`Unsupported options basedOn: ${i}`)}this.maxLine=+n.maxLine||1,this.canvas.innerHTML=this.units.map(j=>`<span class='LinesEllipsis-unit'>${j}</span>`).join("");const c=this.putEllipsis(this.calcIndexes()),w=c>-1,h={clamped:w,text:w?this.units.slice(0,c).join(""):n.text};this.setState(h,n.onReflow.bind(this,h))}calcIndexes(){const n=[0];let i=this.canvas.firstElementChild;if(!i)return n;let c=0,w=1,h=i.offsetTop;for(;(i=i.nextElementSibling)&&(i.offsetTop>h&&(w++,n.push(c),h=i.offsetTop),c++,!(w>this.maxLine)););return n}putEllipsis(n){if(n.length<=this.maxLine)return-1;const i=n[this.maxLine],c=this.units.slice(0,i),w=this.canvas.children[i].offsetTop;this.canvas.innerHTML=c.map((W,$)=>`<span class='LinesEllipsis-unit'>${W}</span>`).join("")+`<wbr><span class='LinesEllipsis-ellipsis'>${this.props.ellipsis}</span>`;const h=this.canvas.lastElementChild;let j=s(h,2);for(;j&&(h.offsetTop>w||h.offsetHeight>j.offsetHeight||h.offsetTop>j.offsetTop);)this.canvas.removeChild(j),j=s(h,2),c.pop();return c.length}isClamped(){return this.clamped}render(){const{text:n,clamped:i}=this.state,c=this.props,{component:w,ellipsis:h,trimRight:j,className:W}=c,$=x(c,e);return o.createElement(w,f({className:`LinesEllipsis ${i?"LinesEllipsis--clamped":""} ${W}`,ref:z=>this.target=z},b($,O)),i&&j?n.replace(/[\s\uFEFF\xA0]+$/,""):n,o.createElement("wbr",null),i&&o.createElement("span",{className:"LinesEllipsis-ellipsis"},h))}}L.defaultProps=P}}]);
