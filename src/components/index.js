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
import LoginActionWithFooter from './Action/LoginActionWithFooter.js';
import ChangeAdressAction from './Action/ChangeAddressAction.js';

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
customElements.define(
  'login-action-with-footer-element',
  LoginActionWithFooter
);
customElements.define('change-address-action-element', ChangeAdressAction);
