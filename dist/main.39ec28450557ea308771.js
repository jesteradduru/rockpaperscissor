!function(e){var t={};function r(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)r.d(o,c,function(t){return e[t]}.bind(null,c));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=1)}([function(e,t,r){},function(e,t,r){"use strict";r.r(t);r(0),r.p,r.p;let o=document.querySelector("#computerchoice"),c=document.querySelector(".winner"),n=document.querySelector("#playerchoice"),s=document.querySelector(".score1"),i=document.querySelector(".score2");let u=()=>{document.querySelector(".choice-container").classList.toggle("fade")},l=document.querySelector(".pick"),a=0,g=0;l.addEventListener("click",u),document.querySelector(".btnWinner").addEventListener("click",()=>{c.classList.toggle("fade"),a=0,g=0,s.innerHTML=a,i.innerHTML=g,o.setAttribute("src","./imgs/rock.png"),n.setAttribute("src","./imgs/rock-left.png")});let m=document.querySelectorAll(".choice"),d="";Array.from(m).forEach(e=>{e.addEventListener("click",t=>{let r=e.getAttribute("data-choice"),l=2;u(),setInterval(()=>{0!=l&&(!function(){let e=setInterval((function(){t<=10&&(t+=.5,n.style.top=t+"%",o.style.top=t+"%");10==t&&(clearInterval(e),setInterval(()=>{t>=0&&(t-=.5,n.style.top=t+"%",o.style.top=t+"%")},10))}),5),t=0}(),l--)},500),o.setAttribute("src","./imgs/rock.png"),n.setAttribute("src","./imgs/rock-left.png"),setTimeout(()=>function(e){let t=0,r=Math.floor(3*Math.random())+1;document.querySelector("#playerchoice").setAttribute("src","./imgs/"+e+".png"),t="rock-left"==e?1:"scissors-left"==e?2:3;1==t&&1==r?(d="tie",document.querySelector("#computerchoice").setAttribute("src","./imgs/rock.png")):1==t&&2==r?(d="win",document.querySelector("#computerchoice").setAttribute("src","./imgs/scissors.png")):1==t&&3==r&&(document.querySelector("#computerchoice").setAttribute("src","./imgs/paper.png"),d="lose");2==t&&2==r?(document.querySelector("#computerchoice").setAttribute("src","./imgs/scissors.png"),d="tie"):2==t&&1==r?(document.querySelector("#computerchoice").setAttribute("src","./imgs/rock.png"),d="lose"):2==t&&3==r&&(document.querySelector("#computerchoice").setAttribute("src","./imgs/paper.png"),d="win");3==t&&3==r?(document.querySelector("#computerchoice").setAttribute("src","./imgs/paper.png"),d="tie"):3==t&&1==r?(document.querySelector("#computerchoice").setAttribute("src","./imgs/rock.png"),d="win"):3==t&&2==r&&(document.querySelector("#computerchoice").setAttribute("src","./imgs/scissors.png"),d="lose");!function(e){let t=document.querySelector("#result"),r=document.querySelector("#resultComp"),o=document.querySelector("#player1"),n=document.querySelector("#player2");function u(e){let t=0;setInterval(()=>{t<360&&(t++,document.querySelector(e).style.transform="rotateY("+t+"deg)")},1)}function l(e,t){let r=document.querySelector(".winner h1");5==e?(r.innerHTML="You Win!",c.style.backgroundColor="#60c510",c.classList.toggle("fade")):5==t&&(r.innerHTML="You Lose!",c.style.backgroundColor="#940000",c.classList.toggle("fade"))}t.className="",r.className="","lose"===e?(t.classList.toggle("lose"),r.classList.toggle("win"),n.classList.toggle("fade"),setTimeout(()=>n.classList.toggle("fade"),800),u(".score2"),r.innerHTML="WIN",g++,l(a,g)):"win"===e?(t.classList.toggle("win"),r.classList.toggle("lose"),r.innerHTML="LOSE",o.classList.toggle("fade"),setTimeout(()=>o.classList.toggle("fade"),800),u(".score1"),a++,l(a,g)):(t.classList.toggle("draw"),r.classList.toggle("draw"),r.innerHTML="TIE"),setTimeout(()=>{s.innerHTML=a,i.innerHTML=g},1200),t.innerHTML=e.toUpperCase()}(d)}(r),1300)})})}]);