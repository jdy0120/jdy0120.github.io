(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{32:function(e,t,a){e.exports=a(65)},37:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(24),o=a.n(s),c=(a(37),a(7)),m=a(1);a(38);var i=function(e){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,'"Freedom is the freedom to sa that two plus two make four. If that is granted, all else follows."'),r.a.createElement("span",null,"- George Orwell, 1984"))},l=a(11),u=a.n(l),v=a(25),d=a(26),p=a(27),E=a(31),f=a(30),y=a(28),_=a.n(y);a(57);var g=function(e){e.id;var t=e.title,a=e.year,n=e.summary,s=e.poster,o=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie-detail",state:{year:a,title:t,summary:n,poster:s,genres:o}}},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},o.map((function(e,t){return r.a.createElement("li",{key:t,className:"movie__genres"},e)}))),r.a.createElement("p",{className:"movie__summary"},n.slice(0,180),"..."))))},h=(a(63),function(e){Object(E.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(v.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=date");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(64);var b=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))};var N=function(){return r.a.createElement(c.a,null,r.a.createElement(b,null),r.a.createElement(m.a,{path:"/react-movie",exact:!0,component:h}),r.a.createElement(m.a,{path:"/about",component:i}))};o.a.render(r.a.createElement(N,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.3d4bead8.chunk.js.map