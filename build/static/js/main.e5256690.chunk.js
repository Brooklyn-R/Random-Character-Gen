(this.webpackJsonpmoviebrowser=this.webpackJsonpmoviebrowser||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),i=c(14),n=c.n(i),r=(c(21),c(8)),l=(c(22),c(2)),o=c(7),j=c(0),d=function(e){var t=e.text,c=e.backdrop;return Object(j.jsxs)("header",{className:"bg-dark text-white p-5 hero-container",children:[Object(j.jsx)("h1",{className:"hero-text",children:t}),c&&Object(j.jsx)("div",{className:"hero-backdrop",style:{backgroundImage:"url(".concat(c,")")}})]})},b=function(e){var t=e.movie,c="https://image.tmdb.org/t/p/w500".concat(t.poster_path),a="/movies/".concat(t.id);"/movies/".concat(t.overview);return Object(j.jsx)("div",{className:"col-lg-3 col-md-3 col-2 my-4",children:Object(j.jsxs)("div",{className:"card","w-50":!0,children:[Object(j.jsx)("img",{src:c,className:"card-img-top",alt:t.original_title}),Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)("h5",{className:"card-title",children:t.original_title}),Object(j.jsx)("p",{className:"card-text",children:t.overview}),Object(j.jsx)(o.b,{to:a,className:"btn btn-primary",children:"Show details"})]})]})})},m=function(e){var t=e.keyword,c=e.searchResults,a="You are searching for ".concat(t),s=c.map((function(e,t){return Object(j.jsx)(b,{movie:e},t)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{text:a}),s&&Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:s})})]})};var u=function(e){var t=e.searchText,c=e.setSearchText,a=Object(l.f)();return Object(j.jsx)("nav",{className:"navbar navbar-expand-lg bg-light",children:Object(j.jsxs)("div",{className:"container-fluid",children:[Object(j.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Movie Browser"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(j.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link",to:"/about",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(o.b,{className:"nav-link disabled",to:"/",tabIndex:"-1",children:"Coming soon!"})})]}),Object(j.jsxs)("form",{className:"d-flex",role:"search",children:[Object(j.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:t,onChange:function(e){a.push("./search"),c(e.target.value)}}),Object(j.jsx)("button",{className:"btn btn-outline-success",type:"submit",to:"/FetchApi",children:"submit"})]})]})]})})},h=c.p+"static/media/card1.5f9552dc.jpg",x=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{className:"d-flex justify-content-center",text:"Movie Browser Mock"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-lg-8 offset-lg-2 my-5",children:[Object(j.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti nisi rerum, esse culpa quisquam optio maxime fugit, at mollitia consectetur minima architecto vel. Eius corrupti necessitatibus magni eveniet deserunt."}),Object(j.jsx)("p",{children:Object(j.jsx)("img",{src:h})})]})})})]})},p=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{text:"About us"}),Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-8 offset-lg-2 my-5",children:Object(j.jsx)("p",{className:"lead",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti nisi rerum, esse culpa quisquam optio maxime fugit, at mollitia consectetur minima architecto vel. Eius corrupti necessitatibus magni eveniet deserunt. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deleniti nisi rerum, esse culpa quisquam optio maxime fugit, at mollitia consectetur minima architecto vel. Eius corrupti necessitatibus magni eveniet deserunt."})})})})]})},O=function(){var e=Object(l.g)().id,t=Object(a.useState)({}),c=Object(r.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(!0),o=Object(r.a)(n,2),b=o[0],m=o[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=a9b14ca4e44146df74e49183d0560f3e&language=em-US")).then((function(e){return e.json()})).then((function(e){i(e),m(!1)}))}),[e]),function(){if(b)return Object(j.jsx)(d,{text:"Loading..."});if(s){var e="https://image.tmdb.org/t/p/w500".concat(s.poster_path),t="https://image.tmdb.org/t/p/original".concat(s.backdrop_path);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(d,{text:s.original_title,backdrop:t}),Object(j.jsx)("div",{className:"container my-5",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-3",children:Object(j.jsx)("img",{src:e,alt:"...",className:"img-fluid shadow rounded"})}),Object(j.jsxs)("div",{className:"col-md-9",children:[Object(j.jsx)("h2",{children:s.original_title}),Object(j.jsx)("p",{className:"lead",children:s.overview}),Object(j.jsxs)("p",{className:"release",children:["Release date: ",s.release_date]}),Object(j.jsxs)("p",{className:"rate",children:["Rating: ",Math.floor(s.vote_average),"/10"]})]})]})})]})}}()};var v=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),c=t[0],s=t[1],i=Object(a.useState)(""),n=Object(r.a)(i,2),o=n[0],d=n[1];return Object(a.useEffect)((function(){o&&fetch("https://api.themoviedb.org/3/search/movie?api_key=a9b14ca4e44146df74e49183d0560f3e&language=en-US&query=".concat(o,"&page=1&include_adult=false")).then((function(e){return e.json()})).then((function(e){console.log(e),s(e.results)}))}),[o]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{searchText:o,setSearchText:d}),Object(j.jsxs)(l.c,{children:[Object(j.jsx)(l.a,{path:"/",exact:!0,children:Object(j.jsx)(x,{})}),Object(j.jsx)(l.a,{exact:!0,path:"/about",component:p}),Object(j.jsx)(l.a,{path:"/search",children:Object(j.jsx)(m,{keyword:o,searchResults:c})}),Object(j.jsx)(l.a,{exact:!0,path:"/movies/:id",component:O})]})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,33)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,n=t.getTTFB;c(e),a(e),s(e),i(e),n(e)}))};n.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o.a,{children:Object(j.jsx)(v,{})})}),document.getElementById("root")),g()}},[[32,1,2]]]);
//# sourceMappingURL=main.e5256690.chunk.js.map