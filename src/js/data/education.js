/**
 * @typedef {Object} EducationItem
 * @property {string} title - The title of the education program.
 * @property {string} description - A description of the education program.
 * @property {string} school - The name of the school where the education was obtained.
 * @property {string} year - The year or range of years when the education took place.
 */

/**
 * Array containing education information.
 * @type {EducationItem[]}
 */
const education = [
  {
    title: "Helse- og oppvekstfag",
    description:
      "Kompetanse i helse- og oppvekstsektoren. Fremmer mestring, utvikling og helse. Utvikle praktiske ferdigheter, evne og vilje til kontinuerlig kvalitetsforbedring.",
    school: "Fyllingsdalen VGS",
    year: "2012 - 2013",
  },
  {
    title: "Kjøretøy",
    description:
      "Feilsøking, reparasjon og vedlikehold av ulike typer kjøretøy. Kompetanse i arbeid på mekaniske, elektriske, elektroniske, pneumatiske og hydrauliske komponenter og systemer på kjøretøy.",
    school: "Årstad VGS",
    year: "2010 - 2011",
  },
  {
    title: "Teknologi- og industrifag",
    description:
      "Praktisk arbeid med ulike materialer, verktøy, teknikker og maskiner. Grunnleggende forståelse av kjemi, materialer, elektro, mekanikk, programmering, robotisering, automatisering og transport.",
    school: "Årstad VGS",
    year: "2009 - 2010",
  },
];

export { education };
