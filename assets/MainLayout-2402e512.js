import{d as w,u as $,c as v,r as k,_ as y,a as n,b as t,e as f,w as C,f as g,o as a,n as h,F as u,g as x,h as T,t as b,i as S}from"./index-69a61f31.js";import{C as L}from"./CSection-c38b59f4.js";const N=w({components:{CSection:L},setup(){const{t:e,locale:l}=$(),i=[{label:"ID",value:"id"},{label:"EN",value:"en"}],d=v(()=>[{title:e("menu.home"),targetScroll:"home",icon:"uil-estate"},{title:e("menu.about"),targetScroll:"about",icon:"uil-user"},{title:e("menu.skill"),targetScroll:"skill",icon:"uil-clipboard-alt"},{title:e("menu.service"),targetScroll:"service",icon:"uil-suitcase"},{title:e("menu.portofolio"),targetScroll:"portofolio",icon:"uil-image"},{title:e("menu.contact_me"),targetScroll:"contact",icon:"uil-message"}]),m=v(()=>i.find(s=>s.value===l.value)),p=k(!1);return{langs:i,menus:d,selectedLocale:m,locale:l,show:p,scrollTo:(s,c)=>{s.preventDefault();const _=document.getElementById(c);_&&window.scrollTo({behavior:"smooth",top:_.offsetTop-64})},selectLang:s=>{l.value=s,localStorage.setItem("lang",s)}}}}),z={class:"h-16"},B={class:"fixed top-0 left-0 right-0 z-20 h-16 flex items-center bg-white"},I=t("div",{class:"font-bold text-gray-800"},"Cuytamvan",-1),V=t("div",{class:"flex-1"},null,-1),D=t("i",{class:"uil uil-times"},null,-1),E=[D],M=["href","onClick"],F={class:"sm:ml-10 flex gap-1 items-center"},A=["onClick"],H={key:0,class:"text-gray-300 text-xs"},R=t("i",{class:"uil uil-ellipsis-v"},null,-1),W=[R];function j(e,l,i,d,m,p){const r=g("c-section");return a(),n("div",z,[t("div",B,[f(r,{class:"flex w-full"},{default:C(()=>[I,V,t("div",{class:h(["grid grid-cols-3 sm:grid-cols-none sm:flex gap-5 bg-white text-gray-600","absolute sm:relative top-0 left-0 -right-2 p-12 sm:p-0 transition-all duration-300","shadow-lg sm:shadow-none",!e.show&&"-translate-y-full sm:translate-y-0 opacity-0  sm:opacity-100 pointer-events-none sm:pointer-events-auto"])},[t("button",{type:"button",class:"absolute top-3 right-6 text-xl sm:hidden",onClick:l[0]||(l[0]=o=>e.show=!1)},E),(a(!0),n(u,null,x(e.menus,(o,s)=>(a(),n("a",{key:`menu-${s}`,href:`#${o.targetScroll}`,class:"inline-flex flex-col font-medium transition-all duration-200 hover:text-primary-500 text-xs sm:text-sm text-center capitalize",onClick:c=>e.scrollTo(c,o.targetScroll)},[t("i",{class:h(`uil ${o.icon} inline-block sm:hidden text-lg`)},null,2),T(" "+b(o.title),1)],8,M))),128))],2),t("div",F,[(a(!0),n(u,null,x(e.langs,(o,s)=>(a(),n(u,{key:o.value},[t("button",{class:h(`text-sm p-0 font-medium ${o.value===e.locale?"text-primary-500":"text-gray-600"}`),onClick:c=>e.selectLang(o.value)},b(o.label),11,A),s!==e.langs.length-1?(a(),n("span",H,"/")):S("",!0)],64))),128))]),t("button",{class:"inline-block sm:hidden ml-5",onClick:l[1]||(l[1]=o=>e.show=!e.show)},W)]),_:1})])])}const q=y(N,[["render",j]]),G=w({components:{MainHeader:q},setup(){return{scrollToTop:()=>{window.scrollTo({behavior:"smooth",top:0})}}}}),J=t("i",{class:"uil uil-arrow-up text-xl text-white"},null,-1),K=[J],O=t("div",{class:"py-5 bg-gray-100"},[t("div",{class:"max-w-7xl mx-auto px-5 overflow-hidden text-center"},[t("p",{class:"text-sm"},"© 2023 Cuytamvan - Muhammad Rizki Wahyudi")])],-1);function P(e,l,i,d,m,p){const r=g("main-header"),o=g("router-view");return a(),n(u,null,[f(r),f(o),t("button",{class:"fixed bottom-10 right-10 bg-primary-500 rounded-full w-8 h-8",onClick:l[0]||(l[0]=(...s)=>e.scrollToTop&&e.scrollToTop(...s))},K),O],64)}const X=y(G,[["render",P]]);export{X as default};
