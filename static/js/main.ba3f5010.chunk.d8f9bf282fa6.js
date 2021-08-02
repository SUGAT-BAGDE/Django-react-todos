(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{36:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var i=a(1),s=a.n(i),o=a(30),n=a.n(o),r=(a(36),a(12)),c=a(8),u=a(0),l=function(e){return Object(u.jsx)("div",{children:Object(u.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)(c.b,{className:"navbar-brand",to:"/",children:"Todo List"}),Object(u.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(u.jsx)("span",{className:"navbar-toggler-icon"})}),Object(u.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(u.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(c.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)("button",{className:"nav-link",onClick:e.refresstodos,style:{cursor:"pointer",border:"0px",outline:"none",background:"rgba(0,0,0,0)"},children:"Refresh Todos"})})]})})]})})})},d=a(9),m=a.n(d),p=function(e){var t=Object(i.useState)(""),a=Object(r.a)(t,2),s=a[0],o=a[1],n=Object(i.useState)(""),c=Object(r.a)(n,2),l=c[0],d=c[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"text-center my-3",children:"Add a Todo"}),Object(u.jsxs)("form",{className:"my-2",onSubmit:function(t){t.preventDefault(),""!==s&&""!==l?(m()({url:"/addtodo",method:"post",headers:{fromreact:"yes"},data:JSON.stringify({title:s,desc:l})}).then((function(t){e.setTodos(t.data)})).catch((function(e){console.warn(e)})),o(""),d("")):alert("Title or Description Cannot Be Blank")},children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Todo Title"}),Object(u.jsx)("input",{type:"text",value:s,onChange:function(e){o(e.target.value)},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Todo Description"}),Object(u.jsx)("input",{type:"text",value:l,onChange:function(e){d(e.target.value)},className:"form-control",id:"exampleInputPassword1"})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Add Todo"})]})]})},b=a(13),j=a(14),h=a(17),v=a(16),x=function(e){return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:e.todo.title}),Object(u.jsx)("p",{children:e.todo.desc}),Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"btn btn-danger btn-sm",onClick:function(){e.onDelete(e.todo.id)},children:"Done"}),Object(u.jsx)(c.b,{className:"btn btn-primary btn-sm mx-2",to:"/edittodo/".concat(e.todo.id),children:"Edit"})]})]}),Object(u.jsx)("hr",{})]})},f=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.refresstodos()}},{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h3",{className:"text-center",children:"Todo List"}),0===this.props.todos.length?Object(u.jsx)("h4",{children:"No Todo To Display"}):this.props.todos.map((function(t,a){return Object(u.jsx)(x,{todo:t,onDelete:e.props.deletetodo},a)}))]})}}]),a}(i.Component),O=a(2),q=function(){return Object(u.jsx)("div",{className:"container text-center",children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione est perspiciatis debitis ipsum voluptatum maxime blanditiis corrupti similique, nam a ab? Sequi harum dignissimos nam reiciendis earum blanditiis quae consectetur dicta ipsa, veritatis perferendis necessitatibus optio corrupti facere et iure voluptates repellendus minus. Consequatur soluta dolores dolor neque cumque magnam dolore similique officiis, quo quibusdam deleniti tenetur, quas dolorem ad impedit ullam rem assumenda vitae porro molestias? Quo neque animi fuga ea! Perferendis, eum. Explicabo in corrupti veniam adipisci nihil, ea architecto nulla. Doloribus animi a obcaecati expedita! Quas assumenda dolorum qui placeat id officia dicta alias exercitationem quae distinctio atque eum, hic et, fugit corrupti excepturi nobis incidunt vero ipsam unde deserunt quos ab maiores quidem. Saepe sint perspiciatis ut sed aliquid assumenda. Perspiciatis provident pariatur, illo, dolore eos quia maiores tempore quam unde exercitationem placeat vitae dolor. Rem vitae dolor culpa enim expedita aperiam dolorem architecto ut odio vero quaerat, accusamus eaque aut cum accusantium impedit, voluptatibus praesentium quod suscipit quibusdam possimus amet! Quibusdam harum dignissimos ab eveniet repudiandae assumenda est a incidunt at aliquid repellat temporibus iusto provident debitis reiciendis nisi, amet eaque voluptates rerum ipsa autem optio nemo qui. Porro animi illum vero eligendi fugit magnam aliquam itaque quibusdam recusandae adipisci. Explicabo odio alias, tempora quo voluptate quidem quia, odit fugiat corporis vel temporibus exercitationem rerum doloribus totam et necessitatibus reprehenderit eveniet aliquam non! Quam consequuntur molestiae mollitia laboriosam, reiciendis quae repellat et magnam maxime rem omnis rerum. Facilis maxime tempore sint reprehenderit quos quisquam. Magnam enim soluta blanditiis, consequatur aspernatur eum nulla rerum officia, nihil quisquam iste quod cum dolore consequuntur numquam nisi iusto cumque deleniti voluptatibus explicabo maxime mollitia! Vel praesentium ullam, totam ad harum expedita vitae, quas velit, minus quo placeat est? Architecto velit, deserunt recusandae soluta accusantium fuga quis quam dolore dolorum minima sint dignissimos error. Ea fugit vel reprehenderit distinctio ducimus id quaerat nostrum deleniti esse voluptatum optio minima atque cum suscipit soluta placeat provident illo, nulla nobis aperiam dignissimos deserunt quasi. Unde dolor ipsam eaque quibusdam tempore eum sed dignissimos, nisi quos possimus eveniet, iusto ipsum, natus hic molestias! Minus, reprehenderit magnam provident quidem veniam, molestiae iusto et corrupti a facilis officiis. Vero saepe quos qui quo voluptas ipsa esse excepturi voluptatum iusto laudantium nemo, odit illum eveniet ratione totam expedita quia aperiam delectus. Quod quibusdam aut aliquid accusamus facilis eveniet quaerat magni, repellat et hic cupiditate iure fuga velit corrupti delectus! Dolorem nobis alias nihil voluptatibus possimus voluptatem aspernatur vitae, pariatur error molestiae repudiandae neque ex non accusantium, eius totam nulla doloribus earum accusamus asperiores atque. Ratione pariatur voluptatibus nihil, neque corrupti eos optio illo architecto, dolores quae placeat fugit, obcaecati id asperiores vitae quaerat alias ipsam eius reiciendis itaque aut aperiam assumenda suscipit labore? Fuga rerum aspernatur unde officiis animi aliquid atque incidunt aliquam vitae ratione voluptatibus dignissimos error id quia, tempora delectus porro vero sint, ex assumenda neque laborum. Delectus ullam molestias necessitatibus labore. Molestias animi mollitia autem, exercitationem commodi, ea asperiores placeat neque ipsam error consequuntur."})},g=a(15),N=function(e){Object(h.a)(a,e);var t=Object(v.a)(a);function a(e){var i;return Object(b.a)(this,a),(i=t.call(this,e)).state={title:"",desc:"",redirect:!1},i.submit=i.submit.bind(Object(g.a)(i)),i}return Object(j.a)(a,[{key:"submit",value:function(e){var t=this;e.preventDefault(),""!==this.state.title&&""!==this.state.desc?m()({url:"/edittodo/".concat(this.props.match.params.id),method:"post",headers:{fromreact:"yes"},data:JSON.stringify({title:this.state.title,desc:this.state.desc})}).then((function(e){t.setState({redirect:!0})})).catch((function(e){t.setState({redirect:!0}),console.warn(e)})):alert("Title or Description Cannot Be Blank")}},{key:"componentDidMount",value:function(){var e=this;m()({method:"get",url:"/gettodo/".concat(this.props.match.params.id),headers:{fromreact:"yes"}}).then((function(t){try{if("404 not found"===t.data.message)return void e.setState({redirect:!0})}catch(a){}e.title=t.data.title,e.desc=t.data.desc,e.setState({title:t.data.title,desc:t.data.desc})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(u.jsx)(u.Fragment,{children:!0===this.state.redirect?Object(u.jsx)(O.a,{to:"/"}):Object(u.jsx)("div",{onSubmit:this.submit,children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{className:"text-center my-3",children:"Edit Todo"}),Object(u.jsxs)("form",{className:"my-2",children:[Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"Todo Title"}),Object(u.jsx)("input",{type:"text",value:this.state.title,onChange:function(t){e.setState({title:t.target.value})},className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),Object(u.jsxs)("div",{className:"mb-3",children:[Object(u.jsx)("label",{htmlFor:"exampleInputPassword1",className:"form-label",children:"Todo Description"}),Object(u.jsx)("input",{type:"text",value:this.state.desc,onChange:function(t){e.setState({desc:t.target.value})},className:"form-control",id:"exampleInputPassword1"})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Done"})]})]})})})}}]),a}(i.Component),y=Object(O.g)(N);var T=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),a=t[0],s=t[1],o=function(){m()({method:"get",url:"/allTodos",headers:{fromreact:"yes"}}).then((function(e){s(e.data)})).catch((function(e){console.log(e)}))};return Object(u.jsxs)(c.a,{children:[Object(u.jsx)(l,{refresstodos:o}),Object(u.jsx)("div",{children:Object(u.jsxs)(O.d,{children:[Object(u.jsx)(O.b,{exact:!0,path:"/about",children:Object(u.jsx)(q,{})}),Object(u.jsx)(O.b,{path:"/edittodo/:id",children:Object(u.jsx)(y,{})}),Object(u.jsxs)(O.b,{exact:!0,path:"/",children:[Object(u.jsx)(p,{setTodos:s}),Object(u.jsx)(f,{todos:a,setTodos:s,refresstodos:o,deletetodo:function(e){m()({method:"get",url:"/deletetodo/".concat(e),headers:{fromreact:"yes"}}).then((function(e){null!==e.data.message?s(e.data):console.log(e)})).catch((function(e){console.log(e)}))}})]})]})})]})},S=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,65)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,o=t.getLCP,n=t.getTTFB;a(e),i(e),s(e),o(e),n(e)}))};n.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(T,{})}),document.getElementById("root")),S()}},[[64,1,2]]]);
//# sourceMappingURL=main.ba3f5010.chunk.js.map