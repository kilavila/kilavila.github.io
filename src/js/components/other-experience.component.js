import { otherExperiences } from "../data/other-experiences.js";

class OtherExperiencesList extends HTMLElement {
  constructor() {
    super();

    this.otherExperiences = otherExperiences;
  }

  connectedCallback() {
    this.render();
  }

  newLiElement(entry) {
    const entryArr = entry.split(" - ");
    return `
      <li>
        ${entryArr[0]} -&nbsp;
        <i>${entryArr[1]}</i>
      </li>
    `;
  }

  render() {
    this.innerHTML = `
      <ul>
          ${this.otherExperiences.map((entry) => this.newLiElement(entry)).join("")}
      </ul>
    `;
  }
}

export default OtherExperiencesList;
