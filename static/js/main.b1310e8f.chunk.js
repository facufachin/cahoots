(this.webpackJsonpcahoots=this.webpackJsonpcahoots||[]).push([[0],{39:function(e,t,n){e.exports={centered:"styles_centered__x3bzC"}},41:function(e,t,n){e.exports={hero_heading:"styles_hero_heading__1odbt"}},44:function(e,t,n){e.exports=n(83)},49:function(e,t,n){},51:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(26),l=n.n(c),o=(n(49),n(8)),i=n(9),u=(n(50),n(51),n(5)),s=n(85),m=n(86),d=n(87),h=n(88),f=n(89),v=n(14),g=n(15),E=n(21),b=n(20),p=n(52),j=JSON.parse('{"apiKey": "AIzaSyCVQuIPNV6lxmIXs2XHWUTzPkleI2Qo_o8","authDomain": "vialquiz-ea6a8.firebaseapp.com","databaseURL": "vialquiz-ea6a8.southamerica-east1.firebasedatabase.app","projectId": "vialquiz-ea6a8","storageBucket": "vialquiz-ea6a8.appspot.com","messagingSenderId": "927740651049","appId": "1:927740651049:web:3c8f3912f9c20d859e5e38","measurementId": "G-5G5HCQLWSF"}'),O=Object(g.a)((function e(t){Object(v.a)(this,e),p.apps.length||p.initializeApp(j),this.firestore=p.firestore(),this.auth=p.auth()})),w=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.firestore.collection("games").doc(t.gameId).collection("players").doc(e).get().then(this._convertDocToPlayer)}},{key:"create",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.firestore;if("gameId"in e){var n=e.gameId;delete e.gameId,t=t.collection("games").doc(n).collection("players")}return t.add(e).then((function(e){return e.get()})).then(this._convertDocToPlayer)}},{key:"list",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0,a=this.firestore;return"gameId"in t&&(a=a.collection("games").doc(t.gameId)),a=a.collection("players"),"limit"in t&&(a=a.limit(t.limit)),void 0!==n?a.onSnapshot((function(t){var a=[];t.forEach((function(t){return a.push(e._convertDocToPlayer(t))})),n(a)})):a.get().then((function(t){return t.docs.map((function(t){return e._convertDocToQuestion(t)}))}))}},{key:"_convertDocToPlayer",value:function(e){return Object.assign({id:e.id},e.data())}}]),n}(O),y=function(e){return(new w).create(e)},C=n(84),I=n(39),k=n.n(I),S=function(e){return r.a.createElement(C.a,{className:k.a.centered,style:{maxWidth:e.maxWidth||null,height:e.verticalCentered?"100%":null}},e.children)},N=function(){function e(){Object(v.a)(this,e)}return Object(g.a)(e,null,[{key:"STATE_DRAFT",get:function(){return"draft"}},{key:"STATE_WAITING_FOR_PLAYERS",get:function(){return"waitingForPlayers"}}]),e}(),_=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"create",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.firestore.collection("games").add(Object.assign({state:N.STATE_DRAFT},e)).then((function(e){return e.get()})).then(this._convertDocToGame)}},{key:"get",value:function(e,t){var n=this,a=this._getGameDoc(e);return void 0!==t?a.onSnapshot((function(e){return t(n._convertDocToGame(e))})):a.get().then(this._convertDocToGame)}},{key:"list",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.firestore.collection("games");return"ownerId"in t&&(n=n.where("ownerId","==",t.ownerId)),"state"in t&&(n=n.where("state","==",t.state)),"shortCode"in t&&(n=n.where("shortCode","==",t.shortCode)),"limit"in t&&(n=n.limit(t.limit)),n.get().then((function(t){return t.docs.map((function(t){return e._convertDocToGame(t)}))}))}},{key:"update",value:function(e,t){var n=this._getGameDoc(e);return"currentQuestionId"in t&&(t.currentQuestion=n.collection("questions").doc(t.currentQuestionId),delete t.currentQuestionId),n.update(t)}},{key:"_getGameDoc",value:function(e){return this.firestore.collection("games").doc(e)}},{key:"_convertDocToGame",value:function(e){var t=Object.assign({id:e.id},e.data());return"currentQuestion"in t&&(t.currentQuestionId=t.currentQuestion.id,t.currentQuestion=t.currentQuestion.path),t}}]),n}(O),A=function(e,t){return(new _).get(e,t)},D=function(e){var t=e.playerName,n=e.setPlayerName,a=e.joinGame;return r.a.createElement(s.a,{onSubmit:function(e){e.preventDefault(),a()}},r.a.createElement(m.a,null,r.a.createElement(d.a,null,"Your Nickname:"),r.a.createElement(h.a,{value:t,onChange:function(e){return n(e.target.value)}})),r.a.createElement(f.a,{color:"primary",type:"submit"},"JOIN"))},T=function(){var e=Object(i.h)().gameId,t=Object(a.useState)(""),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),s=Object(u.a)(o,2),m=s[0],d=s[1],h=Object(a.useState)(null),f=Object(u.a)(h,2),v=f[0],g=f[1];return Object(a.useEffect)((function(){e&&null===v&&A(e).then(g)}),[e,v]),r.a.createElement(S,{maxWidth:500,verticalCentered:!0},r.a.createElement("h1",null,v?v.name:null),m?r.a.createElement(i.a,{to:"/play/".concat(e,"/as/").concat(m)}):r.a.createElement(D,{playerName:c,setPlayerName:l,joinGame:function(){return y({name:c,gameId:e}).then((function(e){return d(e.id)}))}}))},x=n(90),q=n(91),Q=n(102),W=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(new w).get(e,t)},U=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"create",value:function(e){var t=this._popAttr(e,"gameId"),n=this._popAttr(e,"playerId"),a=this._popAttr(e,"questionId");return this.firestore.collection("games").doc(t).collection("answers").add(Object.assign({player:this.firestore.doc(["/games",t,"players",n].join("/")),question:this.firestore.doc(["/games",t,"questions",a].join("/"))},e)).then((function(e){return e.get()})).then(this._convertDocToAnswer)}},{key:"list",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.firestore;return"gameId"in t&&(n=n.collection("games").doc(t.gameId)),n=n.collection("answers"),"questionId"in t&&(n=n.where("question","==",this.firestore.doc("games/".concat(t.gameId,"/questions/").concat(t.questionId)))),"limit"in t&&(n=n.limit(t.limit)),n.get().then((function(t){return t.docs.map((function(t){return e._convertDocToAnswer(t)}))}))}},{key:"_convertDocToAnswer",value:function(e){return Object.assign({id:e.id},e.data())}},{key:"_popAttr",value:function(e,t){var n=e[t];return delete e[t],n}}]),n}(O);function G(e,t){var n=e[t];return delete e[t],n}var P=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"get",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.firestore,r={};return"gameId"in n&&(a=a.collection("games").doc(n.gameId).collection("questions"),r.gameId=n.gameId),a.doc(e).get().then((function(e){return t._convertDocToQuestion(e,r)}))}},{key:"create",value:function(e){var t=this,n=Object.assign({},e),a=G(n,"gameId");return this.firestore.collection("games").doc(a).collection("questions").add(n).then((function(e){return e.get()})).then((function(e){return t._convertDocToQuestion(e,{gameId:a})}))}},{key:"update",value:function(e,t){var n=Object.assign({},t),a=G(n,"gameId");return this.firestore.collection("games").doc(a).collection("questions").doc(e).update(n)}},{key:"list",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=this.firestore,a={};return"gameId"in t&&(n=n.collection("games").doc(t.gameId).collection("questions"),a.gameId=t.gameId),"from"in t&&(n=n.where("order",">",t.from)),n=n.orderBy("order"),"limit"in t&&(n=n.limit(t.limit)),n.get().then((function(t){return t.docs.map((function(t){return e._convertDocToQuestion(t,a)}))}))}},{key:"_convertDocToQuestion",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.assign({id:e.id},e.data(),t)}}]),n}(O),F=function(e){var t=new P;return(new _).get(e.gameId).then((function(e){return t.get(e.currentQuestionId,{gameId:e.id})})).then((function(t){return e.isCorrect=t.correctAnswer===e.choice,e.questionId=t.id,console.log(e),(new U).create(e)}))},R=function(e){var t=e.recordAnswer;return r.a.createElement(x.a,null,["A","B","C","D"].map((function(e){return r.a.createElement(q.a,{sm:12,md:6,className:"mb-4",key:e},r.a.createElement(f.a,{className:"w-100 h-100",onClick:function(){return t(e)}},r.a.createElement("strong",null,e)))})))},z=function(){var e=Object(i.h)(),t=e.gameId,n=e.playerId,c=Object(a.useState)(),l=Object(u.a)(c,2),o=l[0],s=l[1],m=Object(a.useState)(""),d=Object(u.a)(m,2),h=d[0],f=d[1],v=Object(a.useState)(null),g=Object(u.a)(v,2),E=g[0],b=g[1],p=Object(a.useState)(""),j=Object(u.a)(p,2),O=j[0],w=j[1],y=function(e){e&&(b(null),s(e))};Object(a.useEffect)((function(){t&&n&&(A(t,y),W(n,{gameId:t}).then((function(e){return f(e.name)})))}),[t,n]);switch(o?o.state:null){case"pendingQuestion":return r.a.createElement(S,{maxWidth:500,verticalCentered:!0},"Next question coming up...");case"showingQuestion":return E?r.a.createElement(S,{maxWidth:500,verticalCentered:!0},"You chose ",E.choice,"!"):r.a.createElement(S,{maxWidth:500,verticalCentered:!0},r.a.createElement(x.a,{className:"mb-4"},r.a.createElement(q.a,{sm:12},r.a.createElement("h2",null,"Hi ",h,"!"),r.a.createElement("h3",null,"Choose your answer:"))),r.a.createElement(R,{recordAnswer:function(e){F({playerId:n,playerName:h,gameId:t,choice:e}).then(b).catch((function(e){w(e),setTimeout((function(){return w("")}),5e3)}))}}),O?r.a.createElement(Q.a,{color:"danger"},O):null);case"showingQuestionResults":return r.a.createElement(S,{maxWidth:500,verticalCentered:!0},r.a.createElement("div",null,"Showing question results..."));default:return r.a.createElement(S,{maxWidth:500,verticalCentered:!0},"Waiting for game to start...")}},L=n(92),B=n(93),M=n(41),Y=n.n(M),H=function(e){return(new _).list({shortCode:String(e),state:N.STATE_WAITING_FOR_PLAYERS})},J=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),v=Object(u.a)(l,2),g=v[0],E=v[1];return n.length>1?r.a.createElement(S,{maxWidth:500,verticalCentered:!0},r.a.createElement(L.a,null,n.map((function(e){return r.a.createElement(o.b,{key:e.id,to:"/join/".concat(e.id)},r.a.createElement(B.a,{tag:"button",action:!0},e.name))})))):1==n.length?r.a.createElement(i.a,{to:"/join/".concat(n[0].id)}):r.a.createElement(S,{maxWidth:500,verticalCentered:!0},r.a.createElement("h1",{className:Y.a.hero_heading},"Cahoots!"),r.a.createElement(s.a,{className:"mb-5",onSubmit:function(e){e.preventDefault(),H(g).then(c)}},r.a.createElement(m.a,null,r.a.createElement(d.a,{for:"shortCode"},"Game Code:"),r.a.createElement(h.a,{id:"shortCode",type:"number",value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(f.a,{color:"primary",disabled:!g,type:"submit"},"Find Game")))},V=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new w,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new _;return a.update(e,{state:"waitingForPlayers"}),n.list({gameId:e},t)},X=function(e){var t=e.players;return r.a.createElement(L.a,null,t.map((function(e){return r.a.createElement(B.a,{key:e.id},e.name)})))},K=function(e){var t=Object(i.h)().gameId,n=Object(a.useState)([]),c=Object(u.a)(n,2),l=c[0],s=c[1],m=Object(a.useState)(null),d=Object(u.a)(m,2),h=d[0],v=d[1],g="".concat(window.location.origin,"/cahoots/");return Object(a.useEffect)((function(){t&&(V(t,s),A(t).then(v))}),[t]),r.a.createElement(S,{verticalCentered:!0,maxWidth:800},r.a.createElement("h1",{className:"mb-4"},"Waiting for Players to join..."),r.a.createElement("p",null,"To join, go to ",r.a.createElement("a",{href:g,rel:"noopener noreferrer",target:"_blank"},g)," and enter the game code ",r.a.createElement("strong",null,h?h.shortCode:"___")),r.a.createElement(X,{players:l}),r.a.createElement("div",{className:"mt-4"},r.a.createElement(o.b,{to:"/host/".concat(t,"/questions/pending")},r.a.createElement(f.a,{color:"primary"},"Start"))))},$=function(e){Object(E.a)(n,e);var t=Object(b.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(g.a)(n,[{key:"create",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.email,a=t.password;return this.auth.createUserWithEmailAndPassword(n,a).then((function(t){var n=t.user;return e._convertUser(n)})).catch((function(e){var t=e.code,n=e.message;"auth/weak-password"===t?alert("The password is too weak."):alert(n)}))}},{key:"login",value:function(e){var t=this,n=e.email,a=e.password;return this.auth.signInWithEmailAndPassword(n,a).then((function(e){var n=e.user;return t._convertUser(n)})).catch((function(e){var t=e.code,n=e.message;"auth/weak-password"===t?alert("The password is too weak."):alert(n)}))}},{key:"onCurrentUserChange",value:function(e){var t=this;this.auth.onAuthStateChanged((function(n){n&&e(t._convertUser(n))}))}},{key:"_convertUser",value:function(e){return{id:e.uid,email:e.email,name:e.displayName}}}]),n}(O),Z=function(e){var t=e.email,n=e.password;return(new $).create({email:t,password:n})},ee=function(e){var t=e.email,n=e.password;return(new $).login({email:t,password:n})},te=function(e,t){var n=t.email,a=t.password,r=t.authFn,c=t.successCallback;e.preventDefault(),r({email:n,password:a}).then((function(e){return c(e)}))},ne=function(e){var t=e.onUserChange,n=Object(a.useState)(""),c=Object(u.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)(""),v=Object(u.a)(i,2),g=v[0],E=v[1];return r.a.createElement(s.a,{className:"mb-5",onSubmit:function(e){return te(e,{email:l,password:g,authFn:Z,successCallback:t})}},r.a.createElement(m.a,null,r.a.createElement(d.a,{for:"email"},"Email:"),r.a.createElement(h.a,{id:"email",name:"email",value:l,onChange:function(e){return o(e.target.value)}})),r.a.createElement(m.a,null,r.a.createElement(d.a,null,"Password:"),r.a.createElement(h.a,{type:"password",name:"password",value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(f.a,{color:"primary"},"Sign Up"))},ae=function(e){var t=e.onUserChange,n=Object(a.useState)(""),c=Object(u.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)(""),v=Object(u.a)(i,2),g=v[0],E=v[1];return r.a.createElement(s.a,{className:"mb-5",onSubmit:function(e){return te(e,{email:l,password:g,authFn:ee,successCallback:t})}},r.a.createElement(m.a,null,r.a.createElement(d.a,{for:"email"},"Email:"),r.a.createElement(h.a,{id:"email",name:"email",value:l,onChange:function(e){return o(e.target.value)}})),r.a.createElement(m.a,null,r.a.createElement(d.a,null,"Password:"),r.a.createElement(h.a,{type:"password",name:"password",value:g,onChange:function(e){return E(e.target.value)}})),r.a.createElement(f.a,{color:"primary"},"Login"))},re=function(e){var t=Object(a.useState)(!1),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(null),s=Object(u.a)(o,2),m=s[0],d=s[1],h=function(e){e.preventDefault(),l(!c)};return m?r.a.createElement(i.a,{to:"/games"}):c?r.a.createElement(S,{maxWidth:500,verticalCentered:!0},r.a.createElement("h1",null,"Login to Cahoots!"),r.a.createElement(ae,{onUserChange:d}),r.a.createElement("div",null,"No account? ",r.a.createElement("br",null),r.a.createElement(f.a,{color:"link",onClick:h},"Sign Up!"))):r.a.createElement(S,{maxWidth:500,verticalCentered:!0},r.a.createElement("h1",null,"Signup for Cahoots!"),r.a.createElement(ne,{onUserChange:d}),r.a.createElement("div",null,"Have an account? ",r.a.createElement("br",null),r.a.createElement(f.a,{color:"link",onClick:h},"Login")))},ce=function(){var e=new $;return new Promise((function(t){return e.onCurrentUserChange(t)}))},le=function(){var e=new _;return ce().then((function(t){return t?e.list({ownerId:t.id}):null}))},oe=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),o=Object(u.a)(l,2),s=o[0],m=o[1];return Object(a.useEffect)((function(){le().then(c)}),[]),s?r.a.createElement(i.a,{to:s}):r.a.createElement(C.a,{style:{maxWidth:"500px"}},r.a.createElement("h1",null,"Your Games"),r.a.createElement(L.a,null,n.map((function(e){return r.a.createElement(B.a,{key:e.id,onClick:function(){return m("/games/".concat(e.id))},tag:"button",action:!0},e.name)})),r.a.createElement(B.a,{onClick:function(){return m("/games/create")},tag:"button",color:"info",action:!0},"Create Game")))},ie=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new _,n=String(Math.floor(Math.random()*Math.floor(9999)));return t.create(Object.assign({shortCode:n},e))},ue=function(e){var t=Object(a.useState)(null),n=Object(u.a)(t,2),c=n[0],l=n[1],o=Object(a.useState)(""),s=Object(u.a)(o,2),v=s[0],g=s[1],E=Object(a.useState)(null),b=Object(u.a)(E,2),p=b[0],j=b[1];return Object(a.useEffect)((function(){ce().then(l)}),[]),p?r.a.createElement(i.a,{to:"/games"}):r.a.createElement(C.a,{style:{maxWidth:"500px"}},r.a.createElement("h1",null,"Create a Game"),r.a.createElement(m.a,null,r.a.createElement(d.a,{for:"name"},"Name:"),r.a.createElement(h.a,{id:"name",name:"name",value:v,onChange:function(e){return g(e.target.value)}})),r.a.createElement(f.a,{color:"primary",onClick:function(){return e={name:v,ownerId:c.id},t=j,ie(e).then(t);var e,t}},"Save"))},se=function(e){var t=new _,n=new P;return t.update(e,{state:"pendingQuestion"}),t.get(e).then((function(e){return"currentQuestion"in e?n.get(e.currentQuestion):void 0})).then((function(t){var a=t?t.order:0;return n.list({gameId:e,from:a,limit:1})})).then((function(n){var a=n[0];return a&&t.update(e,{currentQuestionId:a.id}),a}))},me=function e(t){var n=t.endDate,a=t.intervalCallback,r=t.endedCallback;setTimeout((function(){var t=function(e){var t=(e-Date.now())/1e3;return t>0?t:0}(n);t>0?(a(t),e({endDate:n,intervalCallback:a,endedCallback:r})):r(t)}),1e3)},de=function(e){var t=e.seconds,n=e.intervalCallback,a=e.endedCallback,r=new Date(Date.now()+1e3*t);me({endDate:r,intervalCallback:n,endedCallback:a})},he=function(e){var t=e.parentUrl,n=Object(i.h)().gameId,c=Object(a.useState)(5),l=Object(u.a)(c,2),o=l[0],s=l[1],m=Object(a.useState)(null),d=Object(u.a)(m,2),h=d[0],f=d[1];return Object(a.useEffect)((function(){n&&(de({seconds:5,intervalCallback:s,endedCallback:s}),se(n).then(f))}),[n]),r.a.createElement(S,{verticalCentered:!0},r.a.createElement("div",{className:"mb-4"},"Next question in..."),r.a.createElement("div",{className:"display-1"},Math.ceil(o)),o<=0&&h?r.a.createElement(i.a,{to:"".concat(t,"/questions/current")}):null)},fe=n(94),ve=n(95),ge=n(96),Ee=n(97),be=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new P;return n.get(e,t)},pe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new _,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new U;return n.update(e,{state:"showingQuestionResults"}),a.list({gameId:e,questionId:t}).then((function(e){var t={A:[],B:[],C:[],D:[]};return e.forEach((function(e){t[e.choice]=t[e.choice].concat(e.playerName)})),t}))},je=function(e){return(new P).list({gameId:e}).then((function(e){return e.length}))},Oe=function(e,t){return e.correctAnswer===t},we=function(e){var t=e.result,n=e.className,a=e.question;return r.a.createElement("div",{className:n},r.a.createElement("h2",{className:"mb-4"},a?a.text:null),r.a.createElement(x.a,null,Object.entries(t).map((function(e){var t=Object(u.a)(e,2),n=t[0],c=t[1];return r.a.createElement(q.a,{sm:12,md:6,className:"mb-4"},r.a.createElement(fe.a,{color:Oe(a,n)?"success":null,inverse:!!Oe(a,n)||null},r.a.createElement(ve.a,null,r.a.createElement(ge.a,null,r.a.createElement("strong",{className:"mr-2"},n),Oe(a,n)?"\u2714\ufe0f":"\u274c"),r.a.createElement(Ee.a,null,c.join(", ")))))}))))},ye=function(e){var t=e.parentUrl,n=Object(i.h)(),c=n.gameId,l=n.questionId,s=Object(a.useState)({}),m=Object(u.a)(s,2),d=m[0],h=m[1],v=Object(a.useState)(null),g=Object(u.a)(v,2),E=g[0],b=g[1],p=Object(a.useState)(null),j=Object(u.a)(p,2),O=j[0],w=j[1];return Object(a.useEffect)((function(){c&&l&&(be(l,{gameId:c}).then(b),je(c).then(w),pe(c,l).then(h))}),[c,l]),r.a.createElement(S,{verticalCentered:!0},r.a.createElement(we,{className:"mb-4",result:d,question:E}),E&&E.order>=O?r.a.createElement(o.b,{to:"".concat(t,"/results/final")},r.a.createElement(f.a,{color:"primary"},"Show Final Results")):r.a.createElement(o.b,{to:"".concat(t,"/questions/pending")},r.a.createElement(f.a,{color:"primary"},"Next Question")))},Ce=n(98),Ie=function(e){return(new U).list({gameId:e}).then((function(e){return e.filter((function(e){return"isCorrect"in e&&!!e.isCorrect})).reduce((function(e,t){return t.playerName in e?e[t.playerName]+=1:e[t.playerName]=1,e}),{})}))},ke=function(e,t){var n=Object(u.a)(e,2)[1],a=Object(u.a)(t,2)[1];return n>a?-1:n<a?1:0},Se=function(e){var t=e.results,n=Object.entries(t);return n.sort(ke),r.a.createElement(L.a,null,n.slice(0,5).map((function(e,t){var n=Object(u.a)(e,2),a=n[0],c=n[1];return t<=2?r.a.createElement(B.a,{key:a,className:"d-flex justify-content-between"},a,r.a.createElement(Ce.a,{className:"ml-4 p-2",color:"success"},c)):r.a.createElement(B.a,{key:a,className:"d-flex justify-content-between"},a,r.a.createElement(Ce.a,{className:"ml-4 p-2"},c))})))},Ne=function(e){var t=Object(i.h)().gameId,n=Object(a.useState)({}),c=Object(u.a)(n,2),l=c[0],o=c[1];return Object(a.useEffect)((function(){t&&Ie(t).then(o)}),[t]),r.a.createElement(S,{verticalCentered:!0,maxWidth:500},r.a.createElement("h1",null,"Final Results"),r.a.createElement(Se,{results:l}))},_e=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new _,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new P;return t.update(e,{state:"showingQuestion"}),t.get(e).then((function(e){return n.get(e.currentQuestion)}))},Ae=function(e){var t=e.question,n=e.className;return r.a.createElement("div",{className:n},r.a.createElement("h2",{className:"mb-4"},t.text),r.a.createElement(x.a,null,["A","B","C","D"].map((function(e){return r.a.createElement(q.a,{key:e,sm:12,md:6,className:"mb-4"},r.a.createElement(fe.a,null,r.a.createElement(ve.a,null,r.a.createElement(ge.a,null,r.a.createElement("strong",null,e)),r.a.createElement(Ee.a,null,t["answer".concat(e)]))))}))))},De=function(e){var t=e.isVisible,n=e.linkTo;return t?r.a.createElement(o.b,{to:n},r.a.createElement(f.a,{color:"primary"},"Show Result")):null},Te=function(e){var t=e.parentUrl,n=Object(i.h)().gameId,c=Object(a.useState)(null),l=Object(u.a)(c,2),o=l[0],s=l[1],m=Object(a.useState)(10),d=Object(u.a)(m,2),h=d[0],f=d[1];return Object(a.useEffect)((function(){n&&(de({seconds:10,intervalCallback:f,endedCallback:f}),_e(n).then(s))}),[n]),r.a.createElement(S,{verticalCentered:!0},o?r.a.createElement("div",null,r.a.createElement(Ae,{question:o}),r.a.createElement("div",{className:"mt-4"},"Time left:"),r.a.createElement("div",{className:"display-1"},Math.ceil(h)),r.a.createElement(De,{isVisible:h<=0,linkTo:"".concat(t,"/results/").concat(o.id)})):r.a.createElement("div",null,"Loading..."))},xe=function(){var e=Object(i.i)(),t=e.url,n=e.path;return r.a.createElement(i.d,{base:!0},r.a.createElement(i.b,{path:"".concat(n,"/questions/pending")},r.a.createElement(he,{parentUrl:t})),r.a.createElement(i.b,{path:"".concat(n,"/questions/current")},r.a.createElement(Te,{parentUrl:t})),r.a.createElement(i.b,{path:"".concat(n,"/results/final")},r.a.createElement(Ne,{parentUrl:t})),r.a.createElement(i.b,{path:"".concat(n,"/results/:questionId")},r.a.createElement(ye,{parentUrl:t})))},qe=function(e){return(new P).list(e)},Qe=n(42),We=n(99),Ue=n(100),Ge=n(43),Pe=n(101),Fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new P,n=Object.assign({},e);if("id"in n){var a=G(n,"id");return t.update(a,n)}return t.create(n)},Re=function(e){var t=e.question,n=Object(a.useState)(t),c=Object(u.a)(n,2),l=c[0],o=c[1],i=Object(a.useState)("default"),s=Object(u.a)(i,2),v=s[0],g=s[1],E=function(e){o(Object.assign({},l,e))};return r.a.createElement("div",null,r.a.createElement(fe.a,{body:!0,className:"mt-4 mb-4"},r.a.createElement(ge.a,null,r.a.createElement(We.a,{className:"mb-2"},r.a.createElement(h.a,{type:"textarea",placeholder:"Question text",value:l.text||"",onChange:function(e){return E({text:e.target.value})}}))),["answerA","answerB","answerC","answerD"].map((function(e){return r.a.createElement(We.a,{key:e,className:"mb-2"},r.a.createElement(Ue.a,{addonType:"prepend"},r.a.createElement(Ge.a,null,e)),r.a.createElement(h.a,{placeholder:"Answer",value:e in l?l[e]:"",onChange:function(t){return E(Object(Qe.a)({},e,t.target.value))}}))})),r.a.createElement(m.a,null,r.a.createElement(d.a,{for:"correctAnswerDropdown"},"Correct Answer"),r.a.createElement(h.a,{type:"select",name:"correctAnswer",id:"correctAnswerDropdown","data-testid":"correctAnswerDropdown",value:l.correctAnswer||"A",onChange:function(e){return E({correctAnswer:e.target.value})}},r.a.createElement("option",null,"A"),r.a.createElement("option",null,"B"),r.a.createElement("option",null,"C"),r.a.createElement("option",null,"D"))),"saving"===v?r.a.createElement(f.a,{disabled:!0,color:"primary",className:"mt-4"},r.a.createElement(Pe.a,{type:"grow",size:"sm",color:"info",className:"mr-2"}),"Saving..."):r.a.createElement(f.a,{color:"primary",className:"mt-4",onClick:function(){g("saving"),Fe(l).then((function(){return g("default")}))}},"Save")))},ze=function(e){var t=Object(i.h)().gameId,n=Object(a.useState)(null),c=Object(u.a)(n,2),l=c[0],s=c[1],m=Object(a.useState)([]),d=Object(u.a)(m,2),h=d[0],v=d[1];return Object(a.useEffect)((function(){t&&null===l&&A(t).then((function(e){return s(e),e})).then((function(e){return qe({gameId:e.id})})).then(v)}),[t,l]),l?r.a.createElement(S,{maxWidth:500},r.a.createElement("h1",{className:"mb-4"},l.name),h.length>0?r.a.createElement(o.b,{to:"/lobby/".concat(t)},r.a.createElement(f.a,{color:"success",size:"lg"},"Start Game")):null,h.map((function(e){return r.a.createElement(Re,{key:e.id,question:e})})),r.a.createElement(f.a,{onClick:function(){Fe({gameId:t,order:h.length+1}).then((function(e){return v(h.concat([e]))}))}},"Add Question")):r.a.createElement(S,{maxWidth:500},"Loading...")},Le=function(e){var t=new URLSearchParams(Object(i.g)().search).get("game");return r.a.createElement(S,{maxWidth:500,verticalCentered:!0},t)};var Be=function(){return r.a.createElement(o.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/login"},r.a.createElement(re,null)),r.a.createElement(i.b,{path:"/host/:gameId"},r.a.createElement(xe,null)),r.a.createElement(i.b,{path:"/lobby/:gameId"},r.a.createElement(K,null)),r.a.createElement(i.b,{path:"/play/:gameId/as/:playerId"},r.a.createElement(z,null)),r.a.createElement(i.b,{path:"/join/:gameId"},r.a.createElement(T,null)),r.a.createElement(i.b,{path:"/join"},r.a.createElement(Le,null)),r.a.createElement(i.b,{path:"/games/create"},r.a.createElement(ue,null)),r.a.createElement(i.b,{path:"/games/:gameId"},r.a.createElement(ze,null)),r.a.createElement(i.b,{exact:!0,path:"/games"},r.a.createElement(oe,null)),r.a.createElement(i.b,{path:"/"},r.a.createElement(J,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Be,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[44,1,2]]]);
//# sourceMappingURL=main.b1310e8f.chunk.js.map