/**
 * @module resume-components
 * @description Imports and defines custom elements for a resume application
 */

import ContactInfo from "./components/contact-info.component.js";
import EducationTable from "./components/education.component.js";
import ExperienceTable from "./components/experience.component.js";
import OtherExperiences from "./components/other-experience.component.js";

/**
 * Define custom elements
 */
customElements.define('contact-info', ContactInfo);
customElements.define('education-table', EducationTable);
customElements.define('experience-table', ExperienceTable);
customElements.define('other-experiences', OtherExperiences);

/**
 * Back to top functionality
 * @type {Element}
 */
const backToTop = document.querySelector(".back-to-top");

/**
 * Event listener for back to top button
 * @param {Event} event - The click event
 */
backToTop.addEventListener("click", (event) => {
  event.preventDefault();

  /**
   * Scroll to top of the page smoothly
   */
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});
