import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { FloatingNav } from "./ui/FloatingNav";
export function Hero() {
  return (
    <div className="relative z-10">
      <FloatingNav
        navItems={[
          { name: "About Me", link: "#aboutMeId" },
          { name: "Technologies", link: "#techId" },
          { name: "Projects", link: "#projectsId" },
          { name: "Contact", link: "#footerId" },
          { name: "Resume", link: "Resource/Vidosava Arsic CV.pdf" },
        ]}
      />
      <div id="content-1" className="flex justify-center text-center">
        <div id="aboutMeId">
          <div>
            <img
              id="myPictureId"
              src="Resource/Images/vida.jpg"
              alt="My Photo"
            />
            <TextGenerateEffect
              className="lg:text-6xl md:text-5xl sm:text-4xl"
              words="Hey there, I'm Vida!"
            />
            <TextGenerateEffect
              className="md:tracking-wider mb-6 lg:text-4xl md:text-3xl sm:text-3xl"
              words=" I'm self-driven full stack developer with strong database
              knowledge and a fast-learning mindset — ready to grow with modern
              tech stacks."
            />
            <a href="#projectsId">
              <MagicButton title={"Show my work"} icon={<FaLocationArrow />} />
            </a>
          </div>
          <div id="techId">
            <p>Technologies</p>
            <section>
              <div id="techButtonsId">
                <button>Languages</button>
                <button>BackEnd</button>
                <button>FrontEnd</button>
                <button>Databases</button>
                <button>Other</button>
              </div>
              <div>
                <div>
                  <img src="Resource/Images/Icons/Table/csharp.svg" alt="C#" />
                  <p>C#</p>
                </div>
                <div>
                  <img src="Resource/Images/Icons/Table/C.svg" alt="C" />
                  <p>C</p>
                </div>
                <div>
                  <img src="Resource/Images/Icons/Table/java.svg" alt="java" />
                  <p>Java</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/javascript.svg"
                    alt="javascript"
                  />
                  <p>JavaScript</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/python.svg"
                    alt="python"
                  />
                  <p>Python</p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/dotnet.svg"
                    alt="dotnet"
                  />
                  <p>.NET</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/nodejs.svg"
                    alt="nodejs"
                  />
                  <p>Node.js</p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/react.svg"
                    alt="react"
                  />
                  <p>React</p>
                </div>
                <div>
                  <img src="Resource/Images/Icons/Table/html.svg" alt="html" />
                  <p>HTML</p>
                </div>
                <div>
                  <img src="Resource/Images/Icons/Table/css3.svg" alt="css" />
                  <p>CSS</p>
                </div>
              </div>
              <div>
                <div>
                  <img src="Resource/Images/Icons/Table/sql.svg" alt="sql" />
                  <p>SQL</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/mongodb.svg"
                    alt="mongodb"
                  />
                  <p>MongoDB</p>
                </div>
                <div>
                  <img src="Resource/Images/Icons/Table/tidb.svg" alt="tidb" />
                  <p>TiDB</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/cassandra.svg"
                    alt="cassandra"
                  />
                  <p>Cassandra</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/neo4j.svg"
                    alt="neo4j"
                  />
                  <p>Neo4j</p>
                </div>
              </div>
              <div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/docker.svg"
                    alt="docker"
                  />
                  <p>Docker</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/swagger.svg"
                    alt="swagger"
                  />
                  <p>Swagger</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/github.svg"
                    alt="github"
                  />
                  <p>GitHub</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/bitbucket.svg"
                    alt="bitbucket"
                  />
                  <p>Bitbucket</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/mosquitto.svg"
                    alt="mosquitto"
                  />
                  <p>Mosquitto</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/Kafka.svg"
                    alt="kafka"
                  />
                  <p>Kafka</p>
                </div>
                <div>
                  <img
                    src="Resource/Images/Icons/Table/flink.svg"
                    alt="Flink"
                  />
                  <p>Flink</p>
                </div>
                <div>
                  <img src="Resource/Images/Icons/Table/figma.svg" />
                  <p>Figma</p>
                </div>
              </div>
            </section>
          </div>
          <div id="projectsId">
            <p>Projects</p>
            <section>
              <article>
                <a href="https://github.com/Vidosava98/StartChess">
                  <img src="Resource/Images/Icons/github-white.svg" alt="git" />
                </a>
                <h2>StartChess</h2>
                <p>
                  Web application which represents multiplayer game. Socket.io
                  for real-time communication between players. Express.js for
                  handling and routing HTTP requests
                </p>
                <div>
                  <span>Node.js</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>MongoDB</span>
                </div>
              </article>
              <article>
                <a href="https://github.com/Vidosava98/Servisne">
                  <img src="Resource/Images/Icons/github-white.svg" alt="git" />
                </a>
                <h2>Weather Forecast</h2>
                <p>
                  Microservice web application that simulates data reading from
                  weather sensors. Processes and analyzes data, performs actions
                  based on the data. Application was made for demonstrating
                  usage of Docker and Swagger.
                </p>
                <div>
                  <span>.Net Core</span>
                  <span>JavaScript</span>
                  <span>MongoDB</span>
                  <span>Docker</span>
                  <span>Swagger</span>
                  <span>HTML</span>
                  <span>CSS</span>
                </div>
              </article>
              <article>
                <a href="https://github.com/Vidosava98/HomeParty">
                  <img src="Resource/Images/Icons/github-white.svg" alt="git" />
                </a>
                <h2>Home Party</h2>
                <p>
                  Web application for users who want to organize a party and to
                  see the party of other users. Mongoose for interacting with
                  MongoDB. Express.js for handling and routing HTTP requests.
                </p>
                <div>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>MongoDB</span>
                </div>
              </article>
              <article>
                <a href="https://github.com/Vidosava98/Diplomski-projekat">
                  <img src="Resource/Images/Icons/github-white.svg" alt="git" />
                </a>
                <h2>Graduation topic</h2>
                <p>
                  Technologies for implementation of a real-time Data Warehouse.
                  MySQL serves as the primary data source, while Apache Flink
                  handles real-time data integration from MySQL. The processed
                  data is then streamed into TiDB.
                </p>
                <div>
                  <span>.Net Core</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>
                  <span>MongoDB</span>
                  <span>TiDB</span>
                  <span>Docker</span>
                </div>
              </article>
            </section>
          </div>
        </div>
      </div>
      <div id="content-2"></div>
      <footer id="footerId">
        <div>
          <a href="mailto:arsic.vida@gmail.com">
            <img src="Resource/Images/Icons/email.svg" alt="@" />
          </a>
          <a href="https://www.linkedin.com/in/vidosava-arsić-7019b9228">
            <img src="Resource/Images/Icons/in.svg" alt="LinkedIn" />
          </a>
          <a href="https://github.com/Vidosava98">
            <img src="Resource/Images/Icons/github.svg" alt="Git" />
          </a>
          <a href="https://www.instagram.com/arsic.vida98/">
            <img src="Resource/Images/Icons/insta.svg" alt="Insta" />
          </a>
        </div>
        <p>@2025, Vidosava Arsic.</p>
      </footer>
    </div>
  );
}
