import Button from './Button.js';
import Footer from './Footer.js';
import Loading from './Loading.js';
import Navbar from './NavBar.js';
import MainMenu from './NavBar/MainMenu.js';
import SubMenu from './NavBar/SubMenu.js';
import Sidebar from './Sidebar.js';
import Icon from './Icon.js';
import Image from './Image.js';
import TextInput from './TextInput.js';
import Action from './Action.js';
import LoginAction from './Action/LoginAction.js';
import ChangeAdressAction from './Action/ChangeAddressAction.js';
import Backdrop from './Backdrop.js';
import SideBarBack from './Sidebar/SidebarSub/SidebarBack.js';
import SidebarCategory from './Sidebar/SidebarCategory.js';
import SidebarFold from './Sidebar/SidebarMain/SidebarFold.js';
import SidebarUnfold from './Sidebar/SidebarMain/SidebarUnfold.js';
import SidebarHeader from './Sidebar/SidebarHeader.js';
import SideBarTitle from './Sidebar/SidebarTitle.js';
import SidebarMain from './Sidebar/SidebarMain.js';
import SidebarSub from './Sidebar/SidebarSub.js';
import SidebarSubContent from './Sidebar/SidebarSub/SidebarSubContent.js';
import SidebarMainSectionDefault from './Sidebar/SidebarMain/SidebarMainSection/SidebarMainSectionDefault';
import SidebarMainSectionWithFoldingBtn from './Sidebar/SidebarMain/SidebarMainSection/SidebarMainSectionWithFoldingBtn.js';

customElements.define('btn-element', Button);
customElements.define('footer-element', Footer);
customElements.define('loading-element', Loading);
customElements.define('navbar-element', Navbar);
customElements.define('navbar-mainmenu-element', MainMenu);
customElements.define('navbar-submenu-element', SubMenu);
customElements.define('sidebar-element', Sidebar);
customElements.define('icon-element', Icon);
customElements.define('image-element', Image);
customElements.define('text-input-element', TextInput);
customElements.define('action-element', Action);
customElements.define('login-action-element', LoginAction);
customElements.define('change-address-action-element', ChangeAdressAction);
customElements.define('backdrop-element', Backdrop);
customElements.define('sidebar-back-element', SideBarBack);
customElements.define('sidebar-category-element', SidebarCategory);
customElements.define('sidebar-fold-element', SidebarFold);
customElements.define('sidebar-header-element', SidebarHeader);
customElements.define('sidebar-title-element', SideBarTitle);
customElements.define('sidebar-main-element', SidebarMain);
customElements.define('sidebar-sub-element', SidebarSub);
customElements.define('sidebar-unfold-element', SidebarUnfold);
customElements.define('sidebar-sub-content-element', SidebarSubContent);
customElements.define(
  'sidebar-main-section-default-element',
  SidebarMainSectionDefault
);
customElements.define(
  'sidebar-main-section-with-folding-btn-element',
  SidebarMainSectionWithFoldingBtn
);
