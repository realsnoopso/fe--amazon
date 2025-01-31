import navbarStyle from './navbarStyle.js';

class Navbar extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <div class="main">
        <a href="/"><image-element name="BI"></image-element></a>
        <navbar-mainmenu-element id="selectCountryBtn"><span class="label"><icon-element size="12" name="location" fill="var(--gray-400)"></icon-element>배송처</span><span class="text">대한민국</span></navbar-mainmenu-element>
        <text-input-element placeholder="검색 Amazon" id="search-input"></text-input-element> 
        <navbar-mainmenu-element><span class="text"><image-element name="flag" height="14" width="14"></image-element>KO</span></navbar-mainmenu-element>
        <navbar-mainmenu-element id="loginBtn"><span class="label">안녕하세요,</span><span class="text">로그인 계정 및 목록</span></navbar-mainmenu-element>
        <navbar-mainmenu-element><span class="label">반품 &</span><span class="text">주문</span></navbar-mainmenu-element>
        <navbar-mainmenu-element><span  class="text"><icon-element size="24" name="cart" fill="var(--primary-orange-200)"></icon-element>장바구니</span></navbar-mainmenu-element>
      </div>
      <div class="sub">
        <div class="left-buttons">
          <navbar-submenu-element icon="menu" id="showAllBtn"><span class="bold">모두</span></navbar-submenu-element>
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

    this.shadowRoot.append(navbarStyle.call(this));
  }
}

export default Navbar;
