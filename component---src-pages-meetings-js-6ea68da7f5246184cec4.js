(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,a,t){"use strict";t.r(a);var n=t(7),s=t.n(n),i=t(51),o=t.n(i),c=t(8),r=t(0),l=t.n(r),u=t(152),d=function(e){return Object(c.a)("div",{className:"box",style:{marginBottom:"0px",padding:"0px"}},Object(c.a)("article",{className:"media"},Object(c.a)("div",{className:"media-content"},Object(c.a)("div",{className:"level content",style:{marginBottom:"0px"}},Object(c.a)("div",{className:"level-item"},Object(c.a)("strong",{className:"is-large"},e.date))),Object(c.a)("div",{className:"level content is-mobile"},Object(c.a)("div",{className:"level-item"},Object(c.a)("strong",null,e.people),Object(c.a)("span",{className:"icon is-large"},Object(c.a)("i",{className:"fas fa-2x fa-users","aria-hidden":"true"}))),Object(c.a)("div",{className:"level-item"},Object(c.a)("strong",null,e.ins),Object(c.a)("span",{className:"icon is-large has-text-success"},Object(c.a)("i",{className:"fas fa-2x fa-sign-in-alt","aria-hidden":"true"})),Object(c.a)("span",{className:"icon is-large has-text-danger"},Object(c.a)("i",{className:"fas fa-2x fa-sign-out-alt","aria-hidden":"true"})),Object(c.a)("strong",null,e.outs))))))},m=t(156),p=t(153),f=t(155),b=function(e){return Object(c.a)("div",{className:"level",style:{marginBottom:"10px"}},Object(c.a)("div",{className:"level-item"},Object(c.a)(m.a,{onClick:e.onClick,class:"fas fa-lg fa-people-carry has-text-info",text:"Fara Taro"})))},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).newMeeting=t.newMeeting.bind(o()(o()(t))),t.state={meetings:[]},t.dates=["24-05-19","11-11-19","14-03-19","01-12-19","12-07-19","09-02-19"],t}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){var e=this;f.a.table("meetings").toArray().then(function(a){e.setState({meetings:a})})},t.newMeeting=function(){var e=this;console.log("button pressed");var a=new Date(+new Date-Math.floor(1e10*Math.random())),t={people:Math.floor(30*Math.random())+1,date:a.toDateString(),ins:Math.floor(30*Math.random())+1,outs:Math.floor(20*Math.random())+1};f.a.table("meetings").add(t).then(function(a){var n=[t].concat(e.state.meetings);e.setState({meetings:n})}).catch(function(e){console.log(e)})},t.render=function(){return Object(c.a)("div",null,Object(c.a)(b,{onClick:this.newMeeting}),this.state.meetings.map(function(e,a){return Object(c.a)(d,{key:e.id,people:e.people,date:e.date,ins:e.ins,outs:e.outs})}))},a}(l.a.Component);a.default=function(){return Object(c.a)(u.a,null,Object(c.a)(p.a,null),Object(c.a)(h,null))}},150:function(e,a,t){var n;e.exports=(n=t(154))&&n.default||n},151:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return b}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return f});var n=t(8),s=t(0),i=t.n(s),o=t(4),c=t.n(o),r=t(149),l=t.n(r);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return r.withPrefix}),t.d(a,"navigate",function(){return r.navigate}),t.d(a,"push",function(){return r.push}),t.d(a,"replace",function(){return r.replace}),t.d(a,"navigateTo",function(){return r.navigateTo});var u=t(150),d=t.n(u);t.d(a,"PageRenderer",function(){return d.a});var m=t(33);t.d(a,"parsePath",function(){return m.a});var p=i.a.createContext({}),f=function(e){return Object(n.a)(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):Object(n.a)("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},152:function(e,a,t){"use strict";var n=t(8);t(0);a.a=function(e){var a=e.children;return Object(n.a)("div",{className:"is-mobile",style:{maxWidth:240}},a)}},153:function(e,a,t){"use strict";var n=t(8),s=(t(0),t(151)),i=function(e){return Object(n.a)("li",null,Object(n.a)(s.Link,{activeClassName:"is-active",to:e.to},Object(n.a)("div",{className:"level"},Object(n.a)("div",{className:"level-item"},e.children),Object(n.a)("div",{className:"level-item"},Object(n.a)("span",{className:"icon fa-lg"},Object(n.a)("i",{className:e.class,"aria-hidden":"true"}))))))};a.a=function(){return Object(n.a)("div",{className:"tabs is-centered is-small",style:{marginBottom:"4px"}},Object(n.a)("ul",{className:"is-mobile"},Object(n.a)(i,{class:"fas is-medium fa-2x fa-toolbox",to:"/fund/"},"Asusu"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-people-carry",to:"/meetings/"},"Taro"),Object(n.a)(i,{class:"fas is-medium fa-2x fa-users",to:"/members/"},"Mambobi")))}},154:function(e,a,t){"use strict";t.r(a);t(52);var n=t(0),s=t.n(n),i=t(4),o=t.n(i),c=t(53),r=t(2),l=function(e){var a=e.location,t=r.default.getResourcesForPathnameSync(a.pathname);return s.a.createElement(c.a,Object.assign({location:a,pageResources:t},t.json))};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},a.default=l},155:function(e,a,t){"use strict";var n=new(t(157).a)("vslaDB");n.version(1).stores({fund:"++id, people, ins, outs",members:"++id, &name, phone, shares, loans, &imgIndex",meetings:"++id, people, &date, ins, outs",attendance:"++, meetingId, memberId, [meetingId+memberId]"}),n.fund.add({people:30,inputs:300,outputs:45}),n.members.bulkAdd([{name:"Amina",phone:173739279,shares:31,loans:4,imgIndex:Math.floor(14*Math.random())},{name:"Fara",phone:24627835,shares:15,loans:34,imgIndex:Math.floor(14*Math.random())},{name:"Ladi",phone:18394026,shares:25,loans:4,imgIndex:Math.floor(14*Math.random())},{name:"Hannah",phone:17363898,shares:13,loans:3,imgIndex:Math.floor(14*Math.random())}]),n.meetings.bulkAdd([{people:"6",date:"Mon Oct 12 2019",ins:"10",outs:"3"},{people:"10",date:"Wed Nov 09 2018",ins:"100",outs:"80"},{people:"15",date:"Fri Oct 21 2017",ins:"145",outs:"30"},{people:"21",date:"Sun Jun 19 2016",ins:"10",outs:"13"},{people:"9",date:"Wed Oct 03 2015",ins:"30",outs:"33"},{people:"18",date:"Sat Feb 29 2014",ins:"10",outs:"53"},{people:"20",date:"Mon Oct 01 2013",ins:"70",outs:"3"}]),a.a=n},156:function(e,a,t){"use strict";var n=t(8);t(0);a.a=function(e){return Object(n.a)("a",{onClick:e.onClick,className:"button is-fullwidth",style:{marginTop:"10px",marginBottom:"5px"}},Object(n.a)("div",{className:"columns is-mobile"},Object(n.a)("div",{className:"column"},Object(n.a)("span",{className:"icon is-large"},Object(n.a)("i",{className:e.class,"aria-hidden":"true"}))),Object(n.a)("div",{className:"column"},Object(n.a)("strong",null,e.text)),Object(n.a)("div",{className:"column"},Object(n.a)("span",{className:"icon"},Object(n.a)("i",{className:"fas fa-angle-down","aria-hidden":"true"})))))}}}]);
//# sourceMappingURL=component---src-pages-meetings-js-6ea68da7f5246184cec4.js.map