(window.webpackJsonpbookstore=window.webpackJsonpbookstore||[]).push([[0],{187:function(e,t,r){e.exports=r(357)},356:function(e,t,r){},357:function(e,t,r){"use strict";r.r(t);var n={};r.r(n),r.d(n,"setBooks",function(){return O});var a={};r.r(a),r.d(a,"addToCart",function(){return k}),r.d(a,"removeFromCart",function(){return S});var c={};r.r(c),r.d(c,"setFilter",function(){return F}),r.d(c,"setSearchQuery",function(){return A});var o=r(0),i=r.n(o),u=r(31),l=r.n(u),s=r(18),p=r(26),O=function(e){return{type:"SET_BOOKS",payload:e}},f=r(155),b=r(156),y=r(176),m=r(157),d=r(177),j=r(158),v=r.n(j),g=r(364),h=r(367),E=r(174),w=r(34),P=r(358),D=function(e){var t=e.title,r=e.author,n=e.price,a=e.image,c=e.addToCart,o=e.addedCount;return i.a.createElement(h.a,null,i.a.createElement(E.a,{src:a,wrapped:!0,ui:!1}),i.a.createElement(h.a.Content,null,i.a.createElement(h.a.Header,null,t),i.a.createElement(h.a.Meta,null,i.a.createElement("span",{className:"date"},r))),i.a.createElement(h.a.Content,{extra:!0},i.a.createElement("a",{href:"/"},i.a.createElement(w.a,{name:"rub"}),n)),i.a.createElement(P.a,{onClick:c.bind(void 0,e)},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 ",o>0&&"(".concat(o,")")))},k=function(e){return{type:"ADD_BOOK_TO_CART",payload:e}},S=function(e){return{type:"REMOVE_BOOK_FROM_CART",payload:e}},C=r(17);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var R=Object(p.b)(function(e,t){var r=e.cart,n=t.id;return{addedCount:r.items.reduce(function(e,t){return e+(t.id===n?1:0)},0)}},function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(C.b)(a,e))})(D),T=r(368),B=r(363),I=function(e){var t=e.setFilter,r=e.filterBy,n=e.searchQuery,a=e.setSearchQuery;return i.a.createElement(T.a,{secondary:!0},i.a.createElement(T.a.Item,{active:"all"===r,onClick:t.bind(void 0,"all")},"\u0412\u0441\u0435"),i.a.createElement(T.a.Item,{active:"price_high"===r,onClick:t.bind(void 0,"price_high")},"\u0426\u0435\u043d\u0430 (\u0434\u043e\u0440\u043e\u0433\u0438\u0435)"),i.a.createElement(T.a.Item,{active:"price_low"===r,onClick:t.bind(void 0,"price_low")},"\u0426\u0435\u043d\u0430 (\u0434\u0435\u0448\u0435\u0432\u044b\u0435)"),i.a.createElement(T.a.Item,{active:"author"===r,onClick:t.bind(void 0,"author")},"\u0410\u0432\u0442\u043e\u0440"),i.a.createElement(T.a.Item,null,i.a.createElement(B.a,{icon:"search",onChange:function(e){return a(e.target.value)},value:n,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441..."})))},F=function(e){return{type:"SET_FILTER",payload:e}},A=function(e){return{type:"SET_QUERY",payload:e}};function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var M=Object(p.b)(function(e){e.books;return{filterBy:e.filter.filterBy}},function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(C.b)(c,e))})(I),K=r(366),L=r(365),x=function(e){var t=e.title,r=e.id,n=e.image,a=e.removeFromCart;return i.a.createElement(K.a,{selection:!0,divided:!0,verticalAlign:"middle"},i.a.createElement(K.a.Item,null,i.a.createElement(K.a.Content,{floated:"right"},i.a.createElement(P.a,{onClick:a.bind(void 0,r),color:"red"},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c")),i.a.createElement(E.a,{avatar:!0,src:n}),i.a.createElement(K.a.Content,null,t)))},Y=function(e){var t=e.totalPrice,r=e.count,n=e.items;return i.a.createElement(T.a,null,i.a.createElement(T.a.Item,{name:"browse"},"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043a\u043d\u0438\u0433"),i.a.createElement(T.a.Menu,{position:"right"},i.a.createElement(T.a.Item,{name:"signup"},"\u0418\u0442\u043e\u0433\u043e \xa0 ",i.a.createElement("b",null,t)," \u0440\u0443\u0431."),i.a.createElement(L.a,{trigger:i.a.createElement(T.a.Item,{name:"help"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 (",i.a.createElement("b",null,r),")"),content:n.map(function(e){return i.a.createElement(x,e)}),on:"click",hideOnScroll:!0})))},J=r(172),U=r.n(J);function V(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var G=Object(p.b)(function(e){var t=e.cart;return{totalPrice:t.items.reduce(function(e,t){return e+t.price},0),count:t.items.length,items:U()(t.items,function(e){return e.id})}},function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?V(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):V(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(C.b)(a,e))})(Y),H=function(e){function t(){return Object(f.a)(this,t),Object(y.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.setBooks;v.a.get("/books.js").then(function(t){e(t.data)})}},{key:"render",value:function(){var e=this.props,t=e.books,r=e.isReady;e.setFilter;return i.a.createElement(g.a,null,i.a.createElement(G,null),i.a.createElement(M,null),i.a.createElement(h.a.Group,{itemsPerRow:4},r?t.map(function(e){return i.a.createElement(R,Object.assign({},e,{key:e.id}))}):"Download..."))}}]),t}(o.Component),N=r(77),q=r.n(N);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}var W=function(e,t,r){return function(e,t){switch(t){case"price_high":return q()(e,"price","desc");case"price_low":return q()(e,"price","asc");case"author":return q()(e,"author","asc");default:return e}}(function(e,t){return e.filter(function(e){return e.title.toLowerCase().indexOf(t.toLowerCase())>=0||e.author.toLowerCase().indexOf(t.toLowerCase())>=0})}(e,r),t)},X=Object(p.b)(function(e){var t=e.books,r=e.filter;return{books:t.items&&W(t.items,r.filterBy,r.searchQuery),isReady:t.isReady}},function(e){return function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},Object(C.b)(n,e))})(H),Z=r(173),$=r.n(Z);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var re={isReady:!1,items:null},ne=r(175);function ae(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ae(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ae(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var oe={items:[]};function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(r,!0).forEach(function(t){Object(s.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var le={filterBy:"all",searchQuery:""},se=Object(C.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_BOOKS":return te({},e,{items:t.payload,isReady:!0});case"SET_IS_READY":return te({},e,{isReady:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_BOOK_TO_CART":return ce({},e,{items:[].concat(Object(ne.a)(e.items),[t.payload])});case"REMOVE_BOOK_FROM_CART":return ce({},e,{items:e.items.filter(function(e){return e.id!=t.payload})});default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FILTER":return ue({},e,{filterBy:t.payload});case"SET_QUERY":return ue({},e,{searchQuery:t.payload});default:return e}}}),pe=(r(355),r(356),Object(C.d)(se,Object(C.a)($.a)));l.a.render(i.a.createElement(p.a,{store:pe},i.a.createElement(X,null)),document.getElementById("root"))}},[[187,1,2]]]);
//# sourceMappingURL=main.02861c17.chunk.js.map