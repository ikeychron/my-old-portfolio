// Material UI
import { Button, CardActionArea } from "@mui/material";

// Animations
import { Fade } from "react-awesome-reveal";

// Lazy Image
import Image from "src/components/Atoms/Image";

import {
  // Front
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiSass,
  SiTailwindcss,
  // Mobile
  SiFlutter,
  // Back
  SiNodedotjs,
  SiGraphql,
  SiFirebase,
  // Test
  SiJest,
} from "react-icons/si";
import { VscDebugConsole } from "react-icons/vsc";
import { IoLaptopOutline } from "react-icons/io5";

// styles
import styles from "src/styles/styles";

const Home = () => {
  const classes = styles();

  const TechnologiesFront = [
    {
      name: "JavaScript",
      Icon: SiJavascript,
    },
    {
      name: "TypeScript",
      Icon: SiTypescript,
    },
    {
      name: "React",
      Icon: SiReact,
    },
    {
      name: "Next",
      Icon: SiNextdotjs,
    },
    {
      name: "Redux",
      Icon: SiRedux,
    },
    {
      name: "SASS",
      Icon: SiSass,
    },
    {
      name: "Tailwind",
      Icon: SiTailwindcss,
    },
  ];

  const TechnologiesFrontMobile = [
    {
      name: "Flutter",
      Icon: SiFlutter,
    },
    {
      name: "React Native",
      Icon: SiReact,
    },
  ];

  const TechnologiesBack = [
    {
      name: "Node with Express",
      Icon: SiNodedotjs,
    },
    {
      name: "GraphQL",
      Icon: SiGraphql,
    },
    {
      name: "Firebase",
      Icon: SiFirebase,
    },
  ];

  const TechnologiesTestings = [
    {
      name: "Jest",
      Icon: SiJest,
    },
    {
      name: "Testing Library",
      Icon: VscDebugConsole,
    },
    {
      name: "Cypress",
      Icon: IoLaptopOutline,
    },
  ];

  const handleTechnologies = ({ Icon, name }, i) => (
    <CardActionArea className="skill responsive-flex-column" key={i}>
      <p>
        <Icon style={{ marginRight: 16 }} size={26} /> {name}
      </p>
    </CardActionArea>
  );

  return (
    <>
      <header className="hero" id="start">
        <div className="header-content">
          <Image
            src="/images/profile.jpg"
            alt="Imagen de perfil"
            className="img"
          />

          <div className="info-profile">
            <h1>Front End Developer</h1>
            <p className="italic">Looking for a front end developer?</p>
          </div>
        </div>
      </header>

      <main>
        <Fade duration={3000}>
          <div className="bio container2">
            <div className="title">
              <h2>Biography</h2>
              <div className="barra"></div>
            </div>
            <div className="description">
              <p>Hey bro, what's up?</p>
              <p>
                My name is Juan, I'm 21 years old and I'm from Venezuela. I'm
                very passionate about web development and technology. I dedicate
                myself completely to everything I do so that it is the best of
                the best, I'm creative, fun and I assure you that you will like
                me very much if you meet me.
              </p>
              <p>
                I'm a Front End Developer with more than three year of work
                experience.
              </p>
              <p>
                I also have Back End knowledge becoming a FullStack Developer.
              </p>
              <p>
                If you are interested in seeing my Curriculum, here I leave it.
              </p>
            </div>
            <Button
              variant="contained"
              href="/pdf/cv.pdf"
              target="_blank"
              className={classes.btn}
            >
              See Currículum
            </Button>
          </div>
        </Fade>

        <div className="skills" id="skills">
          <div className="container2">
            <Fade duration={2000}>
              <div className="title">
                <h2>Skills</h2>
                <div className="barra"></div>
              </div>
              <div className="technologies">
                <div className="skills-container">
                  <div className="primary">
                    <h3>Technologies Front End - Web</h3>

                    <div className="grid-skills responsive-flex-column">
                      {TechnologiesFront.map(handleTechnologies)}
                    </div>
                  </div>

                  <div className="primary">
                    <h3>Technologies Front End - Mobile</h3>

                    <div className="grid-skills responsive-flex-column">
                      {TechnologiesFrontMobile.map(handleTechnologies)}
                    </div>
                  </div>

                  <div className="secondary">
                    <h3>Technologies Back End</h3>

                    <div className="grid-skills responsive-flex-column">
                      {TechnologiesBack.map(handleTechnologies)}
                    </div>
                  </div>

                  <div className="secondary">
                    <h3>Testing</h3>

                    <div className="grid-skills responsive-flex-column">
                      {TechnologiesTestings.map(handleTechnologies)}
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
