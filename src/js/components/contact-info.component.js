import { contactInfo } from "../data/contact-info.js";

class ContactInfo extends HTMLElement {
  constructor() {
    super();

    this.info = contactInfo;
  }

  connectedCallback() {
    this.render();
  }

  newLiElement(entry) {
    return `
      <li>
          <span class="label">${entry.label}:</span>
          <span class="value">${entry.value}</span>
      </li>
    `;
  }

  render() {
    this.innerHTML = `
      <ul>
          ${this.info.map((entry) => this.newLiElement(entry)).join("")}
      </ul>
    `;
  }
}

export default ContactInfo;
