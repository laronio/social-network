(this.webpackJsonpsocial=this.webpackJsonpsocial||[]).push([[0],{101:function(e,t,n){"use strict";n.d(t,"c",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"g",(function(){return x})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return w})),n.d(t,"a",(function(){return O}));var r=n(8),a=n.n(r),c=n(14),s=n(37),i=n(3),o=n(12),u=n(76),l=n(33),d="ADD_NEW_POST",f="SET_USER_PROFILE",j="SET_USER_STATUS",p="DELETE_USER",b="SAVE_PHOTO_SUCCESS",h={postItem:[{id:1,message:"It's my first post",likes:20},{id:2,message:"Where are you from?",likes:14},{id:3,message:"It's my first post",likes:10},{id:4,message:"Where are you from?",likes:16}],selectedUserProfile:null,status:""};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:var n={id:5,message:t.newPostText,likes:24};return Object(i.a)(Object(i.a)({},e),{},{postItem:[].concat(Object(s.a)(e.postItem),[n]),newPostText:""});case f:return Object(i.a)(Object(i.a)({},e),{},{selectedUserProfile:t.userProfile});case j:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case p:return Object(i.a)(Object(i.a)({},e),{},{postItem:e.postItem.filter((function(e){return e.id!==t.currentId}))});case b:return Object(i.a)(Object(i.a)({},e),{},{selectedUserProfile:Object(i.a)(Object(i.a)({},e.selectedUserProfile),{},{photos:t.photos})});default:return e}};var O=function(e){return{type:d,newPostText:e}},g=function(e){return{type:j,status:e}},m=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:f,userProfile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.getStatus(e);case 2:r=t.sent,n(g(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.c.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(g(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:b,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e,t){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.c.saveProfile(e);case 2:if(r=t.sent,c=u.a.getState().authHeader.userId,0!==r.data.resultCode){t.next=9;break}n(m(c)),t.next=11;break;case 9:return n(Object(l.a)("profileForm",{_error:r.data.messages[0]})),t.abrupt("return",Promise.reject(r.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},111:function(e,t,n){"use strict";t.a=n.p+"static/media/person.8b9cd9e1.png"},12:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o}));var r=n(137),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"0e92fc75-8146-407a-be2e-145397bb4003"}}),c={getUsers:function(e,t){return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},o={getCaptcha:function(){return a.get("/security/get-captcha-url")}}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(37),a=n(3),c="ADD_NEW_MESSAGE",s={dialogItem:[{id:1,name:"Vovka"},{id:2,name:"Temka"},{id:3,name:"Dimka"},{id:4,name:"Stasyan"},{id:5,name:"Danya"},{id:6,name:"Andrei"}],messageItem:[{id:1,message:"Hi!"},{id:2,message:"How are you?"},{id:3,message:"I'm chilling out!"}]};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;if(t.type===c){var n={id:4,message:t.newMessageText};return Object(a.a)(Object(a.a)({},e),{},{messageItem:[].concat(Object(r.a)(e.messageItem),[n]),newMessageText:""})}return e};var i=function(e){return{type:c,newMessageText:e}}},138:function(e,t,n){},139:function(e,t,n){},140:function(e,t,n){},17:function(e,t,n){e.exports={aside:"Aside_aside__2TvKR",aside_list:"Aside_aside_list__1_GgW",aside_list_item:"Aside_aside_list_item__2X7kB",active:"Aside_active__1Tjz3"}},174:function(e,t,n){},175:function(e,t,n){},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"a",(function(){return j})),n.d(t,"c",(function(){return p}));var r=n(3),a=n(59),c=(n(0),n(70)),s=n.n(c),i=n(96),o=n(1),u=["input","meta","child"],l=["input","meta","child"],d=function(e){e.input;var t=e.meta,n=t.touched,r=t.error,a=e.children,c=n&&r;return Object(o.jsxs)("div",{className:c?s.a.error:"",children:[Object(o.jsx)("div",{children:a}),c&&Object(o.jsx)("span",{children:r})]})},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,u));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},j=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,l));return Object(o.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(o.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))},p=function(e,t,n,a){var c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(o.jsxs)("div",{children:[Object(o.jsx)(i.a,Object(r.a)({placeholder:e,name:t,component:n,validate:a},c)),s]})}},29:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return h}));var r=n(8),a=n.n(r),c=n(14),s=n(3),i=n(12),o=n(33),u="SET_AUTH_DATA",l="GET_CAPTCHA_URL_SUCCESS",d={userId:null,email:null,login:null,isAuth:!1,captchaURL:null};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:case l:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}};var f=function(e,t,n,r){return{type:u,payload:{userId:e,email:t,login:n,isAuth:r}}},j=function(e){return{type:l,payload:{captchaURL:e}}},p=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.email,o=r.login,t(f(c,s,o,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},b=function(e,t,n,r){return function(){var s=Object(c.a)(a.a.mark((function c(s){var u,l;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.a.login(e,t,n,r);case 2:0===(u=a.sent).data.resultCode?s(p()):(10===u.data.resultCode&&s(O()),l=u.data.messages.length>0?u.data.messages[0]:"Some error!",s(Object(o.a)("login",{_error:l})));case 4:case"end":return a.stop()}}),c)})));return function(e){return s.apply(this,arguments)}}()},h=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(f(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},O=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.b.getCaptcha();case 2:n=e.sent,r=n.data.url,t(j(r));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},300:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(68),s=n.n(c),i=(n(174),n(38)),o=n(39),u=n(42),l=n(41),d=(n(175),n(3)),f=n(15),j=n(77),p=n.n(j),b=n.p+"static/media/vk-256x256.d113d735.png",h=n(1),O=function(e){return Object(h.jsxs)("header",{className:p.a.header,children:[Object(h.jsx)("img",{className:p.a.header_img,src:b,alt:"logo"}),Object(h.jsx)("div",{className:p.a.header_login,children:e.isAuth?Object(h.jsxs)("div",{children:[e.login," - ",Object(h.jsx)("button",{onClick:e.logout,children:"Log out"})]}):Object(h.jsx)(f.b,{to:"/login",children:"Login"})})]})},g=n(18),m=n(29),v=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(h.jsx)(O,Object(d.a)({},this.props))}}]),n}(a.a.Component),x=Object(g.b)((function(e){return{login:e.authHeader.login,isAuth:e.authHeader.isAuth}}),{logout:m.d})(v),_=n(17),w=n.n(_),P=function(e){return Object(h.jsx)("div",{className:w.a.aside,children:Object(h.jsxs)("ul",{className:w.a.aside_list,children:[Object(h.jsx)("li",{className:w.a.aside_list_item,children:Object(h.jsx)(f.b,{to:"/profile",activeClassName:w.a.active,children:"Profile"})}),Object(h.jsx)("li",{className:w.a.aside_list_item,children:Object(h.jsx)(f.b,{to:"/dialogs",activeClassName:w.a.active,children:"Dialogs"})}),Object(h.jsx)("li",{className:w.a.aside_list_item,children:Object(h.jsx)(f.b,{to:"/news",activeClassName:w.a.active,children:"News"})}),Object(h.jsx)("li",{className:w.a.aside_list_item,children:Object(h.jsx)(f.b,{to:"/music",activeClassName:w.a.active,children:"Music"})}),Object(h.jsx)("li",{className:w.a.aside_list_item,children:Object(h.jsx)(f.b,{to:"/settings",activeClassName:w.a.active,children:"Settings"})}),Object(h.jsx)("li",{className:w.a.aside_list_item,children:Object(h.jsx)(f.b,{to:"/users",activeClassName:w.a.active,children:"Users"})})]})})},y=n(138),S=n.n(y),C=function(e){return Object(h.jsx)("div",{className:S.a.news,children:"News"})},E=n(139),U=n.n(E),R=function(e){return Object(h.jsx)("div",{className:U.a.music,children:"Music"})},I=n(140),N=n.n(I),k=function(e){return Object(h.jsx)("div",{className:N.a.settingss,children:"Settings"})},T=n(10),A=n(59),L=n(55),F=n.n(L),z=n(72),D=n(134),H=n(78),M=n.n(H),G=n(141),W=n.n(G),q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,a=e.currentPage,c=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var d=Math.ceil(o/i),f=Object(r.useState)(1),j=Object(D.a)(f,2),p=j[0],b=j[1],O=(p-1)*i+1,g=p*i;return Object(h.jsxs)("div",{className:M.a.paginator,children:[p>1&&Object(h.jsx)("button",{onClick:function(){b(p-1)},children:"PREV"}),u.filter((function(e){return e>=O&&e<=g})).map((function(e){return Object(h.jsx)("span",{className:W()(Object(z.a)({},M.a.selectedPage,a===e),M.a.pageNumber),onClick:function(t){c(e)},children:e},e)})),d>p&&Object(h.jsx)("button",{onClick:function(){b(p+1)},children:"NEXT"})]})},V=n(111),X=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow;return Object(h.jsxs)("div",{className:F.a.user,children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{children:Object(h.jsx)(f.b,{to:"/profile/"+t.id,children:Object(h.jsx)("img",{className:F.a.user_image,src:null!=t.photos.small?t.photos.small:V.a,alt:"avatar"})})}),t.followed?Object(h.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)},children:"unfollow"}):Object(h.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"follow"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("p",{children:"user.location.country".concat(", ","user.location.city")}),Object(h.jsx)("p",{children:t.name}),Object(h.jsx)("p",{children:t.status})]})]},t.id)},K=["currentPage","onPageChanged","totalUsersCount","pageSize","users"],B=function(e){var t=e.currentPage,n=e.onPageChanged,r=e.totalUsersCount,a=e.pageSize,c=e.users,s=Object(A.a)(e,K);return Object(h.jsxs)("div",{className:F.a.users,children:[Object(h.jsx)(q,{currentPage:t,onPageChanged:n,totalItemsCount:r,pageSize:a}),c.map((function(e){return Object(h.jsx)(X,{user:e,followingInProgress:s.followingInProgress,follow:s.follow,unfollow:s.unfollow},e.id)}))]})},J=n(32),Y=n(44),Z=n(11),Q=n(144),$=Object(Q.a)((function(e){return e.usersReducer.users}),(function(e){return e.filter((function(e){return!0}))})),ee=function(e){return e.usersReducer.pageSize},te=function(e){return e.usersReducer.totalUsersCount},ne=function(e){return e.usersReducer.currentPage},re=function(e){return e.usersReducer.isFetching},ae=function(e){return e.usersReducer.followingInProgress},ce=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,a=new Array(r),c=0;c<r;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.requestUsers(t,n)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){if(0===this.props.users.length){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}}},{key:"render",value:function(){return Object(h.jsxs)(h.Fragment,{children:[this.props.isFetching?Object(h.jsx)(Y.a,{}):null,Object(h.jsx)(B,{totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,pageSize:this.props.pageSize,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress})]})}}]),n}(a.a.Component),se=Object(Z.d)(Object(g.b)((function(e){return{users:$(e),pageSize:ee(e),totalUsersCount:te(e),currentPage:ne(e),isFetching:re(e),followingInProgress:ae(e)}}),{follow:J.c,unfollow:J.f,SetCurrentPage:J.a,toggleFollowingProgress:J.e,requestUsers:J.d}))(ce),ie=n(133),oe=n(69),ue=n(26),le=n(70),de=n.n(le),fe=Object(ie.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaURL;return Object(h.jsxs)("form",{onSubmit:t,children:[Object(ue.c)("email","email",ue.a,[oe.b]),Object(ue.c)("password","password",ue.a,[oe.b],{type:"password"}),Object(ue.c)(null,"remember me",ue.a,[],{type:"checkbox"},"remember me"),n&&Object(h.jsx)("div",{className:de.a.commonLoginError,children:n}),Object(h.jsx)("div",{children:Object(h.jsx)("button",{children:"Login"})}),r&&Object(h.jsx)("img",{alt:"captcha",src:r}),r&&Object(ue.c)("Captcha","captcha",ue.a,[oe.b])]})})),je=Object(g.b)((function(e){return{isAuth:e.authHeader.isAuth,captchaURL:e.authHeader.captchaURL}}),{login:m.c})((function(e){return e.isAuth?Object(h.jsx)(T.Redirect,{to:"/profile"}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Login"}),Object(h.jsx)(fe,{captchaURL:e.captchaURL,onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}})]})})),pe=n(75),be=n(76),he=function(e){return function(t){return Object(h.jsx)(a.a.Suspense,{fallback:Object(h.jsx)(Y.a,{}),children:Object(h.jsx)(e,Object(d.a)({},t))})}},Oe=n(100),ge=a.a.lazy((function(){return n.e(4).then(n.bind(null,309))})),me=a.a.lazy((function(){return n.e(3).then(n.bind(null,308))})),ve=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"catchAllUnhandledErrors",value:function(e){alert("Some errors occured")}},{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsx)(P,{}),Object(h.jsx)("div",{className:"App_main",children:Object(h.jsxs)(T.Switch,{children:[Object(h.jsx)(T.Route,{exact:!0,path:"/social-network",render:function(){return Object(h.jsx)(Oe.Redirect,{to:"/profile"})}}),Object(h.jsx)(T.Route,{exact:!0,path:"/",render:function(){return Object(h.jsx)(Oe.Redirect,{to:"/profile"})}}),Object(h.jsx)(T.Route,{path:"/profile/:userId?",render:he(me)}),Object(h.jsx)(T.Route,{path:"/dialogs",render:he(ge)}),Object(h.jsx)(T.Route,{path:"/news",render:function(){return Object(h.jsx)(C,{})}}),Object(h.jsx)(T.Route,{path:"/music",render:function(){return Object(h.jsx)(R,{})}}),Object(h.jsx)(T.Route,{path:"/settings",render:function(){return Object(h.jsx)(k,{})}}),Object(h.jsx)(T.Route,{path:"/users",render:function(){return Object(h.jsx)(se,{})}}),Object(h.jsx)(T.Route,{path:"/login",render:function(){return Object(h.jsx)(je,{})}}),Object(h.jsx)(T.Route,{path:"*",render:function(){return Object(h.jsx)("div",{children:"404: NOT FOUND"})}})]})})]}):Object(h.jsx)(Y.a,{})}}]),n}(a.a.Component),xe=Object(Z.d)(T.withRouter,Object(g.b)((function(e){return{initialized:e.appReducer.initialized}}),{initializeApp:pe.b}))(ve),_e=function(){return Object(h.jsx)(f.a,{children:Object(h.jsx)(g.a,{store:be.a,children:Object(h.jsx)(xe,{})})})};s.a.render(Object(h.jsx)(_e,{}),document.getElementById("root"))},32:function(e,t,n){"use strict";n.d(t,"d",(function(){return g})),n.d(t,"c",(function(){return v})),n.d(t,"f",(function(){return x})),n.d(t,"a",(function(){return y})),n.d(t,"e",(function(){return E}));var r=n(8),a=n.n(r),c=n(14),s=n(37),i=n(3),o=n(12),u=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="FOLLOW",d="UNFOLLOW",f="SET_USERS",j="SET_CURRENT_PAGE",p="SET_TOTAL_USERS_COUNT",b="SET_FETCH_TOGGLE",h="TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},g=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(C(!0)),r(y(e)),n.next=4,o.d.getUsers(e,t);case 4:c=n.sent,r(C(!1)),r(P(c.items)),r(S(c.totalCount));case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},m=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(E(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(E(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),v=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m(n,e,o.d.follow.bind(o.d),_);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:m(n,e,o.d.unfollow.bind(o.d),w);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=(t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:Object(s.a)(t.users)});case j:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case p:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case b:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):[e.followingInProgress.filter((function(e){return e!==t.userId}))]});default:return e}},function(e){return{type:l,userId:e}}),w=function(e){return{type:d,userId:e}},P=function(e){return{type:f,users:e}},y=function(e){return{type:j,currentPage:e}},S=function(e){return{type:p,count:e}},C=function(e){return{type:b,isFetching:e}},E=function(e,t){return{type:h,isFetching:e,userId:t}}},44:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/1491.ddd47ec4.gif",a=n(1);t.a=function(){return Object(a.jsx)("div",{style:{backgroundColor:"white"},children:Object(a.jsx)("img",{src:r,alt:"preloader!"})})}},55:function(e,t,n){e.exports={user:"Users_user__2UlEr",user_image:"Users_user_image__qvKqc"}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required!"},a=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols!")}}},70:function(e,t,n){e.exports={error:"FormControls_error__1R8xb",commonLoginError:"FormControls_commonLoginError__1xG1U"}},75:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(3),a=n(29),c="INITIALIZED_SUCCESS",s={initialized:!1};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return t.type===c?Object(r.a)(Object(r.a)({},e),{},{initialized:!0}):e};var i=function(){return function(e){e(Object(a.b)()).then((function(){e({type:c})}))}}},76:function(e,t,n){"use strict";var r=n(11),a=n(143),c=n(101),s=n(132),i={},o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i;return e},u=n(32),l=n(29),d=n(75),f=n(135),j=Object(r.c)({profileReducer:c.b,dialogsReducer:s.b,asideReducer:o,usersReducer:u.b,authHeader:l.a,appReducer:d.a,form:f.a}),p=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,b=Object(r.e)(j,p(Object(r.a)(a.a)));window.store=b;t.a=b},77:function(e,t,n){e.exports={header:"Header_header__23AuS",header_img:"Header_header_img__3cNuo",header_login:"Header_header_login__4dHD-"}},78:function(e,t,n){e.exports={paginator:"Paginator_paginator__33WHW",pageNumber:"Paginator_pageNumber__1gcbO",selectedPage:"Paginator_selectedPage__1ye8d"}}},[[300,1,2]]]);
//# sourceMappingURL=main.575e3f55.chunk.js.map