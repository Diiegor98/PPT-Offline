import { state } from "../../state";
const imgPiedra = require("url:../../icons/piedra.svg");
const imgPapel = require("url:../../icons/papel.svg");
const imgTijera = require("url:../../icons/tijera.svg");
export function versusComp() {
  class VersusComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      const currentMachineState = state.getState().game.machinePlay;
      const currentMyState = state.getState().game.myPlay;

      const imgMachine =
        currentMachineState === "piedra"
          ? imgPiedra
          : currentMachineState === "papel"
          ? imgPapel
          : imgTijera;
      const imgPlayer =
        currentMyState === "piedra" ? imgPiedra : currentMyState === "papel" ? imgPapel : imgTijera;

      div.innerHTML = `
      <div class="container__versus">
        <div class="versus__container-machine">
          <img src="${imgMachine}" class="versus__imagen img-machine" alt="Machine Icon">
        </div>
        <div class="versus__container-player">
          <img src="${imgPlayer}" class="versus__imagen img-player" alt="Player Icon">
        </div>
      </div>
      `;
      style.innerHTML = `  
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
      `;
      shadow.appendChild(div);
      shadow.appendChild(style);
    }
  }
  customElements.define("versus-comp", VersusComp);
}
