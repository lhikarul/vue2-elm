webpackJsonp([5,3],{0:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=n(66),r=i(a),o=n(144),u=i(o),d=n(73),s=i(d),c=n(75),f=i(c),_=n(24),l=i(_),p=n(71),v=i(p);n(125),n(72),n(25),(0,v.default)("GET","/shopping/restaurants",{latitude:31.16407,longitude:121.38876,offset:0,limit:20,"extras[]":"activities"}),(0,l.default)("get","/v2/index_entry",{geohash:"wtw3630xg5e",group_type:1,"flags[]":"F"}),r.default.use(u.default);var m=new u.default({routes:s.default});new r.default({router:m,store:f.default}).$mount("#app")},24:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(81),r=i(a),o=n(48),u=i(o),d=n(49),s=i(d),c=n(50),f=i(c),_=n(25);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];return new f.default(function(a,o){e=e.toUpperCase(),t=_.baseUrl+t;var d=void 0;if(d=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject,"GET"==e){var c="";(0,s.default)(n).forEach(function(e){c+=e+"="+n[e]+"&"}),""!==c&&(c=c.substr(0,c.lastIndexOf("&")),t=t+"?"+c),d.open(e,t,i),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.send()}else"POST"==e?(d.open(e,t,i),d.setRequestHeader("Content-type","application/x-www-form-urlencoded"),d.send((0,u.default)(n))):o("error type");d.onreadystatechange=function(){if(4==d.readyState)if(200==d.status){var e=d.response;"object"!==("undefined"==typeof e?"undefined":(0,r.default)(e))&&(e=JSON.parse(e)),a(e)}else o(d)}})}},25:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=void 0;t.baseUrl=i="https://mainsite-restapi.ele.me",t.baseUrl=i},67:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},71:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(48),r=i(a),o=n(49),u=i(o),d=n(50),s=i(d),c=n(25);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"GET",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new s.default(function(i,a){e=e.toUpperCase(),t=c.baseUrl+t;var o={method:e,headers:{Accept:"application/json","Content-Type":"application/json"},mode:"no-cors"};if("GET"==e){var d="";(0,u.default)(n).forEach(function(e){d+=e+"="+n[e]+"&"}),""!==d&&(d=d.substr(0,d.lastIndexOf("&")),t=t+"?"+d)}else"POST"==e?Object.defineProperty(o,"body",{value:(0,r.default)(n)}):a("error type");fetch(t,o).then(function(e){return 200===e.status?e.json():a(e)}).then(function(e){i(e)}).catch(function(e){a(e)})})}},72:function(e,t){"use strict";!function(e,t){var n=e.documentElement,i="orientationchange"in window?"orientationchange":"resize",a=function(){var e=n.clientWidth;e&&(n.style.fontSize=20*(e/320)+"px")};e.addEventListener&&(t.addEventListener(i,a,!1),e.addEventListener("DOMContentLoaded",a,!1))}(document,window)},73:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(136),r=i(a);t.default=[{path:"/",component:r.default,children:[{path:"",component:function(e){return n.e(1,function(){return e(n(137))})}},{path:"/item",component:function(e){return n.e(0,function(){return e(n(138))})}},{path:"/score",component:function(e){return n.e(2,function(){return e(n(139))})}}]}]},74:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(24),r=i(a);t.default={addNum:function(e,t){var n=e.commit,i=e.state;n("REMBER_ANSWER",{id:t}),i.itemNum<i.itemDetail.length&&n("ADD_ITEMNUM",{num:1})},getData:function(e){var t=e.commit;e.state;(0,r.default)("GET","http://operating-activities.putao.com/happyfriday?active_topic_id=4").then(function(e){t("GET_DATA",{res:e})})},initializeData:function(e){var t=e.commit;t("INITIALIZE_DATA")}}},75:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(66),r=i(a),o=n(47),u=i(o),d=n(76),s=i(d),c=n(74),f=i(c),_=n(24);i(_);r.default.use(u.default);var l={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:66,topic_id:20,answer_name:"答案aaaa",is_standard_answer:0},{topic_answer_id:67,topic_id:20,answer_name:"答案bbbb",is_standard_answer:0},{topic_answer_id:68,topic_id:20,answer_name:"答案cccc",is_standard_answer:0},{topic_answer_id:69,topic_id:20,answer_name:"答案dddd",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",active_id:1,active_title:"欢乐星期五标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:70,topic_id:21,answer_name:"答案A",is_standard_answer:1},{topic_answer_id:71,topic_id:21,answer_name:"答案B",is_standard_answer:0},{topic_answer_id:72,topic_id:21,answer_name:"答案C",is_standard_answer:0},{topic_answer_id:73,topic_id:21,answer_name:"答案D",is_standard_answer:0}]}],answerid:{}};t.default=new u.default.Store({state:l,actions:f.default,mutations:s.default})},76:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(80),o=i(r),u="GET_DATA",d="ADD_ITEMNUM",s="REMBER_ANSWER",c="REMBER_TIME",f="INITIALIZE_DATA",_="GET_USER_INFORM";t.default=(a={},(0,o.default)(a,u,function(e,t){200==t.res.httpStatusCode&&(e.itemDetail=t.res.topiclist)}),(0,o.default)(a,_,function(e,t){e.user_id=t.res.users_id}),(0,o.default)(a,d,function(e,t){e.itemNum+=t.num}),(0,o.default)(a,s,function(e,t){e.answerid[e.itemNum]=t.id}),(0,o.default)(a,c,function(e){e.timer=setInterval(function(){e.allTime++},1e3)}),(0,o.default)(a,f,function(e){e.itemNum=1,e.allTime=0}),a)},125:function(e,t){},127:function(e,t){},136:function(e,t,n){var i,a;n(127),i=n(67);var r=n(141);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,e.exports=i},141:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return t("div",{attrs:{id:"app"}},[t("router-view")])},staticRenderFns:[]}}});