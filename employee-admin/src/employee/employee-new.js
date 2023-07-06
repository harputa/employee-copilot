import {
  cardComponentStyle,
  css,
  gridComponentStyle,
  html,
  LitElement,
  ScopedElementsMixin,
  IngInput,
  IngButton,
  spacer12,
} from "ing-web";

import { ajaxApi } from "ing-web/ajax.js";

import {
  descriptionListStyles,
  PortalCardHeader,
  wbStyles,
} from "wb-web-utils";

export class EmployeeNew extends ScopedElementsMixin(LitElement) {
  newEmployee = false;
  constructor() {
    super();
    this.requestData = null;
  }

  static get properties() {
    return {
      requestData: { type: Object },
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    console.log("EmployeeNew connected");
    this.requestData = {
      name: "",
      phone: "",
      email: "",
      title: "",
      dept: "",
      salary: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    };
  }

  static get scopedElements() {
    return {
      "ing-input": IngInput,
      "ing-button": IngButton,
      "portal-card-header": PortalCardHeader,
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

  async saveEmpoyeeData() {
    const config = {
      headers: {
        "X-ING-AccessToken": this.accessToken,
      },
    };

    var resData = {
      name: this.shadowRoot.getElementById("name").value,
      phone: this.shadowRoot.getElementById("phone").value,
      //   email: this.shadowRoot.getElementById("email").value,
      //   title: this.shadowRoot.getElementById("title").value,
      //   dept: this.shadowRoot.getElementById("dept").value,
      //   salary: this.shadowRoot.getElementById("salary").value,
      street: this.shadowRoot.getElementById("street").value,
      city: this.shadowRoot.getElementById("city").value,
      state: this.shadowRoot.getElementById("state").value,
      zip: this.shadowRoot.getElementById("zip").value,
    };

    console.log("Request Data :", resData);

    await ajaxApi
      .post("http://localhost:8080/api/v1/employee/employee", resData, null)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return html`
      <portal-card-header class="no-select" .heading="${"New Employee"}">
      </portal-card-header>
      <ing-form>
        <form>
          <ing-input id="name" label="Name" value=""></ing-input>
          <ing-input
            id="street"
            label="Street"
            value="${this.requestData.street}"
          ></ing-input>
          <ing-input
            id="city"
            label="City"
            value="${this.requestData.city}"
          ></ing-input>
          <ing-input
            id="state"
            label="State"
            value="${this.requestData.state}"
          ></ing-input>
          <ing-input
            id="zip"
            label="Zip"
            value="${this.requestData.zip}"
          ></ing-input>
          <ing-input
            id="phone"
            label="Phone"
            value="${this.requestData.phone}"
          ></ing-input>
          <ing-button
            id="cancelBtn"
            type="button"
            style="margin-left: 16px"
            outline
            grey
            @click="${() => this.cancel()}"
            >Cancel</ing-button
          >
          <ing-button
            id="saveBtn"
            style="margin-left: 16px"
            type="button"
            @click="${() => this.saveEmpoyeeData()}"
            >Save
          </ing-button>
        </form>
      </ing-form>
    `;
  }
}

customElements.define("employee-new", EmployeeNew);
