class Loading extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <button>test</button>
    `;
  }
}

export default Loading;
