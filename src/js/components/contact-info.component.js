import { contactInfo } from "../data/contact-info.js";

/**
 * ContactInfo class represents a custom HTML element for displaying contact information.
 * It extends HTMLElement to create a custom element that can be used in HTML.
 */
class ContactInfo extends HTMLElement {
  /**
   * Constructor for the ContactInfo class.
   * Initializes the component and sets up the contact information.
   */
  constructor() {
    super();

    /**
     * The contact information imported from an external file
     * @type {Array}
     */
    this.info = contactInfo;
  }

  /**
   * Lifecycle callback that is invoked when the element is added to the document's DOM.
   * It triggers the rendering of the contact information.
   */
  connectedCallback() {
    this.render();
  }

  /**
   * @typedef {Object} ContactEntry
   * @property {string} label - The label for the contact info item.
   * @property {string} value - The value for the contact info item.
   */

  /**
   * Creates a new list item element for a single contact information entry.
   * @param {ContactEntry} entry - An object containing the label and value for a contact info item.
   * @returns {string} A string of HTML representing a list item with label and value spans.
   */
  newLiElement(entry) {
    return `
      <li>
          <span class="label">${entry.label}:</span>
          <span class="value">${entry.value}</span>
      </li>
    `;
  }

  /**
   * Renders the contact information as an unordered list in the component's innerHTML.
   * It maps over the stored contact information, creating list items for each entry.
   */
  render() {
    this.innerHTML = `
      <ul>
          ${this.info.map((entry) => this.newLiElement(entry)).join("")}
      </ul>
    `;
  }
}

export default ContactInfo;
