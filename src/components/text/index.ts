export function textEl() {
  class TextEl extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });
      const variant = this.getAttribute("variant") || "";
      const textType = document.createElement(
        variant === "title" ? "h1" : variant === "body" ? "h3" : "p"
      );
      textType.classList.add(variant);
      textType.textContent = this.textContent;

      const style = document.createElement("style");
      style.innerHTML = `
      .title{
        color: #009048;
        font-size: 80px;
        font-weight: 800;
        margin: 0;
        line-height: 88%;
        width: 308px;
        height: 219px;
        }
        .body{
          color: #000000;
          font-size: 40px;
          font-weight: 600;
          margin: 0;
          line-height: 100%;
          width: 317px;
          }`;

      shadow.appendChild(style);
      shadow.appendChild(textType);
    }
  }
  customElements.define("text-el", TextEl);
}
