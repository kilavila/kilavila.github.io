import { experience } from "../data/experience.js";

/**
 * ExperienceTable class
 * @class
 * @extends HTMLElement
 * @description A custom HTML element that renders a table of experience entries
 */
class ExperienceTable extends HTMLElement {
  /**
   * Constructor for ExperienceTable
   * @constructor
   * @description Calls the super constructor and initializes the experience property
   */
  constructor() {
    super();

    this.experience = experience;
  }

  /**
   * Lifecycle method called when the element is inserted into the DOM
   * @method
   * @description Triggers the render method to display the experience table
   */
  connectedCallback() {
    this.render();
  }

  /**
   * Creates a new tag element
   * @method
   * @param {string} tag - The text content of the tag
   * @returns {string} HTML string for a tag element
   */
  newTag(tag) {
    return `
      <span class="tag">
        ${tag}
      </span>
    `;
  }

  /**
   * Creates a new entry element
   * @method
   * @param {Object} entry - An object containing details of an experience entry
   * @returns {string} HTML string for an experience entry
   */
  newEntry(entry) {
    return `
      <div class="entry">
          <div class="main">
              <h3>${entry.title}</h3>
              <p>${entry.description}</p>
              <div class="tags">
                ${entry.tags.map((tag) => this.newTag(tag)).join("")}
              </div>
          </div>

          <div class="aside">
              <span class="firm">${entry.firm}</span>
              <span class="year">${entry.year}</span>
          </div>
      </div>
    `;
  }

  /**
   * Renders the experience table
   * @method
   * @description Maps over the experience array, creates entry elements, and sets the innerHTML
   */
  render() {
    this.innerHTML = this.experience
      .map((entry) => this.newEntry(entry))
      .join("");
  }
}

export default ExperienceTable;
