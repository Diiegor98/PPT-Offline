export function buttonEl() {
  class ButtonEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const buttonEl = document.createElement("button");
      const variant = this.getAttribute("variant") || "";
      buttonEl.classList.add(variant);
      buttonEl.textContent = this.textContent;
      buttonEl.classList.add("button");

      const style = document.createElement("style");
      style.innerHTML = `
      .button{
        background-color: #006CFC;
        border: 10px solid #001997;
        border-radius: 10px;
        width: 322px;
        height: 87px;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: odibee sans;
        margin: 0;
        }
        @media (min-width: 960px) {
          .button{
            width: 336px;
          }  
        }
        .button-reset{
        background-color: #006CFC;
        border: 5px solid #001997;
        border-radius: 5px;
        width: 120px;
        height: 40px;
        color: #D8FCFC;
        font-size: 20px;
        font-weight: 400;
        font-family: odibee sans;

        margin: 0;
        }
        @media (min-width: 960px) {
          .button-reset{
            width: 170px;
            height: 50px;
            font-size: 25px;
          }  
        }
        .button-score{
        background-color: #006CFC;
        border: 10px solid #001997;
        border-radius: 10px;
        width: 335px;
        height: 87px;
        color: #D8FCFC;
        font-size: 45px;
        font-weight: 400;
        font-family: odibee sans;
        margin: 0;
        padding: 0;
        }
        @media (min-width: 960px) {
          .button-score{
            width: 360px;
            height: 95px;
            font-size: 50px;
          }  
        }
        
        `;
      shadow.appendChild(style);
      shadow.appendChild(buttonEl);
    }
  }
  customElements.define("button-el", ButtonEl);
}
