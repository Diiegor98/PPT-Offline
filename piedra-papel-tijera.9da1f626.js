const e={data:JSON.parse(localStorage.getItem("state"))||{game:{myPlay:"",machinePlay:""},history:{winners:"0",losses:"0"}},listeners:[],getState(){return this.data},setState(e){for(let t of(this.data=e,localStorage.setItem("state",JSON.stringify(e)),console.log("Se ha realizado un cambio en el state:",e),this.listeners))t()},suscribe(e){this.listeners.push(e)},setGame(e,t){let i={...this.getState(),game:{myPlay:e,machinePlay:t}};this.setState(i)},setHistory(e,t){let i=+("piedra"===e&&"tijera"===t||"papel"===e&&"piedra"===t||"tijera"===e&&"papel"===t),n=+("piedra"===e&&"papel"===t||"papel"===e&&"tijera"===t||"tijera"===e&&"piedra"===t);console.log("myChoice:",e,"machineChoice:",t,"win:",i.toString(),"loss:",n.toString());let a={...this.getState(),history:{winners:(parseInt(this.getState().history.winners)+i).toString(),losses:(parseInt(this.getState().history.losses)+n).toString()}};this.setState(a)},clearHistory(){let e={...this.getState(),history:{winners:"0",losses:"0"}};this.setState(e)}};var t={};t=import.meta.resolve("cx4G6");var i={};i=import.meta.resolve("04Mf6");var n={};n=import.meta.resolve("gfEMJ");var a={};a=import.meta.resolve("4ZMB4");var o={};o=import.meta.resolve("3tc69");var r={};r=import.meta.resolve("bjWUE");var s={};s=import.meta.resolve("aiuSD");var c={};c=import.meta.resolve("2uOnW");var l={};l=import.meta.resolve("3SDhT");var d={};function p(e){let t=document.querySelector(".root"),i=document.createElement("div"),n=document.createElement("style");i.innerHTML=`
    <div class="container-home">
      <text-el variant="title" class="home__title">Piedra Papel \xf3 Tijera</text-el>
      <button-el class="home__button" variant="button">Empezar</button-el>
      <choice-comp class="home__choice"></choice-comp>
    </div>
  `,n.innerHTML=`
    .container-home{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    .home__choice{
      margin-top: auto;    
    }
    .home__title{
      margin-top: 115px;
    }
    @media (min-width: 960px) {
      .home__title{
        margin-top: 145px;
      }
    }  
    .home__button{
      justify-self: center;
      margin-top: 59px;
    }  
    @media (min-width: 960px) {
      .home__button{
        margin-top: 26px;
      }
    }    
  `,t?.appendChild(n),t?.appendChild(i);let a=document.querySelector(".home__button");a?.addEventListener("click",()=>{e.goTo("/instructions")})}d=import.meta.resolve("lCT8E");const m=[{path:/\/home/,component:p},{path:/^\/$/,component:p},{path:/\/instructions/,component:function(e){let t=document.querySelector(".root"),i=document.createElement("div"),n=document.createElement("style");i.innerHTML=`
    <div class="container__instructions">
      <text-el variant="body" class="instructions__text">Presion\xe1 jugar y eleg\xed: piedra, papel o tijera antes de que pasen los 3 segundos.</text-el>
      <button-el class="instructions__button" variant="button">\xa1Jugar!</button-el>
      <choice-comp class="instructions__choice"></choice-comp>
    </div>
  `,n.innerHTML=`
    .container__instructions{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    .instructions__choice{
      margin-top: auto;    
    }
    .instructions__text{
      margin-top: 129px;
      text-align: center;
    }
    @media (min-width: 960px) {
      .instructions__text{
        margin-top: 148px;
      }
    }  
    .instructions__button{
      margin-top: 45px;
    }  
    @media (min-width: 960px) {
      .instructions__button{
        margin-top: 48px;
      }
    }  
  `,t?.appendChild(n),t?.appendChild(i);let a=document.querySelector(".instructions__button");a?.addEventListener("click",()=>{e.goTo("/game")})}},{path:/\/game/,component:function(t){let i=document.querySelector(".root"),n=document.createElement("div"),a=document.createElement("style");n.innerHTML=`
    <div class="container__game">
      <timer-comp class="game__timer"></timer-comp>
      <button-el class="game__button" variant="button">Restart!</button-el>
      <choice-comp class="game__choice"></choice-comp>
    </div>
  `,a.innerHTML=`
    .container__game{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    .game__choice{
      margin-top: auto;    
    }
    .game__timer{
      margin-top: 125px;
    }
    @media (min-width: 960px) {
      .game__timer{
        margin-top: 145px;
      }
    }
    .game__button{
      margin-top: 200px;
      display: none;
    }  
    @media (min-width: 960px) {
      .game__button{
        margin-top: 240px;
      }
    }
  `,i?.appendChild(a),i?.appendChild(n);let o=n.querySelector(".game__timer"),r=n.querySelector(".game__button"),s=n.querySelector(".game__choice"),c=!1,l=Math.floor(3*Math.random())+1,d=1===l?"piedra":2===l?"papel":3===l?"tijera":"";s?.addEventListener("piedra-clicked",()=>{c=!0,s.dispatchEvent(new CustomEvent("piedra-selected"));let t="piedra";e.setGame(t,d),e.setHistory(t,d)}),s?.addEventListener("papel-clicked",()=>{c=!0,s.dispatchEvent(new CustomEvent("papel-selected"));let t="papel";e.setGame(t,d),e.setHistory(t,d)}),s?.addEventListener("tijera-clicked",()=>{c=!0,s.dispatchEvent(new CustomEvent("tijera-selected"));let t="tijera";e.setGame(t,d),e.setHistory(t,d)}),o?.addEventListener("timer-finished",()=>{o.style.display="none",c?t.goTo("/confrontation"):r.style.display="inherit"}),r?.addEventListener("click",()=>{o.dispatchEvent(new CustomEvent("timer-restarted")),o.style.display="inherit",r.style.display="none"})}},{path:/\/confrontation/,component:function(e){let t=document.querySelector(".root"),i=document.createElement("div");i.innerHTML=`
    <div class="container__confrontation">
      <versus-comp class="confrontation__versus"></versus-comp>
    </div>`,t?.appendChild(i);let n=document.querySelector(".container__confrontation"),a=3,o=!1;n?.addEventListener("click",()=>{e.goTo("/score"),o=!0});let r=setInterval(()=>{0!=--a||o||(clearInterval(r),e.goTo("/score"))},1e3)}},{path:/\/score/,component:function(t){let i=document.querySelector(".root"),n=document.createElement("div"),a=document.createElement("style"),o="";n.innerHTML=`
  <div class="container__score-page">
    <div class="container__versus">
      <versus-comp class="versus"></versus-comp>
    </div>  
    <div class = "container__score">
      <star-comp class="score__star"></star-comp>
      <score-comp class="score__table"></score-comp>
      <button-el class="score__button-game" variant="button-score">Volver a Jugar</button-el>
      <button-el class="score__button-reset" variant="button-reset">Reset Score</button-el>
    </div>
  </div>
  `,i?.appendChild(n);let r=document.querySelector(".score__star"),s=r?.shadowRoot?.querySelector(".star__text"),c=s?.textContent;console.log("soy el resultado",c),o="Ganaste"===c?"#888949E5":"Perdiste"===c?"#894949E5":"#3399ff",a.innerHTML=`
  .container__score-page{
  background-color: ${o};
  opacity: 0.9;
  height: 100vh;
  }
  .container__versus{
    display: flex;
    justify-content: center;  
    
  }
  .versus{
    position: absolute;
    z-index: -1;
    justify-self: center;  
    opacity: 0.4;
  }
    .container__score{
   display: flex;
   flex-direction: column;
   align-items: center;
   height: 100vh;
   justify-content: space-between;
   padding: 15px 0;
  }
  @media (min-width: 960px) {
    .container__score{
      padding: 40px 30px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      gap: 5px 40px;
    }  
  } 
  @media (min-width: 960px){
    .score__star{
      grid-column: 1;
      grid-row: 1;
      align-self: center;
      justify-self: center;
    }
  } 
  @media (min-width: 960px){
    .score__table{
      grid-column: 2;
      grid-row-start: 1;
      grid-row-end: span 2;
      align-self: center;
      justify-self: center;
    }
  } 
  @media (min-width: 960px){
    .score__button-game{
      grid-column: 2;
      grid-row: 3;
      align-self: start;
      justify-self: center;
    }
  }
  @media (min-width: 960px){
    .score__button-reset{
      grid-column: 3;
      grid-row: 3;
      align-self: end;
      justify-self: center;
    }
  }  
  `,i?.appendChild(a);let l=document.querySelector(".score__button-game");l?.addEventListener("click",()=>t.goTo("/instructions"));let d=document.querySelector(".score__button-reset");d?.addEventListener("click",()=>{e.clearHistory(),t.goTo("/home")})}}],h="/PPT-Offline";function u(){return location.hostname.endsWith("github.io")}!function(){class p extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=this.getAttribute("variant")||"",i=document.createElement("title"===t?"h1":"body"===t?"h3":"p");i.classList.add(t),i.textContent=this.textContent;let n=document.createElement("style");n.innerHTML=`
      .title{
        color: #009048;
        font-size: 80px;
        font-weight: 800;
        margin: 0;
        line-height: 88%;
        width: 308px;
        height: 219px;
        }
        .body{
          color: #000000;
          font-size: 40px;
          font-weight: 600;
          margin: 0;
          line-height: 100%;
          width: 317px;
          }`,e.appendChild(n),e.appendChild(i)}}customElements.define("text-el",p);class g extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("button"),i=this.getAttribute("variant")||"";t.classList.add(i),t.textContent=this.textContent,t.classList.add("button");let n=document.createElement("style");n.innerHTML=`
      .button{
        background-color: #006CFC;
        border: 10px solid #001997;
        border-radius: 10px;
        width: 322px;
        height: 87px;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: odibee sans;
        margin: 0;
        }
        @media (min-width: 960px) {
          .button{
            width: 336px;
          }  
        }
        .button-reset{
        background-color: #006CFC;
        border: 5px solid #001997;
        border-radius: 5px;
        width: 120px;
        height: 40px;
        color: #D8FCFC;
        font-size: 20px;
        font-weight: 400;
        font-family: odibee sans;

        margin: 0;
        }
        @media (min-width: 960px) {
          .button-reset{
            width: 170px;
            height: 50px;
            font-size: 25px;
          }  
        }
        .button-score{
        background-color: #006CFC;
        border: 10px solid #001997;
        border-radius: 10px;
        width: 335px;
        height: 87px;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: odibee sans;
        margin: 0;
        padding: 0;
        }
        @media (min-width: 960px) {
          .button-score{
            width: 360px;
            height: 95px;
            font-size: 50px;
          }  
        }
        
        `,e.appendChild(n),e.appendChild(t)}}customElements.define("button-el",g);class _ extends HTMLElement{constructor(){super(),this.render()}render(){let a=this.attachShadow({mode:"open"}),o=document.createElement("div"),r=document.createElement("style"),s=e.getState().game,c="piedra"===s.myPlay&&"tijera"===s.machinePlay||"papel"===s.myPlay&&"piedra"===s.machinePlay||"tijera"===s.myPlay&&"papel"===s.machinePlay?"1":"0",l="piedra"===s.myPlay&&"papel"===s.machinePlay||"papel"===s.myPlay&&"tijera"===s.machinePlay||"tijera"===s.myPlay&&"piedra"===s.machinePlay?"1":"0",d="",p="";"1"===c?(d=i,p="Ganaste"):"1"===l?(d=t,p="Perdiste"):(d=n,p="Empate"),o.innerHTML=`
        <div class="container__star">
          <img src="${d}" class="star__img" alt="Star Icon">
          <h3 class="star__text">${p}</h3>
        </div>
      `,r.innerHTML=`
        .container__star{
          position: relative;
          display: inline-block; //permitir que el contenedor ajuste su tama\xf1o
        }
        .star__text{
          color:#FFFFFF;
          font-family: odibee sans;
          font-size: 55px;
          font-weight: 400;
          position: absolute;
          bottom: 43%;
          left: 25%;
          margin:0;
          padding:0;
        }
        @media (min-width: 960px) {
          .star__text{
            font-size: 60px;
          }
        }

        .star__img{
          display: block;
          width: 255px;
          hight: 260px;
          margin:0;
          padding:0;
          } 
        @media (min-width: 960px) {
          .star__img{
            width: 300px;
            hight: 300px;
          }
        }  
      
      `,a.appendChild(o),a.appendChild(r)}}customElements.define("star-comp",_);class x extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),i=document.createElement("div"),n=e.getState().history.winners,a=e.getState().history.losses,o=document.createElement("style");i.innerHTML=`
      <div class="container__score">
        <h3 class="score__title">Score</h3>
        <p class="score__text">Vos: ${n}</p>
        <p class="score__text">M\xe1quina: ${a}</p>
      </div>
    `,o.innerHTML=`
      .container__score{
      box-sizing: border-box;
        margin: 0;
        padding: 15px 30px 28px 0px;
        display: flex;
        flex-direction: column;
        background-color:#FFFFFF;
        border: 10px solid #000000;
        border-radius: 10px;
        width: 259px;
        height: 219px;
        font-family: odibee sans;
      }
      @media (min-width: 960px) {
        .container__score{
          width: 360px;
          height: 270px;
          padding: 15px 30px 28px 30px;
        }
      }
      .score__title{
        color: #000000;
        font-size: 55px;
        font-weight: 400;
        margin:0;
        margin-bottom: 13px;
        align-self: center;
      }   
      @media (min-width: 960px) {
        .score__title{
          font-size: 65px;
        }
      }
      .score__text{
        color: #000000;
        font-size: 45px;
        font-weight: 400;
        margin:0;
        align-self: flex-end;
      }
      @media (min-width: 960px) {
        .score__text{
          font-size: 55px;
        }
      }
      `,t.appendChild(o),t.appendChild(i)}}customElements.define("score-comp",x);class v extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div"),i=document.createElement("style");t.innerHTML=`
      <div class="container-choices">
        <div class="container choices__tijera">
          <img src="${r}" class="choice tijera" alt="Tijera Icon">
        </div>
        <div class="container choices__piedra">
          <img src="${a}" class="choice piedra" alt="Piedra Icon">
        </div>
        <div class="container choices__papel">
          <img src="${o}" class="choice papel" alt="Papel Icon">
        </div>
      </div> 
      `,i.innerHTML=`
      .container-choices{
        display: flex;
        flex-direction: row;
        gap: 46px;
        margin: 0;
        height: 128px;
        position: relative;
        overflow: hidden;
      }
        @media (min-width: 960px) {
          .choice{
            height: 181px;
          }  
        }
         @media (min-width: 960px) {
          .container-choices{
            height: 181px;
          }  
        }  

      .container{
        position: relative;
        transition: transform 0.3s; /* Animaci\xf3n suave */
        top: 40px;
      }
      .container:hover {
        transform: translateY(-30px); /* Levantar la opci\xf3n al pasar el mouse */  
      }  
      `,e.appendChild(i),e.appendChild(t);let n=e.querySelector(".piedra"),s=e.querySelector(".papel"),c=e.querySelector(".tijera"),l=e.querySelector(".choices__piedra"),d=e.querySelector(".choices__papel"),p=e.querySelector(".choices__tijera");n?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("piedra-clicked"))}),s?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("papel-clicked"))}),c?.addEventListener("click",()=>{this.dispatchEvent(new CustomEvent("tijera-clicked"))}),this.addEventListener("piedra-selected",()=>{l.style.transform="translateY(-30px)",d.style.opacity="0.5",p.style.opacity="0.5"}),this.addEventListener("papel-selected",()=>{d.style.transform="translateY(-30px)",l.style.opacity="0.5",p.style.opacity="0.5"}),this.addEventListener("tijera-selected",()=>{p.style.transform="translateY(-30px)",d.style.opacity="0.5",l.style.opacity="0.5"})}}customElements.define("choice-comp",v);var y=document.querySelector(".root");function f(e){let t=u()?h+e:e;history.pushState({},"",t),b(t)}function b(e){console.log("El handleRoute recibió una ruta:",e);let t=u()&&e.startsWith(h)?e.replace(h,""):e;y.innerHTML="";let i=!1;for(let e of m)if(e.path.test(t)){e.component({goTo:f}),i=!0;break}i||console.log("Ruta no encontrada:",t)}"/"===location.pathname||location.pathname===h?f("/home"):b(location.pathname),window.onpopstate=function(){b(location.pathname)};class w extends HTMLElement{constructor(){super(),this.render()}render(){let e=this.attachShadow({mode:"open"}),t=document.createElement("div");t.classList.add("container__timer");let i=document.createElement("style"),n=4,a=document.createElement("img");a.classList.add("timer__img"),a.src=s;let o=()=>{let e=setInterval(()=>{a.src=--n>0?3===n?c:2===n?l:d:d,0===n&&(clearInterval(e),this.dispatchEvent(new CustomEvent("timer-finished")))},1e3)};this.addEventListener("timer-restarted",()=>{n=4,a.src=s,o()}),i.innerHTML=`
        .container__timer{
        display: flex;
        flex-direction: column;
        align-items: center;
        }
        .timer__img{
          width: 243px;
          height: 243px;
          margin: 0;
          display: block;
        }
        @media (min-width: 960px) {
          .timer__img{
            width: 300px;
            height: 300px;
          }
        }  
         `,t.appendChild(a),e.appendChild(i),e.appendChild(t),o()}}customElements.define("timer-comp",w);class E extends HTMLElement{constructor(){super(),this.render()}render(){let t=this.attachShadow({mode:"open"}),i=document.createElement("div"),n=document.createElement("style"),s=e.getState().game.machinePlay,c=e.getState().game.myPlay,l="piedra"===s?a:"papel"===s?o:r,d="piedra"===c?a:"papel"===c?o:r;i.innerHTML=`
      <div class="container__versus">
        <div class="versus__container-machine">
          <img src="${l}" class="versus__imagen img-machine" alt="Machine Icon">
        </div>
        <div class="versus__container-player">
          <img src="${d}" class="versus__imagen img-player" alt="Player Icon">
        </div>
      </div>
      `,n.innerHTML=`  
      .container__versus{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        overflow: hidden; 
        height: 100vh;
        width: 100%;
      }  
      .versus__imagen{
        width: 171px;
        height: 356px;
        margin: 0;
        padding: 0;
      }

      .img-machine{
        margin-bottom: auto;
        transform: rotateX(180deg) translateY(30px);
      } 
      .img-player{
        transform: translateY(30px);
        margin-top: auto;
      }        
      `,t.appendChild(i),t.appendChild(n)}}customElements.define("versus-comp",E)}();
//# sourceMappingURL=piedra-papel-tijera.9da1f626.js.map
