import {
  cardComponentStyle,
  css,
  gridComponentStyle,
  html,
  LitElement,
  ScopedElementsMixin,
  IngButton,
  IngForm,
  IngInput,
  spacer12,
} from "ing-web";
import { ajaxApi } from "ing-web/ajax.js";
import {
  descriptionListStyles,
  PortalCardHeader,
  wbStyles,
} from "wb-web-utils";

import { EmployeeDetails } from "./employee-details.js";
import { EmployeeNew } from "./employee-new.js";

export class EmployeeList extends ScopedElementsMixin(LitElement) {
  constructor() {
    super();
    this.callResponse = null;
  }

  static get properties() {
    return {
      callResponse: { type: Array },
      isim: String,
    };
  }
  async connectedCallback() {
    super.connectedCallback();
    console.log("EmployeeList connected");
    this.retriveAllEmployees();
    console.log("Given data", this.isim);
  }

  async retriveAllEmployees() {
    const response = await ajaxApi
      .get("http://localhost:8080/api/v1/employee/")
      .then((response) => {
        this.callResponse = response.data;
        console.log();
      })
      .catch((error) => {
        console.log(error);
      });
  }
  static get scopedElements() {
    return {
      "portal-card-header": PortalCardHeader,
      "ing-form": IngForm,
      "ing-input": IngInput,
      "ing-button": IngButton,
      "employee-details": EmployeeDetails,
      "employee-new": EmployeeNew,
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
          <portal-card-header
            class="no-select"
            .heading="${"Employee Overview"}"
          >
          </portal-card-header>

            <ul>
              ${this.callResponse !== null
                ? this.callResponse.map(
                    (item) =>
                      html`
                        <li id="mean-item">
                          <p><b>Name</b>: ${item.name}</p>
                          <p><b>City</b>: ${item.city}</p>
                          <p><b>Street</b>: ${item.street}</p>
                          <p><b>State</b>: ${item.state}</p>
                          <p><b>Phone</b>: ${item.phone}</p>
                        </li>
                      `
                  )
                : ""}
            </ul>
    `;
  }
}

customElements.define("employee-list", EmployeeList);
