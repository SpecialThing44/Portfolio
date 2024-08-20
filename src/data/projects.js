export const projects = [
  {
    id: 0,
    title: "Portfolio Website",
    date: "2024",
    description:
      "This site was built using ReactJs and Tailwind CSS. It is a fairly standard static single page application. I tend to not believe in over-engineering things, and I have a lot more interest in UX than UI. Thus I have tried to keep the site as simple as possible, while still being visually appealing. I've learned some things from making this, as this was my first real web project, for example, I will never use JS instead of TS unless I have to.",
    image: `${process.env.PUBLIC_URL}/portfolio.png`,
    tags: ["ReactJs", "Tailwind CSS"],
    codeLink: "https://github.com/",
    projectLink: "example.com",
  },
  {
    id: 1,
    title: "Interactive Research Platform",
    date: "2023",
    description:
      "A third year school project where I worked with an Agile team to make a React/Java web platform that facilitates the realtime interaction of humans and software agents in various decision-based games. I Created an API for website-game interaction, designed the Python game logic and reinforcement learning models, and stored and analyzed the game data using MYSQL.",
    tags: [
      "React Js",
      "Java",
      "Python",
      "Api",
      "Reinforcement Learning",
      "MYSQL",
    ],
  },
  {
    id: 2,
    title: "PetFinder Clone",
    date: "2023",
    description:
      "A third year school project where I worked with an team of 2 developers to create a clone of the PetFinder website using React, Django, and RestAPI. We implemented a user-friendly UI, a search and filter system, and a database system to store and retrieve pet information.",
    tags: ["React Js", "Python", "Django", "RestApi", "Bootstrap"],
  },
  {
    id: 3,
    title: "Java Tamagotchi Game",
    date: "2022",
    description:
      "A second year school project where I collaborated with a team of developers to create a Tamagotchi-style videogame in Java with a Swing UI that strictly followed Clean Architecture, MVC, and SOLID Principles. We implemented a database system allowing for online user interaction and saved games, handled input processing and passthrough, and performed debugging with Junit.",
    tags: ["Java", "Swing", "MVC", "SOLID", "JUnit"],
  },
  {
    id: 4,
    title: "Predictive Model with Web UI",
    date: "2021",
    description:
      "A first year school project where we utilized Python with Pandas and Numpy to aggregate data and create a SKLearn-based predictive model to assess the impact of COVID-19 restrictions on restaurants. We used statistical analysis and visualization to draw conclusions for balancing COVID rates with business success and used DASH to display our results with web UI.",
    tags: ["Python", "SKLearn", "DASH", "Pandas", "Numpy"],
  },
];
