export const gridItems = [
  {
    id: 1,
    title: "",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "cv.png",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 font-bold",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "/progress.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title:
      "Currently enhancing my front-end development expertise with React, Next.js, and Tailwind CSS.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Save my email:",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
];

export const projects = [
  {
    id: 1,
    title: "StartChess",
    des: "Web application which represents multiplayer game. Socket.io for real-time communication between players. Express.js for handling and routing HTTP requests.",
    img: "",
    iconLists: ["nodejs.svg", "js.svg", "html.svg", "css.svg"],
    link: "https://github.com/Vidosava98/StartChess",
  },
  {
    id: 2,
    title: "Weather Forecast",
    des: "Microservice web application that simulates data reading from weather sensors. Processes and analyzes data, performs actions based on the data. Application was made for demonstrating usage of Docker and Swagger.",
    img: "",
    iconLists: [
      "netcore.svg",
      "js.svg",
      "mongodb.svg",
      "docker.svg",
      "swagger.svg",
      "html.svg",
      "css.svg",
    ],
    link: "https://github.com/Vidosava98/Weather-Forecast",
  },
  {
    id: 3,
    title: "Home Party",
    des: "Web application for users who want to organize a party and to see the party of other users.",
    img: "",
    iconLists: [
      "nodejs.svg",
      "express.svg",
      "html.svg",
      "mongodb.svg",
      "js.svg",
      "css.svg",
    ],
    link: "https://github.com/Vidosava98/HomeParty",
  },
  {
    id: 4,
    title: "Graduation topic",
    des: "Technologies for implementation of a real-time Data Warehouse. ",
    img: "",
    iconLists: [
      "netcore.svg",
      "js.svg",
      "html.svg",
      "css.svg",
      "mongodb.svg",
      "docker.svg",
      "swagger.svg",
      "sql.svg",
    ],
    link: "https://github.com/Vidosava98/Diplomski-projekat",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Vida was an absolute pleasure. Her professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Vida's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Vida is the ideal partner.",
    name: "Aleksandar Popovic",
    title: "",
  },
  {
    quote:
      "Working with Vida both at university and work has been a great experience. She’s always helpful, brings great team spirit, and creates a pleasant and motivating atmosphere.",
    name: "Katarina Lukic",
    title: "Software Developer at Diligent Software",
  },
];

export const techGroups = [
  [
    { name: "C#", imgSrc: "Resource/Images/Icons/Table/csharp.svg" },
    {
      name: "JavaScript",
      imgSrc: "Resource/Images/Icons/Table/javascript.svg",
    },
    { name: "Python", imgSrc: "Resource/Images/Icons/Table/python.svg" },
    { name: "C", imgSrc: "Resource/Images/Icons/Table/C.svg" },
    { name: "Java", imgSrc: "Resource/Images/Icons/Table/java.svg" },
  ],
  [
    { name: ".NET", imgSrc: "Resource/Images/Icons/Table/dotnet.svg" },
    { name: "Node.js", imgSrc: "Resource/Images/Icons/Table/nodejs.svg" },
  ],
  [
    { name: "React", imgSrc: "Resource/Images/Icons/Table/react.svg" },
    { name: "HTML", imgSrc: "Resource/Images/Icons/Table/html.svg" },
    { name: "CSS", imgSrc: "Resource/Images/Icons/Table/css3.svg" },
  ],
  [
    { name: "SQL", imgSrc: "Resource/Images/Icons/Table/sql.svg" },
    { name: "MongoDB", imgSrc: "Resource/Images/Icons/Table/mongodb.svg" },
    { name: "TiDB", imgSrc: "Resource/Images/Icons/Table/tidb.svg" },
    {
      name: "Cassandra",
      imgSrc: "Resource/Images/Icons/Table/cassandra.svg",
    },
    { name: "Neo4j", imgSrc: "Resource/Images/Icons/Table/neo4j.svg" },
  ],
  [
    { name: "Docker", imgSrc: "Resource/Images/Icons/Table/docker.svg" },
    { name: "Swagger", imgSrc: "Resource/Images/Icons/Table/swagger.svg" },
    { name: "GitHub", imgSrc: "Resource/Images/Icons/Table/github.svg" },
    {
      name: "Bitbucket",
      imgSrc: "Resource/Images/Icons/Table/bitbucket.svg",
    },
    {
      name: "Mosquitto",
      imgSrc: "Resource/Images/Icons/Table/mosquitto.svg",
    },
    { name: "Kafka", imgSrc: "Resource/Images/Icons/Table/Kafka.svg" },
    { name: "Flink", imgSrc: "Resource/Images/Icons/Table/flink.svg" },
    { name: "Figma", imgSrc: "Resource/Images/Icons/Table/figma.svg" },
  ],
];
