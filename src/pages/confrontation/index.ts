export function confrontationPage(params) {
  const container = document.querySelector(".root");
  const div = document.createElement("div");

  div.innerHTML = `
    <div class="container__confrontation">
      <versus-comp class="confrontation__versus"></versus-comp>
    </div>`;

  container?.appendChild(div);

  //timer para pasar de pagina automaticamente o haciendo click en cualquier lado
  const pass = document.querySelector(".container__confrontation");
  let count = 3;
  let timerStopped = false; //variable para detener el intervalo sino se seguira ejecutando aun cuando hagamos click
  const updateCountDown = () => {
    const updateCountDown = setInterval(() => {
      count--;
      if (count === 0 && !timerStopped) {
        clearInterval(updateCountDown); //detenemos el intervalo
        params.goTo("/score");
      }
    }, 1000);
  };
  pass?.addEventListener("click", () => {
    params.goTo("/score");
    timerStopped = true;
  });

  updateCountDown();
}
