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
  {
    title: "UI Developer III",
    company: "Adobe India Pvt Ltd",
    location: "Bengaluru",
    duration: "Apr 2022 – Dec 2022",
    description: [
      "Developed responsive layouts using Angular 8/9 and AEM, improving accessibility and load speed by 30%",
      "Developed reusable components with BEM methodology for scalable styling resulting in 20% reduction of CSS Code duplication",
      "Supported UI consistency during Adobe’s rebranding rollout",
      "Built Responsive HTML Pages using Flex Box and Grid Layouts, SCSS"
    ]
  },
  {
    title: "Sr Front-End Developer ",
    company: "Brane Enterprise Pvt Ltd",
    location: "Hyderabad",
    duration: "Sep 2019 – Mar 2022",
    description: [
      "Created Reusable Angular components and Rxjs services to streamline data handling, eliminating code duplication and improving developer efficiency by 25 % during the Web Development.",
      "Designed a custom search interface and solution canvas to improve navigation by 15 %.",
      "Worked on various CSS Libraries for developing Modern User Interfaces and Responsive Design.",
      "Introduced Cypress for End - to - End Integration Testing, increasing reliability and reducing bugs.by 40 %.",
      "Worked with WebSockets for implementation of Push Notification’s.",
      "Actively Participated in Debugging and Resolving the Issues caught by Stakeholders.",
      "Used Rxjs and Redux to implement Reactive State Management in our application."

    ]
  },
  {
    title: "Web Developer",
    company: "Omnicare a CVS Health Company",
    location: "Cincinnati, OH",
    duration: "Mar 2018 – Aug 2019",
    description: [
      "Responsible for architecting a pharmacist portal with Angular 4/5 for real-time order tracking, improving order fulfillment efficiency by 30%",
      "Led SSO implementation across multiple apps using OAuth 2.0",
      "Created a reusable custom Node Module encapsulating the SSO authentication flow, enabling cross-team adoption and reducing repetitive development efforts by up to 60%",
      "Utilized PCF for cloud-native deployment and optimized performance using lazy loading, resulting in a 25% reduction in deployment time and improved application responsiveness"


    ]
  },
  {
    title: "Tridion Web Developer",
    company: "Nationwide Insurance",
    location: "Columbus, OH",
    duration: "June 2016 - Dec 2017",
    description: [
      "Delivered a redesigned web experience using SDL Tridion CMS, improving user engagement by 20%.",
      "Automated UI testing with Selenium and improved client-side validations",
      "Optimized performance using CSS sprites and modular JS components which helped in reduction of the Build File by 15%"
    ]
  },
  {
    title: "UI Developer",
    company: "Walmart Labs",
    location: "San Bruno, CA",
    duration: "Dec 2015 – Apr 2016",
    description: [
      "Conducted POC comparing Handlebars vs React, resulting in a 25% improvement in rendering performance and influencing in tech stack decisions.",
      "Implemented responsive interfaces for membership and savings modules, improving customer onboarding by 25%."

    ]
  },
  {
    title: "Analyst",
    company: "Google India Pvt Ltd",
    location: "Hyderabad",
    duration: "Apr 2013 – Nov 2013",
    description: [
      "Contributed to the transformation of portals into Poke Stops for Pokémon Go, ensuring safety and accessibility"

    ]
  }
];

export default experience;
