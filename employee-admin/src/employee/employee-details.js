import { css, html, IngButton, LitElement, ScopedElementsMixin } from "ing-web";
import { PortalFeatComMixin, wbStyles } from "wb-web-utils";


class EmployeeDetails extends ScopedElementsMixin(
  PortalFeatComMixin(LitElement)
) {

    async retrieveEmployees() {
        console.log("retrieveEmployees");
    }

  async connectedCallback() {
    super.connectedCallback();
    console.log("EmployeeDetails connected");
  }

  render() {
    return html`
    <ing-button
    id="cancelBtn"
    style="margin-left: 16px"
    outline
    grey
    type="button"
    @click="${() => this.retrieveEmployees()}"
    >Action
  </ing-button>
    `;
  }
}

customElements.define("employee-details", EmployeeDetails);
