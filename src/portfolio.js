/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Hindy Hong",
  title: "Hi all, I'm Hindy",
  subTitle: emoji(
    "A passionate data scientist with solid skills in programming, machine learning, database, analysis and data visualization skills"
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1CR3Zggfv4_5sPkiY7WD4lPojt5iFZRT5", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/XinHong2021",
  linkedin: "https://www.linkedin.com/in/xinhindyhong/",
  gmail: "hindyhong327@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "PASSION TO LEARN THE CUT-EDGE TECHNOLOGIES IN ARTIFICIAL INTELLIGENCE, MACHINE LEARNING, CLOUD",
  skills: [
    emoji(
      "⚡ Developing and implementing machine learning algorithms and models to solve complex problems"
    ),
    emoji("⚡ Progressive cloud engineering and data engineering"),
    emoji(
      "⚡ Data analysis and visualization to extract insights from large datasets"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "tensorflow",
      svgIconPath: "./assets/images/tensorflow.svg"
    },
    {
      skillName: "keras",
      fontAwesomeClassname: "fab fa-keras"
    },
    {
      skillName: "sklearn",
      fontAwesomeClassname: "fab fa-sklearn"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "wordpress",
      fontAwesomeClassname: "fa-brands fa-wordpress"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "The University of Melbourne",
      logo: require("./assets/images/unimelb.png"),
      subHeader: "Master of Artificial Intelligence in Information Technology",
      duration: "March 2023 - November 2024",
      desc: "", //TODO
      descBullets: [
        "Relative Courses: NLP, CV, Statistical ML, AI Planning, Cluster and Cloud Computing, Java",
        "Research: Investigate whether LLM understands ambiguous emotions",
        "Volunteering: University Endeavor exhibition (event decoration and management)",
        "Activity: Data Science Student Society (DS Cubed); STEM Mentor Program"
      ]
    },
    {
      schoolName: "Monash University",
      logo: require("./assets/images/monash.png"),
      subHeader: "Bachelor of Business Analytics in Commerce",
      duration: "March 2021 - November 2022",
      desc: "Ranked top 10% in the program. ",
      descBullets: ["Awarded price: Highest mark (94) in the Predictive Analytics and Machine Learning course",
        "Relative Courses: Data Analysis, Statistics, Finance, Accounting, Law"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis/Python, SQL", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Tableau/Visualization",
      progressPercentage: "90%"
    },
    {
      Stack: "Databases/SQL",
      progressPercentage:"80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning/Pytorch, TensorFlow, Scikit-learn, LLM APIs, Keras",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Data Scientist",
      company: "Melbourne Data Analytics Platform",
      companylogo: require("./assets/images/unimelb.png"),
      date: "July 2023 – November 2023",
      desc: "",
      descBullets: [
        "Transformed data and constructed a bayes model in Python, significantly contributing to research papers",
        "Implemented interactive data visualization using IPyWidgets and Matplotlib, reducing client time of key metrics by 50%.",
        "Developed critical skills in quickly sourcing and applying innovative ideas across diverse, unfamiliar fields."
      ]
    },
    {
      role: "Data Operation Analyst",
      company: "ByteDance",
      companylogo: require("./assets/images/tiktok.webp"),
      date: "November 2022 – March 2023",
      desc: "International Music Department",
      descBullets: [
        "Analyzed operational performance and aligned data retrieval requirements using Hive SQL with multiple stakeholders simultaneously.",
        "Designed and implemented a real-time dashboard and data portal, allowing team-wide sharing of metrics like lyric coverage rates by popular songs. This innovation reduced data retrieval time by 20%, significantly enhancing cross-functional collaboration.",
        "Documented data retrieval processes and provided annotated SQL code examples, which increased team coordination efficiency and served as a valuable resource for onboarding new team members."
      ]
    },
    {
      role: "Data Analyst",
      company: "NIO",
      companylogo: require("./assets/images/NIO.png"),
      date: "November 2022 – March 2023",
      desc: "User Relationship Department",
      descBullets: [
        "Implemented an automated email-sending mechanism to report daily sales performance, reducing liaising time with stakeholders by 30%.",
        "Drafted and designed seasonal user questionnaires through collaboration with colleagues, analyzed 17,000 responses combining with personal information using Python, and presented actionable feedback to business stakeholders.",
        "Managed data wrangling, heavily using Pandas and Numpy to transfer raw data into key metrics to evaluate new service performance, ensuring accurate and tangible measurements aligned with old service."
      ]
    },    
    {
      role: "Machine Learning Tutor",
      company: "YouNi Education",
      companylogo: require("./assets/images/youni.png"),
      date: "Nov 2023 – Present",
      desc: "",
      descBullets: [
        "Delivered comprehensive ML tutorials using R Language which can be easily understood by non-experience students.",
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "", //TODO
  projects: [
    {
    //  image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae"
    },
    {
    //  image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+61-0466682317",
  email_address: "hindyhong327@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
