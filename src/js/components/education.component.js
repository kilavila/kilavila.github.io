import { education } from "../data/education.js";

class EducationTable extends HTMLElement {
  constructor() {
    super();

    this.education = education;
  }

  connectedCallback() {
    this.render();
  }

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

  render() {
    this.innerHTML = this.education
      .map((entry) => this.newEntry(entry))
      .join("");
  }
}

export default EducationTable;
