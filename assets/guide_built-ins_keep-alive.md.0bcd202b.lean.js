import{r as s,o as n,c as a,d as l,t as e,F as p,C as o,D as c,M as t,N as i,i as r,E as D,O as F,e as y,j as d,a as C}from"./app.3c904b4a.js";const u=l("p",null,"Current component: A",-1),A={style:{"margin-right":"20px"}},g={setup(o){let c=s(0);return(s,o)=>(n(),a(p,null,[u,l("span",A,"count: "+e(c.value),1),l("button",{onClick:o[0]||(o[0]=s=>c.value++)},"+")],64))}},b=l("p",null,"Current component: B",-1),v={style:{"margin-right":"20px"}},I={setup(t){let i=s("");return(s,t)=>(n(),a(p,null,[b,l("span",v,"Message is: "+e(i.value),1),o(l("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>i.value=s)},null,512),[[c,i.value]])],64))}},m={class:"demo"},X=y(" A"),B=y(" B"),G={props:{useKeepAlive:Boolean},setup(s){let e=t(g);return(p,c)=>(n(),a("div",m,[l("label",null,[o(l("input",{type:"radio","onUpdate:modelValue":c[0]||(c[0]=s=>e.value=s),value:g},null,512),[[i,e.value]]),X]),l("label",null,[o(l("input",{type:"radio","onUpdate:modelValue":c[1]||(c[1]=s=>e.value=s),value:I},null,512),[[i,e.value]]),B]),s.useKeepAlive?(n(),r(F,{key:0},[(n(),r(D(e.value)))],1024)):(n(),r(D(e.value),{key:1}))]))}},h=C("",7),Z=C("",4),P=C("",19),V='{"title":"KeepAlive","description":"","frontmatter":{},"headers":[{"level":2,"title":"기본 사용법","slug":"basic-usage"},{"level":2,"title":"Include / Exclude","slug":"include-exclude"},{"level":2,"title":"최대 캐시 인스턴스","slug":"max-cached-instances"},{"level":2,"title":"캐시된 인스턴스의 라이프사이클","slug":"lifecycle-of-cached-instance"}],"relativePath":"guide/built-ins/keep-alive.md"}',x={},w=Object.assign(x,{setup:s=>(s,l)=>(n(),a("div",null,[h,d(G),Z,d(G,{"use-KeepAlive":""}),P]))});export{V as __pageData,w as default};
