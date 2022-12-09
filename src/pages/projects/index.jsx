// Material UI
import { Button } from "@mui/material";

// Animations
import { Fade } from "react-awesome-reveal";

const projects = [
  {
    name: "Guanare Market",
    description:
      "It is an application made with Next, it is an E-commerce where you can see the products that people sell in your city, it has a map and many other functions, for now it is only design, and it is currently under development.",
    links: {
      demo: "https://guanare-market.vercel.app/",
    },
    image: "guanare-market.png",
  },
  {
    name: "Guanare Market Dashboard",
    description:
      "It is an application made with Next, it goes together with the Guanare Market application, in this you can manage the products you sell and the information of your company, for now it is only design, and it is currently under development.",
    links: {
      demo: "https://guanare-market-dashboard.vercel.app/",
    },
    image: "guanare-market-dashboard.png",
  },
  {
    name: "Firebase App",
    description:
      "It is an application made with Next and Firebase, with this app you can sell your products, vote for the one you like and add comments, create your account and you can create your products, it's that easy.",
    links: {
      github: "https://github.com/CarlosBarrios045/firebase-app",
      demo: "https://firebase-app-next.vercel.app/",
    },
    image: "firebase.png",
  },
  {
    name: "Bibliostore",
    description:
      "It is an application which deals with a library made with React, Redux and Firebase. In it you can create, edit and delete subscribers which are the book requesters, as well as create, edit and delete books.",
    login: {
      email: "correo@correo.com",
      password: "123123",
    },
    links: {
      github: "https://github.com/CarlosBarrios045/bibliostore",
      demo: "https://bibliostore-react.netlify.com/",
    },
    image: "bibliostore.PNG",
  },
  {
    name: "Image search engine",
    description: "It's an image browser made with React and the Pixabay API.",
    links: {
      github: "https://github.com/CarlosBarrios045/react-pixabay",
      demo: "https://buscarimg-react.netlify.com/",
    },
    image: "imagenes.png",
  },
  {
    name: "Memory game",
    description: "It is the traditional memory game made with React.",
    links: {
      github: "https://github.com/CarlosBarrios045/memorias-react",
      demo: "https://memorias-react.netlify.com/",
    },
    image: "memorias.png",
  },
  {
    name: "Song Lyrics Finder",
    description:
      "This application helps you find the lyrics of your favorite songs, and also shows you a short biography of the author of the song. It was made with React, consuming the Lyrics API.",
    links: {
      github: "https://github.com/CarlosBarrios045/musica-react",
      demo: "https://trusting-almeida-1e3972.netlify.com/",
    },
    image: "musica.png",
  },
  {
    name: "Cryptocurrency",
    description:
      "It is a Cryptocurrency quote, where you choose the currency of your country (or the one you want), select the cryptocurrency to quote and then you will have your quote. It was made with React Hooks, and the Crypto Compare API.",
    links: {
      github: "https://github.com/CarlosBarrios045/Criptomonedas",
      demo: "https://cripto-react.netlify.com/",
    },
    image: "criptomonedas.png",
  },
];

const Projects = () => {
  return (
    <>
      <Fade duration={3000}>
        <header className="hero2" id="start">
          <div className="header-content">
            <div className="info-profile">
              <h1>My Projects</h1>
              <p className="italic">Looking for a front end developer?</p>
            </div>
          </div>
        </header>
      </Fade>

      <main>
        <div className="projects container">
          <div className="title">
            <h2>Projects</h2>
            <div className="barra" />
          </div>

          <div className="d-flex" style={{ marginTop: "1.5rem" }}>
            {projects.map(({ name, description, login, links, image }, i) => (
              <Fade duration={3000} key={i}>
                <div className="card responsive-flex-column">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage: `url(/images/projects/${image})`,
                    }}
                  />

                  <div className="card-body">
                    <div className="title">
                      <h2>{name}</h2>
                      <div className="barra" />
                    </div>

                    <p>{description}</p>

                    {login && (
                      <div className="login-projects">
                        <p className="bold">Sign in:</p>
                        <p>Email: {login.email}</p>
                        <p>Password: {login.password}</p>
                      </div>
                    )}

                    <nav>
                      {links?.github && (
                        <Button
                          variant="contained"
                          href={links.github}
                          target="_blank"
                        >
                          Github
                        </Button>
                      )}
                      {links?.demo && (
                        <Button
                          variant="contained"
                          href={links.demo}
                          target="_blank"
                        >
                          Demo
                        </Button>
                      )}
                    </nav>
                  </div>
                </div>
              </Fade>
            ))}
            {/* card */}
          </div>
          {/* d-flex */}
        </div>
        {/* projects */}
      </main>
    </>
  );
};

export default Projects;
