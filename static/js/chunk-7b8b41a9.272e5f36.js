(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b8b41a9"],{"29e2":function(t,s,a){},"77b8":function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"main"},[a("div",{staticClass:"warning"},[a("div",{staticClass:"allworker"},[a("el-scrollbar",{staticStyle:{height:"100%"}},t._l(t.group1,(function(s,e){return a("div",{key:e,staticClass:"setline"},t._l(t.array1[e],(function(s,i){return a("div",{key:i,staticClass:"littlebox"},[a("div",{staticClass:"boxnum",class:[t.Istate[4*e+i]]},[a("p",[t._v(t._s(t.i[4*e+i]))])])])})),0)})),0)],1),a("div",{staticClass:"earlywarning ",class:[1==this.machinesafe?"ewbg":""]},[this.machinesafe?a("div",{staticClass:"normal"},[t._v(" "+t._s(t.numofmachines)+" ")]):a("div",{staticClass:"error"},[a("p",[t._v("有问题的机器序号："+t._s(t.dangermachine))])])])]),a("div",{staticClass:"show"},[a("div",{staticClass:"table"},[a("el-scrollbar",{staticStyle:{height:"100%"}},t._l(t.group,(function(s,e){return a("div",{key:e,staticClass:"card "},t._l(t.array[e],(function(s,i){return a("div",{key:i,staticClass:"carditem ",class:t.state[4*e+i],on:{click:function(s){return t.gotomachine(4*e+i+1)}}},[a("div",{staticClass:"num"},[a("div",{staticClass:"p",class:[t.Istate[4*e+i]]},[a("p",[t._v(t._s(t.i[4*e+i]))])])]),a("div",{staticClass:"data"},[a("div",{staticClass:"machinenum"},[t._v(" "+t._s(4*e+i+1)+" ")]),a("div",{staticClass:"ar",class:[t.Iastate[4*e+i]]},[a("p",[t._v(t._s(t.good[4*e+i].a))])]),a("div",{staticClass:"ar1",class:[t.Ibstate[4*e+i]]},[a("p",[t._v(t._s(t.good[4*e+i].b))])]),a("div",{staticClass:"ar2",class:[t.Icstate[4*e+i]]},[a("p",[t._v(t._s(t.good[4*e+i].c))])])])])})),0)})),0)],1)])])},i=[],n=(a("96cf"),a("1da1")),h=a("bc3a"),r=a.n(h),o={data:function(){return{numofmachines:10,state:[],group:"",group1:"",good:[{l:.65,a:.2,b:.02,c:.65},{l:.65,a:.3,b:.02,c:.5},{l:.65,a:.3,b:.2,c:.65},{l:.65,a:.2,b:.02,c:.7},{l:.65,a:.7,b:.02,c:.1},{l:.65,a:.1,b:.06,c:.7},{l:.65,a:.3,b:.01,c:.7},{l:.65,a:.1,b:.04,c:.7},{l:.65,a:.35,b:.01,c:.7},{l:.65,a:.25,b:.02,c:.7}],array:[],array1:[],machinesafe:!0,dangermachine:[],Ia:[],Ib:[],Ic:[],i:[],Iastate:[],Ibstate:[],Icstate:[],Istate:[],t:.5,l:.3,s:.2,k1:1,k2:0,k3:0}},methods:{computegroup:function(){var t,s,a,e,i;t=Math.ceil(this.numofmachines/4),this.group=t,s=Math.floor(this.numofmachines/4),a=this.numofmachines%4;for(var n=0;n<s;n++)this.array.push(4);this.array.push(a),e=Math.ceil(this.numofmachines/10),this.group1=e,i=Math.floor(this.numofmachines/10),this.numofmachines;for(var h=0;h<i;h++)this.array1.push(10);this.array1.push(a)},gotomachine:function(t){this.$router.push("/machine/"+t)},safeordanger:function(){for(var t=1,s=0;s<this.numofmachines;s++)"safe"!=this.state[s]&&(t=0,this.dangermachine.push(String(s+1)));0==t&&(this.machinesafe=!1)},setla:function(){for(var t,s=0;s<this.numofmachines;s++)t=this.good[s].a/this.t,t<=.2?(this.Ia.push(.2),this.Iastate.push("moredangerfont")):t>.2&&t<=.5?(this.Ia.push(t),this.Iastate.push("safefont")):t>.5&&t<=.7?(this.Ia.push(t),this.Iastate.push("dangerfont")):(this.Ia.push(1),this.Iastate.push("verydangerfont"))},setlb:function(){for(var t=0;t<this.numofmachines;t++)this.good[t].b<=.1*this.l?(this.Ib.push(.2),this.Ibstate.push("safefont")):this.good[t].b>.1*this.l&&this.good[t].b<=.3*this.l?(this.Ib.push(.45),this.Ibstate.push("dangerfont")):this.good[t].b>.3*this.l&&this.good[t].b<=.5*this.l?(this.Ib.push(.8),this.Ibstate.push("moredangerfont")):(this.Ib.push(1),this.Ibstate.push("verydangerfont"))},setlc:function(){for(var t,s=0;s<this.numofmachines;s++)t=this.good[s].c/this.s,t>=.9?(this.Ic.push(.2),this.Icstate.push("safefont")):t>=.7&&t<=.9?(this.Ic.push(t),this.Icstate.push("dangerfont")):!function(t){return t<.7}?(this.Ic.push(1),this.Icstate.push("verydangerfont")):(this.Ic.push(.8),this.Icstate.push("moredangerfont"))},setI:function(){for(var t,s=0;s<this.numofmachines;s++)t=this.k1*this.Ia[s]+this.k2*this.Ib[s]+this.k3*this.Ic[s],t=Math.round(100*t)/100,this.i.push(t)},setstate:function(){for(var t=0,s=0,a=0,e=0;e<this.numofmachines;e++)"safefont"==this.Iastate[e]?1:"dangerfont"==this.Iastate[e]?t+=1:"moredangerfont"==this.Iastate[e]?s+=1:a+=1,"safefont"==this.Ibstate[e]?1:"dangerfont"==this.Ibstate[e]?t+=1:"moredangerfont"==this.Ibstate[e]?s+=1:a+=1,"safefont"==this.Icstate[e]?1:"dangerfont"==this.Icstate[e]?t+=1:"moredangerfont"==this.Icstate[e]?s+=1:a+=1,this.state[e]=a>0?"verydanger":s>0?"moredanger":t>0?"danger":"safe",0,t=0,s=0,a=0},setIstate:function(){for(var t=0;t<this.numofmachines;t++)this.Istate[t]=this.state[t]+"font"}},beforeMount:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function s(){var a,e;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,r.a.get("/getID").then();case 2:return a=s.sent,console.log(a.data.machinenum),s.next=6,r.a.get("/set").then();case 6:e=s.sent,t.k1=e.data.k1,t.k2=e.data.k2,t.k3=e.data.k3,t.l=e.data.l,t.s=e.data.s,t.t=e.data.t,t.computegroup(),t.setla(),t.setlb(),t.setlc(),t.setI(),t.setstate(),t.setIstate(),t.safeordanger();case 14:case"end":return s.stop()}}),s)})))()},mounted:function(){var t=this;window.setInterval((function(){setTimeout(t.fun,0)}),3e3)}},c=o,u=(a("7885"),a("2877")),f=Object(u["a"])(c,e,i,!1,null,null,null);s["default"]=f.exports},7885:function(t,s,a){"use strict";var e=a("29e2"),i=a.n(e);i.a}}]);