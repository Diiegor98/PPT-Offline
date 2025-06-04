import { state } from "../../state";
export function gamePage(params) {
  const container = document.querySelector(".root");
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
    <div class="container__game">
      <timer-comp class="game__timer"></timer-comp>
      <button-el class="game__button" variant="button">Restart!</button-el>
      <choice-comp class="game__choice"></choice-comp>
    </div>
  `;
  style.innerHTML = `
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
  `;
  container?.appendChild(style);
  container?.appendChild(div);

  const timerComponent = div.querySelector(".game__timer");
  const restartButton = div.querySelector(".game__button");
  const choiceComponent = div.querySelector(".game__choice");

  let choiceClicked = false;

  //eleccion de la maquina
  const machineNuber = Math.floor(Math.random() * 3) + 1;
  const machineChoice =
    machineNuber === 1
      ? "piedra"
      : machineNuber === 2
      ? "papel"
      : machineNuber === 3
      ? "tijera"
      : "";

  choiceComponent?.addEventListener("piedra-clicked", () => {
    //console.log("piedra ha sido pulsada");
    choiceClicked = true;
    choiceComponent.dispatchEvent(new CustomEvent("piedra-selected")); //envio la seleccion de nuevo a el comp choice
    const myChoice = "piedra";
    state.setGame(myChoice, machineChoice); //si piedra fue la eleccion, la envio al state
    state.setHistory(myChoice, machineChoice); //si piedra fue la eleccion, la envio al state
  });
  choiceComponent?.addEventListener("papel-clicked", () => {
    //console.log("papel ha sido pulsado");
    choiceClicked = true;
    choiceComponent.dispatchEvent(new CustomEvent("papel-selected")); //envio la seleccion de nuevo a el comp choice
    const myChoice = "papel";
    state.setGame(myChoice, machineChoice); //si papel fue la eleccion, la envio al state
    state.setHistory(myChoice, machineChoice); //si papel fue la eleccion, la envio al state
  });
  choiceComponent?.addEventListener("tijera-clicked", () => {
    //console.log("tijera ha sido pulsada");
    choiceClicked = true;
    choiceComponent.dispatchEvent(new CustomEvent("tijera-selected")); //envio la seleccion de nuevo a el comp choice
    const myChoice = "tijera";
    state.setGame(myChoice, machineChoice); //si tijera fue la eleccion, la envio al state
    state.setHistory(myChoice, machineChoice); //si tijera fue la eleccion, la envio al state
  });

  //si hay seleccion cambiamos de pagina, sino mostramos el boton restart
  timerComponent?.addEventListener("timer-finished", () => {
    //console.log("el timer ha finalizado");
    timerComponent.style.display = "none";
    if (choiceClicked) {
      //console.log("una choice ha sido pulsado antes de que el timer finalizara");
      params.goTo("/confrontation");
    } else {
      restartButton.style.display = "inherit"; // Muestra el botón
    }
  });
  //boton restart
  restartButton?.addEventListener("click", () => {
    //console.log("el botón ha sido pulsado");
    timerComponent.dispatchEvent(new CustomEvent("timer-restarted")); // Emitir evento que pulso boton restart
    timerComponent.style.display = "inherit"; // Muestra el timer
    restartButton.style.display = "none"; // Oculta el botón
  });
}
