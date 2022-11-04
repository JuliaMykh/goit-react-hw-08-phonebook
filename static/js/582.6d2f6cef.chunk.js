"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[582],{1582:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a,s,i,o,c=t(885),d=t(2791),u=t(5705),l=t(5264),m=t(7126),h=t(6251),x=t(168),f=t(3626),p=f.Z.label(r||(r=(0,x.Z)(["\n    margin-right: 10px;\n     border-radius: 5px;\n"]))),j=f.Z.span(a||(a=(0,x.Z)(["\n    font-weight: 700;\n    margin-right: 5px;\n"]))),b=f.Z.h1(s||(s=(0,x.Z)(["\n    font-size: 26px;\n    text-transform: uppercase;\n    font-weight: 700;\n    color: #be1111;\n    margin-bottom: 30px;\n"]))),g=t(6445),Z=t(184),v=function(){var n=(0,h.Tn)(),e=(0,c.Z)(n,2),t=e[0],r=e[1],a=(0,h.wY)().data;return(0,d.useEffect)((function(n){r.isSuccess&&l.Notify.success("The ".concat(n," has been added to your contact list."))}),[r.isSuccess]),(0,Z.jsxs)(Z.Fragment,{children:[r.isLoading&&(0,Z.jsx)(g.a,{}),(0,Z.jsx)(b,{children:"Contacts"}),(0,Z.jsx)(u.J9,{initialValues:{name:"",number:""},onSubmit:function(n,e){var r=n.name,s=n.number,i=e.resetForm;a.some((function(n){return n.name.toLowerCase()===r.toLowerCase()}))?l.Notify.failure("".concat(r," is already in contacts.")):t({name:r,number:s})&&i()},children:(0,Z.jsxs)(u.l0,{children:[(0,Z.jsxs)(p,{children:[(0,Z.jsx)(j,{children:"Name"}),(0,Z.jsx)(u.gN,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,Z.jsxs)(p,{children:[(0,Z.jsx)(j,{children:" Number"}),(0,Z.jsx)(u.gN,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Z.jsx)(m.Z,{variant:"outlined",color:"error",size:"small",type:"submit",disabled:r.isLoading,children:"Add Contact"})]})})]})},w=t(5048),y=f.Z.li(i||(i=(0,x.Z)(["\n    margin-top: 5px;\n    margin-bottom: 5px;\n"]))),C=t(7247),L=function(n){var e=n.name,t=n.number,r=n.id,a=(0,h.Nt)(),s=(0,c.Z)(a,2),i=s[0],o=s[1];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("p",{children:[e," : ",t," "]}),(0,Z.jsx)(m.Z,{variant:"outlined",startIcon:(0,Z.jsx)(C.Z,{}),color:"error",size:"small",type:"button",onClick:function(){return i(r)},contactId:r,disabled:o.isLoading,children:"Delete"})]})},N=function(){var n=(0,h.wY)(),e=n.data,t=n.error,r=n.isLoading,a=n.refetch,s=(0,w.v9)((function(n){return n.filter}));(0,d.useEffect)((function(){a()}),[a]);return(0,Z.jsxs)("ul",{children:[t&&(0,Z.jsx)("p",{children:t.data}),r?(0,Z.jsx)(g.a,{}):"",e&&(s?e.filter((function(n){return n.name.toLowerCase().includes(s.toLowerCase())})):e).map((function(n){var e=n.name,t=n.number,r=n.id;return(0,Z.jsx)(y,{children:(0,Z.jsx)(L,{name:e,number:t,id:r})},r)}))]})},_=f.Z.p(o||(o=(0,x.Z)(["\n    font-weight: 700;\n    \n"]))),k=t(4808),z=function(){var n=(0,w.I0)(),e=(0,w.v9)((function(n){return n.filter}));return(0,Z.jsxs)("label",{children:[(0,Z.jsx)(_,{children:"Find contacts by name"}),(0,Z.jsx)("input",{type:"text",value:e,onChange:function(e){var t=e.target.value;n((0,k.M)(t))}})]})},A=function(){var n=(0,h.wY)().data;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(v,{}),(0,Z.jsx)(z,{}),n&&n.length>0?(0,Z.jsx)(N,{}):(0,Z.jsx)("p",{children:"Contact list is empty"})]})}}}]);
//# sourceMappingURL=582.6d2f6cef.chunk.js.map