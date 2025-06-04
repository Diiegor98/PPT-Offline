const threeImg = require("url:../../icons/three-ps.png");
const twoImg = require("url:../../icons/two-ps.png");
const oneImg = require("url:../../icons/one-ps.png");
const goImg = require("url:../../icons/go-ps.png");

export function timerComp() {
  class TimerComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      div.classList.add("container__timer");
      const style = document.createElement("style");

      let count = 4;
      let imgEl = document.createElement("img");
      imgEl.classList.add("timer__img");
      imgEl.src = threeImg; // para que no aparesca la imagen vacia al principio de la cuenta regresiva

      const startCountDown = () => {
        const updateCountDown = setInterval(() => {
          count--;
          let imgSrc =
            count > 0
              ? count === 3
                ? twoImg
                : count === 2
                ? oneImg
                : count === 1
                ? goImg
                : goImg
              : goImg;
          imgEl.src = imgSrc;

          if (count === 0) {
            clearInterval(updateCountDown); //detenemos el intervalo
            this.dispatchEvent(new CustomEvent("timer-finished")); // Emitir evento que finalizo el timmer para que lo vea la page
          }
        }, 1000);
      };

      // Escuchar el evento de reinicio
      this.addEventListener("timer-restarted", () => {
        //console.log("hola restart");

        count = 4; // Reinicia el contador
        imgEl.src = threeImg; // Restablece la imagen a 3
        startCountDown(); // Inicia la cuenta regresiva nuevamente
      });

      style.innerHTML = `
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
         `;

      div.appendChild(imgEl);
      shadow.appendChild(style);
      shadow.appendChild(div);

      startCountDown(); // Inicia la cuenta regresiva al renderizar
    }
  }
  customElements.define("timer-comp", TimerComp);
}
