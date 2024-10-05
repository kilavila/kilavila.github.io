import { education } from "../data/education.js";

/**
 * Custom element representing an education table.
 * @extends HTMLElement
 */
class EducationTable extends HTMLElement {
  /**
   * Creates an instance of EducationTable.
   */
  constructor() {
    super();

    /**
     * @type {Array}
     */
    this.education = education;
  }

  /**
   * Callback invoked when the element is added to the DOM.
   */
  connectedCallback() {
    this.render();
  }

  /**
   * @typedef {Object} EducationEntry
   * @property {string} title - The title of the education.
   * @property {string} description - The description of the education.
   * @property {string} school - The school name.
   * @property {string} year - The year of the education.
   */

  /**
   * Creates a new entry HTML string for the education table.
   * @param {EducationEntry} entry - The education entry object.
   * @returns {string} The HTML string for the education entry.
   */
  newEntry(entry) {
    return `
      <div class="entry">
          <div class="main">
              <h3>${entry.title}</h3>
              <p>${entry.description}</p>
          </div>

          <div class="aside">
              <span class="school">${entry.school}</span>
              <span class="year">${entry.year}</span>
          </div>
      </div>
    `;
  }

  /**
   * Renders the education table.
   */
  render() {
    this.innerHTML = this.education
      .map((entry) => this.newEntry(entry))
      .join("");
  }
}

export default EducationTable;
