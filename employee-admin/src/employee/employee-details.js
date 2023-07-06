import {
  css,
  html,
  IngButton,
  IngInput,
  LitElement,
  ScopedElementsMixin,
} from "ing-web";
import { PortalFeatComMixin, wbStyles, PortalCardHeader } from "wb-web-utils";

export class EmployeeDetails extends ScopedElementsMixin(
  PortalFeatComMixin(LitElement)
) {
  name = "John";
  surname = "Doe";
  employeeData= new Object();

  async retrieveEmployees() {
    console.log("retrieveEmployees");
    console.log(this.name);
    console.log(this.surname);
  }

  async connectedCallback() {
    super.connectedCallback();
    console.log("EmployeeDetails connected");
// initialize employeeData
    this.employeeData = {
      name: "",
      surname: "",
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
      "portal-card-header": PortalCardHeader,
      "ing-button": IngButton,
      "ing-input": IngInput,
      "ing-card-header": PortalCardHeader,
    };
  }

  render() {
    return html`
      <portal-card-header class="no-select" .heading="${"Deatils Employee"}">
      </portal-card-header>
      <ing-input id="name" label="Name" value="${this.employeeData.name}"></ing-input>
      <ing-input  id="surname" label="Surname" value="${this.employeeData.surname}"></ing-input>
      <ing-input id="phone" label="Phone" value="${this.employeeData.phone}"></ing-input>
      <ing-input id="email" label="Email" value="${this.employeeData.email}"></ing-input>
      <ing-input id="title" label="Title" value="${this.employeeData.title}"></ing-input>
      <ing-input id="dept" label="Dept" value="${this.employeeData.dept}"></ing-input>
      <ing-input id="salary" label="Salary" value="${this.employeeData.salary}"></ing-input>
      <ing-input id="street" label="Street" value="${this.employeeData.street}"></ing-input>
      <ing-input id="city" label="City" value="${this.employeeData.city}"></ing-input>
      <ing-input id="state" label="State" value="${this.employeeData.state}"></ing-input>
      <ing-input id="zip" label="Zip" value="${this.employeeData.zip}"></ing-input>ß
      <ing-button
        id="cancelBtn"
        style="margin-left: 16px"
        outline
        grey
        type="button"
        @click="${() => this.cancelOperation()}"
        >Cancel
      </ing-button>
      <ing-button
        id="updateBtn"
        style="margin-left: 16px"
        type="button"
        @click="${() => this.updateEmpoyee()}"
        >Update</ing-button
      >
    `;
  }
}

customElements.define("employee-details", EmployeeDetails);
