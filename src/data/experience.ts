export interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  duration?: string;
  description: string[];
}

const experience: ExperienceItem[] = [
  {
    title: "Sr. Software Engineer",
    company: "ACI Worldwide",
    location: "Bengaluru",
    duration: "Feb 2023 – Present",
    description: [
      "Designed and maintained a modular Angular codebase, improving scalability and reducing maintenance overhead by 15%.",
      "Upgraded APSF from Angular 12 to 15, enhancing performance and visual consistency.",
      "Applied lazy loading and AOT compilation to reduce initial load time by 40%.",
      "Achieved 90% sonar code coverage with Karma and Jasmine, reducing bug reports by 15%.",
      "Architected RSA encryption integration, resolving critical security issues by 30%."
    ]
  },
  // Add other roles here...
];

export default experience;
