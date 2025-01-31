export default function navbarStyle() {
  const style = document.createElement('style');

  style.textContent = `
    :host {
      display: block;
      color: var(--white);
      position: fixed;
      z-index: 1;
      width: 100%;
    }

    .main, .sub {
      display: flex;
      gap: 8px;
      align-items: center;
      box-sizing: border-box;
    }

    .main {
      padding: 0 16px;
      background-color: var(--black);
      height: var(--nav-main-height);
    }

    .sub {
      padding: 0 16px;
      background-color: var(--gray-900);
      flex-direction: row;
      justify-content: space-between;
      height: var(--nav-sub-height);
    }

    .main text-input-element {
      width: 100%;
    }

    .sub > div {
      flex-grow: 0;
      display: flex;
      height: 100%;
    }

    a {
      display: flex;
      align-items: center;
      height: 100%;
      border-radius: 1px;
    }

    a:hover {
      outline: 1px solid var(--white);
    }

    navbar-mainmenu-element {
      height: 100%;
    }
  `;
  return style;
}
