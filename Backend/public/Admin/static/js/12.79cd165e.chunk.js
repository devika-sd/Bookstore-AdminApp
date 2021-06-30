(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[12],{187:function(e,a,t){"use strict";var r=t(56),l=t(57),n=t(58),s=t.n(n),i=t(0),c=t.n(i),o=(t(64),t(5)),m=t.n(o),d=["as","className","type","tooltip"],u={type:m.a.string,tooltip:m.a.bool,as:m.a.elementType},p=c.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"div":t,i=e.className,o=e.type,m=void 0===o?"valid":o,u=e.tooltip,p=void 0!==u&&u,b=Object(l.a)(e,d);return c.a.createElement(n,Object(r.a)({},b,{ref:a,className:s()(i,m+"-"+(p?"tooltip":"feedback"))}))}));p.displayName="Feedback",p.propTypes=u;var b=p,f=c.a.createContext({controlId:void 0}),v=t(59),x=["id","bsPrefix","bsCustomPrefix","className","type","isValid","isInvalid","isStatic","as"],E=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.type,u=void 0===d?"checkbox":d,p=e.isValid,b=void 0!==p&&p,E=e.isInvalid,y=void 0!==E&&E,O=e.isStatic,g=e.as,h=void 0===g?"input":g,j=Object(l.a)(e,x),N=Object(i.useContext)(f),w=N.controlId,C=N.custom?[o,"custom-control-input"]:[n,"form-check-input"],P=C[0],k=C[1];return n=Object(v.a)(P,k),c.a.createElement(h,Object(r.a)({},j,{ref:a,type:u,id:t||w,className:s()(m,n,b&&"is-valid",y&&"is-invalid",O&&"position-static")}))}));E.displayName="FormCheckInput";var y=E,O=["bsPrefix","bsCustomPrefix","className","htmlFor"],g=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(l.a)(e,O),u=Object(i.useContext)(f),p=u.controlId,b=u.custom?[n,"custom-control-label"]:[t,"form-check-label"],x=b[0],E=b[1];return t=Object(v.a)(x,E),c.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:m||p,className:s()(o,t)}))}));g.displayName="FormCheckLabel";var h=g,j=["id","bsPrefix","bsCustomPrefix","inline","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","title","type","label","children","custom","as"],N=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,m=e.inline,d=void 0!==m&&m,u=e.disabled,p=void 0!==u&&u,x=e.isValid,E=void 0!==x&&x,O=e.isInvalid,g=void 0!==O&&O,N=e.feedbackTooltip,w=void 0!==N&&N,C=e.feedback,P=e.className,k=e.style,S=e.title,I=void 0===S?"":S,T=e.type,z=void 0===T?"checkbox":T,F=e.label,R=e.children,A=e.custom,L=e.as,V=void 0===L?"input":L,G=Object(l.a)(e,j),$="switch"===z||A,U=$?[o,"custom-control"]:[n,"form-check"],_=U[0],D=U[1];n=Object(v.a)(_,D);var M=Object(i.useContext)(f).controlId,Z=Object(i.useMemo)((function(){return{controlId:t||M,custom:$}}),[M,$,t]),q=$||null!=F&&!1!==F&&!R,B=c.a.createElement(y,Object(r.a)({},G,{type:"switch"===z?"checkbox":z,ref:a,isValid:E,isInvalid:g,isStatic:!q,disabled:p,as:V}));return c.a.createElement(f.Provider,{value:Z},c.a.createElement("div",{style:k,className:s()(P,n,$&&"custom-"+z,d&&n+"-inline")},R||c.a.createElement(c.a.Fragment,null,B,q&&c.a.createElement(h,{title:I},F),(E||g)&&c.a.createElement(b,{type:E?"valid":"invalid",tooltip:w},C))))}));N.displayName="FormCheck",N.Input=y,N.Label=h;var w=N,C=["id","bsPrefix","bsCustomPrefix","className","isValid","isInvalid","lang","as"],P=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,m=e.className,d=e.isValid,u=e.isInvalid,p=e.lang,b=e.as,x=void 0===b?"input":b,E=Object(l.a)(e,C),y=Object(i.useContext)(f),O=y.controlId,g=y.custom?[o,"custom-file-input"]:[n,"form-control-file"],h=g[0],j=g[1];return n=Object(v.a)(h,j),c.a.createElement(x,Object(r.a)({},E,{ref:a,id:t||O,type:"file",lang:p,className:s()(m,n,d&&"is-valid",u&&"is-invalid")}))}));P.displayName="FormFileInput";var k=P,S=["bsPrefix","bsCustomPrefix","className","htmlFor"],I=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.bsCustomPrefix,o=e.className,m=e.htmlFor,d=Object(l.a)(e,S),u=Object(i.useContext)(f),p=u.controlId,b=u.custom?[n,"custom-file-label"]:[t,"form-file-label"],x=b[0],E=b[1];return t=Object(v.a)(x,E),c.a.createElement("label",Object(r.a)({},d,{ref:a,htmlFor:m||p,className:s()(o,t),"data-browse":d["data-browse"]}))}));I.displayName="FormFileLabel";var T=I,z=["id","bsPrefix","bsCustomPrefix","disabled","isValid","isInvalid","feedbackTooltip","feedback","className","style","label","children","custom","lang","data-browse","as","inputAs"],F=c.a.forwardRef((function(e,a){var t=e.id,n=e.bsPrefix,o=e.bsCustomPrefix,m=e.disabled,d=void 0!==m&&m,u=e.isValid,p=void 0!==u&&u,x=e.isInvalid,E=void 0!==x&&x,y=e.feedbackTooltip,O=void 0!==y&&y,g=e.feedback,h=e.className,j=e.style,N=e.label,w=e.children,C=e.custom,P=e.lang,S=e["data-browse"],I=e.as,F=void 0===I?"div":I,R=e.inputAs,A=void 0===R?"input":R,L=Object(l.a)(e,z),V=C?[o,"custom"]:[n,"form-file"],G=V[0],$=V[1];n=Object(v.a)(G,$);var U=Object(i.useContext)(f).controlId,_=Object(i.useMemo)((function(){return{controlId:t||U,custom:C}}),[U,C,t]),D=null!=N&&!1!==N&&!w,M=c.a.createElement(k,Object(r.a)({},L,{ref:a,isValid:p,isInvalid:E,disabled:d,as:A,lang:P}));return c.a.createElement(f.Provider,{value:_},c.a.createElement(F,{style:j,className:s()(h,n,C&&"custom-file")},w||c.a.createElement(c.a.Fragment,null,C?c.a.createElement(c.a.Fragment,null,M,D&&c.a.createElement(T,{"data-browse":S},N)):c.a.createElement(c.a.Fragment,null,D&&c.a.createElement(T,null,N),M),(p||E)&&c.a.createElement(b,{type:p?"valid":"invalid",tooltip:O},g))))}));F.displayName="FormFile",F.Input=k,F.Label=T;var R=F,A=(t(67),["bsPrefix","bsCustomPrefix","type","size","htmlSize","id","className","isValid","isInvalid","plaintext","readOnly","custom","as"]),L=c.a.forwardRef((function(e,a){var t,n,o=e.bsPrefix,m=e.bsCustomPrefix,d=e.type,u=e.size,p=e.htmlSize,b=e.id,x=e.className,E=e.isValid,y=void 0!==E&&E,O=e.isInvalid,g=void 0!==O&&O,h=e.plaintext,j=e.readOnly,N=e.custom,w=e.as,C=void 0===w?"input":w,P=Object(l.a)(e,A),k=Object(i.useContext)(f).controlId,S=N?[m,"custom"]:[o,"form-control"],I=S[0],T=S[1];if(o=Object(v.a)(I,T),h)(n={})[o+"-plaintext"]=!0,t=n;else if("file"===d){var z;(z={})[o+"-file"]=!0,t=z}else if("range"===d){var F;(F={})[o+"-range"]=!0,t=F}else if("select"===C&&N){var R;(R={})[o+"-select"]=!0,R[o+"-select-"+u]=u,t=R}else{var L;(L={})[o]=!0,L[o+"-"+u]=u,t=L}return c.a.createElement(C,Object(r.a)({},P,{type:d,size:p,ref:a,readOnly:j,id:b||k,className:s()(x,t,y&&"is-valid",g&&"is-invalid")}))}));L.displayName="FormControl";var V=Object.assign(L,{Feedback:b}),G=["bsPrefix","className","children","controlId","as"],$=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.children,m=e.controlId,d=e.as,u=void 0===d?"div":d,p=Object(l.a)(e,G);t=Object(v.a)(t,"form-group");var b=Object(i.useMemo)((function(){return{controlId:m}}),[m]);return c.a.createElement(f.Provider,{value:b},c.a.createElement(u,Object(r.a)({},p,{ref:a,className:s()(n,t)}),o))}));$.displayName="FormGroup";var U=$,_=t(105),D=["as","bsPrefix","column","srOnly","className","htmlFor"],M=c.a.forwardRef((function(e,a){var t=e.as,n=void 0===t?"label":t,o=e.bsPrefix,m=e.column,d=e.srOnly,u=e.className,p=e.htmlFor,b=Object(l.a)(e,D),x=Object(i.useContext)(f).controlId;o=Object(v.a)(o,"form-label");var E="col-form-label";"string"===typeof m&&(E=E+" "+E+"-"+m);var y=s()(u,o,d&&"sr-only",m&&E);return p=p||x,m?c.a.createElement(_.a,Object(r.a)({ref:a,as:"label",className:y,htmlFor:p},b)):c.a.createElement(n,Object(r.a)({ref:a,className:y,htmlFor:p},b))}));M.displayName="FormLabel",M.defaultProps={column:!1,srOnly:!1};var Z=M,q=["bsPrefix","className","as","muted"],B=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,i=e.as,o=void 0===i?"small":i,m=e.muted,d=Object(l.a)(e,q);return t=Object(v.a)(t,"form-text"),c.a.createElement(o,Object(r.a)({},d,{ref:a,className:s()(n,t,m&&"text-muted")}))}));B.displayName="FormText";var H=B,J=c.a.forwardRef((function(e,a){return c.a.createElement(w,Object(r.a)({},e,{ref:a,type:"switch"}))}));J.displayName="Switch",J.Input=w.Input,J.Label=w.Label;var K=J,Q=t(79),W=["bsPrefix","inline","className","validated","as"],X=Object(Q.a)("form-row"),Y=c.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.inline,i=e.className,o=e.validated,m=e.as,d=void 0===m?"form":m,u=Object(l.a)(e,W);return t=Object(v.a)(t,"form"),c.a.createElement(d,Object(r.a)({},u,{ref:a,className:s()(i,o&&"was-validated",n&&t+"-inline")}))}));Y.displayName="Form",Y.defaultProps={inline:!1},Y.Row=X,Y.Group=U,Y.Control=V,Y.Check=w,Y.File=R,Y.Switch=K,Y.Label=Z,Y.Text=H;a.a=Y},325:function(e,a,t){"use strict";t.r(a);var r=t(36),l=t(73),n=t.n(l),s=t(74),i=t(71),c=t(187),o=t(213),m=t(105),d=t(330),u=t(207),p=t(32),b=t(81),f=t.n(b),v=t(0),x=t.n(v),E=t(3),y=t(33),O=t(11),g=t(77);a.default=Object(y.b)((function(e){return{users:e.userReducer.users,authenticated:e.authReducer.authenticated,currentuser:e.userReducer.currentUser,message:e.userReducer.message}}),(function(e){return{onUpdate:function(a,t){return e(O.n(a,t))},onGetUsers:function(a){return e(O.k(a))}}}))((function(e){var a=Object(E.g)().id,t=Object(v.useState)([]),l=Object(i.a)(t,2),b=l[0],y=l[1],O=Object(v.useState)(""),h=Object(i.a)(O,2),j=h[0],N=h[1],w=Object(v.useState)(""),C=Object(i.a)(w,2),P=C[0],k=C[1],S=Object(v.useState)(""),I=Object(i.a)(S,2),T=I[0],z=I[1],F=Object(v.useState)(""),R=Object(i.a)(F,2),A=R[0],L=R[1],V=Object(v.useState)(""),G=Object(i.a)(V,2),$=(G[0],G[1]),U=Object(v.useState)(""),_=Object(i.a)(U,2),D=_[0],M=_[1],Z=Object(v.useState)(!1),q=Object(i.a)(Z,2),B=q[0],H=q[1],J=Object(v.useState)(!0),K=Object(i.a)(J,2),Q=K[0],W=K[1],X=Object(v.useState)(!1),Y=Object(i.a)(X,2),ee=Y[0],ae=Y[1],te=Object(v.useState)(!0),re=Object(i.a)(te,2),le=re[0],ne=re[1],se=Object(v.useState)(!0),ie=Object(i.a)(se,2),ce=ie[0],oe=ie[1],me=Object(v.useState)(!0),de=Object(i.a)(me,2),ue=de[0],pe=de[1],be=Object(v.useState)(!0),fe=Object(i.a)(be,2),ve=fe[0],xe=fe[1],Ee=Object(v.useState)(!0),ye=Object(i.a)(Ee,2),Oe=ye[0],ge=ye[1];console.log(a),Object(v.useEffect)((function(){Object(s.a)(n.a.mark((function t(){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.onGetUsers("_id="+a);case 2:console.log(e.users[0].name),N(e.users[0].name),k(e.users[0].email),$(e.users[0].password),M(e.users[0].phone),r=e.users[0].city+","+e.users[0].pinCode,y(r),e.users[0].isAdmin?ae(!0):ae(!1);case 10:case"end":return t.stop()}}),t)})))(),console.log(ee)}),[e.users[0].email,a]);var he=function(e){var a=e.target.value;new RegExp("^[a-zA-Z]{1}[a-zA-Z0-9\\s]{3,30}$").test(a)?(N(a),ne(!0)):(N(a),ne(!1))},je=function(e){var a=e.target.value;new RegExp("^\\w+([\\.-]?\\w+)@\\w+([\\.-]?\\w+)(\\.\\w{2,3})+$").test(a)?(k(a),oe(!0)):(k(a),oe(!1))},Ne=function(e){var a=e.target.value;new RegExp("^[0-9]{10}$").test(a)?(M(a),ge(!0)):(M(a),ge(!1))},we=function(){var t=Object(s.a)(n.a.mark((function t(r){var l;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:H(!0),0===T.localeCompare(A)?(l={name:j,email:P,password:T,address:b,phone:D},console.log(l),e.onUpdate(a,l),W(!0)):xe(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Ce=function(e){console.log("Edit"),W(!1),H(!1)};if(0!==e.users.length)var Pe=e.users[0].addresses.map((function(a,t){var r=a.houseNumber+" ,"+a.locality+" ,"+a.city+" ,"+a.state+" ,"+a.country+" ,"+a.pinCode;return x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Address ",e.users[0].addresses.length>1?t+1:null),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{readOnly:!0,plaintext:!0,style:{border:"1px solid lightgrey",padding:"10px 15px",textTransform:"capitalize",borderRadius:"5px",outline:"none"},as:"textarea",value:r,placeholder:"Enter Name"})))}));return x.a.createElement(p.a,null,e.message.includes("updated")&&B?x.a.createElement(g.a,{open:!0,variant:"success",msg:e.message}):null,x.a.createElement(o.a,null,x.a.createElement(m.a,{md:4,xl:4},x.a.createElement(d.a,{className:"card-event"},x.a.createElement(d.a.Body,null,x.a.createElement(c.a.Group,{as:o.a,className:"mb-3",style:{width:"100%"}},x.a.createElement("div",{style:{margin:"auto"},className:"media friendlist-box align-items-center justify-content-center m-b-20"},x.a.createElement("div",{className:"m-r-10 photo-table",style:{width:"100%"}},x.a.createElement("img",{className:"rounded-circle",style:{width:"200px",height:"220px",margin:"auto"},src:f.a,alt:"activity-user"}))))))),x.a.createElement(m.a,{md:8,xl:8},x.a.createElement(d.a,null,x.a.createElement(d.a.Header,null,x.a.createElement(d.a.Title,{as:"h5"},"User Details")),x.a.createElement(d.a.Body,null,x.a.createElement(d.a.Text,null,Q&&x.a.createElement(c.a,null,x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Name"),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{readOnly:!0,plaintext:!0,style:{border:"1px solid lightgrey",padding:"10px 15px",textTransform:"capitalize",borderRadius:"5px",outline:"none"},type:"text",value:j,onChange:he,placeholder:"Enter Name"}))),x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Email"),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{readOnly:!0,plaintext:!0,style:{border:"1px solid lightgrey",padding:"10px 15px",borderRadius:"5px",outline:"none"},type:"email",value:P,onChange:je,placeholder:"Enter Email"}))),x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Contact No."),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{readOnly:!0,plaintext:!0,style:{border:"1px solid lightgrey",padding:"10px 15px",borderRadius:"5px",outline:"none"},type:"text",value:D,onChange:Ne,placeholder:"Enter Contact Number"}))),Pe,x.a.createElement(c.a.Group,{as:o.a,sm:12,style:{marginTop:"50px",width:"100%",textAlign:"center"}},x.a.createElement("div",{style:{width:"100%"}},x.a.createElement(u.a,Object(r.a)({style:{margin:"3px",width:"100px",display:"inline-block",height:"40px",textAlign:"center"},variant:"primary",block:!0,onClick:Ce},"variant","primary"),"EDIT"),x.a.createElement(u.a,Object(r.a)({style:{margin:"3px",width:"100px",display:"inline-block",height:"40px",textAlign:"center"},variant:"primary",disabled:!0,block:!0,onClick:we},"variant","success"),"UPDATE")))),!Q&&x.a.createElement(c.a,null,x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Name"),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{type:"text",value:j,onChange:he,placeholder:"Enter Name"})),x.a.createElement(m.a,{sm:3}),x.a.createElement(m.a,{sm:9},!le&&x.a.createElement(c.a.Text,{className:"text-danger"},"Please Enter Valid Name (paddu)"))),x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Email"),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{type:"email",value:P,onChange:je,placeholder:"Enter Email"})),x.a.createElement(m.a,{sm:3}),x.a.createElement(m.a,{sm:9},!ce&&x.a.createElement(c.a.Text,{className:"text-danger"},"Please Enter Valid Email (paddu@gmail.com)"))),ee&&x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Password"),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{type:"text",value:T,onChange:function(e){var a=e.target.value,t=new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$");console.log(t.test(a)),t.test(a)?(z(a),pe(!0)):(z(a),pe(!1))},placeholder:"New Password"})),x.a.createElement(m.a,{sm:3}),x.a.createElement(m.a,{sm:9},!ue&&x.a.createElement(c.a.Text,{className:"text-danger"},"Please Enter Valid Password (Paddu@0y)"))),ee&&x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Confirm Password"),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{type:"text",value:A,onChange:function(e){var a=e.target.value,t=new RegExp("^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$");console.log(t.test(a)),t.test(a)?(L(a),xe(!0)):(L(a),xe(!1))},placeholder:"Confirm Password"})),x.a.createElement(m.a,{sm:3}),x.a.createElement(m.a,{sm:9},!ve&&x.a.createElement(c.a.Text,{className:"text-danger"},"Please Enter Valid Password (paddu@0y)"))),x.a.createElement(c.a.Group,{as:o.a,className:"mb-3"},x.a.createElement(c.a.Label,{style:{padding:"10px 15px",textTransform:"capitalize",fontSize:"15px"},column:!0,sm:3},"Contact No."),x.a.createElement(m.a,{sm:9},x.a.createElement(c.a.Control,{type:"text",value:D,onChange:Ne,placeholder:"Enter Contact Number"})),x.a.createElement(c.a.Text,{sm:3}),x.a.createElement(m.a,{sm:3}),x.a.createElement(m.a,{sm:9},!Oe&&x.a.createElement(c.a.Text,{className:"text-danger",sm:9},"Please Enter Valid Contact number (9284556633)"))),x.a.createElement(c.a.Group,{as:o.a,sm:12,style:{marginTop:"50px",width:"100%",textAlign:"center"}},x.a.createElement("div",{style:{width:"100%"}},x.a.createElement(u.a,Object(r.a)({style:{margin:"3px",width:"100px",display:"inline-block",style:"inline-block",height:"40px",textAlign:"center"},disabled:!0,variant:"primary",block:!0,onClick:Ce},"variant","primary"),"EDIT"),x.a.createElement(u.a,Object(r.a)({style:{margin:"3px",width:"100px",display:"inline-block",style:"inline-block",height:"40px",textAlign:"center"},variant:"primary",block:!0,onClick:we},"variant","success"),"UPDATE"))))))))))}))},64:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){for(var e=arguments.length,a=Array(e),t=0;t<e;t++)a[t]=arguments[t];function r(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var l=null;return a.forEach((function(e){if(null==l){var a=e.apply(void 0,t);null!=a&&(l=a)}})),l}return(0,n.default)(r)};var r,l=t(95),n=(r=l)&&r.__esModule?r:{default:r};e.exports=a.default},77:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r=t(71),l=t(0),n=t.n(l),s=t(361),i=t(359),c=t(356);function o(e){return n.a.createElement(i.a,Object.assign({elevation:6,variant:"filled"},e))}var m=Object(c.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function d(e){var a=m(),t=n.a.useState(e.open),l=Object(r.a)(t,2),i=l[0],c=l[1],d=n.a.useState(e.variant),u=Object(r.a)(d,2),p=u[0],b=(u[1],n.a.useState(e.msg)),f=Object(r.a)(b,2),v=f[0],x=(f[1],n.a.useState({vertical:"top",horizontal:"center"})),E=Object(r.a)(x,2),y=E[0],O=(E[1],y.vertical),g=y.horizontal,h=function(e,a){"clickaway"!==a&&c(!1)};return n.a.createElement("div",{className:a.root},n.a.createElement(s.a,{open:i,autoHideDuration:6e3,onClose:h,anchorOrigin:{vertical:O,horizontal:g}},n.a.createElement(o,{onClose:h,severity:p},v)))}},95:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){function a(a,t,r,l,n,s){var i=l||"<<anonymous>>",c=s||r;if(null==t[r])return a?new Error("Required "+n+" `"+c+"` was not specified in `"+i+"`."):null;for(var o=arguments.length,m=Array(o>6?o-6:0),d=6;d<o;d++)m[d-6]=arguments[d];return e.apply(void 0,[t,r,i,n,c].concat(m))}var t=a.bind(null,!1);return t.isRequired=a.bind(null,!0),t},e.exports=a.default}}]);
//# sourceMappingURL=12.79cd165e.chunk.js.map