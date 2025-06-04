const starLost = require("url:../../icons/star-lost.svg");
const starWin = require("url:../../icons/star-win.svg");
const starDraw = require("url:../../icons/star-draw.png");

import { state } from "../../state";

export function starComp() {
  class StarComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }

    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      const result = state.getState().game;
      const win =
        (result.myPlay === "piedra" && result.machinePlay === "tijera") ||
        (result.myPlay === "papel" && result.machinePlay === "piedra") ||
        (result.myPlay === "tijera" && result.machinePlay === "papel")
          ? "1"
          : "0";
      const loss =
        (result.myPlay === "piedra" && result.machinePlay === "papel") ||
        (result.myPlay === "papel" && result.machinePlay === "tijera") ||
        (result.myPlay === "tijera" && result.machinePlay === "piedra")
          ? "1"
          : "0";

      let star = "";
      let text = "";

      if (win === "1") {
        // cambiar codigo para que elija entre win, lost y draw
        star = starWin;
        text = "Ganaste";
      } else if (loss === "1") {
        star = starLost;
        text = "Perdiste";
      } else {
        star = starDraw;
        text = "Empate";
      }

      div.innerHTML = `
        <div class="container__star">
          <img src="${star}" class="star__img" alt="Star Icon">
          <h3 class="star__text">${text}</h3>
        </div>
      `;
      style.innerHTML = `
        .container__star{
          position: relative;
          display: inline-block; //permitir que el contenedor ajuste su tamaño
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
      
      `;
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("star-comp", StarComp);
}
