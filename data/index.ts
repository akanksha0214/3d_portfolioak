
export const navItems = [
  { name: "About", link: "#about" ,id:"1"},
  { name: "Projects", link: "#projects",id:"2" },
  { name: "Experience", link: "#experience",id:"3" },
  { name: "Contact", link: "#contact",id:"4" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize collaboration with clients, ensuring clear and open communication",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[30vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible and open to working in diverse environments and teams",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionate tech enthusiast dedicated to development",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently learning new tech",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: " Geo-Search Business Locator",
    des: "Developed a Geo-Search Business Locator using ReactJS, Leaflet, and real-time APIs, enabling users to find nearby businesses 20% faster with interactive maps and detailed listings.",
    img: "/businessmate.png",
    iconLists: ["/re.svg", "/bootstrap.png", "/api.png", "/map.png"],
    link: "https://busninessmate.netlify.app/",
  },
  {
    id: 2,
    title: " OpenAI Article Summarizer",
    des: "Built an OpenAI-powered web app that extracts and summarizes website content from links, providing quick and concise insights with AI-driven efficiency.",
    img: "/openai.png",
    iconLists: ["/re.svg", "/bootstrap.png", "/api.png", "/ai.png"], 
    link: "https://articlesummarizerwithai.netlify.app/",
  },
  {
    id: 3,
    title: "Headset website - Musify",
    des: "Designed a sleek and interactive headset website using Framer Motion, featuring smooth animations and an engaging user experience for showcasing premium audio products.",
    img: "/musify.png",
    iconLists: ["/re.svg","/tail.svg", "/fm.svg"], 
    link: "https://musifyyweb.netlify.app/",
  },
  {
    id: 4,
    title: "RealEstate website - Homezz",
    des: "Developed a modern real estate website with seamless property browsing, interactive UI, and dynamic listings for an enhanced user experience..",
    img: "/homezz.png",
    iconLists: ["/re.svg","/tail.svg", "/fm.svg"], 
    link: "https://homezz.netlify.app/",
  },
];

export const moreProject = [
  {
    id:"1",
    title:"Image Collector",
    link:"https://imagecollector.netlify.app/"
  },
  {
    id:"2",
    title:"3D Universe",
    link:"https://www.figma.com/proto/Cx9uZO8bGqzTBG44IbJ73M/3D-universe-prototyping-(Community)?node-id=4-67&t=WAhUTK68bLATUFMf-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2"
  },
  {
    id:"3",
    title:"Quote generator",
    link:"https://randomquotergen.netlify.app/"
  },
]

export const workExperience = [
  {
    id: 1,
    company: "YesBoss.ai",
    title: "Frontend Engineer",
    desc: "Developed responsive components with React.js, boosting the platform's functionality and performance.",
    className: "md:col-span-2",
    thumbnail: "/developer.png",
  },
  {
    id: 2,
    company: "Bharat Heavy Electricals Limited",
    title: "Summer Trainee",
    desc: "Collaborated on a project to design a PHP-based web application with HTML integration, improving front-end and back-end functionality.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/trainee.png",
  },
  {
    id: 3,
    company: "CodeAlpha",
    title: "Web Developer Intern",
    desc: "Led the development of a client web application using JavaScript, from concept to deployment, ensuring seamless functionality.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/webd.png",
  },
  {
    id: 4,
    company: "Paperpedia",
    title: "Content Writer",
    desc: "Worked as a Content Writer Intern, creating engaging and SEO-optimized articles, blogs, and website content to enhance brand presence and audience engagement.",
    className: "md:col-span-2",
    thumbnail: "/writer.png",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link:"https://github.com/akanksha0214"
  },
  {
    id: 2,
    img: "/link.svg",
    link:"https://www.linkedin.com/in/akanksha-kushwaha-5aa38b203/"
  },
];