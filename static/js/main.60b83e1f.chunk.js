(this["webpackJsonpaddress-book-contacts"]=this["webpackJsonpaddress-book-contacts"]||[]).push([[0],{12:function(e,t,n){e.exports={deleteConfirmation:"styles_deleteConfirmation__gGbCx",overlay:"styles_overlay__3mXXZ",content:"styles_content__2B0_v",title:"styles_title__1f1p_",buttonSection:"styles_buttonSection__17fD0"}},15:function(e,t,n){e.exports={editContact:"styles_editContact__3C2k2",section:"styles_section__1heDZ",title:"styles_title__1opL4",icons:"styles_icons__2XVwq"}},16:function(e,t,n){e.exports={viewContact:"styles_viewContact__3XNVP",section:"styles_section__2z97N",title:"styles_title__2I07h",icons:"styles_icons__3YIiY"}},23:function(e,t,n){e.exports={slideout:"styles_slideout__2BsHW",overlay:"styles_overlay__E9h1p",slideoutContainer:"styles_slideoutContainer__1wK0q"}},24:function(e,t,n){e.exports={newContact:"styles_newContact__wCAq9",section:"styles_section___IzAy",title:"styles_title__2GOr1"}},25:function(e,t,n){e.exports={header:"styles_header__3GEh2",title:"styles_title__3CObc",addIcon:"styles_addIcon__1-BJS"}},29:function(e,t,n){e.exports={fieldControl:"styles_fieldControl__2Cspi",validation:"styles_validation__2Ee5U"}},30:function(e,t,n){e.exports={fieldControl:"styles_fieldControl__1aEo8",validation:"styles_validation__1cHE2"}},31:function(e,t,n){e.exports={button:"styles_button__1Y0gX",primary:"styles_primary__32iiB",secondary:"styles_secondary__2Vh4J"}},32:function(e,t,n){e.exports={message:"styles_message__3vV43",error:"styles_error__2tseA"}},33:function(e,t,n){e.exports={searchBox:"styles_searchBox__J_a-S",searchIcon:"styles_searchIcon__2ABui"}},46:function(e,t,n){e.exports={cancelIcon:"styles_cancelIcon__315qj"}},47:function(e,t,n){e.exports={addIcon:"styles_addIcon__kN0Xh"}},48:function(e,t,n){e.exports={deleteIcon:"styles_deleteIcon__1Ywic"}},49:function(e,t,n){e.exports={editIcon:"styles_editIcon__21fRl"}},6:function(e,t,n){e.exports={allContacts:"styles_allContacts__yh_2n",section:"styles_section__35igu",count:"styles_count__1LTi2",heading:"styles_heading__3r8iE",data:"styles_data__1Km3j",selected:"styles_selected__ouziB",name:"styles_name__4t7Jh",phone:"styles_phone__2minA",hideOnMobile:"styles_hideOnMobile__Cmuer"}},60:function(e,t,n){},61:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),c=n(19),i=n.n(c),o=n(4),r=(n(60),n(7)),l=n(51),d=(n(61),n(0)),u=["name","color","onClick"],j=function(e){var t=e.name,n=e.color,a=e.onClick,s=Object(l.a)(e,u);return Object(d.jsx)("span",{className:"icons material-icons ".concat(n||""),"data-testid":s["data-testid"],onClick:a,children:t})},b=n(10),m=n(2),f=n(45),O=n.n(f),v={users:"https://randomuser.me/api/?results=".concat(25,"&nat=").concat("nl","&inc=").concat("name,email,phone,id")},_="GET_USERS_REQUEST",h="GET_USERS_SUCCESS",p="GET_USERS_FAILURE",x="SET_SELECTED_USER",y="ADD_USER",g="UPDATE_USER",N="DELETE_USER",C=function(){return function(e){e({type:_}),O.a.get(v.users).then((function(t){var n=t.data.results,a=[];n&&Array.isArray(n)&&n.length>0&&(a=n.map((function(e,t){return Object(m.a)(Object(m.a)({},e),{},{type:t%2===0?"Work":"Private"})})).sort((function(e,t){return e.name.first>t.name.first?1:-1}))),e(function(e){return{type:h,payload:e}}(a))})).catch((function(t){var n=t.message;e({type:p,payload:n})}))}},S=n(23),E=n.n(S),k=function(e){var t=e.toggleContactForm,n=e.children;return Object(d.jsxs)("div",{className:E.a.slideout,children:[Object(d.jsx)("div",{className:E.a.overlay,onClick:function(){return t("")}}),Object(d.jsx)("div",{className:E.a.slideoutContainer,children:n})]})},F=n(29),I=n.n(F),w=function(e){var t=e.fieldType,n=e.fieldDisplayName,a=e.fieldName,s=e.formik,c=e.isDisabled;return Object(d.jsxs)("div",{className:I.a.fieldControl,children:[Object(d.jsx)("label",{htmlFor:a,children:n}),Object(d.jsx)("input",Object(m.a)({type:t,id:a,disabled:c},s.getFieldProps(a))),s.errors[a]&&Object(d.jsx)("div",{className:I.a.validation,children:s.errors[a]})]})},D=n(30),T=n.n(D),L=function(e){var t=e.fieldType,n=e.fieldDisplayName,a=e.fieldName,s=e.formik,c=e.isDisabled,i=e.options;return Object(d.jsxs)("div",{className:T.a.fieldControl,children:[Object(d.jsx)("label",{htmlFor:a,children:n}),Object(d.jsx)("select",Object(m.a)(Object(m.a)({type:t,id:a,disabled:c},s.getFieldProps(a)),{},{children:i.map((function(e){return Object(d.jsx)("option",{value:e.name,children:e.label},e.name)}))})),s.errors[a]&&Object(d.jsx)("div",{className:T.a.validation,children:s.errors[a]})]})},A=n(31),U=n.n(A),R="primary",M="secondary",B=function(e){var t=e.style,n=void 0===t?R:t,a=e.type,s=e.name,c=e.onClick;return Object(d.jsx)("button",{className:"".concat(U.a.button," ").concat(U.a[n]),type:a,onClick:c,children:s})},P="new",q="edit",V="view",G=function(e){var t=e.formik,n=e.formType,a=n===V;return Object(d.jsxs)("form",{onSubmit:t.handleSubmit,children:[Object(d.jsx)(w,{fieldDisplayName:"First Name",fieldName:"firstName",fieldType:"text",formik:t,isDisabled:a}),Object(d.jsx)(w,{fieldDisplayName:"Last Name",fieldName:"lastName",fieldType:"text",formik:t,isDisabled:a}),Object(d.jsx)(w,{fieldDisplayName:"Phone",fieldName:"phone",fieldType:"number",formik:t,isDisabled:a}),Object(d.jsx)(w,{fieldDisplayName:"Email",fieldName:"email",fieldType:"email",formik:t,isDisabled:a}),Object(d.jsx)(L,{fieldDisplayName:"Status",fieldName:"type",formik:t,isDisabled:a,options:[{label:"Private",name:"Private"},{label:"Work",name:"Work"}]}),n===P&&Object(d.jsx)(B,{type:"submit",name:"Add"}),n===q&&Object(d.jsx)(B,{type:"submit",name:"Save"})]})},J=n(46),X=n.n(J),Z=function(e){var t=e.toggleContactForm;return Object(d.jsx)("div",{className:X.a.cancelIcon,children:Object(d.jsx)(j,{"data-testid":"cancel-icon",name:"clear",onClick:t})})},W=function(e){var t={};return e.firstName?e.firstName.length>15&&(t.firstName="Must be 15 characters or less"):t.firstName="Required",e.lastName?e.lastName.length>20&&(t.lastName="Must be 20 characters or less"):t.lastName="Required",e.phone?10!==e.phone.toString().length&&(t.phone="Must be 10 characters"):t.phone="Required",e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},Y=function(e){return"(".concat(e.substr(0,3),")-").concat(e.substr(3,3),"-").concat(e.substr(6,4))},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e.firstName,a=e.lastName,s=e.email,c=e.phone,i=e.type;return t?Object(m.a)(Object(m.a)({},t),{},{name:Object(m.a)(Object(m.a)({},t.name),{},{first:n,last:a}),email:s,phone:Y(c.toString()),type:i}):{name:{title:"Mr",first:n,last:a},email:s,phone:Y(c.toString()),id:{name:"BSN",value:(new Date).getTime()},type:i}},H=n(24),K=n.n(H),Q=function(e){var t=e.toggleContactForm,n=Object(o.b)(),a=Object(b.a)({initialValues:{firstName:"",lastName:"",phone:"",email:"",type:"Private"},validate:W,onSubmit:function(e){var a=z(e);n({type:y,payload:a}),t()}});return Object(d.jsx)("div",{"data-testid":"new-contact",children:Object(d.jsx)(k,{toggleContactForm:t,children:Object(d.jsxs)("div",{className:K.a.newContact,children:[Object(d.jsxs)("div",{className:K.a.section,children:[Object(d.jsx)("h2",{className:K.a.title,children:"New Contact"}),Object(d.jsx)(Z,{toggleContactForm:t})]}),Object(d.jsx)(G,{formik:a,formType:P})]})})})},$=n(47),ee=n.n($),te=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],s=t[1],c=function(){s((function(e){return!e}))};return Object(d.jsxs)("div",{className:ee.a.addIcon,children:[Object(d.jsx)(j,{name:"person_add",onClick:c,color:"white"}),n&&Object(d.jsx)(Q,{toggleContactForm:c})]})},ne=n(25),ae=n.n(ne),se=function(){var e=Object(o.c)((function(e){return e.page})).pageTitle;return Object(d.jsx)("header",{children:Object(d.jsxs)("div",{className:ae.a.header,children:[Object(d.jsx)("h3",{className:ae.a.title,children:e}),Object(d.jsx)("div",{className:ae.a.addIcon,children:Object(d.jsx)(te,{})})]})})},ce=function(){return Object(d.jsx)("p",{children:"Loading..."})},ie=n(32),oe=n.n(ie),re="information",le="error",de=function(e){var t=e.style,n=void 0===t?re:t,a=e.message;return Object(d.jsx)("p",{className:"".concat(oe.a.message," ").concat(oe.a[n]),children:a})},ue=n(12),je=n.n(ue),be="cancel",me="delete",fe=function(e){var t=e.deleteContact;return Object(d.jsxs)("div",{className:je.a.deleteConfirmation,"data-testid":"delete-confirmation",children:[Object(d.jsx)("div",{className:je.a.overlay}),Object(d.jsxs)("div",{className:je.a.content,children:[Object(d.jsx)("div",{className:je.a.title,children:"Delete this contact?"}),Object(d.jsxs)("div",{className:je.a.buttonSection,children:[Object(d.jsx)(B,{style:M,type:"button",name:"Cancel",onClick:function(){return t(be)}}),Object(d.jsx)(B,{style:R,type:"button",name:"Delete",onClick:function(){return t(me)}})]})]})]})},Oe=n(48),ve=n.n(Oe),_e=function(e){var t=e.userId,n=e.toggleContactForm,s=Object(a.useState)(!1),c=Object(r.a)(s,2),i=c[0],l=c[1],u=Object(o.b)();return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:ve.a.deleteIcon,children:Object(d.jsx)(j,{"data-testid":"delete-icon",name:"delete",onClick:function(){l(!0)}})}),i&&Object(d.jsx)(fe,{deleteContact:function(e){l(!1),e===me&&(u({type:N,payload:{id:t}}),n())}})]})},he=n(15),pe=n.n(he),xe=function(e){var t=e.toggleContactForm,n=e.toggleContactEditForm,a=Object(o.c)((function(e){var t=e.users,n=t.users,a=t.selectedUser;return null===n||void 0===n?void 0:n.find((function(e){return e.id.value===a}))})),s=Object(o.b)(),c=Object(b.a)({initialValues:{firstName:null===a||void 0===a?void 0:a.name.first,lastName:null===a||void 0===a?void 0:a.name.last,phone:null===a||void 0===a?void 0:a.phone.replace(/\D+/g,""),email:null===a||void 0===a?void 0:a.email,type:null===a||void 0===a?void 0:a.type},validate:W,onSubmit:function(e){var c=z(e,a);s(function(e,t){return{type:g,payload:{user:e,id:t}}}(c,a.id.value)),n(),t()}});return Object(d.jsx)("div",{"data-testid":"edit-contact",children:a&&Object(d.jsx)(k,{toggleContactForm:t,children:Object(d.jsxs)("div",{className:pe.a.editContact,children:[Object(d.jsxs)("div",{className:pe.a.section,children:[Object(d.jsx)("h2",{className:pe.a.title,children:"Edit Contact"}),Object(d.jsxs)("div",{className:pe.a.icons,children:[Object(d.jsx)(_e,{userId:a.id.value,toggleContactForm:t}),Object(d.jsx)(Z,{toggleContactForm:t})]})]}),Object(d.jsx)(G,{formik:c,formType:q})]})})})},ye=n(49),ge=n.n(ye),Ne=function(e){var t=e.toggleContactForm,n=Object(a.useState)(!1),s=Object(r.a)(n,2),c=s[0],i=s[1],o=function(){i((function(e){return!e}))};return Object(d.jsxs)("div",{className:ge.a.editIcon,children:[Object(d.jsx)(j,{"data-testid":"edit-icon",name:"edit",onClick:o}),c&&Object(d.jsx)(xe,{toggleContactEditForm:o,toggleContactForm:t})]})},Ce=n(16),Se=n.n(Ce),Ee=function(e){var t=e.toggleContactForm,n=Object(o.c)((function(e){var t=e.users,n=t.users,a=t.selectedUser;return null===n||void 0===n?void 0:n.find((function(e){return e.id.value===a}))})),a=Object(b.a)({initialValues:{firstName:null===n||void 0===n?void 0:n.name.first,lastName:null===n||void 0===n?void 0:n.name.last,phone:null===n||void 0===n?void 0:n.phone.replace(/\D+/g,""),email:null===n||void 0===n?void 0:n.email,type:null===n||void 0===n?void 0:n.type}});return Object(d.jsx)("div",{"data-testid":"view-contact",children:n&&Object(d.jsx)(k,{toggleContactForm:t,children:Object(d.jsxs)("div",{className:Se.a.viewContact,children:[Object(d.jsxs)("div",{className:Se.a.section,children:[Object(d.jsx)("h2",{className:Se.a.title,children:"View Contact"}),Object(d.jsxs)("div",{className:Se.a.icons,children:[Object(d.jsx)(Ne,{toggleContactForm:t}),Object(d.jsx)(_e,{userId:n.id.value,toggleContactForm:t}),Object(d.jsx)(Z,{toggleContactForm:t})]})]}),Object(d.jsx)(G,{formik:a,formType:V})]})})})},ke=n(33),Fe=n.n(ke),Ie=function(e){var t=e.onSearch;return Object(d.jsxs)("div",{className:Fe.a.searchBox,children:[Object(d.jsx)("input",{type:"text",placeholder:"Search contacts",onChange:function(e){return t(e.target.value)}}),Object(d.jsx)("div",{className:Fe.a.searchIcon,children:Object(d.jsx)(j,{name:"search"})})]})},we=n(6),De=n.n(we),Te=function(e){var t=e.users,n=Object(a.useState)(t),s=Object(r.a)(n,2),c=s[0],i=s[1],l=Object(a.useState)(!1),u=Object(r.a)(l,2),j=u[0],b=u[1],m=Object(o.c)((function(e){return e.users})).selectedUser,f=Object(o.b)();Object(a.useEffect)((function(){return i(t)}),[t]);var O=function(e){f(function(e){return{type:x,payload:e}}(e)),b((function(e){return!e}))};return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:De.a.allContacts,children:[Object(d.jsxs)("div",{className:De.a.section,children:[Object(d.jsx)("h4",{className:De.a.count,children:"Contacts (".concat(null===c||void 0===c?void 0:c.length,")")}),Object(d.jsx)(Ie,{onSearch:function(e){i(function(e,t){var n=null===e||void 0===e?void 0:e.toLowerCase();return t.filter((function(e){return e.name.first.toLowerCase().includes(n)||e.name.last.toLowerCase().includes(n)||e.email.toLowerCase().includes(n)||e.phone.toString().includes(n)||e.type.toLowerCase().includes(n)}))}(e,t))}})]}),0===(null===c||void 0===c?void 0:c.length)?Object(d.jsx)("p",{children:"No contacts to display."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:De.a.heading,children:[Object(d.jsx)("div",{children:"Name"}),Object(d.jsx)("div",{children:"Phone"}),Object(d.jsx)("div",{children:"Email"}),Object(d.jsx)("div",{children:"Status"})]}),null===c||void 0===c?void 0:c.map((function(e){var t=e.name,n=e.email,a=e.id,s=e.phone,c=e.type;return Object(d.jsxs)("div",{className:"".concat(De.a.data," ").concat(a.value===m?De.a.selected:""),onClick:function(){return O(a.value)},children:[Object(d.jsxs)("div",{className:De.a.name,children:[t.first," ",t.last]}),Object(d.jsx)("div",{className:De.a.phone,children:s}),Object(d.jsx)("div",{className:De.a.hideOnMobile,children:n}),Object(d.jsx)("div",{className:De.a.hideOnMobile,children:c})]},a.value)}))]})]}),j&&Object(d.jsx)(Ee,{toggleContactForm:O})]})},Le=function(){var e=Object(o.c)((function(e){return e.users})),t=e.isLoading,n=e.users,s=e.isError,c=e.errorMessage,i=Object(o.b)();return Object(a.useEffect)((function(){return i(C())}),[]),t?Object(d.jsx)(ce,{}):s?Object(d.jsx)(de,{style:le,message:c}):Object(d.jsx)(Te,{users:n})},Ae=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(se,{}),Object(d.jsx)("div",{className:"container",children:Object(d.jsx)(Le,{})})]})},Ue=n(14),Re="SET_PAGE_TITLE",Me={pageTitle:"Address book"},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;return t.type===Re?Object(m.a)(Object(m.a)({},e),{},{pageTitle:t.payload}):e},Pe=n(34),qe={isLoading:!1,users:[],isError:!1,errorMessage:"",selectedUser:""},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!0});case h:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,users:t.payload});case p:return Object(m.a)(Object(m.a)({},e),{},{isLoading:!1,users:[],isError:!0,errorMessage:t.payload});case x:return Object(m.a)(Object(m.a)({},e),{},{selectedUser:t.payload});case y:var n=[].concat(Object(Pe.a)(e.users),[t.payload]);return Object(m.a)(Object(m.a)({},e),{},{users:n.sort((function(e,t){return e.name.first>t.name.first?1:-1}))});case g:var a=e.users.findIndex((function(e){return e.id.value===t.payload.id})),s=Object(Pe.a)(e.users);return s[a]=t.payload.user,Object(m.a)(Object(m.a)({},e),{},{users:s.sort((function(e,t){return e.name.first>t.name.first?1:-1}))});case N:var c=e.users.filter((function(e){return e.id.value!==t.payload.id}));return Object(m.a)(Object(m.a)({},e),{},{users:c});default:return e}},Ge=Object(Ue.b)({page:Be,users:Ve}),Je=n(50),Xe=Object(Ue.c)(Ge,Object(Ue.a)(Je.a));n(82);i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(o.a,{store:Xe,children:Object(d.jsx)(Ae,{})})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.60b83e1f.chunk.js.map