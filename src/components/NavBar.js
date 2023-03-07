class Navbar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <div class="main">
        <a href="/"><image-element name="BI"></image-element></a>
        <navbar-mainmenu-element><span class="label"><icon-element size="12" name="location" fill="var(--white)"></icon-element>배송처</span><span class="text">대한민국</span></navbar-mainmenu-element>

        <text-input-element placeholder="test">tetss</text-input-element> 
        <navbar-mainmenu-element><span class="text"><image-element name="flag"></image-element>KO</span></navbar-mainmenu-element>
        <navbar-mainmenu-element><span class="label">안녕하세요,</span><span class="text">로그인 계정 및 목록</span></navbar-mainmenu-element>
        <navbar-mainmenu-element><span class="label">반품 &</span><span class="text">주문</span></navbar-mainmenu-element>
        <navbar-mainmenu-element><span  class="text"><icon-element size="24" name="cart" fill="var(--primary-orange-200)"></icon-element>장바구니</span></navbar-mainmenu-element>
      </div>
      <div class="sub">
        <div class="left-buttons">
          <navbar-submenu-element icon="menu"><span class="bold">모두</span></navbar-submenu-element>
          <navbar-submenu-element><span>오늘의 딜</span></navbar-submenu-element>
          <navbar-submenu-element><span>고객 서비스</span></navbar-submenu-element>
          <navbar-submenu-element><span>레지스터리</span></navbar-submenu-element>
          <navbar-submenu-element><span>기프트 카드</span></navbar-submenu-element>
          <navbar-submenu-element><span>판매</span></navbar-submenu-element>
        </div>
        <div class="right-buttons">
          <navbar-submenu-element><span class="bold">지금 특가 상품 쇼핑하기</span></navbar-submenu-element>
        </div>
      </div>
    `;

    this.shadowRoot.append(this.getStyle());
  }

  getStyle() {
    const style = document.createElement('style');
    const width = this.getAttribute('width');

    style.textContent = `
      :host {
        display: block;
        color: var(--white)
      }

      .main, .sub {
        display: flex;
        gap: 24px;
        align-items: center;
      }

      .main {
        padding: 8px 16px;
        background-color: var(--black);
      }

      .sub {
        padding: 0 16px;
        background-color: var(--gray-900);
        flex-direction: row;
        justify-content: space-between;
      }

      .main text-input-element {
        width: 100%;
      }

      .sub > div {
        flex-grow: 0;
        display: flex;
      }      
    `;
    return style;
  }
}

export default Navbar;
