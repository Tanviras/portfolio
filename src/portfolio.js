/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Tanvir Ahmed Sarker",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Tanvir Ahmed Sarker's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Tanvir Ahmed Sarker",
  logo_name: "TanvirAhmedSarker",
  // nickname: "layman_brother",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1gsnV9a86HcrgslqrlVSJq8OlVL_mf-vc/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Tanviras",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/tanvirahmedsarker/",
    fontAwesomeIcon: "fa-linkedin-in", 
    backgroundColor: "#0077B5", 
  },

  {
    name: "Gmail",
    link: "mailto:tanviras625@gmail.com",
    fontAwesomeIcon: "fa-google", 
    backgroundColor: "#D14836", 
  },
  {
    name: "Twitter",
    link: "https://twitter.com/TanvirSar",
    fontAwesomeIcon: "fa-twitter", 
    backgroundColor: "#1DA1F2", 
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/profile.php?id=100009688984369",
    fontAwesomeIcon: "fa-facebook-f", 
    backgroundColor: "#1877F2", 
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/tanvirontu/",
    fontAwesomeIcon: "fa-instagram", 
    backgroundColor: "#E4405F", 
  },
];
const skills = {
  data: [
    {
      title: "Front-End Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Familiar with NodeJS, ExpressJs and MongoDB",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",

      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },



    // {
    //   title: "Data Science & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
    //     "⚡ Experience of working with Computer Vision and NLP projects",
    //     "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },

    //   ],
    // },


    {
      title: "Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch"
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Chittagong University of Engineering and Technology",
      subtitle: "B.Sc in Mechanical Engineering",
      image: "https://i.imgur.com/z4Y3j0G.png",
      alt_name: "CUET",
      duration: "2018 - Present",
      // descriptions: [
      //   "⚡ I have studied basic mechanical engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
      //   "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
      //   "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      // ],
      website_link: "https://www.cuet.ac.bd/",
    },

    {
      title: "Notre Dame College",
      subtitle: "Higher Secondary Certificate",
      image: "https://i.imgur.com/WZhcZLQ.png",
      alt_name: "Notre Dame College",
      duration: "2015-2017",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },

    {
      title: "Cumilla Cantonment High School",
      subtitle: "Secondary School Certificate",
      image: "https://i.imgur.com/Pmh7rMo.png",
      alt_name: "Cumilla Cantonment HIgh School",
      duration: "2007 - 2015",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "http://iiitk.ac.in",
    },
  ],
};

  // competitiveSites

  // experience


  // certifications



// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Front-End Websites and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },

  addressSection: {
    title: "Address",
    subtitle: "North Nayanagar,Vatara,Dhaka-1212,Bangladesh",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Naya+Nagar+Road,+Dhaka+1212/@23.8020702,90.4255579,17z/data=!4m5!3m4!1s0x3755c7b12ff29365:0x2098bf01f39000b!8m2!3d23.8024242!4d90.4271455",
  },

  phoneSection: {
    title: "Phone Number",
    subtitle: "+880 1866195184",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  // competitiveSites,
  // certifications,
  // experience,
  degrees,
  projectsHeader,
  contactPageData,
};
