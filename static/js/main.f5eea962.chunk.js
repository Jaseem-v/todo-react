(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{13:function(e,t,s){},16:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),l=s(7),i=s.n(l),n=s(2),o=s(5),d=(s(13),s(0));var r=function(e){var t=e.todo,s=e.setTodos,a=e.todos,c=e.setDeleteData,l=e.deleteData,i=function(e){s(a.filter((function(s){return s.id===t.id&&(t.status=e.target.checked),t})))};return Object(d.jsx)("div",{children:Object(d.jsxs)("li",{className:"task-list-item","v-for":"task in tasks",children:[Object(d.jsxs)("label",{className:"task-list-item-label",children:[t.status?Object(d.jsx)("input",{type:"checkbox",onClick:i,checked:!0}):Object(d.jsx)("input",{type:"checkbox",onClick:i}),Object(d.jsx)("span",{className:"".concat(t.status?"completed":""),children:t.text})]}),Object(d.jsx)("span",{onClick:function(){c([].concat(Object(n.a)(l),[t])),s(a.filter((function(e){return e.id!==t.id})))},className:"delete-btn",title:"Delete Task"})]})})};var j=function(e){var t=e.todo;return e.setTodos,e.todos,Object(d.jsx)("div",{children:Object(d.jsxs)("li",{className:"task-list-item","v-for":"task in tasks",children:[Object(d.jsx)("label",{className:"task-list-item-label",children:Object(d.jsxs)("div",{className:"checkbox-cmplt",children:[Object(d.jsx)("input",{type:"checkbox",checked:!0}),Object(d.jsx)("span",{children:t.text})]})}),Object(d.jsx)("span",{className:"date",title:"Delete Task",children:t.time})]})})};var b=function(e){var t=e.todo,s=e.setTodos,a=e.todos,c=e.deleteData,l=e.setDeleteData;return Object(d.jsx)("div",{children:Object(d.jsxs)("li",{className:"task-list-item","v-for":"task in tasks",children:[Object(d.jsxs)("label",{className:"task-list-item-label",children:[t.status?Object(d.jsx)("input",{type:"checkbox",checked:!0}):Object(d.jsx)("input",{type:"checkbox"}),Object(d.jsx)("span",{children:t.text})]}),Object(d.jsx)("span",{className:"date",title:"Delete Task",children:t.time}),Object(d.jsx)("button",{onClick:function(){s([].concat(Object(n.a)(a),[t])),l(c.filter((function(e){return e.id!==t.id})))}})]})})},u=s(8),O=s.n(u);var x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],c=t[1],l=Object(a.useState)([]),i=Object(o.a)(l,2),u=i[0],x=i[1],m=Object(a.useState)([]),p=Object(o.a)(m,2),h=p[0],k=p[1];Object(a.useEffect)((function(){v()}),[]),Object(a.useEffect)((function(){f()}),[u]),console.log(h);var f=function(){localStorage.setItem("deleteData",JSON.stringify(h)),localStorage.setItem("todos",JSON.stringify(u))},v=function(){if(null===localStorage.getItem("deleteData"))localStorage.setItem("deleteData",JSON.stringify([]));else{var e=JSON.parse(localStorage.getItem("deleteData"));k(e)}if(null===localStorage.getItem("todos"))localStorage.setItem("todos",JSON.stringify([]));else{var t=JSON.parse(localStorage.getItem("todos"));x(t)}};return Object(d.jsxs)("div",{className:"total",children:[Object(d.jsxs)("div",{className:"app-container",id:"taskList",children:[Object(d.jsx)("h1",{className:"app-header",children:"TO DO LIST"}),Object(d.jsxs)("div",{className:"add-task",children:[Object(d.jsx)("input",{value:s,onChange:function(e){c(e.target.value)},type:"text",autocomplete:"off",placeholder:"Add New Task",className:"task-input"}),Object(d.jsx)("input",{onClick:function(e){e.preventDefault(),x([].concat(Object(n.a)(u),[{text:s,status:!1,id:Date.now(),time:O()().format("LLLL")}])),c("")},type:"submit",value:"",className:"submit-task",title:"Add Task"})]}),Object(d.jsx)("ul",{classname:"task-list",children:u.map((function(e){return""!==e.text?Object(d.jsx)(r,{todo:e,todos:u,setTodos:x,deleteData:h,setDeleteData:k},e.id):null}))})]}),Object(d.jsxs)("div",{className:"app-container complted-div",id:"taskList",children:[Object(d.jsx)("h1",{className:"app-header",children:"Completed"}),Object(d.jsx)("ul",{classname:"task-list",children:Object(d.jsx)("div",{children:u.map((function(e){return e.status?Object(d.jsx)(j,{todos:u,todo:e,setTodos:x},e.id):null}))})})]}),Object(d.jsxs)("div",{className:"app-container deleted-div",id:"taskList",children:[Object(d.jsx)("h1",{className:"app-header",children:"Deleted"}),Object(d.jsx)("ul",{classname:"task-list",children:Object(d.jsx)("div",{children:h.map((function(e){return""!==e.text?Object(d.jsx)(b,{todos:u,setTodos:x,todo:e,deleteData:h,setDeleteData:k},e.id):null}))})})]}),Object(d.jsx)("div",{className:"clear",children:Object(d.jsx)("button",{className:"clear-btn",onClick:function(){window.localStorage.clear(),window.location.reload()},children:" all clear"})})]})};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.f5eea962.chunk.js.map