import{r as s,o as n,c as a,d as e,j as l,w as o,l as t,R as p,C as c,N as i,i as r,E as d,e as y,S as F,a as D}from"./app.3c904b4a.js";import{g as C}from"./chunks/index.31797bf8.js";const u={class:"demo"},b={key:0,style:{"margin-top":"20px"}},g={setup(c){let i=s(!0);return(s,c)=>(n(),a("div",u,[e("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value)},"Toggle Fade"),l(p,{name:"fade"},{default:o((()=>[i.value?(n(),a("p",b,"hello")):t("",!0)])),_:1})]))}};const h={class:"demo"},A={key:0,style:{"margin-top":"20px"}},m={setup(c){let i=s(!0);return(s,c)=>(n(),a("div",h,[e("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value)},"Toggle Slide + Fade"),l(p,{name:"slide-fade"},{default:o((()=>[i.value?(n(),a("p",A,"hello")):t("",!0)])),_:1})]))}};const I={class:"demo"},v={key:0,style:{"margin-top":"20px","text-align":"center"}},G={setup(c){let i=s(!0);return(s,c)=>(n(),a("div",I,[e("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value)},"Toggle"),l(p,{name:"bounce"},{default:o((()=>[i.value?(n(),a("p",v," Hello here is some bouncy text! ")):t("",!0)])),_:1})]))}};const X={class:"demo"},Z={key:0,class:"transition-demo-outer"},f=[e("div",{class:"transition-demo-inner"},"Hello",-1)],B={setup(c){let i=s(!0);return(s,c)=>(n(),a("div",X,[e("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value),style:{"margin-bottom":"20px"}},"Toggle"),l(p,{duration:"550",name:"nested"},{default:o((()=>[i.value?(n(),a("div",Z,f)):t("",!0)])),_:1})]))}};const W={class:"demo"},x={key:0,class:"gsap-box"},w={setup(c){let i=s(!0);function r(s){C.set(s,{scaleX:.25,scaleY:.25,opacity:1})}function d(s,n){C.to(s,{duration:1,scaleX:1,scaleY:1,ease:"elastic.inOut(2.5, 1)",onComplete:n})}function y(s,n){C.to(s,{duration:.7,scaleX:1,scaleY:1,x:300,ease:"elastic.inOut(2.5, 1)"}),C.to(s,{duration:.2,delay:.5,opacity:0,onComplete:n})}return(s,c)=>(n(),a("div",W,[e("button",{onClick:c[0]||(c[0]=s=>i.value=!i.value)},"Toggle"),l(p,{onBeforeEnter:r,onEnter:d,onLeave:y,css:!1},{default:o((()=>[i.value?(n(),a("div",x)):t("",!0)])),_:1})]))}};const V={class:"demo transition-demo"},S=e("span",{style:{"margin-right":"20px"}},"Click to cycle through states:",-1),Y={class:"btn-container"},H={props:["mode"],setup(c){let i=s("saved");return(s,r)=>(n(),a("div",V,[S,e("div",Y,[l(p,{name:"slide-up",mode:c.mode},{default:o((()=>["saved"===i.value?(n(),a("button",{key:0,onClick:r[0]||(r[0]=s=>i.value="edited")}," Edit ")):"edited"===i.value?(n(),a("button",{key:1,onClick:r[1]||(r[1]=s=>i.value="editing")}," Save ")):"editing"===i.value?(n(),a("button",{key:2,onClick:r[2]||(r[2]=s=>i.value="saved")}," Cancel ")):t("",!0)])),_:1},8,["mode"])])]))}},T={class:"demo"},R=y(" A "),N=y(" B "),J={setup(t){const y=()=>F("div","Component A"),D=()=>F("div","Component B");let C=s(y);return(s,t)=>(n(),a("div",T,[e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":t[0]||(t[0]=s=>C.value=s),value:y},null,512),[[i,C.value]]),R]),e("label",null,[c(e("input",{type:"radio","onUpdate:modelValue":t[1]||(t[1]=s=>C.value=s),value:D},null,512),[[i,C.value]]),N]),l(p,{name:"fade",mode:"out-in"},{default:o((()=>[(n(),r(d(C.value)))])),_:1})]))}},L=D("",16),j=D("",33),z=D("",10),P=D("",33),k=D("",27),E=D("",20),_=D("",10),U=D("",7),q=D("",14),M='{"title":"Transition","description":"","frontmatter":{},"headers":[{"level":2,"title":"The <Transition> Component","slug":"the-transition-component"},{"level":2,"title":"<Transition> 컴포넌트","slug":"transition-컴포넌트"},{"level":2,"title":"CSS-Based Transitions","slug":"css-based-transitions"},{"level":2,"title":"CSS 기반 트랜지션","slug":"css-기반-트랜지션"},{"level":3,"title":"Transition Classes","slug":"transition-classes"},{"level":3,"title":"트랜지션 클래스","slug":"트랜지션-클래스"},{"level":3,"title":"Named Transitions","slug":"named-transitions"},{"level":3,"title":"명명된 트랜지션","slug":"명명된-트랜지션"},{"level":3,"title":"CSS Transitions","slug":"css-transitions"},{"level":3,"title":"CSS 트랜지션","slug":"css-트랜지션"},{"level":3,"title":"CSS Animations","slug":"css-animations"},{"level":3,"title":"CSS 애니메이션","slug":"css-애니메이션"},{"level":3,"title":"Custom Transition Classes","slug":"custom-transition-classes"},{"level":3,"title":"커스텀 트랜지션 클래스","slug":"커스텀-트랜지션-클래스"},{"level":3,"title":"Using Transitions and Animations Together","slug":"using-transitions-and-animations-together"},{"level":3,"title":"트랜지션과 애니메이션을 같이 사용하기","slug":"트랜지션과-애니메이션을-같이-사용하기"},{"level":3,"title":"Nested Transitions and Explicit Transition Durations","slug":"nested-transitions-and-explicit-transition-durations"},{"level":3,"title":"중첩된 트랜지션과 트랜지션 지속시간 명시하기","slug":"중첩된-트랜지션과-트랜지션-지속시간-명시하기"},{"level":3,"title":"Performance Considerations","slug":"performance-considerations"},{"level":3,"title":"성능 고려사항","slug":"성능-고려사항"},{"level":2,"title":"JavaScript Hooks","slug":"javascript-hooks"},{"level":2,"title":"자바스크립트 후크","slug":"자바스크립트-후크"},{"level":2,"title":"Reusable Transitions","slug":"reusable-transitions"},{"level":2,"title":"트랜지션 재사용","slug":"트랜지션-재사용"},{"level":2,"title":"Transition on Appear","slug":"transition-on-appear"},{"level":2,"title":"등장시 트랜지션","slug":"등장시-트랜지션"},{"level":2,"title":"Transition Between Elements","slug":"transition-between-elements"},{"level":2,"title":"앨레멘트간에 트랜지션 하기","slug":"앨레멘트간에-트랜지션-하기"},{"level":2,"title":"Transition Modes","slug":"transition-modes"},{"level":2,"title":"트랜지션 모드","slug":"트랜지션-모드"},{"level":2,"title":"Transition Between Components","slug":"transition-between-components"},{"level":2,"title":"컴포넌트간에 트랜지션","slug":"컴포넌트간에-트랜지션"},{"level":2,"title":"Dynamic Transitions","slug":"dynamic-transitions"},{"level":2,"title":"동적 트랜지션","slug":"동적-트랜지션"}],"relativePath":"guide/built-ins/transition.md"}',O={},Q=Object.assign(O,{setup:s=>(s,e)=>(n(),a("div",null,[L,l(g),j,l(m),z,l(G),P,l(B),k,l(w),E,l(H),_,l(H,{mode:"out-in"}),U,l(J),q]))});export{M as __pageData,Q as default};
