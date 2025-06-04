export function instructionsPage(params) {
  const container = document.querySelector(".root");
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
    <div class="container__instructions">
      <text-el variant="body" class="instructions__text">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</text-el>
      <button-el class="instructions__button" variant="button">¡Jugar!</button-el>
      <choice-comp class="instructions__choice"></choice-comp>
    </div>
  `;
  style.innerHTML = `
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
  `;
  container?.appendChild(style);
  container?.appendChild(div);
  const buttonEl = document.querySelector(".instructions__button");
  buttonEl?.addEventListener("click", () => {
    params.goTo("/game");
  });
}
