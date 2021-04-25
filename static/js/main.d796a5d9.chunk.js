(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{55:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(22),i=a.n(r),s=(a(55),a(56),a(57),a(50)),o=a(7),l=a(95),h=a(98),j=a(100),d=(a(58),a(1));function b(){return Object(d.jsx)(l.a,{className:"c-navbar",children:Object(d.jsxs)(h.a,{bg:"white",variant:"light",children:[Object(d.jsxs)(h.a.Brand,{className:"c-navbar-brand",children:[Object(d.jsx)("img",{src:"https://cdn2.iconfinder.com/data/icons/bold-outline-v1/512/camera_cine_cinema_film-512.png",alt:""}),"Movie App"]}),Object(d.jsxs)(j.a,{className:"mr-auto",children:[Object(d.jsx)(j.a.Link,{href:"#home",children:"Home"}),Object(d.jsx)(j.a.Link,{href:"#actors",children:"Actors"}),Object(d.jsx)(j.a.Link,{href:"#movies",children:"Movies"})]})]})})}var u=a(96);a(63);function m(){return Object(d.jsxs)(l.a,{className:"p-home",children:[Object(d.jsx)("h1",{children:"Best movie app ever!"}),Object(d.jsx)(u.a,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Film_Barnstar_Hires_Gold.svg/2000px-Film_Barnstar_Hires_Gold.svg.png",fluid:!0})]})}var f=a(16),p=a(99),O=a(48);a(64);function x(e){var t=e.onFilterChange,a=e.onSortChange;return Object(d.jsx)(p.a,{className:"p-actor-header",children:Object(d.jsxs)(p.a.Row,{children:[Object(d.jsxs)(O.a,{className:"col-md-6 col-12",children:[Object(d.jsx)(p.a.Label,{children:"Filter by:"}),Object(d.jsx)(p.a.Control,{type:"text",onChange:function(e){return t(e.target.value)}})]}),Object(d.jsxs)(O.a,{className:"col-md-6 col-12",children:[Object(d.jsx)(p.a.Label,{children:"Sort by:"}),Object(d.jsxs)(p.a.Control,{as:"select",onChange:function(e){return a(e.target.value)},children:[Object(d.jsx)("option",{value:"fname",children:"First Name"}),Object(d.jsx)("option",{value:"lname",children:"Last Name"}),Object(d.jsx)("option",{value:"aged",children:"Age \u2193"}),Object(d.jsx)("option",{value:"agea",children:"Age \u2191"})]})]})]})})}var g=a(101);a(65);function v(e){var t=e.actor,a=Object(c.useState)(),n=Object(f.a)(a,2),r=n[0],i=n[1];return void 0!==r?Object(d.jsx)(o.a,{to:"/actor/"+r+"/movies"}):Object(d.jsxs)(g.a,{className:"col-sm-6 col-md-3 c-actor-card",onClick:function(){return i(t.id)},children:[Object(d.jsx)(g.a.Img,{variant:"top",src:t.img}),Object(d.jsxs)(g.a.Body,{children:[Object(d.jsx)(g.a.Title,{children:Object(d.jsx)("a",{href:t.imdb,target:"_blank",rel:"noreferrer",children:"".concat(t.fname," ").concat(t.lname)})}),Object(d.jsxs)(g.a.Text,{className:t.deathDay?"text-alert":"",children:[t.age," ",t.deathDay?" (deceased)":""]})]})]})}a(69);function y(e){var t,a=e.filterBy,c=e.sortBy,n=e.actors;return n&&(a&&(n=n.filter((function(e){return e.fname.toLowerCase().includes(a.toLowerCase())||e.lname.toLowerCase().includes(a.toLowerCase())}))),c&&n.sort((function(e,t){switch(c){case"fname":case"lname":return e[c].toUpperCase().localeCompare(t[c].toUpperCase());case"aged":return t.age-e.age;case"agea":return e.age-t.age;default:return-1}})),n&&(t=n.map((function(e,t){return Object(d.jsx)(v,{actor:e},t)})))),Object(d.jsx)("div",{className:"actors-cards",children:t})}var w=a(102);a(70);function C(e){var t=e.placeHolder,a=e.searchText,c=e.onSearchChange,n=e.results,r=e.onResultSelected;return Object(d.jsxs)("div",{className:"c-search-box",children:[Object(d.jsx)(p.a.Control,{className:"c-search-input",type:"text",placeholder:t,value:a,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)(w.a,{className:"c-result-box",children:n.map((function(e,t){return Object(d.jsx)(w.a.Item,{action:!0,onClick:function(){return r(t)},children:e})}))})]})}a(71);var N=a(20),_=a.n(N),k=a(28),S=a(29),D=function(){function e(t,a,c,n,r,i,s){Object(k.a)(this,e),"object"===typeof t?(this.fname=t.fname,this.lname=t.lname,this.birthday=t.birthday,this.deathDay=t.deathDay,this.img=t.img,this.imdb=t.imdb,this.id=t.id):(this.fname=t,this.lname=a,this.birthday=c,this.deathDay=n,this.img=r,this.imdb=i,this.id=s),this.age=this.getAge(this.birthday,this.deathDay)}return Object(S.a)(e,[{key:"getAge",value:function(e,t){var a=t?new Date(t):new Date,c=new Date(e),n=a.getFullYear()-c.getFullYear(),r=a.getMonth()-c.getMonth();return(r<0||0===r&&a.getDate()<c.getDate())&&n--,n}}]),e}();function F(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)("fname"),i=Object(f.a)(r,2),s=i[0],o=i[1],h=Object(c.useState)(""),j=Object(f.a)(h,2),b=j[0],u=j[1],m=Object(c.useState)([]),p=Object(f.a)(m,2),O=p[0],g=p[1],v=Object(c.useState)([]),w=Object(f.a)(v,2),N=w[0],k=w[1];return Object(c.useEffect)((function(){_.a.get("/movie-app".concat("/actors.json")).then((function(e){var t=e.data.map((function(e){return new D(e)}));k(t)}))}),[]),Object(d.jsxs)(l.a,{children:[Object(d.jsx)("h1",{className:"p-title",children:"Actors"}),Object(d.jsx)(C,{placeHolder:"Search Actor...",searchText:b,onSearchChange:function(e){if(u(e),e){var t="https://api.themoviedb.org/3/search/person?api_key=d5fc0ebcdc97957658216ba08b5e9436&query="+e;_.a.get(t).then((function(e){g(e.data.results)}))}else g([])},results:O.map((function(e){return e.name})),onResultSelected:function(e){if(N&&!N.some((function(t){return parseInt(t.id)===parseInt(O[e].id)}))){var t=O[e].profile_path?"https://image.tmdb.org/t/p/w500/"+O[e].profile_path:"",a=O[e].name.trim(),c="",n="";if(a){var r=a.split(" ");r.length>2?(c=r[0],n=r.slice(1).join(" ")):(c=r[0],n=r[r.length-1])}var i="https://api.themoviedb.org/3/person/".concat(O[e].id,"?api_key=d5fc0ebcdc97957658216ba08b5e9436");_.a.get(i).then((function(e){k(N.concat(new D(c,n,e.data.birthday,e.data.deathday,t,"https://www.imdb.com/name/"+e.data.imdb_id,e.data.id)))}))}g([]),u("")}}),Object(d.jsx)(x,{onFilterChange:function(e){n(e)},onSortChange:function(e){o(e)}}),Object(d.jsx)(y,{filterBy:a,sortBy:s,actors:N})]})}var L=a(97);a(90);function B(e){var t=e.movie;return Object(d.jsxs)(l.a,{className:"c-movie-card row",children:[Object(d.jsx)("img",{src:t.posterPath,alt:"",className:"col-md-4"}),Object(d.jsxs)("div",{className:"col-md-8",children:[Object(d.jsx)("h3",{children:t.title}),Object(d.jsxs)("h6",{children:["Durarion: ",t.runtime]}),Object(d.jsxs)("h6",{children:["Director: ",t.director]}),Object(d.jsxs)("h6",{children:["Stars: ",t.stars]}),Object(d.jsxs)("h6",{children:["Plot: ",t.plot]})]})]})}var A=function(){function e(t,a,c,n){Object(k.a)(this,e),this.id=t,this.title=a,this.posterPath=c,this.plot=n}return Object(S.a)(e,[{key:"setStars",value:function(e){this.stars=e}},{key:"setDirector",value:function(e){this.director=e}},{key:"setRuntime",value:function(e){this.runtime=e}}]),e}();a(91);var I=function(){var e=Object(o.g)().actorId,t=Object(c.useState)([]),a=Object(f.a)(t,2),n=a[0],r=a[1],i=[];function s(e){var t=new A(e.id,e.title,"https://image.tmdb.org/t/p/w500"+e.poster_path,e.overview),a=_.a.get("https://api.themoviedb.org/3/movie/".concat(t.id,"/credits?api_key=d5fc0ebcdc97957658216ba08b5e9436")),c=_.a.get("https://api.themoviedb.org/3/movie/".concat(t.id,"?api_key=d5fc0ebcdc97957658216ba08b5e9436"));Promise.all([a,c]).then((function(e){t.setStars(e[0].data.cast.slice(0,9).map((function(e){return e.name})).join(", ")),t.setDirector(e[0].data.crew.find((function(e){return"Director"===e.job})).name),t.setRuntime(e[1].data.runtime),i=i.concat(t),r(i)}))}return Object(c.useEffect)((function(){var t=e?"https://api.themoviedb.org/3/person/".concat(e,"/movie_credits?api_key=d5fc0ebcdc97957658216ba08b5e9436"):"https://api.themoviedb.org/3/movie/top_rated?api_key=d5fc0ebcdc97957658216ba08b5e9436";_.a.get(t).then((function(t){return e?t.data.cast.slice(0,19).map((function(e){return s(e)})):t.data.results.slice(0,19).map((function(e){return s(e)}))}))}),[e]),Object(d.jsxs)(l.a,{children:[Object(d.jsx)("h1",{className:"text-center",children:"Top Rated Films"}),n?n.map((function(e,t){return Object(d.jsx)(B,{movie:e},t)})):Object(d.jsx)(L.a,{})]})};a(92);function P(){return Object(d.jsx)(l.a,{className:"p-not-found",children:Object(d.jsx)("img",{src:"https://miro.medium.com/max/800/1*hFwwQAW45673VGKrMPE2qQ.png"})})}var T=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(b,{}),Object(d.jsx)(s.a,{children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"/actors",children:Object(d.jsx)(F,{})}),Object(d.jsx)(o.b,{exact:!0,path:"/movies",children:Object(d.jsx)(I,{})}),Object(d.jsx)(o.b,{exact:!0,path:"/actor/:actorId/movies",children:Object(d.jsx)(I,{})}),Object(d.jsx)(o.b,{exact:!0,path:"/home",children:Object(d.jsx)(m,{})}),Object(d.jsx)(o.b,{exact:!0,path:"/",children:Object(d.jsx)(m,{})}),Object(d.jsx)(o.b,{path:"/",children:Object(d.jsx)(P,{})})]})})]})},M=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,103)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),c(e),n(e),r(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root")),M()}},[[93,1,2]]]);
//# sourceMappingURL=main.d796a5d9.chunk.js.map