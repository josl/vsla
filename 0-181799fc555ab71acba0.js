(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(n,a,r){"use strict";var u=r(8);a.__esModule=!0,a.withPrefix=X,a.navigateTo=a.replace=a.push=a.navigate=a.default=void 0;var l=u(r(154)),e=u(r(59)),c=u(r(7)),s=u(r(54)),i=u(r(55)),y=u(r(4)),f=u(r(0)),F=r(23),N=r(150);function X(n){return function(n){return n.replace(/\/+/g,"/")}("/"+n)}var Y={activeClassName:y.default.string,activeStyle:y.default.object},E=function(n){function a(a){var r;r=n.call(this)||this,(0,i.default)((0,s.default)((0,s.default)(r)),"defaultGetProps",function(n){return n.isCurrent?{className:[r.props.className,r.props.activeClassName].filter(Boolean).join(" "),style:(0,e.default)({},r.props.style,r.props.activeStyle)}:null});var u=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(u=!0),r.state={IOSupported:u},r.handleRef=r.handleRef.bind((0,s.default)((0,s.default)(r))),r}(0,c.default)(a,n);var r=a.prototype;return r.componentDidUpdate=function(n,a){this.props.to===n.to||this.state.IOSupported||___loader.enqueue((0,N.parsePath)(this.props.to).pathname)},r.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,N.parsePath)(this.props.to).pathname)},r.handleRef=function(n){var a,r,u,l=this;this.props.innerRef&&this.props.innerRef(n),this.state.IOSupported&&n&&(a=n,r=function(){___loader.enqueue((0,N.parsePath)(l.props.to).pathname)},(u=new window.IntersectionObserver(function(n){n.forEach(function(n){a===n.target&&(n.isIntersecting||n.intersectionRatio>0)&&(u.unobserve(a),u.disconnect(),r())})})).observe(a))},r.render=function(){var n=this,a=this.props,r=a.to,u=a.getProps,c=void 0===u?this.defaultGetProps:u,s=a.onClick,i=a.onMouseEnter,y=(a.activeClassName,a.activeStyle,a.ref,a.innerRef,a.state),Y=a.replace,E=(0,l.default)(a,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),o=X(r);return f.default.createElement(F.Link,(0,e.default)({to:o,state:y,getProps:c,innerRef:this.handleRef,onMouseEnter:function(n){i&&i(n),___loader.hovering((0,N.parsePath)(r).pathname)},onClick:function(a){return s&&s(a),0!==a.button||n.props.target||a.defaultPrevented||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey||(a.preventDefault(),w(r,{state:y,replace:Y})),!0}},E))},a}(f.default.Component);E.propTypes=(0,e.default)({},Y,{innerRef:y.default.func,onClick:y.default.func,to:y.default.string.isRequired,replace:y.default.bool});var o=E;a.default=o;var w=function(n,a){window.___navigate(X(n),a)};a.navigate=w;var O=function(n){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(X(n))};a.push=O;a.replace=function(n){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(X(n))};a.navigateTo=function(n){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),O(n)}},148:function(n,a,r){"use strict";var u=r(9);r(0);a.a=function(){return Object(u.a)("footer",{className:"softkey"},Object(u.a)("div",{id:"softkey-left"},"Back"),Object(u.a)("div",{id:"softkey-center"},"SELECT"),Object(u.a)("div",{id:"softkey-right"},"Options"))}},149:function(n,a,r){"use strict";var u=r(9),l=r(0),e=r.n(l),c=r(150),s=(r(85),r(86),r(87),r(52),r(156),r(162),r(34),r(7)),i=r.n(s),y=(r(90),r(164),(new Date).getTime()),f=[],F=[];function N(n){for(var a=n[0].offset.left,r=n[0].offset.right,u=n[0].offset.top,l=n[0].offset.bottom,e=1,c=n.length;e<c;e++){var s=n[e].offset.left,i=n[e].offset.top,y=n[e].offset.right,f=n[e].offset.bottom;a=s<a?s:a,u=i<u?i:u,r=y>r?y:r,l=f>l?f:l}return[r-a,l-u]}var X=function(n){function a(a){var r;return(r=n.call(this,a)||this).state={currentEvent:null,componentRendered:null,matrixForNavigation:null,currentX:0,currentY:0,activeElement:null,prevComponentRendered:[],prevActiveElement:[],nextComponentRendered:null,arrayOfCoordinates:[],initialOffsetX:0,initialOffsetY:0,resume:!0,matrixWidth:0,matrixHeight:0,myRef:e.a.createRef()},r}i()(a,n);var r=a.prototype;return r.componentDidMount=function(){window.addEventListener("keydown",this.handleKeyDown.bind(this),!0)},r.handleKeyDown=function(n){var a=this;if(null!==this.state.matrixForNavigation&&this.state.resume){var r=this.state.matrixForNavigation.length,u=this.state.matrixForNavigation[0].length,l=function(){for(var n=arguments,a=this,r=arguments[1];r>=0;){if(void 0!==this.state.matrixForNavigation[arguments[0]][r]&&null!==this.state.matrixForNavigation[arguments[0]][r])return this.state.activeElement.blur(),this.setState(function(a){n[0]}),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus(),!0;r--}return!1}.bind(this),e=function(){for(var n=arguments,a=this,r=arguments[1];r<u;){if(void 0!==this.state.matrixForNavigation[arguments[0]][r]&&null!==this.state.matrixForNavigation[arguments[0]][r])return this.state.activeElement.blur(),this.setState(function(a){n[0]}),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus(),!0;r++}return!1}.bind(this),c=function(){for(var n=arguments,a=this,r=arguments[0];r>=0;){if(void 0!==this.state.matrixForNavigation[r][arguments[1]]&&null!==this.state.matrixForNavigation[r][arguments[1]])return this.state.activeElement.blur(),this.setState(function(a){n[1]}),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus(),!0;r--}return!1}.bind(this),s=function(){for(var n=arguments,a=this,u=arguments[0];u<r;){if(void 0!==this.state.matrixForNavigation[u][arguments[1]]&&null!==this.state.matrixForNavigation[u][arguments[1]])return this.state.activeElement.blur(),this.setState(function(a){n[1]}),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus(),!0;u++}return!1}.bind(this);if(null!=this.state.matrixForNavigation&&0!=this.state.matrixForNavigation.length)if(this.setState(function(n){}),40==n.keyCode){if(this.state.currentX+1>=r)   ;else if(null!=this.state.matrixForNavigation[this.state.currentX+1][this.state.currentY]&&this.state.matrixForNavigation[this.state.currentX+1][this.state.currentY]!=this.state.activeElement)this.state.activeElement.blur(),this.setState(function(n){a.state.currentX}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus();else if(void 0!==this.state.matrixForNavigation[this.state.currentX+1][this.state.currentY]&&this.state.matrixForNavigation[this.state.currentX+1][this.state.currentY]!=this.state.activeElement&&null===this.state.matrixForNavigation[this.state.currentX+1][this.state.currentY]){for(var i=this.state.currentX+1,y=!1;i<r;){if(null!=this.state.matrixForNavigation[i][this.state.currentY]){this.state.activeElement.blur(),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus(),y=!0;break}i++}if(this.state.currentY>=0&&!y)0==l(this.state.currentX+1,this.state.currentY)&&e(this.state.currentX+1,this.state.currentY)}else if(this.state.matrixForNavigation[this.state.currentX+1][this.state.currentY]===this.state.activeElement)for(i=this.state.currentX+1;i<r;){if(this.state.matrixForNavigation[i][this.state.currentY]!=this.state.activeElement){this.state.activeElement.blur(),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus();break}i++}}else if(38==n.keyCode){if(this.state.currentX-1<0)   ;else if(null!=this.state.matrixForNavigation[this.state.currentX-1][this.state.currentY]&&this.state.matrixForNavigation[this.state.currentX-1][this.state.currentY]!=this.state.activeElement)this.state.activeElement.blur(),this.setState(function(n){a.state.currentX}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus();else if(void 0!==this.state.matrixForNavigation[this.state.currentX-1][this.state.currentY]&&this.state.matrixForNavigation[this.state.currentX-1][this.state.currentY]!=this.state.activeElement&&null===this.state.matrixForNavigation[this.state.currentX-1][this.state.currentY]){var f=this.state.currentX-1;for(y=!1;f>=0;){if(null!=this.state.matrixForNavigation[f][this.state.currentY]){this.state.activeElement.blur(),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus(),y=!0;break}f--}if(this.state.currentY>0&&!y)0==l(this.state.currentX-1,this.state.currentY)&&e(this.state.currentX-1,this.state.currentY)}else if(this.state.matrixForNavigation[this.state.currentX-1][this.state.currentY]===this.state.activeElement)for(f=this.state.currentX-1;f>=0;){if(this.state.matrixForNavigation[f][this.state.currentY]!=this.state.activeElement){this.state.activeElement.blur(),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus();break}f--}}else if(39==n.keyCode){if(this.currentY+1>=u)   ;else if(null!=this.state.matrixForNavigation[this.state.currentX][this.state.currentY+1]&&this.state.matrixForNavigation[this.state.currentX][this.state.currentY+1]!=this.state.activeElement)this.state.activeElement.blur(),this.setState(function(n){a.state.currentY}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus();else if(void 0!==this.state.matrixForNavigation[this.state.currentX][this.state.currentY+1]&&this.state.matrixForNavigation[this.state.currentX][this.state.currentY+1]!=this.state.activeElement&&null===this.state.matrixForNavigation[this.state.currentX][this.state.currentY+1]){y=!1;for(var F=this.state.currentY+1;F<u;){if(null!=this.state.matrixForNavigation[this.state.currentX][F]){this.state.activeElement.blur(),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus(),y=!0;break}F++}if(this.state.currentY>0&&!y)0==c(this.state.currentX,this.state.currentY+1)&&s(this.state.currentX,this.state.currentY+1)}else if(this.state.matrixForNavigation[this.state.currentX][this.state.currentY+1]===this.state.activeElement)for(F=this.state.currentY+1;F<u;){if(this.state.matrixForNavigation[this.state.currentX][F]!=this.state.activeElement){this.state.activeElement.blur(),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus();break}F++}}else if(37==n.keyCode)if(this.state.currentY-1<0)   ;else if(null!=this.state.matrixForNavigation[this.state.currentX][this.state.currentY-1]&&this.state.matrixForNavigation[this.state.currentX][this.state.currentY-1]!=this.state.activeElement)this.state.activeElement.blur(),this.setState(function(n){a.state.currentY}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus();else if(void 0!==this.state.matrixForNavigation[this.state.currentX][this.state.currentY-1]&&this.state.matrixForNavigation[this.state.currentX][this.state.currentY-1]!=this.state.activeElement&&null===this.state.matrixForNavigation[this.state.currentX][this.state.currentY-1]){var N=this.state.currentY-1;for(y=!1;N>=0;){if(null!=this.state.matrixForNavigation[this.state.currentX][N]){this.state.activeElement.blur(),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus(),y=!0;break}N--}if(this.state.currentX>0&&!y)0==c(this.state.currentX,this.state.currentY-1)&&s(this.state.currentX,this.state.currentY-1)}else if(this.state.matrixForNavigation[this.state.currentX][this.currentY-1]===this.state.activeElement)for(N=this.currentY-1;N>=0;){if(this.state.matrixForNavigation[this.state.currentX][N]!=this.state.activeElement){this.state.activeElement.blur(),this.setState(function(n){}),this.setState(function(n){a.state.matrixForNavigation[a.state.currentX][a.state.currentY]}),this.state.activeElement.focus();break}N--}}else console.log("Navigation is paused")},r._getLocationOfActiveElement=function(n){if(null!=this.state.matrixForNavigation)for(var a=0;a<this.state.matrixForNavigation.length;a++)for(var r=0;r<this.state.matrixForNavigation[0].length;r++)if(this.state.matrixForNavigation[a][r]==n)return[a,r];return[0,0]},r.getWindowRelativeOffset=function(n){return n.getBoundingClientRect()},r.makeNavigationRulesForComponent=function(n,a,r){var u=this,l=this,e=JSON.parse(JSON.stringify(function n(a){var r=new Array(a||0),u=a;if(arguments.length>1)for(var l=Array.prototype.slice.call(arguments,1);u--;)r[a-1-u]=n.apply(this,l);return r}(a,r)));new Promise(function(l,c){var s=u.state.matrixWidth/r,i=u.state.matrixHeight/a;l(function(n,a,r,u){var l=Array.from(Object.create(a)),e=n;function c(n,a,r,u,l,e){for(var c=0;c<e;c++)for(var s=0;s<l;s++)n[r+c][u+s]=a}if(null!=e&&e!=[])for(var s=0;s<e.length;s++)for(var i=0;i<e[s].length;i++){var y=0,f=0;null!=e[s][i]&&(y=Math.round(e[s][i].offset.width/r),f=Math.round(e[s][i].offset.height/u)),null!==e[s][i]&&(y>1||f>1)?c(l,e[s][i].elementToFocus,s,i,y,f):null!==e[s][i]&&(l[s][i]=e[s][i].elementToFocus)}return l}(function(n){for(var a=0;a<n.length;a++){var r=n.length*n[a].offset.x+n[a].offset.y;n[a].iValue=r}n.sort(function(n,a){var r=n.offset.y,u=a.offset.y;return r<u?-1:r>u?1:0});var u=[],l=[],e=!1;for(a=0;a<n.length;a++)e?n[a].offset.y>l[l.length-1].offset.y&&a!=n.length-1?(u.push(l),(l=[]).push(n[a])):a===n.length-1?n[a].offset.y>l[l.length-1].offset.y?(u.push(l),(l=[]).push(n[a]),u.push(l)):(l.push(n[a]),u.push(l)):l.push(n[a]):(l.push(n[a]),e=!0);l.length>0&&0==u.length&&u.push(l);for(var c=0;c<u.length;c++)u[c].sort(function(n,a){var r=n.offset.x,u=a.offset.x;return r<u?-1:r>u?1:0});var s=[].concat(new Set(u.reduce(function(n,a){return n.concat(a.map(function(n){return n.offset.x}))},[]))).sort(function(n,a){return n-a});return u.forEach(function(n){s.forEach(function(a,r){(void 0===n[r]||n[r].offset.x>a)&&n.splice(r,0,null)})}),u}(n),e,s,i)),c(err)}).then(function(n){if(l.matrixForNavigation=n,0!=l.state.matrixForNavigation.length&&null!=l.state.matrixForNavigation){var a=!1;if(l.state.prevComponentRendered.length>=2&&l.state.prevActiveElement.length>=2&&l.state.prevComponentRendered[l.state.prevComponentRendered.length-2]==l.state.nextComponentRendered&&null!=l.state.prevComponentRendered[l.state.prevComponentRendered.length-2]&&null!=l.state.nextComponentRendered){var r=l.prevActiveElement[l.state.prevActiveElement.length-2];u.setState(function(n){r[0]}),u.setState(function(n){r[1]}),a=!0}if(l.state.matrixForNavigation.length<l.state.currentX&&l.state.matrixForNavigation[0].length<l.state.currentY){for(var e=0;e<l.state.matrixForNavigation[0].length;e++)if(null!=l.state.matrixForNavigation[0][e]){u.setState(function(n){}),u.setState(function(n){}),u.setState(function(n){l.state.matrixForNavigation[l.state.currentX][l.state.currentY]}),l.state.activeElement.focus();break}}else if(l.state.matrixForNavigation.length>l.state.currentX&&l.state.matrixForNavigation[0].length>l.currentY&&a)l.activeElement=l.state.matrixForNavigation[l.state.currentX][l.state.currentY],l.state.activeElement.focus();else if(l.state.matrixForNavigation.length>l.state.currentX&&l.state.matrixForNavigation[0].length>l.currentY){for(e=0;e<l.state.matrixForNavigation[0].length;e++)if(null!=l.state.matrixForNavigation[0][e]){u.setState(function(n){}),u.setState(function(n){}),u.setState(function(n){l.state.matrixForNavigation[l.state.currentX][l.state.currentY]}),l.state.activeElement.focus();break}}else for(e=0;e<l.state.matrixForNavigation[0].length;e++)if(null!=l.state.matrixForNavigation[0][e]){u.setState(function(n){}),u.setState(function(n){}),u.setState(function(n){l.state.matrixForNavigation[l.state.currentX][l.state.currentY]}),l.state.activeElement.focus();break}}},function(n){console.log(n)})},r.destroyCurrentNavigationView=function(n,a){var r=this,u=(new Date).getTime();return u-y<250?(y=u,!1):"destroy"==a?(this.setState(function(n){return{prevComponentRendered:[].concat(n.prevComponentRendered,[r.state.componentRendered])}}),this.state.prevComponentRendered.length>=5&&this.setState(function(n){return{prevComponentRendered:[].concat(n.prevComponentRendered.slice(Math.max(r.state.prevComponentRendered.length-5,2)))}}),this.setState(function(n){return{prevActiveElement:[].concat(n.prevActiveElement,[r._getLocationOfActiveElement(r.state.activeElement)])}}),this.state.prevActiveElement.length>=5&&this.setState(function(n){return{prevActiveElement:[].concat(n.prevActiveElement.slice(Math.max(r.state.prevActiveElement.length-5,2)))}}),f=[],F=[],this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),y=u,!0):(f=[],F=[],this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),this.setState(function(n){}),y=u,!0)},r.increaseRowCountIfRequired=function(n,a){return n.y=Math.round(n.y),n.y>this.state.initialOffsetY&&n.y>Math.max.apply(Math,F)?(this.setState(function(a){n.y}),F.push(n.y),a+1):n.y<this.state.initialOffsetY&&!F.includes(n.y)?(this.setState(function(a){n.y}),F.push(n.y),a+1):a},r.increaseColumnCountIfRequired=function(n,a){return n.x=Math.round(n.x),n.x>this.state.initialOffsetX&&n.x>Math.max.apply(Math,f)?(this.setState(function(a){n.x}),f.push(n.x),a+1):n.x<this.state.initialOffsetX&&!f.includes(n.x)?(this.setState(function(a){n.x}),f.push(n.x),a+1):a},r.handleView=function(n){var a=this,r=this;r.setState(function(n){}),r.setState(function(n){});new Promise(function(a,r){masterElement=document.getElementById(n),a(masterElement.getElementsByClassName("navigable")),r(err)}).then(function(n){for(var u=0,l=0,e=0;e<n.length;e++){n[e].tabIndex=-1===n[e].tabIndex?0:n[e].tabIndex;var c=r.state.getWindowRelativeOffset(n[e]);u=r.state.increaseRowCountIfRequired(c,u),l=r.state.increaseColumnCountIfRequired(c,l);var s={offset:c,elementToFocus:n[e]};a.setState(function(n){[].concat(n.arrayOfCoordinates,[s])})}r.setState(function(n){N(r.state.arrayOfCoordinates)[0]}),r.setState(function(n){N(r.state.arrayOfCoordinates)[1]}),r.state.makeNavigationRulesForComponent(r.state.arrayOfCoordinates,u,l)},function(n){console.log(n)})},r.getActiveElement=function(){return this.state.activeElement},r.setNavigation=function(n){null===this.state.matrixForNavigation&&(this.setState(function(n){}),this.handleView(n))},r.destroyNavigation=function(n){this.destroyCurrentNavigationView(n,"destroy")},r.getCurrentEvent=function(n){return this.state.currentEvent},r.refreshNavigation=function(n,a){var r=this;"refresh"==a?(this.setState(function(n){[].concat(n.prevComponentRendered,[r.state.componentRendered])}),this.setState(function(n){[].concat(n.prevActiveElement,[r._getLocationOfActiveElement(activeElement)])}),this.destroyCurrentNavigationView(n,"destroy")&&this.handleView(n)):this.destroyCurrentNavigationView(n,a)&&this.handleView(n)},r.getNavigationComponent=function(){return this.state.componentRendered},r.resumeNavigation=function(){this.setState(function(n){n.resume})},r.pauseNavigation=function(){this.setState(function(n){n.resume})},a}(e.a.Component),Y=(new X,X),E=function(n){return Object(u.a)("li",{style:{display:"inline-block",marginRight:"1rem"}},Object(u.a)(c.Link,{to:n.to},n.children))};a.a=function(n){var a=n.children;return Object(u.a)("div",{style:{margin:"0 auto",maxWidth:650,padding:"1.25rem 1rem"}},Object(u.a)("header",{style:{marginBottom:"1.5rem"}},Object(u.a)(c.Link,{to:"/",style:{textShadow:"none",backgroundImage:"none"}},Object(u.a)("h3",{style:{display:"inline"}},"VSLA")),"// ",Object(u.a)(Y,null),Object(u.a)("ul",{className:"wrapper",id:"nav-menu",style:{listStyle:"none",float:"right"}},Object(u.a)(E,{className:"navigable",to:"/"},"Home"),Object(u.a)(E,{className:"navigable",to:"/meetings/"},"Meetings"),Object(u.a)(E,{className:"navigable",to:"/members/"},"Members"),Object(u.a)(E,{className:"navigable",to:"/fund/"},"Fund"))),a)}},150:function(n,a,r){"use strict";r.r(a),r.d(a,"graphql",function(){return E}),r.d(a,"StaticQueryContext",function(){return X}),r.d(a,"StaticQuery",function(){return Y});var u=r(9),l=r(0),e=r.n(l),c=r(4),s=r.n(c),i=r(147),y=r.n(i);r.d(a,"Link",function(){return y.a}),r.d(a,"withPrefix",function(){return i.withPrefix}),r.d(a,"navigate",function(){return i.navigate}),r.d(a,"push",function(){return i.push}),r.d(a,"replace",function(){return i.replace}),r.d(a,"navigateTo",function(){return i.navigateTo});var f=r(151),F=r.n(f);r.d(a,"PageRenderer",function(){return F.a});var N=r(48);r.d(a,"parsePath",function(){return N.a});var X=e.a.createContext({}),Y=function(n){return Object(u.a)(X.Consumer,null,function(a){return n.data||a[n.query]&&a[n.query].data?(n.render||n.children)(n.data?n.data.data:a[n.query].data):Object(u.a)("div",null,"Loading (StaticQuery)")})};function E(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}Y.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},151:function(n,a,r){var u;n.exports=(u=r(155))&&u.default||u},152:function(n,a,r){var u=r(33)("meta"),l=r(12),e=r(27),c=r(26).f,s=0,i=Object.isExtensible||function(){return!0},y=!r(25)(function(){return i(Object.preventExtensions({}))}),f=function(n){c(n,u,{value:{i:"O"+ ++s,w:{}}})},F=n.exports={KEY:u,NEED:!1,fastKey:function(n,a){if(!l(n))return"symbol"==typeof n?n:("string"==typeof n?"S":"P")+n;if(!e(n,u)){if(!i(n))return"F";if(!a)return"E";f(n)}return n[u].i},getWeak:function(n,a){if(!e(n,u)){if(!i(n))return!0;if(!a)return!1;f(n)}return n[u].w},onFreeze:function(n){return y&&F.NEED&&i(n)&&!e(n,u)&&f(n),n}}},153:function(n,a,r){var u=r(12);n.exports=function(n,a){if(!u(n)||n._t!==a)throw TypeError("Incompatible receiver, "+a+" required!");return n}},154:function(n,a){n.exports=function(n,a){if(null==n)return{};var r,u,l={},e=Object.keys(n);for(u=0;u<e.length;u++)r=e[u],a.indexOf(r)>=0||(l[r]=n[r]);return l}},155:function(n,a,r){"use strict";r.r(a);r(56);var u=r(0),l=r.n(u),e=r(4),c=r.n(e),s=r(70),i=r(2),y=function(n){var a=n.location,r=i.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(s.a,Object.assign({location:a,pageResources:r},r.json))};y.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},a.default=y},156:function(n,a,r){"use strict";var u=r(157),l=r(153);n.exports=r(158)("Set",function(n){return function(){return n(this,arguments.length>0?arguments[0]:void 0)}},{add:function(n){return u.def(l(this,"Set"),n=0===n?0:n,n)}},u)},157:function(n,a,r){"use strict";var u=r(26).f,l=r(89),e=r(77),c=r(17),s=r(75),i=r(76),y=r(53),f=r(88),F=r(84),N=r(18),X=r(152).fastKey,Y=r(153),E=N?"_s":"size",o=function(n,a){var r,u=X(a);if("F"!==u)return n._i[u];for(r=n._f;r;r=r.n)if(r.k==a)return r};n.exports={getConstructor:function(n,a,r,y){var f=n(function(n,u){s(n,f,a,"_i"),n._t=a,n._i=l(null),n._f=void 0,n._l=void 0,n[E]=0,null!=u&&i(u,r,n[y],n)});return e(f.prototype,{clear:function(){for(var n=Y(this,a),r=n._i,u=n._f;u;u=u.n)u.r=!0,u.p&&(u.p=u.p.n=void 0),delete r[u.i];n._f=n._l=void 0,n[E]=0},delete:function(n){var r=Y(this,a),u=o(r,n);if(u){var l=u.n,e=u.p;delete r._i[u.i],u.r=!0,e&&(e.n=l),l&&(l.p=e),r._f==u&&(r._f=l),r._l==u&&(r._l=e),r[E]--}return!!u},forEach:function(n){Y(this,a);for(var r,u=c(n,arguments.length>1?arguments[1]:void 0,3);r=r?r.n:this._f;)for(u(r.v,r.k,this);r&&r.r;)r=r.p},has:function(n){return!!o(Y(this,a),n)}}),N&&u(f.prototype,"size",{get:function(){return Y(this,a)[E]}}),f},def:function(n,a,r){var u,l,e=o(n,a);return e?e.v=r:(n._l=e={i:l=X(a,!0),k:a,v:r,p:u=n._l,n:void 0,r:!1},n._f||(n._f=e),u&&(u.n=e),n[E]++,"F"!==l&&(n._i[l]=e)),n},getEntry:o,setStrong:function(n,a,r){y(n,a,function(n,r){this._t=Y(n,a),this._k=r,this._l=void 0},function(){for(var n=this._k,a=this._l;a&&a.r;)a=a.p;return this._t&&(this._l=a=a?a.n:this._t._f)?f(0,"keys"==n?a.k:"values"==n?a.v:[a.k,a.v]):(this._t=void 0,f(1))},r?"entries":"values",!r,!0),F(a)}}},158:function(n,a,r){"use strict";var u=r(6),l=r(13),e=r(19),c=r(77),s=r(152),i=r(76),y=r(75),f=r(12),F=r(25),N=r(78),X=r(35),Y=r(159);n.exports=function(n,a,r,E,o,w){var O=u[n],C=O,R=o?"set":"add",x=C&&C.prototype,q={},j=function(n){var a=x[n];e(x,n,"delete"==n?function(n){return!(w&&!f(n))&&a.call(this,0===n?0:n)}:"has"==n?function(n){return!(w&&!f(n))&&a.call(this,0===n?0:n)}:"get"==n?function(n){return w&&!f(n)?void 0:a.call(this,0===n?0:n)}:"add"==n?function(n){return a.call(this,0===n?0:n),this}:function(n,r){return a.call(this,0===n?0:n,r),this})};if("function"==typeof C&&(w||x.forEach&&!F(function(){(new C).entries().next()}))){var P=new C,V=P[R](w?{}:-0,1)!=P,L=F(function(){P.has(1)}),J=N(function(n){new C(n)}),z=!w&&F(function(){for(var n=new C,a=5;a--;)n[R](a,a);return!n.has(-0)});J||((C=a(function(a,r){y(a,C,n);var u=Y(new O,a,C);return null!=r&&i(r,o,u[R],u),u})).prototype=x,x.constructor=C),(L||z)&&(j("delete"),j("has"),o&&j("get")),(z||V)&&j(R),w&&x.clear&&delete x.clear}else C=E.getConstructor(a,n,o,R),c(C.prototype,r),s.NEED=!0;return X(C,n),q[n]=C,l(l.G+l.W+l.F*(C!=O),q),w||E.setStrong(C,n,o),C}},159:function(n,a,r){var u=r(12),l=r(160).set;n.exports=function(n,a,r){var e,c=a.constructor;return c!==r&&"function"==typeof c&&(e=c.prototype)!==r.prototype&&u(e)&&l&&l(n,e),n}},160:function(n,a,r){var u=r(12),l=r(5),e=function(n,a){if(l(n),!u(a)&&null!==a)throw TypeError(a+": can't set as prototype!")};n.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(n,a,u){try{(u=r(17)(Function.call,r(161).f(Object.prototype,"__proto__").set,2))(n,[]),a=!(n instanceof Array)}catch(l){a=!0}return function(n,r){return e(n,r),a?n.__proto__=r:u(n,r),n}}({},!1):void 0),check:e}},161:function(n,a,r){var u=r(91),l=r(51),e=r(36),c=r(80),s=r(27),i=r(79),y=Object.getOwnPropertyDescriptor;a.f=r(18)?y:function(n,a){if(n=e(n),a=c(a,!0),i)try{return y(n,a)}catch(r){}if(s(n,a))return l(!u.f.call(n,a),n[a])}},162:function(n,a,r){"use strict";var u=r(13),l=r(29),e=r(28),c=r(25),s=[].sort,i=[1,2,3];u(u.P+u.F*(c(function(){i.sort(void 0)})||!c(function(){i.sort(null)})||!r(163)(s)),"Array",{sort:function(n){return void 0===n?s.call(e(this)):s.call(e(this),l(n))}})},163:function(n,a,r){"use strict";var u=r(25);n.exports=function(n,a){return!!n&&u(function(){a?n.call(null,function(){},1):n.call(null)})}},164:function(n,a,r){"use strict";var u=r(17),l=r(13),e=r(28),c=r(81),s=r(82),i=r(15),y=r(165),f=r(83);l(l.S+l.F*!r(78)(function(n){Array.from(n)}),"Array",{from:function(n){var a,r,l,F,N=e(n),X="function"==typeof this?this:Array,Y=arguments.length,E=Y>1?arguments[1]:void 0,o=void 0!==E,w=0,O=f(N);if(o&&(E=u(E,Y>2?arguments[2]:void 0,2)),null==O||X==Array&&s(O))for(r=new X(a=i(N.length));a>w;w++)y(r,w,o?E(N[w],w):N[w]);else for(F=O.call(N),r=new X;!(l=F.next()).done;w++)y(r,w,o?c(F,E,[l.value,w],!0):l.value);return r.length=w,r}})},165:function(n,a,r){"use strict";var u=r(26),l=r(51);n.exports=function(n,a,r){a in n?u.f(n,a,l(0,r)):n[a]=r}}}]);
//# sourceMappingURL=0-181799fc555ab71acba0.js.map