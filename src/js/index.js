import ContactInfo from "./components/contact-info.component.js";
import EducationTable from "./components/education.component.js";
import ExperienceTable from "./components/experience.component.js";
import OtherExperiences from "./components/other-experience.component.js";

customElements.define("contact-info", ContactInfo);
customElements.define("education-table", EducationTable);
customElements.define("experience-table", ExperienceTable);
customElements.define("other-experiences", OtherExperiences);

const backToTop = document.querySelector(".back-to-top");
backToTop.addEventListener("click", (event) => {
  event.preventDefault();

  window.scrollTo({ top: 0, behavior: "smooth" });
});
