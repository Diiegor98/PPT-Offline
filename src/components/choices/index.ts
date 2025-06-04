const piedra = require("url:../../icons/piedra.svg");
const papel = require("url:../../icons/papel.svg");
const tijera = require("url:../../icons/tijera.svg");
export function choiceComp() {
  class ChoiceComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const style = document.createElement("style");

      div.innerHTML = `
      <div class="container-choices">
        <div class="container choices__tijera">
          <img src="${tijera}" class="choice tijera" alt="Tijera Icon">
        </div>
        <div class="container choices__piedra">
          <img src="${piedra}" class="choice piedra" alt="Piedra Icon">
        </div>
        <div class="container choices__papel">
          <img src="${papel}" class="choice papel" alt="Papel Icon">
        </div>
      </div> 
      `;

      style.innerHTML = `
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
        transition: transform 0.3s; /* Animación suave */
        top: 40px;
      }
      .container:hover {
        transform: translateY(-30px); /* Levantar la opción al pasar el mouse */  
      }  
      `;

      shadow.appendChild(style);
      shadow.appendChild(div);

      const choicePiedra = shadow.querySelector(".piedra");
      const choicePapel = shadow.querySelector(".papel");
      const choiceTijera = shadow.querySelector(".tijera");
      const containerPiedra = shadow.querySelector(".choices__piedra");
      const containerPapel = shadow.querySelector(".choices__papel");
      const containerTijera = shadow.querySelector(".choices__tijera");

      choicePiedra?.addEventListener("click", () => {
        //.log("soy piedra comp");

        this.dispatchEvent(new CustomEvent("piedra-clicked"));
      });

      choicePapel?.addEventListener("click", () => {
        // console.log("soy papel comp");

        this.dispatchEvent(new CustomEvent("papel-clicked"));
      });

      choiceTijera?.addEventListener("click", () => {
        //console.log("soy tijera comp");

        this.dispatchEvent(new CustomEvent("tijera-clicked"));
      });

      this.addEventListener("piedra-selected", () => {
        //para editar el comp cuando se selecciono en la page
        containerPiedra.style.transform = "translateY(-30px)";
        containerPapel.style.opacity = "0.5";
        containerTijera.style.opacity = "0.5";
      });
      this.addEventListener("papel-selected", () => {
        //para editar el comp cuando se selecciono en la page
        containerPapel.style.transform = "translateY(-30px)";
        containerPiedra.style.opacity = "0.5";
        containerTijera.style.opacity = "0.5";
      });
      this.addEventListener("tijera-selected", () => {
        //para editar el comp cuando se selecciono en la page
        containerTijera.style.transform = "translateY(-30px)";
        containerPapel.style.opacity = "0.5";
        containerPiedra.style.opacity = "0.5";
      });
    }
  }
  customElements.define("choice-comp", ChoiceComp);
}
