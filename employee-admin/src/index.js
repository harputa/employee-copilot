import {
  css,
  html,
  LitElement,
  ScopedElementsMixin,
  gridComponentStyle,
  cardComponentStyle,
  spacer12,
} from "ing-web";

import { EmployeeNew } from "./employee/employee-new";
import { EmployeeList } from "./employee/employee-list";
import { EmployeeDetails } from "./employee/employee-details";

import {
  descriptionListStyles,
  PortalCardHeader,
  wbStyles,
} from "wb-web-utils";

export class Index extends ScopedElementsMixin(LitElement) {
  static get scopedElements() {
    return {
      "portal-card-header": PortalCardHeader,
      "employee-new": EmployeeNew,
      "employee-list": EmployeeList,
      "employee-details": EmployeeDetails,
    };
  }

  static get styles() {
    return css`
      ${wbStyles}
      ${gridComponentStyle}
  ${descriptionListStyles}
  ${cardComponentStyle}

  .input-box-width {
        width: 700px;
      }

      #mean-item {
        padding-bottom: ${spacer12};
      }
    `;
  }

  render() {
    return html`
      <div class="card portal-card">
        <div class="card__content">
          <employee-new></employee-new>
          <employee-list></employee-list>
          <employee-details></employee-details>
        </div>
      </div>
    `;
  }
}

customElements.define("index-base", Index);
