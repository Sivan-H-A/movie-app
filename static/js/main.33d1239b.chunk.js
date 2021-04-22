(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{33:function(e,t,a){},34:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(24),i=a.n(r),s=(a(33),a(8)),o=a(66),l=a(25),u=(a(34),a(2));function d(e){var t=e.onFilterChange,a=e.onSortChange;return Object(u.jsx)(o.a,{className:"p-actor-header",children:Object(u.jsxs)(o.a.Row,{children:[Object(u.jsxs)(l.a,{className:"col-md-6 col-12",children:[Object(u.jsx)(o.a.Label,{children:"Filter by:"}),Object(u.jsx)(o.a.Control,{type:"text",onChange:function(e){return t(e.target.value)}})]}),Object(u.jsxs)(l.a,{className:"col-md-6 col-12",children:[Object(u.jsx)(o.a.Label,{children:"Sort by:"}),Object(u.jsxs)(o.a.Control,{as:"select",onChange:function(e){return a(e.target.value)},children:[Object(u.jsx)("option",{value:"fname",children:"First Name"}),Object(u.jsx)("option",{value:"lname",children:"Last Name"}),Object(u.jsx)("option",{value:"aged",children:"Age \u2193"}),Object(u.jsx)("option",{value:"agea",children:"Age \u2191"})]})]})]})})}var h=a(64),j=a(67);a(39);function b(e){var t=e.actor;return Object(u.jsxs)(j.a,{className:"col-sm-6 col-md-3 c-actor-card",children:[Object(u.jsx)(j.a.Img,{variant:"top",src:t.img}),Object(u.jsxs)(j.a.Body,{children:[Object(u.jsx)(j.a.Title,{children:Object(u.jsx)("a",{href:t.imdb,target:"_blank",children:"".concat(t.fname," ").concat(t.lname)})}),Object(u.jsx)(j.a.Text,{children:t.age})]})]})}a(40);function m(e){var t,a=e.filterBy,n=e.sortBy,c=e.actors;return c&&(a&&(c=c.filter((function(e){return e.fname.toLowerCase().includes(a.toLowerCase())||e.lname.toLowerCase().includes(a.toLowerCase())}))),n&&c.sort((function(e,t){switch(n){case"fname":case"lname":return e[n].toUpperCase().localeCompare(t[n].toUpperCase());case"aged":return t.age-e.age;case"agea":return e.age-t.age}})),c&&(t=c.map((function(e,t){return Object(u.jsx)(b,{actor:e},t)})))),Object(u.jsx)("div",{className:"actors-cards",children:t})}var f=a(65);a(41);function g(e){var t=e.placeHolder,a=e.searchText,n=e.onSearchChange,c=e.results,r=e.onResultSelected;return Object(u.jsxs)("div",{className:"c-search-box",children:[Object(u.jsx)(o.a.Control,{type:"text",placeholder:t,value:a,onChange:function(e){return n(e.target.value)}}),Object(u.jsx)(f.a,{className:"c-result-box",children:c.map((function(e,t){return Object(u.jsx)(f.a.Item,{action:!0,onClick:function(){return r(t)},children:e})}))})]})}a(42);var p=a(15),O=a.n(p),x=a(26),v=a(27),C=function(){function e(t,a,n,c,r,i){Object(x.a)(this,e),"object"===typeof t?(this.fname=t.fname,this.lname=t.lname,this.bday=t.bday,this.img=t.img,this.imdb=t.imdb,this.id=t.id):(this.fname=t,this.lname=a,this.bday=n,this.img=c,this.imdb=r,this.id=i),this.age=this.getAge(this.bday)}return Object(v.a)(e,[{key:"getAge",value:function(e){var t=new Date,a=new Date(e),n=t.getFullYear()-a.getFullYear(),c=t.getMonth()-a.getMonth();return(c<0||0===c&&t.getDate()<a.getDate())&&n--,n}}]),e}();function y(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)("fname"),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(n.useState)(""),b=Object(s.a)(j,2),f=b[0],p=b[1],x=Object(n.useState)([]),v=Object(s.a)(x,2),y=v[0],w=v[1],S=Object(n.useState)([]),F=Object(s.a)(S,2),N=F[0],L=F[1];return Object(u.jsxs)(h.a,{children:[Object(u.jsx)(g,{placeHolder:"Search Actor...",searchText:f,onSearchChange:function(e){if(p(e),e){var t="https://api.themoviedb.org/3/search/person?api_key=d5fc0ebcdc97957658216ba08b5e9436&query="+e;O.a.get(t).then((function(e){w(e.data.results)}))}else w([])},results:y.map((function(e){return e.name})),onResultSelected:function(e){if(N&&!N.some((function(t){return t.id==y[e].id}))){var t="https://image.tmdb.org/t/p/w500/"+y[e].profile_path,a=y[e].name.trim(),n="",c="";if(a){var r=a.split(" ");r.length>2?(n=r[0],c=r.slice(1).join(" ")):(n=r[0],c=r[r.length-1])}var i="https://api.themoviedb.org/3/person/".concat(y[e].id,"?api_key=d5fc0ebcdc97957658216ba08b5e9436");O.a.get(i).then((function(e){e.data.birthday;e.data.imdb_id;L(N.concat(new C(n,c,e.data.birthday,t,"https://www.imdb.com/name/"+e.data.imdb_id,e.data.id)))}))}w([]),p("")}}),Object(u.jsx)(d,{onFilterChange:function(e){c(e)},onSortChange:function(e){l(e)}}),Object(u.jsx)(m,{filterBy:a,sortBy:o,actors:N})]})}a(61),a(62);var w=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(y,{})})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(w,{})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.33d1239b.chunk.js.map