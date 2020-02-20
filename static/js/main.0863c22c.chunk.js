(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{13:function(e,t,a){e.exports=a(27)},18:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),l=(a(18),a(19),a(1)),o=(a(20),function(e){var t=e.inhabitant,a=t.id,n=t.name,c=t.thumbnail,i=t.age,l=t.weight,o=t.height,s=t.hair_color,u=t.professions,d=t.friends,h=e.selected,f=e.handleChoose;return r.a.createElement("div",{className:h===n?"card selectedCard":"card",onClick:function(e){return f(e,n)}},r.a.createElement("div",{className:"card-thumbnail"},r.a.createElement("img",{src:c,alt:n}),r.a.createElement("div",{className:"card-id"},a),h===n?r.a.createElement("button",{onClick:function(t){return e.handleSearchFriends(t,n)}},"Find all friends"):null),r.a.createElement("div",{className:"card-name"},n),r.a.createElement("div",{className:"card-age"},"Age: ",r.a.createElement("i",null,i)),r.a.createElement("div",{className:"card-gender"},"Gender: ",r.a.createElement("i",null,n?function(e){var t=e.split(" ")[0];return["ia","te","le","li","ki"].some((function(e){return e===t.slice(t.length-2).toLowerCase()}))?"Female":"Male"}(n):"")),r.a.createElement("div",{className:"card-weight"},"Weight: ",r.a.createElement("i",null,isNaN(l)?"":Math.floor(l))),r.a.createElement("div",{className:"card-height"},"Height: ",r.a.createElement("i",null,isNaN(o)?"":Math.floor(o))),r.a.createElement("div",{className:"card-hair_color"},"Hair color: ",r.a.createElement("i",null,s)," ",s?r.a.createElement("span",{style:{backgroundColor:s}},"\xa0\xa0\xa0"):null),r.a.createElement("div",{className:"card-professions"},"Professions:"," ",r.a.createElement("i",null,Array.isArray(u)?u.join(", "):u)),r.a.createElement("div",{className:"card-friends"},"Friends: ",r.a.createElement("i",null,Array.isArray(d)?d.join(", "):d)))}),s=function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],s=e.number,u=e.inhabitants,d=function(e,t){i(c===t?"":t)};return r.a.createElement("main",null,u&&0!==u.length?u.filter((function(e,t){return t<s})).map((function(t,a){return r.a.createElement(o,{inhabitant:t,key:"key".concat(a+t.id),handleSearchFriends:e.handleSearchFriends,selected:c,handleChoose:d})})):null)},u=function(e){return r.a.createElement("div",{className:"searchInput"},r.a.createElement("input",{type:"text",placeholder:"Who are you looking for",onChange:e.handleChange,value:e.phrase,onKeyPress:e.handleKeyPress}))},d=r.a.memo((function(e){var t=e.loading,a=e.filter;return r.a.createElement("div",{className:t?"filtersMenuDisabled":""},r.a.createElement("ul",null,["name","id","age","weight","height","hair color","profession"].map((function(t,n){return r.a.createElement("li",{key:"menu+".concat(n),className:a===t?"selected":"",onClick:function(){return e.filterHandle(t)}},t)}))))})),h=a(4),f=a(3),m=a(12),E=a(2),p={loading:!1,errors:{}},g={data:[],searchResult:[],hint:""},b=[m.a],y=Object(f.c)({UI:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(E.a)({},e,{loading:!0});case"SET_ERRORS":return{loading:!1,errors:t.payload};case"CLEAR_ERRORS":return{loading:!1,errors:{}};default:return Object(E.a)({},e)}},data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a="";switch(t.type){case"SET_DATA":return a="Loading completed, let's search",Object(E.a)({},e,{data:t.payload,hint:a});case"SEARCH_DATA":return a=t.payload.length>0?"Found ".concat(t.payload.length," inhabitant"):"Nothing found",Object(E.a)({},e,{searchResult:t.payload,hint:a});case"SEARCH_FRIENDS":return a=t.payload.length>0?"Found ".concat(t.payload.length-1," friends"):"Nothing found",Object(E.a)({},e,{searchResult:t.payload,hint:a});case"SEARCH_CLEAR":return a='Select a filter type, fill in the field and click "Search"',Object(E.a)({},e,{searchResult:[],hint:a});default:return e}}}),O=Object(f.e)(y,{},Object(f.d)(f.a.apply(void 0,b),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),v={getData:function(){return fetch("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json").then((function(e){return e.json()}))}},R=a(5),S={getFiltered:function(e,t,a){if("name"===t)return a=a.toLowerCase(),e.filter((function(e){return e[t].toLowerCase().split(" ").some((function(e){return e.startsWith(a)}))}));if("profession"===t){var n=a.toLowerCase().split(",").map((function(e){return e.trim()}));return e.filter((function(e){return n.every((function(t){return e.professions.some((function(e){return e.toLowerCase()===t}))}))}))}if("hair color"===t)return a=a.toLowerCase(),e.filter((function(e){return e.hair_color.toLowerCase().startsWith(a)}));var r=a.split("-").map((function(e){return parseFloat(e)}));return e.filter((function(e){return Math.floor(e[t])>=Math.min.apply(Math,Object(R.a)(r))&&Math.floor(e[t])<=Math.max.apply(Math,Object(R.a)(r))}))},getFriends:function(e,t){var a=[];return a.push.apply(a,Object(R.a)(e.filter((function(e){return e.name===t})))),e.filter((function(e){return e.name===t}))[0].friends.forEach((function(t){var n=e.filter((function(e){return e.name===t}));a.push.apply(a,Object(R.a)(n))})),a}},C=function(){return function(e){e({type:"LOADING"}),v.getData().then((function(t){e({type:"SET_DATA",payload:t[Object.keys(t)]}),e({type:"CLEAR_ERRORS"})})).catch((function(t){e({type:"SET_ERRORS",payload:{err:"Something went wrong. Please, reload the app"}})}))}},j=Object(h.b)((function(e){return{hintUI:e.UI.hintUI,loading:e.UI.loading,errors:e.UI.errors,hint:e.data.hint}}),{searchData:function(e,t){return function(a){var n=O.getState().data.data;a({type:"LOADING"}),a({type:"SEARCH_DATA",payload:S.getFiltered(n,e,t)}),a({type:"CLEAR_ERRORS"})}}})((function(e){var t=Object(n.useState)(""),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(""),s=Object(l.a)(o,2),h=s[0],f=s[1],m=Object(n.useState)(""),E=Object(l.a)(m,2),p=E[0],g=E[1];Object(n.useEffect)((function(){e.loading&&f("Waiting for data...")}),[e.loading]),Object(n.useEffect)((function(){e.hint&&f(e.hint)}),[e.hint]),Object(n.useEffect)((function(){e.errors.err&&f(e.errors.err)}),[e.errors]);var b=Object(n.useCallback)((function(e){f("name"!==e&&"hair color"!==e?"You can set the interval if you use a dash between numbers":"name"===e?"The search phrase is compared with the first and second name individually":"profession"===e?"You can set list of professions if you use a comma between it":'Select a filter type, fill in the field and click "Search"'),i(e)}),[i]),y=function(){e.searchData(c,p)},O=e.loading;return r.a.createElement("header",null,r.a.createElement(d,{filter:c,filterHandle:b,loading:O}),r.a.createElement(u,{phrase:p,handleChange:function(e){var t=e.target.value;g(t)},handleKeyPress:function(e){13===e.which&&y()}}),r.a.createElement("button",{onClick:y,disabled:O},"Search"),h?r.a.createElement("div",{className:"hint"},h):null)})),w=function(e){return r.a.createElement("nav",null,r.a.createElement("button",{onClick:e.handleShowMore},"Show more")," |"," ",r.a.createElement("a",{href:"#start"},"Up")," |"," ",r.a.createElement("button",{onClick:e.handleClear},"Clear"))},N={getData:C,searchFriends:function(e){return function(t){var a=O.getState().data.data;t({type:"LOADING"}),t({type:"SEARCH_FRIENDS",payload:S.getFriends(a,e)}),t({type:"CLEAR_ERRORS"})}},searchClear:function(){return function(e){e({type:"LOADING"}),e({type:"SEARCH_CLEAR"}),e({type:"CLEAR_ERRORS"})}}},A=Object(h.b)((function(e){return{data:e.data.data,searchResult:e.data.searchResult}}),N)((function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),c=a[0],i=a[1],o=Object(n.useState)(10),u=Object(l.a)(o,2),d=u[0],h=u[1];Object(n.useEffect)((function(){O.dispatch(C())}),[]),Object(n.useEffect)((function(){i(e.searchResult)}),[e.hint,e.searchResult]);return r.a.createElement("div",null,r.a.createElement("h1",{id:"start"},"Brastlewark city population"),r.a.createElement(j,null),0!==e.searchResult.length?r.a.createElement(s,{inhabitants:c,number:d,handleSearchFriends:function(t,a){t.preventDefault(),e.searchFriends(a)}}):null,0!==e.searchResult.length?r.a.createElement(w,{handleShowMore:function(){h(d+10)},handleClear:function(){e.searchClear(),h(10)}}):null)})),_=function(){return r.a.createElement("div",{className:"app"},r.a.createElement(h.a,{store:O},r.a.createElement(A,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[13,1,2]]]);
//# sourceMappingURL=main.0863c22c.chunk.js.map