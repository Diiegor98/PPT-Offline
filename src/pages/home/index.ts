export function homePage(params) {
  const container = document.querySelector(".root");
  const div = document.createElement("div");
  const style = document.createElement("style");
  div.innerHTML = `
    <div class="container-home">
      <text-el variant="title" class="home__title">Piedra Papel ó Tijera</text-el>
      <button-el class="home__button" variant="button">Empezar</button-el>
      <choice-comp class="home__choice"></choice-comp>
    </div>
  `;
  style.innerHTML = `
    .container-home{
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 100vh;
      width: 100%;
    }
    .home__choice{
      margin-top: auto;    
    }
    .home__title{
      margin-top: 115px;
    }
    @media (min-width: 960px) {
      .home__title{
        margin-top: 145px;
      }
    }  
    .home__button{
      justify-self: center;
      margin-top: 59px;
    }  
    @media (min-width: 960px) {
      .home__button{
        margin-top: 26px;
      }
    }    
  `;
  container?.appendChild(style);
  container?.appendChild(div);
  const buttonEl = document.querySelector(".home__button");
  buttonEl?.addEventListener("click", () => {
    params.goTo("/instructions");
  });
}
