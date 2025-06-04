import { state } from "../../state";
export function scoreComp() {
  class ScoreComp extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const div = document.createElement("div");
      const yourScore = state.getState().history.winners;
      const machineScore = state.getState().history.losses;
      const style = document.createElement("style");

      div.innerHTML = `
      <div class="container__score">
        <h3 class="score__title">Score</h3>
        <p class="score__text">Vos: ${yourScore}</p>
        <p class="score__text">Máquina: ${machineScore}</p>
      </div>
    `;
      style.innerHTML = `
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
      `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("score-comp", ScoreComp);
}
