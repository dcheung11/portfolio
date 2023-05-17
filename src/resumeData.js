import React from "react";
import SpotifyPic from "../src/images/spotify-logo.png";
import ChessPic from "../src/images/chess-com-logo.png";
import TaxiCarpoolPic from "../src/images/taxi-carpool-logo.png";
import MacAiPic from "../src/images/mac-ai-logo.png";
import NotebookPic from "../src/images/notebook-logo.png";
import MagarveyPic from "../src/images/magarvey-logo.png";
import GhanaPic from "../src/images/gmh-logo.png";
import TwitterBotPic from "../src/images/twitter-bot-logo.png";
import Profile from "../src/images/profile.png";
import ImageModal from "./components/ImageModal";

let resumeData = {
  // imagebaseurl: "https://rbhatia46.github.io/",
  name: "Damien Cheung",
  role: "",
  linkedinId: "dcheung11",
  skypeid: "Your skypeid",
  roleDescription:
    "3rd year Software Engineering student @ McMaster University",
  socialLinks: [
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/damiencheung/",
      className: "fa fa-linkedin",
    },
    {
      name: "github",
      url: "http://github.com/dcheung11",
      className: "fa fa-github",
    },
    {
      name: "skype",
      url: "http://twitter.com/DamienCheung02",
      className: "fa fa-twitter",
    },
  ],
  aboutme:
    "I am a 3rd year Software Engineering student at McMaster University with work experience in Fullstack developement and Data engineering. Apart from my studies, I am a huge fan of tech, health, sports, music, and chess!",
  address: "Hamilton, Ontario, Canada",
  website: "https://www.linkedin.com/in/damiencheung/",
  education: [
    {
      UniversityName: "McMaster University",
      specialization: "B.Eng Software Engineering",
      MonthOfPassing: "Sep",
      YearOfPassing: "2020 - Present",
      Achievements: [
        "Project Lead for Mac Artificial Intelligence Society",
        "Software Developer for McMaster Deep Space Analogue Research Expedition",
        "Editor for McMaster Sports Community",
      ],
    },
  ],
  work: [
    {
      CompanyName: "Magarvey Lab",
      specialization: "Fullstack Developer",
      MonthOfLeaving: "",
      YearOfLeaving: "May 2022 - Present",
      Achievements: [
        "Designed and developed fullstack web applications based on laboratory workers requests using React.js and Node.js to increase functionality for wet lab bioassay experimentation observations",
        "Constructed visuals using AntD and ECharts to display the lab’s microbial database (>2000 strains) in order to optimally detect target antimalarial and antitubercular extracts for the Gates Foundation",
        "Revamped an interactive 96-well plate map explorer for laboratory workers to dynamically view and filter through the assay data of >27000 extracts",
        "Created API calls using Python, Flask, SQL, and SQLAlchemy to fetch data from PostgreSQL database to then incorporate in the Natural Product Toolkit website using Redux React and the React Boilerplate following industry and company standards",
      ],
    },
    {
      CompanyName: "McMaster Deep Analogous Research Expedition",
      specialization: "Software Developer",
      MonthOfLeaving: "",
      YearOfLeaving: "Jan 2023 - May 2023",
      Achievements: [
        "Designing a proof-of-concept cave exploration aerial CANARY drone for near future Lunar and Martian lava tube research with European partner team PARSEC",
        "Enabling data collection from CANARY’s sensors and cameras and using Numpy, Pandas, Scipy, Matplotlib, and Scikit to conduct data analysis from lunar lava tube caves",
        "Contributed to D.A.R.E website development and design using React and Figma",
        "Leveraged Jira and Confluence to manage development tasks and documentation to improve Agile development practices and understanding team responsibilities",
        "Managed file sharing, security, and version control using GitHub to facilitate collaborative development and track project progress",
      ],
    },
    {
      CompanyName: "Ghana Medical Help",
      specialization: "Software Developer",
      MonthOfLeaving: "",
      YearOfLeaving: "Jan 2022 - Jan 2023",
      Achievements: [
        "Creating an opensource Medical Equipment Management System for Ghana Medical Help for available hospital use",
        "Building an inventory tracking system for asset management using Node.js, Vue.js, and Bootstrap",
        "Containerized all related JavaScript applications using Docker Compose",
      ],
    },
  ],
  skillsDescription: "Your skills here",
  skills: [
    {
      skillname: "Python",
    },
    {
      skillname: "CSS",
    },
    {
      skillname: "Reactjs",
    },
    {
      skillname: "Python",
    },
  ],

  portfolio: [
    {
      name: "Magarvey Lab NPTK",
      description: "Natural Product Toolkit webapp for Gates Foundation",
      imgurl: MagarveyPic,
      link: "https://magarveylab.ca/nptk",
      githubLink: "https://magarveylab.ca/",
    },
    {
      name: "Spotify Top 99 App",
      description: "Webapp with exclusive Spotify features",
      imgurl: SpotifyPic,
      link: "https://spotify-top-99.web.app/",
      githubLink: "https://github.com/dcheung11/spotify-top-99",
    },
    {
      name: "Ghana Medical Help Management System",
      description: "Open source webapp for accessible Ghana Hospitals",
      imgurl: GhanaPic,
      // link: "https://spotify-top-99.web.app/",
      githubLink: "https://github.com/Reveal-IQ/MEMS",
      // imageModal: <ImageModal />,
    },

    {
      name: "Chess Calculator",
      description: "Data project",
      imgurl: ChessPic,
      // link: "https://spotify-top-99.web.app/",
      githubLink: "https://github.com/dcheung11/chess.com-calculator-python",
    },
    {
      name: "Scoop Me Carpool Android App",
      description: "mobileapp",
      imgurl: TaxiCarpoolPic,
      // link: "https://spotify-top-99.web.app/",
      githubLink: "https://github.com/dcheung11/taxi-carpool-android-app",
    },
    {
      name: "Mac AI Society Bike Share Forecaster",
      description: "Data project",
      imgurl: MacAiPic,
      githubLink:
        "https://github.com/dcheung11/macaisociety-social-bike-forecasting",
      images: [],
    },
    {
      name: "Personal Task Manager",
      description: "Fullstack webapp",
      imgurl: NotebookPic,
      // link: "https://spotify-top-99.web.app/",
      githubLink:
        "https://github.com/dcheung11/personal-task-checklist-backend",
    },

    {
      name: "Excuse Twitter Bot",
      description: "misc",
      imgurl: TwitterBotPic,
      // link: "https://spotify-top-99.web.app/",
      githubLink: "https://github.com/dcheung11/excuse-python-twitter-bot",
    },
  ],
};

export default resumeData;
