(this.webpackJsonpmodvie_app=this.webpackJsonpmodvie_app||[]).push([[0],{43:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(13),n=s.n(a),i=s(4),r=s.n(i),c=s(14),o=s(15),m=s(16),l=s(19),d=s(18),j=s(2),u=s.n(j),v=s(17),p=s.n(v),h=(s(43),s(0));var b=function(e){e.id;var t=e.year,s=e.title,a=e.summary,n=e.poster,i=e.genres;return Object(h.jsxs)("div",{className:"movie",children:[Object(h.jsx)("img",{src:n,alt:s,title:s}),Object(h.jsxs)("div",{className:"movie__data",children:[Object(h.jsx)("h3",{className:"movie__title",children:s}),Object(h.jsx)("h5",{className:"movie__year",children:t}),Object(h.jsx)("ul",{className:"genres",children:i.map((function(e,t){return Object(h.jsx)("li",{className:"genres__genres",children:e},t)}))}),Object(h.jsxs)("p",{className:"movie__summary",children:[a.slice(0,140),"..."]})]})]})},O=(s(45),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(o.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMoives=Object(c.a)(r.a.mark((function t(){var s,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(m.a)(s,[{key:"componentDidMount",value:function(){this.getMoives()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(h.jsx)("section",{className:"container",children:t?Object(h.jsx)("div",{className:"loader",children:Object(h.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(h.jsx)("div",{className:"movies",children:s.map((function(e){return Object(h.jsx)(b,{title:e.title,year:e.year,id:e.id,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(u.a.Component));n.a.render(Object(h.jsx)(O,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.9133a059.chunk.js.map