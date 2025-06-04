//Componentes
import { textEl } from "./components/text";
import { buttonEl } from "./components/button";
import { starComp } from "./components/star";
import { scoreComp } from "./components/score";
import { choiceComp } from "./components/choices";
import { timerComp } from "./components/timer";
import { versusComp } from "./components/versus";

//Router
import { initRouter } from "./router";

function main() {
  textEl();
  buttonEl();
  starComp();
  scoreComp();
  choiceComp();
  const root = document.querySelector(".root");
  initRouter(root);
  timerComp();
  versusComp();
}

main();
