(this["webpackJsonpdatta-able-rv18.0.4"]=this["webpackJsonpdatta-able-rv18.0.4"]||[]).push([[16],{326:function(e,a,t){"use strict";t.r(a);var r=t(17),l=t(18),n=t(20),o=t(19),c=t(0),s=t.n(c),i=t(213),m=t(105),u=t(330),d=t(32),p=t(94),h=t.n(p);s.a.Component;var y=[{key:"Cumulative Return",values:[{label:"A",value:-29.765957771107,color:"#3ebfea"},{label:"B",value:10,color:"#04a9f5"},{label:"C",value:32.807804682612,color:"#ff8a65"},{label:"D",value:196.45946739256,color:"#1de9b6"},{label:"E",value:.25434030906893,color:"#4C5667"},{label:"F",value:-98.079782601442,color:"#69CEC6"},{label:"G",value:-13.925743130903,color:"#a389d4"},{label:"H",value:-5.1387322875705,color:"#FE8A7D"}]}];s.a.Component;function b(e,a){return Math.floor(Math.random()*(a-e+1)+e)}var E=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){var e=function(){for(var e=[],a=[],t=[],r=35+35*Math.random(),l=0;l<r;l++)e.push({x:l,y:b(0,60)}),a.push({x:l,y:b(0,100)}),t.push({x:l,y:b(0,30)});return[{values:e,key:"Stream #0",color:"#A389D4"},{values:t,key:"Stream #1",color:"#04a9f5"},{values:a,key:"Stream #3",color:"#1de9b6",area:!0}]}();return s.a.createElement(h.a,{type:"multiBarChart",datum:e,x:"x",y:"y",height:300,showValues:!0,groupSpacing:.2})}}]),t}(s.a.Component),v=t(33),f=t(12),g=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).state={paddu:[]},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){this.props.onStatusCOunt(),console.log("*****PIe***"),console.log(this.props.orderStatusCount),this.setState({paddu:this.props.orderStatusCount}),console.log("*****PIe***"),console.log(this.state.paddu)}},{key:"render",value:function(){console.log(this.props.orderStatusCount[0].New);var e=[{key:"New",y:this.props.orderStatusCount[0].New,color:"#ff8a65"},{key:"Packed",y:this.props.orderStatusCount[1].Packed,color:"#f4c22b"},{key:"Shipped",y:this.props.orderStatusCount[2].Shipped,color:"#04a9f5"},{key:"Completed",y:this.props.orderStatusCount[3].Completed,color:"#3ebfea"},{key:"Cancelled",y:this.props.orderStatusCount[4].Cancelled,color:"#4F5467"},{key:"Delayed",y:this.props.orderStatusCount[5].Delayed,color:"#1de9b6"}];return console.log("*****PIe***"),console.log(this.props.orderStatusCount),s.a.createElement(h.a,{id:"chart",height:300,type:"pieChart",datum:e,x:"key",y:"y",labelType:"percent"})}}]),t}(s.a.Component),k=Object(v.b)((function(e){return{orderStatusCount:e.orderReducer.orderStatusCount}}),(function(e){return{onStatusCOunt:function(){return e(f.f())}}}))(g),C=[{key:"One",y:29,color:"#ff8a65"},{key:"Two",y:0,color:"#f4c22b"},{key:"Three",y:32,color:"#04a9f5"},{key:"Four",y:196,color:"#3ebfea"},{key:"Five",y:2,color:"#4F5467"},{key:"Six",y:98,color:"#1de9b6"},{key:"Seven",y:13,color:"#a389d4"},{key:"Eight",y:5,color:"#FE8A7D"}],O=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(h.a,{id:"chart",height:300,type:"pieChart",datum:C,x:"key",y:"y",donut:!0,labelType:"percent"})}}]),t}(s.a.Component),x=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(i.a,null,s.a.createElement(m.a,{md:6},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Order Status")),s.a.createElement(u.a.Body,{className:"text-center"},s.a.createElement(k,null)))),s.a.createElement(m.a,{md:6},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Book categories")),s.a.createElement(u.a.Body,{className:"text-center"},s.a.createElement(O,null)))),s.a.createElement(m.a,{sm:12},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Orders management Chart")),s.a.createElement(u.a.Body,null,s.a.createElement(E,null))))))}}]),t}(s.a.Component),N=t(363),j=t(364),S=t(102),w=t.n(S),D=t(81),B=t.n(D),T=t(103),F=t.n(T),P=(c.Component,t(9)),H=t(327),M=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={bookData:e.bookData},l}return Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"book"},s.a.createElement(m.a,{xl:12},s.a.createElement(u.a,null,s.a.createElement(u.a.Body,null,s.a.createElement(H.a,{data:this.state.bookData,options:{title:{display:this.props.displayTitle,text:"Most rating in "+this.props.location,fontSize:25},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}})))))}}]),t}(c.Component);M.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right",location:"Rating"};var A=M,R=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(r.a)(this,t),(e=a.call(this)).state={bookData:{}},e}return Object(l.a)(t,[{key:"componentWillMount",value:function(){this.getbookData()}},{key:"getbookData",value:function(){this.setState({bookData:{labels:["Action and Adventure","Classics","Fantasy","Historical Fiction","Horror","Literary Fiction"],datasets:[{label:"Rating",data:[5.4,2,3,4.5,1,.5],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(255, 206, 86, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 99, 132, 0.6)"]}]}})}},{key:"render",value:function(){return s.a.createElement("div",{className:"bookratingdata"},s.a.createElement("div",{className:"bookratingdata-header"}),s.a.createElement(A,{bookData:this.state.bookData,legendPosition:"bottom"}))}}]),t}(c.Component),I=function(e){Object(n.a)(t,e);var a=Object(o.a)(t);function t(e){var l;return Object(r.a)(this,t),(l=a.call(this,e)).state={totalCount:0,todaysOrder:0,cancelledOreder:0},l}return Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8080/api/v1/orders/count",{headers:Object(P.a)()}).then((function(e){return e.json()})).then((function(a){e.setState({totalCount:a.totalorder}),console.log(e.state.totalCount),e.setState({todaysOrder:a.todaysorder}),e.setState({cancelledOreder:a.cancelledcount})}))}},{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement(i.a,null,s.a.createElement(m.a,{md:6,xl:3},s.a.createElement(u.a,null,s.a.createElement(u.a.Body,null,s.a.createElement("h6",{className:"mb-4"},"Total Orders"),s.a.createElement("div",{className:"row d-flex align-items-center"},s.a.createElement("div",{className:"col-9"},s.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},s.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"}),this.state.totalCount))),s.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},s.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"25%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}))))),s.a.createElement(m.a,{md:6,xl:3},s.a.createElement(u.a,null,s.a.createElement(u.a.Body,null,s.a.createElement("h6",{className:"mb-4"},"Todays Orders"),s.a.createElement("div",{className:"row d-flex align-items-center"},s.a.createElement("div",{className:"col-9"},s.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},s.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"}),this.state.todaysOrder))),s.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},s.a.createElement("div",{className:"progress-bar progress-c-theme2",role:"progressbar",style:{width:"25%"},"aria-valuenow":"35","aria-valuemin":"0","aria-valuemax":"100"}))))),s.a.createElement(m.a,{md:6,xl:3},s.a.createElement(u.a,null,s.a.createElement(u.a.Body,null,s.a.createElement("h6",{className:"mb-4"},"Cancelled Order"),s.a.createElement("div",{className:"row d-flex align-items-center"},s.a.createElement("div",{className:"col-9"},s.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},s.a.createElement("i",{className:"feather icon-arrow-down text-c-red f-30 m-r-5"}),this.state.cancelledOreder))),s.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},s.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"25%"},"aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}))))),s.a.createElement(m.a,{md:6,xl:3},s.a.createElement(u.a,null,s.a.createElement(u.a.Body,null,s.a.createElement("h6",{className:"mb-4"},"Today's Income"),s.a.createElement("div",{className:"row d-flex align-items-center"},s.a.createElement("div",{className:"col-9"},s.a.createElement("h3",{className:"f-w-300 d-flex align-items-center m-b-0"},s.a.createElement("i",{className:"feather icon-arrow-up text-c-green f-30 m-r-5"})," $249.95")),s.a.createElement("div",{className:"col-3 text-right"},s.a.createElement("p",{className:"m-b-0"},"50%"))),s.a.createElement("div",{className:"progress m-t-30",style:{height:"7px"}},s.a.createElement("div",{className:"progress-bar progress-c-theme",role:"progressbar",style:{width:"25%"},"aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"}))))),s.a.createElement(m.a,{sm:12},s.a.createElement(u.a,null,s.a.createElement(u.a.Body,null,s.a.createElement(x,null)))),s.a.createElement(m.a,{sm:12,xl:12,md:8},s.a.createElement(u.a,null,s.a.createElement(u.a.Header,null,s.a.createElement(u.a.Title,{as:"h5"},"Books Rating")),s.a.createElement(u.a.Body,null,s.a.createElement(R,null))))))}}]),t}(s.a.Component);a.default=I}}]);
//# sourceMappingURL=16.542dca1c.chunk.js.map