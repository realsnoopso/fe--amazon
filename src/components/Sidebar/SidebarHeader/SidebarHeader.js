import sidebarHeaderStyle from './sidebarHeaderStyle.js';
class SidebarHeader extends HTMLElement {
  constructor() {
    super();

    const text = this.innerText;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `<icon-element name="user" fill="var(--white)"></icon-element>안녕하세요, 로그인`;
    this.shadowRoot.append(sidebarHeaderStyle.call(this));
  }
}

export default SidebarHeader;
