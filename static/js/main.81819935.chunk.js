(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(48),i=a.n(o),c=(a(86),a(12)),s=a(13),l=a(15),u=a(14),m=a(16),p=a(152),h=a(75),d=a(151),f=a(10),g=a(74),E=a.n(g),v=a(150),b=a(52),y=a.n(b),S=function(e){var t=r.a.createElement(y.a,{className:"bg-dark mb-5"},r.a.createElement(v.a,{className:" text-info ",to:"/"},"Home"),r.a.createElement(v.a,{className:" text-info ml-2",to:"/popular"},"Popular"),r.a.createElement(v.a,{className:"ml-auto text-info ",to:"/auth"},"Authenticate"));return e.isAuth&&(t=r.a.createElement(y.a,{className:"bg-dark mb-5"},r.a.createElement(v.a,{className:" text-info ",to:"/"},"Home"),r.a.createElement(v.a,{className:" text-info ml-2",to:"/popular"},"Popular"),r.a.createElement("div",{className:"ml-auto "},r.a.createElement(v.a,{className:"mr-2  text-info",to:"/myReviews"},"My Reviews"),r.a.createElement(v.a,{className:"text-info",to:"/logout"},"Logout")))),r.a.createElement("header",null,t)},w=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"bg-dark text-light"},r.a.createElement(S,{isAuth:this.props.isAuthenticated}),r.a.createElement("main",{className:E.a.Content},this.props.children))}}]),t}(n.Component),_=Object(f.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(w),O=a(147),A=a(148),j=a(146),I=a(24),C=a.n(I),k=function(e){return{type:"INIT_POPULAR_GAMES_FAIL",error:e}},N=function(e){return{type:"GAMES_SEARCH_FAIl",error:e}},R=function(e,t){return localStorage.setItem("token",e),localStorage.setItem("userId",t),{type:"AUTH_SUCCESS",token:e,userId:t}},T=function(){return localStorage.removeItem("token"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},x=a(6),U=function(){return function(e){e({type:"FETCH_REVIEWS_START"}),C.a.get("https://cors-anywhere.herokuapp.com/https://needmydose.firebaseio.com/reviews.json").then(function(t){var a=[];for(var n in t.data)a.push(Object(x.a)({},t.data[n]));e({type:"FETCH_REVIEWS_SUCCESS",reviews:a})}).catch(function(t){e({type:"FETCH_REVIEWS_FAIL"})})}},H=function(){return{type:"SEND_REVIEW_START"}},L=function(){return{type:"SEND_REVIEW_SUCCESS"}},P=function(){return{type:"SEND_REVIEW_FAIL"}},G=a(25),M=a.n(G),F=a(23),D=a.n(F),V=Object(d.a)(function(e){return r.a.createElement(M.a,{className:"w-100 h-100",bg:"info",text:"white",style:{width:"18rem"}},r.a.createElement(M.a.Img,{variant:"top",src:e.imgSrc}),r.a.createElement(M.a.Body,null,r.a.createElement(M.a.Title,null,r.a.createElement(v.a,{to:"/game/"+e.id},e.title)),r.a.createElement(M.a.Text,null,e.summary),r.a.createElement(j.a,null,r.a.createElement(O.a,null,e.isAuth?r.a.createElement(D.a,{variant:"warning",onClick:e.clickedReview},"Write review"):r.a.createElement(D.a,{variant:"secondary",onClick:e.clickedReview},"Sign-In to review")),r.a.createElement(O.a,null,r.a.createElement(D.a,{className:"float-right",href:e.url,variant:"primary"},"Go to IGDB")))))}),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={searchInput:""},a.searchHandler=function(e){e.preventDefault(),a.props.onGamesSearch(a.state.searchInput),a.setState({searchInput:""})},a.limitText=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:320,a=[];return e.length>t?(e.split(" ").reduce(function(e,n){return e+n.length<t&&a.push(n),e+n.length},0),"".concat(a.join(" ")," ...")):e},a.inputChangedHandler=function(e){var t=e.target.value;a.setState({searchInput:t})},a.reviewHandler=function(e,t){a.props.isAuthenticated?a.props.history.push("/review/"+e+"/"+t):a.props.history.push("/auth")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.games||this.props.onInitUpcomingGames()}},{key:"render",value:function(){var e=this,t=this.props.error?r.a.createElement("p",{style:{margin:"auto",color:"red"}},"Something went wrong.."):null;return this.props.games&&(t=this.props.games.map(function(t){return r.a.createElement(O.a,{className:"mb-3",xs:12,sm:6,md:4,lg:3,key:t.id},r.a.createElement(V,{id:t.id,imgSrc:t.coverUrl,title:t.name,summary:t.summary?e.limitText(t.summary):"",url:t.url,isAuth:e.props.isAuthenticated,clickedReview:function(){return e.reviewHandler(t.id,t.name)}}))})),r.a.createElement("div",{className:"mt-3"},r.a.createElement("form",{className:"h-75 d-flex justify-content-center",onSubmit:this.searchHandler},r.a.createElement("input",{className:"w-25",type:"text",placeholder:"Search for videogames..",onChange:this.inputChangedHandler,value:this.state.searchInput}),r.a.createElement("button",{type:"submit"},r.a.createElement("i",{className:"fa fa-search"}))),this.props.loading?r.a.createElement("div",{className:"spinner-border text-primary mx-auto mt-3 d-block"}):null,r.a.createElement(A.a,{className:"mt-5",fluid:!0},this.props.isPopular?r.a.createElement("h3",{className:"text-primary m-1 "},r.a.createElement("u",null,"POPULAR GAMES")):null,r.a.createElement(j.a,null,t)))}}]),t}(n.Component),B=Object(f.b)(function(e){return{games:e.search.gamesList,error:e.search.error,isPopular:e.search.isPopular,loading:e.search.loading,isAuthenticated:null!==e.auth.token}},function(e){return{onGamesSearch:function(t){return e(function(e){return function(t){t({type:"GAMES_SEARCH_START"});var a=[],n=[];C()({url:"https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",method:"POST",headers:{Accept:"application/json","user-key":"85f87f118ca4e711041d4bac342789c1"},data:"".concat(e?'search "'+e+'";':"","fields cover,first_release_date,follows,franchise,franchises,game_engines,game_modes,genres,hypes,involved_companies,keywords,multiplayer_modes,name,parent_game,platforms,player_perspectives,popularity,pulse_count,rating,rating_count,release_dates,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,time_to_beat,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites;")}).then(function(e){return e.data.forEach(function(e){a.push({id:e.id,name:e.name,summary:e.summary,url:e.url}),e.cover&&n.push(e.cover)}),C()({url:"https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers",method:"POST",headers:{Accept:"application/json","user-key":"85f87f118ca4e711041d4bac342789c1"},data:"fields alpha_channel,animated,game,height,image_id,url,width; where id=(".concat(n.join(","),");")}).then(function(e){e.data.forEach(function(e){a.forEach(function(t){t.id===e.game&&(t.coverUrl=e.url)})}),t(function(e){return{type:"GAMES_SEARCH_SUCCESS",gamesArr:e}}(a))}).catch(function(e){t(N(e))})}).catch(function(e){t(N(e))})}}(t))},onInitUpcomingGames:function(){return e(function(e){var t=[],a=[];e({type:"INIT_POPULAR_GAMES_START"}),C()({url:"https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/games",method:"POST",headers:{Accept:"application/json","user-key":"85f87f118ca4e711041d4bac342789c1"},data:"fields *; sort popularity desc;"}).then(function(n){return n.data.forEach(function(e){t.push({id:e.id,name:e.name,summary:e.summary,url:e.url}),e.cover&&a.push(e.cover)}),C()({url:"https://cors-anywhere.herokuapp.com/https://api-v3.igdb.com/covers",method:"POST",headers:{Accept:"application/json","user-key":"85f87f118ca4e711041d4bac342789c1"},data:"fields alpha_channel,animated,game,height,image_id,url,width; where id=(".concat(a.join(","),");")}).then(function(a){a.data.forEach(function(e){t.forEach(function(t){t.id===e.game&&(t.coverUrl=e.url)})}),e(function(e){return{type:"INIT_POPULAR_GAMES_SUCCESS",gamesArr:e}}(t))}).catch(function(t){e(k(t))})}).catch(function(t){e(k(t))})})}}})(W),z=a(11),J=a.n(z),q=a(40),K=a.n(q),X=a(77),Z=a.n(X),$=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",textArea:"",rating:1},a.inputChangedHandler=function(e,t){"name"===t?a.setState({name:e.target.value}):"textarea"===t&&a.setState({textArea:e.target.value})},a.submitHandler=function(e){if(e.preventDefault(),""!==a.state.textArea){var t={revId:(new Date).getTime(),userId:a.props.userId,userName:a.state.name,gameId:a.props.match.params.id,gameName:a.props.match.params.name,review:a.state.textArea,rating:a.state.rating};a.props.onSendReview(a.props.history,t)}},a.onStarClick=function(e){a.setState({rating:e})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(J.a,{className:"m-2",onSubmit:this.submitHandler},r.a.createElement(J.a.Group,{className:"d-flex flex-column align-items-center"},r.a.createElement(J.a.Label,null,"Enter your name:"),r.a.createElement(J.a.Control,{className:"w-25 mb-2",as:"input",onChange:function(t){return e.inputChangedHandler(t,"name")}}),r.a.createElement(J.a.Label,null,"Write your own review for"," ",r.a.createElement("strong",{className:"text-warning"},this.props.match.params.name)),r.a.createElement(J.a.Control,{className:"w-75",as:"textarea",rows:"6",onChange:function(t){return e.inputChangedHandler(t,"textarea")}}),r.a.createElement(J.a.Label,{className:"mt-2"},"Rate the game:"),r.a.createElement(K.a,{className:Z.a.StarRating,name:"rate1",starCount:5,value:this.state.rating,onStarClick:this.onStarClick,emptyStarColor:"#aaa"}),this.props.loading?r.a.createElement(D.a,{className:"m-2",variant:"success",size:"lg",type:"submit"},r.a.createElement("span",{className:"spinner-border spinner-border-lg",role:"status","aria-hidden":"true"}),"Submit"):r.a.createElement(D.a,{className:"m-2",variant:"success",size:"lg",type:"submit"},"Submit")))}}]),t}(n.Component),Q=Object(d.a)(Object(f.b)(function(e){return{loading:e.review.loading,userId:e.auth.userId}},function(e){return{onSendReview:function(t,a){return e(function(e,t){return function(a){a(H()),C.a.post("https://cors-anywhere.herokuapp.com/https://needmydose.firebaseio.com/reviews.json",t).then(function(t){a(L()),e.push("/")}).catch(function(e){a(P()),console.log(e)})}}(t,a))}}})($)),Y=a(39),ee=a(153),te=a(78),ae=a.n(te),ne=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={controls:{email:null,password:null},validated:!1,isSignin:!0},a.inputChangedHandler=function(e,t){var n=Object(x.a)({},a.state.controls,Object(Y.a)({},t,e.target.value));a.setState({controls:n})},a.toggleSignin=function(){a.setState(function(e){return{isSignin:!e.isSignin}})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"handleSubmit",value:function(e){var t=e.currentTarget;e.preventDefault(),!1===t.checkValidity()?e.stopPropagation():(this.setState({validated:!0}),this.props.onAuth(this.state.controls.email,this.state.controls.password,this.state.isSignin))}},{key:"render",value:function(){var e=this,t=this.state,a=null;return this.props.isAuthenticated&&(a=r.a.createElement(ee.a,{to:"/"})),r.a.createElement("div",{className:"ml-5"},a,r.a.createElement(J.a,{className:ae.a.MainForm,noValidate:!0,validated:t,onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement(J.a.Group,null,r.a.createElement(J.a.Label,null,"Email Adress"),r.a.createElement(J.a.Control,{type:"email",placeholder:"Enter email",autoComplete:"username",required:!0,onChange:function(t){return e.inputChangedHandler(t,"email")}}),r.a.createElement(J.a.Control.Feedback,{type:"invalid"},"Enter a valid e-mail."),r.a.createElement(J.a.Text,null,"We will never share your email with anyone else.")),r.a.createElement(J.a.Group,null,r.a.createElement(J.a.Label,null,"Password"),r.a.createElement(J.a.Control,{type:"password",placeholder:"Enter password",autoComplete:"current-password",required:!0,minLength:6,onChange:function(t){return e.inputChangedHandler(t,"password")}}),r.a.createElement(J.a.Control.Feedback,{type:"invalid"},"Password must be at least 6 characters long.")),this.props.loading?r.a.createElement(D.a,{variant:"success",type:"submit"},"Submit",r.a.createElement("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})):r.a.createElement(D.a,{variant:"outline-success",type:"submit"},"Submit"),r.a.createElement(D.a,{className:"m-1",variant:"outline-info",onClick:this.toggleSignin},"Switch to ",this.state.isSignin?"SignUp":"SignIn")))}}]),t}(n.Component),re=Object(f.b)(function(e){return{loading:e.auth.loading,isAuthenticated:null!==e.auth.token}},function(e){return{onAuth:function(t,a,n){return e(function(e,t,a){return function(n){n({type:"AUTH_START"});var r={email:e,password:t},o="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=";a&&(o="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key="),C.a.post(o+"AIzaSyCnI8wB_TTlMA-_UJbnSaE77Z80mcaEkUw",r).then(function(e){n(R(e.data.idToken,e.data.localId))}).catch(function(e){console.log(e),n(function(e){return{type:"AUTH_FAIL",error:e}}(e))})}}(t,a,n))}}})(ne),oe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(ee.a,{to:"/"})}}]),t}(n.Component),ie=Object(f.b)(null,function(e){return{onLogout:function(){return e(T())}}})(oe),ce=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onRemoveGames()}},{key:"render",value:function(){return r.a.createElement(ee.a,{to:"/"})}}]),t}(n.Component),se=Object(f.b)(null,function(e){return{onRemoveGames:function(){return e({type:"REMOVE_GAMES"})}}})(ce),le=a(42),ue=a.n(le),me=a(53),pe=a.n(me),he=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchReviews(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=this,t=[],a=[];if(this.props.reviews){var n=this.props.reviews.filter(function(t){return t.userId===e.props.userId});console.log(n),t=n.map(function(e){return r.a.createElement(pe.a.Item,{key:e.revId,variant:"info",action:!0,eventKey:e.revId},e.gameName,r.a.createElement(K.a,{className:"float-right",name:"rate1",starCount:5,value:e.rating,editing:!1}))}),a=n.map(function(e){return r.a.createElement(ue.a.Pane,{key:e.revId,eventKey:e.revId},e.review)})}return r.a.createElement(ue.a.Container,null,this.props.loading?r.a.createElement("div",{className:"spinner-border text-primary mx-auto mt-3 d-block"}):null,r.a.createElement(j.a,{className:"m-5",noGutters:!0},r.a.createElement(O.a,{sm:4},r.a.createElement(pe.a,null,t)),r.a.createElement(O.a,{sm:8,className:"bg-info"},r.a.createElement(ue.a.Content,{className:"ml-2 "},a))))}}]),t}(n.Component),de=Object(f.b)(function(e){return{reviews:e.review.reviews,loading:e.review.loading,token:e.auth.token,userId:e.auth.userId}},function(e){return{onFetchReviews:function(t,a){return e(U())}}})(he),fe=a(79),ge=a.n(fe),Ee=a(41),ve=a.n(Ee),be=function(e){return r.a.createElement(M.a,{className:"m-2"},r.a.createElement(M.a.Text,{className:"ml-2 text-info"},e.review),r.a.createElement(M.a.Footer,null,r.a.createElement("small",{className:"text-muted float-right"},"By ",e.name)))},ye=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).reviewHandler=function(e,t){a.props.isAuthenticated?a.props.history.push("/review/"+e+"/"+t):a.props.history.push("/auth")},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchReviews()}},{key:"render",value:function(){var e,t,a=this,n=this.props.loading?r.a.createElement("div",{className:"spinner-border text-primary mx-auto mt-3 d-block"}):null;return this.props.games&&(e=this.props.games.filter(function(e){return e.id===+a.props.match.params.id}),e=Object(x.a)({},e[0]),t=r.a.createElement(V,{id:e.id,imgSrc:e.coverUrl,title:e.name,summary:e.summary,url:e.url,isAuth:this.props.isAuthenticated,clickedReview:function(){return a.reviewHandler(e.id,e.name)}})),this.props.allReviews&&this.props.games&&(n=(n=this.props.allReviews.filter(function(t){return t.gameId===e.id.toString()})).map(function(e){return r.a.createElement(be,{key:e.revId,review:e.review,name:e.userName})})),r.a.createElement(ge.a,null,r.a.createElement(ve.a,{sm:5},t),r.a.createElement(ve.a,{sm:7},r.a.createElement("h6",{className:"text-primary"},"Here are our users reviews :"),r.a.createElement("hr",{className:"bg-info"}),n))}}]),t}(n.Component),Se=Object(f.b)(function(e){return{games:e.search.gamesList,isAuthenticated:null!==e.auth.token,allReviews:e.review.reviews,loading:e.review.loading}},function(e){return{onFetchReviews:function(){return e(U())}}})(ye),we=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignUp()}},{key:"render",value:function(){return r.a.createElement(_,null,r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:B}),r.a.createElement(h.a,{path:"/auth",component:re}),r.a.createElement(h.a,{path:"/logout",component:ie}),r.a.createElement(h.a,{path:"/popular",component:se}),r.a.createElement(h.a,{path:"/myReviews",component:de}),r.a.createElement(h.a,{path:"/game/:id",component:Se}),r.a.createElement(h.a,{path:"/review/:id/:name",component:Q})))}}]),t}(n.Component),_e=Object(d.a)(Object(f.b)(null,function(e){return{onTryAutoSignUp:function(){return e(function(e){var t=localStorage.getItem("token"),a=localStorage.getItem("userId");e(t?R(t,a):T())})}}})(we));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=a(149),Ae=a(27),je=a(80),Ie={gamesList:null,error:!1,isPopular:!1,loading:!1},Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_POPULAR_GAMES_START":return Object(x.a)({},e,{error:!1,loading:!0});case"INIT_POPULAR_GAMES_SUCCESS":return Object(x.a)({},e,{gamesList:t.gamesArr,isPopular:!0,loading:!1});case"INIT_POPULAR_GAMES_FAIL":return Object(x.a)({},e,{error:!0,loading:!1});case"GAMES_SEARCH_START":return Object(x.a)({},e,{error:!1,loading:!0});case"GAMES_SEARCH_SUCCESS":return Object(x.a)({},e,{gamesList:t.gamesArr,isPopular:!1,loading:!1});case"GAMES_SEARCH_FAIl":return Object(x.a)({},e,{error:!0,loading:!1});case"REMOVE_GAMES":return Object(x.a)({},e,{gamesList:null});default:return e}},ke={token:null,userId:null,error:!1,loading:!1},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return Object(x.a)({},e,{error:!1,loading:!0});case"AUTH_SUCCESS":return Object(x.a)({},e,{token:t.token,userId:t.userId,error:!1,loading:!1});case"AUTH_FAIL":return Object(x.a)({},e,{loading:!1,error:!0});case"AUTH_LOGOUT":return Object(x.a)({},e,{token:null,userId:null});default:return e}},Re={reviews:null,loading:!1,error:!1},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_REVIEWS_START":return Object(x.a)({},e,{loading:!0,error:!1});case"FETCH_REVIEWS_FAIL":return Object(x.a)({},e,{loading:!1,error:!0});case"FETCH_REVIEWS_SUCCESS":return Object(x.a)({},e,{reviews:t.reviews,loading:!1});case"SEND_REVIEW_START":return Object(x.a)({},e,{loading:!0,error:!1});case"SEND_REVIEW_FAIL":return Object(x.a)({},e,{error:!0,loading:!1});case"SEND_REVIEW_SUCCESS":return Object(x.a)({},e,{loading:!1});default:return e}},xe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ae.d,Ue=Object(Ae.c)({search:Ce,auth:Ne,review:Te}),He=Object(Ae.e)(Ue,xe(Object(Ae.a)(je.a))),Le=r.a.createElement(f.a,{store:He},r.a.createElement(Oe.a,null,r.a.createElement(_e,null)));i.a.render(Le,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},74:function(e,t,a){e.exports={Content:"Layout_Content__1uOzk"}},77:function(e,t,a){e.exports={StarRating:"Review_StarRating__fVte7"}},78:function(e,t,a){e.exports={MainForm:"Auth_MainForm__1r1xN"}},81:function(e,t,a){e.exports=a(145)},86:function(e,t,a){}},[[81,1,2]]]);
//# sourceMappingURL=main.81819935.chunk.js.map