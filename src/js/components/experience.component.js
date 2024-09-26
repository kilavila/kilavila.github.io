import { experience } from "../data/experience.js";

class ExperienceTable extends HTMLElement {
  constructor() {
    super();

    this.experience = experience;
  }

  connectedCallback() {
    this.render();
  }

  newTag(tag) {
    return `
      <span class="tag">
        ${tag}
      </span>
    `;
  }

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

  render() {
    this.innerHTML = this.experience
      .map((entry) => this.newEntry(entry))
      .join("");
  }
}

export default ExperienceTable;
