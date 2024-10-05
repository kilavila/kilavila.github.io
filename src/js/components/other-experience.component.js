import { otherExperiences } from "../data/other-experiences.js";

/**
 * Custom element representing a list of other experiences.
 * @extends HTMLElement
 */
class OtherExperiencesList extends HTMLElement {
  /**
   * Creates an instance of OtherExperiencesList.
   */
  constructor() {
    super();

    /**
     * Array of other experiences.
     * @type {string[]}
     */
    this.otherExperiences = otherExperiences;
  }

  /**
   * Lifecycle callback when the element is added to the DOM.
   */
  connectedCallback() {
    this.render();
  }

  /**
   * Creates a new list item element for an experience entry.
   * @param {string} entry - The experience entry string.
   * @returns {string} The HTML string for the list item.
   */
  newLiElement(entry) {
    const entryArr = entry.split(" - ");
    return `
      <li>
        ${entryArr[0]} -&nbsp;
        <i>${entryArr[1]}</i>
      </li>
    `;
  }

  /**
   * Renders the list of other experiences.
   */
  render() {
    this.innerHTML = `
      <ul>
          ${this.otherExperiences.map((entry) => this.newLiElement(entry)).join("")}
      </ul>
    `;
  }
}

export default OtherExperiencesList;
