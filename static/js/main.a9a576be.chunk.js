(this["webpackJsonpreact-test"]=this["webpackJsonpreact-test"]||[]).push([[0],{14:function(e,t,l){},18:function(e,t,l){"use strict";l.r(t);var a=l(1),n=l.n(a),s=l(8),r=l.n(s),c=(l(14),l(2)),i=l(3),o=l(6),u=l(5),d=l(9),h=l(0),v=function(e){return Object(h.jsx)(d.JigsawPuzzle,{imageSrc:"https://picsum.photos/600",rows:e.tiles,columns:e.tiles,onSolved:function(){return alert("Solved!")}})},b=l(4),j=function(e){Object(o.a)(l,e);var t=Object(u.a)(l);function l(e){var a;return Object(c.a)(this,l),(a=t.call(this,e)).handleChange=function(e){a.setState({value:e.target.value}),a.props.parentCallback(e.target.value),e.preventDefault()},a.handleChange=a.handleChange.bind(Object(b.a)(a)),a.levelList=e.levelList,a.state={value:2},a}return Object(i.a)(l,[{key:"render",value:function(){var e=this.props.value;return Object(h.jsxs)("div",{children:[Object(h.jsx)("label",{className:"block text-3xl lg:text-sm font-medium text-gray-700 my-2",children:"Poziom"}),Object(h.jsxs)("select",{id:"level-selector",onChange:this.handleChange,value:e,className:"relative w-full bg-white border border-gray-300 rounded-md shadow-sm px-3  py-2 text-left focus:outline-none focus:ring-1 text-2xl lg:text-sm",name:"level",children:[this.levelList.map((function(e){return Object(h.jsx)("option",{value:e.value,children:e.label},e.value)})),";"]})]})}}]),l}(n.a.Component),x=function(e){return Object(h.jsx)("div",{className:"h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12 overflow-hidden",children:Object(h.jsxs)("div",{className:"relative py-3 mx-auto",children:[Object(h.jsx)("div",{className:"absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform skew-y-0 -rotate-12 rounded-3xl"}),Object(h.jsx)("div",{className:"relative bg-white shadow-lg rounded-3xl p-8",children:Object(h.jsx)("div",{className:"container w-screen lg:w-96",children:e.children})})]})})},g=function(e){Object(o.a)(l,e);var t=Object(u.a)(l);function l(){var e;return Object(c.a)(this,l),(e=t.call(this)).handleChange=function(t){e.setState({value:t}),console.log(e.state.value)},e.levelList=[{value:2,label:"\u0141atwy"},{value:3,label:"\u015aredni"},{value:5,label:"Trudny"}],e.state={value:2},e}return Object(i.a)(l,[{key:"render",value:function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(x,{children:[Object(h.jsx)(v,{tiles:this.state.value}),Object(h.jsx)(j,{levelList:this.levelList,parentCallback:this.handleChange})]})})}}]),l}(n.a.Component);r.a.render(Object(h.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.a9a576be.chunk.js.map