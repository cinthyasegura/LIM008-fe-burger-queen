(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t,n){},186:function(e,t,n){},187:function(e,t,n){},188:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(76),i=n.n(c),o=(n(84),n(85),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"navbar"},r.a.createElement("h1",{className:"nav-item pointer"},"Burger Queen"),r.a.createElement("h3",{className:"nav-item mr-3 pointer"},"Ver pedidos >")))}),l=n(52),u=n.n(l),s=n(37),m=n(77),d=n(22),f=n(78),p=n.n(f),b=n(53),g=n.n(b);g.a.initializeApp({apiKey:"AIzaSyDcljSmfPj-K2KFAIkSJovXh5vomh91q60",authDomain:"burger-queen-a4832.firebaseapp.com",databaseURL:"https://burger-queen-a4832.firebaseio.com",projectId:"burger-queen-a4832",storageBucket:"burger-queen-a4832.appspot.com",messagingSenderId:"358515366780"});var E=g.a,h=(n(75),function(e){var t=e.matchOption;return r.a.createElement("div",{className:"list-group list-group-horizontal-sm text-center "},r.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action tabs",onClick:function(){return t("breakfast")},"data-testid":"breakfast-btn"},"Desayuno"),r.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action tabs",onClick:function(){return t("menu")},"data-testid":"menu-btn"},"Men\xfa"),r.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action tabs",onClick:function(){return t("accompaniment")},"data-testid":"accompaniment-btn"},"Acompa\xf1amientos"),r.a.createElement("button",{type:"button",className:"list-group-item list-group-item-action tabs",onClick:function(){return t("drinks")},"data-testid":"drinks-btn"},"Bebidas"))}),v=function(e){var t=e.name,n=e.image,a=e.price,c=e.addOrder,i=e.id;return r.a.createElement("div",{className:"media items"},r.a.createElement("img",{className:"align-self-center ml-3 mr-8 icons",src:n,alt:t}),r.a.createElement("span",{className:"padding mt-2"},t," ",r.a.createElement("br",null),"Precio: $ ",a),r.a.createElement("span",{role:"presentation",className:"btn-add fas fa-plus",onClick:c,"data-testid":"".concat(i,"-addOrderItem-btn")}))},y=function(e){var t=e.menu,n=e.addOrderItem;return t.map(function(e){return r.a.createElement(v,{key:e.id,image:e.image,name:e.name,price:e.price,addOrder:function(){return n(e.id)},id:e.id})})},w=n(54),k=(n(185),function(e){var t=e.orderItems,n=e.deleteItem,a=e.updateItem,c=e.addOrderToFirebase,i=e.updateInput,o=e.clientsName;return r.a.createElement("form",{onSubmit:c},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Cantidad"),r.a.createElement("th",null,"Producto"),r.a.createElement("th",null,"Precio"),r.a.createElement("th",null,"Eliminar"))),r.a.createElement("tbody",{"data-testid":"productTable"},t.length>0?t.map(function(e,t){return r.a.createElement("tr",{key:e.id,"data-testid":"productTableItem"},r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"fas fa-plus btn-none",onClick:function(){var n=Object(w.a)({},e);n.quantity+=1,a(t,n)},"data-testid":"".concat(t,"-updateItem-btn")}),e.quantity,r.a.createElement("button",{type:"button",className:"fas fa-minus btn-none",onClick:function(){var n=Object(w.a)({},e);n.quantity-=1,n.quantity<1&&(n.quantity=1),a(t,n)},"data-testid":"".concat(t,"-updateDecreaseItem-btn")})),r.a.createElement("td",null,e.name),r.a.createElement("td",null,"$ ".concat(e.price*e.quantity)),r.a.createElement("td",null,r.a.createElement("button",{type:"button",className:"far fa-trash-alt pointer btn-none",onClick:function(){return n(e.id)},"data-testid":"".concat(t,"-deleteItem-btn")})))}):r.a.createElement("tr",null,r.a.createElement("td",null,"Sin orden"))),r.a.createElement("tfoot",null,r.a.createElement("tr",null,r.a.createElement("th",{colSpan:"3"},"Total:"),r.a.createElement("td",null,"$",t.reduce(function(e,t){return e+t.quantity*t.price},0))))),r.a.createElement("input",{type:"text",name:"name",id:"name",placeholder:"Nombre del cliente",onChange:i,value:o,className:"input","data-testid":"client-input"}),r.a.createElement("button",{className:"rounded bg text-light",type:"submit","data-testid":"add-to-firebase"},"Enviar a cocina"))}),N=(n(186),function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),o=Object(d.a)(i,2),l=o[0],f=o[1],b=Object(a.useState)([]),g=Object(d.a)(b,2),v=g[0],w=g[1],N=Object(a.useState)(""),O=Object(d.a)(N,2),I=O[0],j=O[1];Object(a.useEffect)(function(){function e(){return(e=Object(m.a)(u.a.mark(function e(){var t;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()("https://raw.githubusercontent.com/cinthyasegura/LIM008-fe-burger-queen/firstHistory/src/data/menu.json");case 2:t=e.sent,c(Object(s.a)(t.data)),f("breakfast");case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[]);return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement(h,{matchOption:function(e){f(e)}}),r.a.createElement(y,{menu:n.filter(function(e){return e.category===l}),addOrderItem:function(e){return n.filter(function(t){return t.id===e?w([].concat(Object(s.a)(v),[t])):""})}})),r.a.createElement("div",{className:"col-md-6 order"},r.a.createElement(k,{orderItems:v,deleteItem:function(e){return w(v.filter(function(t){return t.id!==e}))},updateItem:function(e,t){var n=Object(s.a)(v);n[e]=t,w(n)},addOrderToFirebase:function(e){e.preventDefault(),E.firestore().collection("users").add({clientsName:I,orderItems:v,date:E.firestore.FieldValue.serverTimestamp()}),j(""),w([])},updateInput:function(e){j(e.target.value)},clientsName:I})))}),O=(n(187),function(){return r.a.createElement("div",null,r.a.createElement(o,null),r.a.createElement(N,null))}),I=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(O,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/LIM008-fe-burger-queen",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/LIM008-fe-burger-queen","/service-worker.js");I?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):j(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):j(t,e)})}}()},75:function(e,t,n){},79:function(e,t,n){e.exports=n(188)},84:function(e,t,n){},85:function(e,t,n){}},[[79,1,2]]]);
//# sourceMappingURL=main.30d83f9f.chunk.js.map