import {
  html,
  LitElement,
  ScopedElementsMixin,
  IngInput,
  property,
} from "ing-web";

import { EmployeeNew } from "./employee-new";

import { EmployeeList } from "./employee-list";

import {
    descriptionListStyles,
    PortalCardHeader,
    wbStyles,
  } from "wb-web-utils";

export class Employee extends ScopedElementsMixin(LitElement) {
  name = "Employee Name";

  static get scopedElements() {
    return {
      "ing-input": IngInput,
      "employee-new": EmployeeNew,
      "employee-list": EmployeeList,
    };
  }

  static get properties() {
    return {
        name: String,
    };
    }

  async connectedCallback() {
    super.connectedCallback();
    console.log("Employee connected", this.name);
    
  }

  render() {
    return html` <div class="card portal-card">
      <div class="card__content">
        <employee-new></employee-new>
        <employee-list .isim="${"Abdullah harput"}" ></employee-list>
      </div>
    </div>`;
  }
}

customElements.define("employee-base", Employee);
