(this["webpackJsonphashcode-mock-judge-system-fe"]=this["webpackJsonphashcode-mock-judge-system-fe"]||[]).push([[0],{40:function(e,t,n){},41:function(e,t,n){},60:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n(0),c=n(10),l=n.n(c),i=n(19),r=n(33),o=n(9),u=n(20),j=n.n(u),b=n(30),d=n(15),h=n(21),f=n(75),O=n(76),m=n(74),x=n.p+"static/media/icon-trash.7a6bde0b.svg",v=(n(40),function(e){var t,n=e.file,a=e.reset;return n?Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("img",{src:x,className:"trash-icon",onClick:a,alt:"Trash Icon"}),Object(s.jsxs)("p",{className:"file-name",children:[" ",n.name," - ",(t=n.size,(t/1e3).toFixed(2)),"KB"]})]}):null}),p=function(e){var t=e.onChangeFile,n=e.id,c=Object(a.useState)(null),l=Object(o.a)(c,2),i=l[0],r=l[1];return Object(s.jsxs)("div",{className:"file-input",children:[Object(s.jsx)("input",{type:"file",id:n,className:"file",onChange:function(e){var s=e.target.files;r(s[0]),t(n,s[0])},accept:".txt"}),i?null:Object(s.jsx)("label",{htmlFor:n,children:"Choose file"}),Object(s.jsx)(v,{file:i,reset:function(){r(null),t(n,null)}})]})},g=(n(41),function(e){var t=e.onChangeFile,n=e.info;return Object(s.jsxs)("div",{className:"input-file-group",children:[Object(s.jsx)("div",{className:"file-label",children:n.label}),Object(s.jsx)(p,{onChangeFile:t,id:n.inputId})]})}),C=n(31),N=n.n(C).a.create({baseURL:"https://hashcodejudge.herokuapp.com"}),y=(n(60),[{label:"A - Example",inputId:"a"},{label:"B - Lovely landscapes",inputId:"b"},{label:"C - Memorable moments",inputId:"c"},{label:"D - Pet pictures",inputId:"d"},{label:"E - Shiny selfies",inputId:"e"}]),F={a:null,b:null,c:null,d:null,e:null},S=function(e){for(var t in e)if(e[t])return!1;return!0},w=function(e){var t=e.show,n=e.handleClose,c=e.onNewSubmission,l=Object(a.useState)(!1),i=Object(o.a)(l,2),r=i[0],u=i[1],x=Object(a.useState)(F),v=Object(o.a)(x,2),p=v[0],C=v[1];if(!t)return null;var w=function(e,t){C(Object(h.a)(Object(h.a)({},p),{},Object(d.a)({},e,t)))},k=function(){var e=Object(b.a)(j.a.mark((function e(){var t,s,a,l;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in t=new FormData,p)(a=p[s])&&t.append(s,a,a.name);return e.prev=2,u(!0),e.next=6,N.post("/files-upload",t);case 6:l=e.sent,c(l.data,!1),C(F),u(!1),n(),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),u(!1),c({},!0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)(f.a,{show:t,onHide:n,size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(s.jsx)(f.a.Header,{closeButton:!0,children:Object(s.jsx)(f.a.Title,{children:"Create submission"})}),Object(s.jsxs)(f.a.Body,{children:[Object(s.jsxs)("div",{className:"subheader",children:[Object(s.jsx)("b",{children:"Output files for data sets."})," Upload the output file for at least one data set."]}),y.map((function(e,t){return Object(s.jsx)(g,{onChangeFile:w,info:e},t)}))]}),Object(s.jsxs)(f.a.Footer,{children:[Object(s.jsx)(O.a,{variant:"outline-secondary",onClick:n,children:"Cancel"}),Object(s.jsxs)(O.a,{variant:"outline-success",onClick:k,disabled:S(p),children:[!r&&"Submit",r&&Object(s.jsxs)(s.Fragment,{children:[" ",Object(s.jsx)(m.a,{as:"span",animation:"border",size:"sm",role:"status"})," Uploading files... "]})]})]})]})},k=(n(64),function(e){var t=e.onNewSubmission,n=Object(a.useState)(!1),c=Object(o.a)(n,2),l=c[0],i=c[1];return Object(s.jsxs)("div",{className:"box",children:[Object(s.jsx)("h4",{className:"headline",children:"Qualification Round 2019"}),Object(s.jsx)("h4",{children:"Photo slideshow"}),Object(s.jsxs)("div",{className:"box-actions",children:[Object(s.jsx)("button",{className:"new-sub",onClick:function(){return i(!0)},children:"New Submission"}),Object(s.jsx)(w,{show:l,handleClose:function(){return i(!1)},onNewSubmission:t})]})]})}),I=n(14),B=(n(65),function(e){var t=e.result;return Object(s.jsxs)("div",{className:"result-item",children:[Object(s.jsxs)("span",{children:[" ",t.label]}),Object(s.jsxs)("span",{children:[" ",Object(s.jsx)("b",{children:t.value})," points"]})]})}),E=(n(66),function(e){var t=e.results,n=t.fileResults,a=t.total;return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(I.a,{className:"results",children:[Object(s.jsx)(I.a.Header,{children:"Score"}),Object(s.jsx)(I.a.Body,{children:n.map((function(e,t){return Object(s.jsx)(B,{result:e},t)}))}),Object(s.jsx)(I.a.Footer,{children:Object(s.jsx)(B,{result:a})})]})})}),P=(n(67),{200:"./assets/images/success.png",500:"./assets/images/failure.png"}),R=function(e){var t=e.message,n=e.status;return Object(s.jsx)("div",{className:"toaster",children:Object(s.jsxs)("div",{children:[Object(s.jsx)("img",{src:P[n],alt:""}),Object(s.jsxs)("span",{children:[" ",t," "]})]})})},T=(n(68),{fileResults:[{id:"a",label:"A - Example",value:0},{id:"b",label:"B - Lovely landscapes",value:0},{id:"c",label:"C - Memorable moments",value:0},{id:"d",label:"D - Pet pictures",value:0},{id:"e",label:"E - Shiny selfies",value:0}],total:{label:"Total score",value:0}}),L=function(){var e=Object(a.useState)(T),t=Object(o.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(!1),u=Object(o.a)(l,2),j=u[0],b=u[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("h2",{children:[" Google HashCode judge system ",Object(s.jsx)("em",{children:"(mocked)"})]}),Object(s.jsx)(k,{onNewSubmission:function(e,t){if(t)return b(!0),void setTimeout((function(){return b(!1)}),4e3);b(!1),console.log(e);var s=Object(r.a)(n.fileResults),a=n.total;for(var l in a.value=0,e){var o,u=Object(i.a)(s);try{for(u.s();!(o=u.n()).done;){var j=o.value;j.id===l&&(j.value=e[l])}}catch(O){u.e(O)}finally{u.f()}}var d,h=Object(i.a)(s);try{for(h.s();!(d=h.n()).done;){var f=d.value;a.value+=f.value}}catch(O){h.e(O)}finally{h.f()}c({fileResults:s,total:a})}}),Object(s.jsx)(E,{results:n}),j&&Object(s.jsx)(R,{message:"An Error Occured. Please try again.",status:"500"})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,c=t.getLCP,l=t.getTTFB;n(e),s(e),a(e),c(e),l(e)}))};n(69),n(70);l.a.render(Object(s.jsx)(L,{}),document.getElementById("root")),A()}},[[71,1,2]]]);
//# sourceMappingURL=main.328515d8.chunk.js.map