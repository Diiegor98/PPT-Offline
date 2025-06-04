import { state } from "../../state";
export function scorePage(params) {
  const container = document.querySelector(".root");
  const div = document.createElement("div");
  const style = document.createElement("style");
  let font = "";

  div.innerHTML = `
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
  `;
  container?.appendChild(div);

  const starcomp = document.querySelector(".score__star");
  const starText = starcomp?.shadowRoot?.querySelector(".star__text");
  const texto = starText?.textContent;
  console.log("soy el resultado", texto);
  if (texto === "Ganaste") {
    font = "#888949E5";
  } else if (texto === "Perdiste") {
    font = "#894949E5";
  } else {
    font = "#3399ff";
  }

  style.innerHTML = `
  .container__score-page{
  background-color: ${font};
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
  `;

  container?.appendChild(style);

  const buttonGame = document.querySelector(".score__button-game");
  buttonGame?.addEventListener("click", () => params.goTo("/instructions"));
  const buttonReset = document.querySelector(".score__button-reset");
  buttonReset?.addEventListener("click", () => {
    state.clearHistory();
    params.goTo("/home");
  });
}
