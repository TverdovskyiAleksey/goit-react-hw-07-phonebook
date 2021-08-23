(this["webpackJsonpgoit-react-hw-template"]=this["webpackJsonpgoit-react-hw-template"]||[]).push([[0],{12:function(t,e,n){t.exports={list:"Contacts_list__33gwX",item:"Contacts_item__J1KrA",text:"Contacts_text__2IDcF",button:"Contacts_button__1DQ6R"}},21:function(t,e,n){t.exports={form:"Form_form__2P-1o",button:"Form_button__1xTl4"}},32:function(t,e,n){t.exports={Container:"Container_Container__2kMVj"}},33:function(t,e,n){t.exports={text:"Filter_text__1-iPV"}},72:function(t,e,n){},74:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(14),o=n.n(r),u=n(32),s=n.n(u),i=n(1),b=function(t){var e=t.children;return Object(i.jsx)("div",{className:s.a.Container,children:e})},l=n(23),j=n(20),f=n.n(j),d=n(21),O=n.n(d),h=n(5),m=n(7),p=n.n(m),x=n(17),v=n(11),C=n.n(v),g=n(2),_=Object(g.b)("contacts/fetchContactRequest"),w=Object(g.b)("contacts/fetchContactSuccess"),y=Object(g.b)("contacts/fetchContactError"),k=Object(g.b)("contacts/addContactRequest"),N=Object(g.b)("contacts/addContactSuccess"),A=Object(g.b)("contacts/addContactError"),F=Object(g.b)("contacts/deleteContactRequest"),S=Object(g.b)("contacts/deleteContactSuccess"),D=Object(g.b)("contacts/deleteContactError"),q=Object(g.b)("contacts/changeFilter");C.a.defaults.baseURL="http://localhost:3000";var z=function(t){var e=t.name,n=t.number;return function(){var t=Object(x.a)(p.a.mark((function t(c){var a,r,o;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a={name:e,number:n},c(k()),t.prev=2,t.next=5,C.a.post("/contacts",a);case 5:r=t.sent,o=r.data,c(N(o)),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(2),c(A(t.t0));case 13:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e){return t.apply(this,arguments)}}()},E=function(t){return function(){var e=Object(x.a)(p.a.mark((function e(n){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(F()),C.a.delete("/contacts/".concat(t)).then((function(){return n(S(t))})).catch((function(t){return n(D(t))}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},R=function(){return function(){var t=Object(x.a)(p.a.mark((function t(e){var n,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(_()),t.prev=1,t.next=4,C.a.get("/contacts");case 4:n=t.sent,c=n.data,e(w(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(y(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},J=n(9),L=function(t){return t.contacts.items},V=function(t){return t.contacts.filter},M={getContacts:L,getFilter:V,getLoading:function(t){return t.contacts.loading},getVisibleContacts:Object(J.a)([L,V],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))};var P=Object(h.b)(null,(function(t){return{onSubmit:function(e,n){return t(z(e,n))}}}))((function(){var t=Object(c.useState)(""),e=Object(l.a)(t,2),n=e[0],a=e[1],r=Object(c.useState)(""),o=Object(l.a)(r,2),u=o[0],s=o[1],b=Object(h.d)(M.getContacts),j=Object(h.c)(),d=function(t){var e=t.target,n=e.name,c=e.value;switch(n){case"name":a(c);break;case"number":s(c);break;default:return}},m=function(){a(""),s("")};return Object(i.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b.some((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):(j(z({name:n,number:u})),m())},className:O.a.form,children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{children:"Name"}),Object(i.jsx)("input",{id:f.a.generate(),type:"text",name:"name",value:n,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",onChange:d,required:!0})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("span",{children:"Number"}),Object(i.jsx)("input",{id:f.a.generate(),type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",onChange:d,required:!0})]}),Object(i.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})})),Z=n(12),B=n.n(Z),I=Object(h.b)((function(t){return{contacts:M.getVisibleContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(E(e))}}}))((function(t){var e=t.contacts,n=t.onDeleteContact;return Object(i.jsx)("ul",{className:B.a.list,children:e.map((function(t){var e=t.id,c=t.name,a=t.number;return Object(i.jsxs)("li",{className:B.a.item,children:[Object(i.jsxs)("p",{className:B.a.text,children:[c,":"]}),Object(i.jsx)("span",{children:a}),Object(i.jsx)("button",{className:B.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})})),T=n(33),K=n.n(T),Q=Object(h.b)((function(t){return{value:M.getFilter(t)}}),(function(t){return{onChange:function(e){return t(q(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(i.jsxs)("label",{children:[Object(i.jsx)("p",{className:K.a.text,children:"Find contacts by name"}),Object(i.jsx)("input",{type:"text",value:e,onChange:n})]})}));var U,X,$,G=Object(h.b)(null,(function(t){return{fetchContacts:function(){return t(R())}}}))((function(){var t=Object(h.c)();return Object(c.useEffect)((function(){return t(R())}),[t]),Object(i.jsxs)(b,{children:[Object(i.jsx)("h1",{children:"Phonebook"}),Object(i.jsx)(P,{}),Object(i.jsx)("h2",{children:"Contacts"}),Object(i.jsx)(Q,{}),Object(i.jsx)(I,{})]})})),H=(n(71),n(72),n(16)),W=n(34),Y=n.n(W),tt=n(4),et=n(3),nt=Object(g.c)([],(U={},Object(tt.a)(U,w,(function(t,e){return e.payload})),Object(tt.a)(U,N,(function(t,e){var n=e.payload;return[].concat(Object(H.a)(t),[n])})),Object(tt.a)(U,S,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),U)),ct=Object(g.c)("",Object(tt.a)({},q,(function(t,e){return e.payload}))),at=Object(g.c)(!1,(X={},Object(tt.a)(X,_,(function(){return!0})),Object(tt.a)(X,w,(function(){return!1})),Object(tt.a)(X,y,(function(){return!1})),Object(tt.a)(X,k,(function(){return!0})),Object(tt.a)(X,N,(function(){return!1})),Object(tt.a)(X,A,(function(){return!1})),Object(tt.a)(X,F,(function(){return!0})),Object(tt.a)(X,S,(function(){return!1})),Object(tt.a)(X,D,(function(){return!1})),X)),rt=Object(g.c)(null,($={},Object(tt.a)($,y,(function(t,e){return e.payload})),Object(tt.a)($,_,(function(){return null})),$)),ot=Object(et.b)({items:nt,filter:ct,loading:at,error:rt}),ut=n(8),st=[].concat(Object(H.a)(Object(g.d)({serializableCheck:{ignoredActions:[ut.a,ut.f,ut.b,ut.c,ut.d,ut.e]}})),[Y.a]),it=Object(g.a)({reducer:{contacts:ot},middleware:st,devTools:!1});o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(h.a,{store:it,children:Object(i.jsx)(G,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.3b823929.chunk.js.map