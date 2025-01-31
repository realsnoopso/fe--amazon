import Action from '../Action.js';
import changeAddressActionStyle from './changeAddressActionStyle.js';

class ChangeAdressAction extends Action {
  constructor(id) {
    super();

    const shadow = this.shadowRoot;
    shadow.innerHTML = `
      <action-element id="${id}" mainBtn="주소 변경" subBtn="계속" pointerPosition="left">
        <span slot="text">KR으로 배송할 품목을 표시하겠습니다. 다른 국가로 배송되는 품목을 보려면 배송 주소를 변경하십시오.</span>
      </action-element>
    `;

    this.shadowRoot.append(changeAddressActionStyle.call(this));
  }
}

export default ChangeAdressAction;
