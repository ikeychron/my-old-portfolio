// Material UI
import { Button } from "@mui/material";

// Animations
import { Fade } from "react-awesome-reveal";

const Certificates = () => {
  const certificates = [
    {
      name: "JavaScript Moderno Guía Definitiva Construye +15 Proyectos",
      site: "Udemy",
      teacher: "Juan Pablo De la Torre Valdez",
      image: "javascript.jpg",
      link: "https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/",
    },
    {
      name: "Universidad React ★: De Cero a Master + 5 Cursos de Regalo",
      site: "Udemy",
      teacher: "Gerardo Gallegos",
      image: "u-react.jpg",
      link: "https://www.udemy.com/course/universidad-react-de-cero-a-master/",
    },
    {
      name: "Flutter: Tu guía completa de desarrollo para IOS y Android",
      site: "Udemy",
      teacher: "Fernando Herrera",
      image: "flutter-1.jpg",
      link: "https://www.udemy.com/course/flutter-ios-android-fernando-herrera/",
    },
    {
      name: "Flutter Intermedio: Diseños profesionales y animaciones",
      site: "Udemy",
      teacher: "Fernando Herrera",
      image: "flutter-2.jpg",
      link: "https://www.udemy.com/course/flutter-disenos-y-animaciones/",
    },
    {
      name: "Flutter Avanzado: Lleva tu conocimiento al siguiente nivel",
      site: "Udemy",
      teacher: "Fernando Herrera",
      image: "flutter-3.jpg",
      link: "https://www.udemy.com/course/flutter-avanzado-fernando-herrera/",
    },

    {
      name: "React Native - Crea aplicaciones para Android y iOS c/ React",
      site: "Udemy",
      teacher: "Juan Pablo De la Torre Valdez",
      image: "react-native-1.jpg",
      link: "https://www.udemy.com/course/react-native-crea-aplicaciones-para-android-y-ios-con-react/",
    },
    {
      name: "React Native: Aplicaciones nativas para IOS y Android",
      site: "Udemy",
      teacher: "Fernando Herrera",
      image: "react-native-2.jpg",
      link: "https://www.udemy.com/course/react-native-fh/",
    },
  ];

  return (
    <>
      <Fade duration={3000}>
        <header className="hero3" id="start">
          <div className="header-content">
            <div className="info-profile">
              <h1>My Certificates</h1>
              <p className="italic">Looking for a front end developer?</p>
            </div>
          </div>
        </header>
      </Fade>

      <main>
        <div className="projects container">
          <div className="title">
            <h2>Certificados</h2>
            <div className="barra" />
          </div>

          <div className="d-flex" style={{ marginTop: "1.5rem" }}>
            {certificates.map(({ name, site, teacher, link, image }, i) => (
              <Fade duration={3000} key={i}>
                <div className="card responsive-flex-column">
                  <div
                    className="card-image"
                    style={{
                      backgroundImage: `url(/images/certificates/${image})`,
                    }}
                  />

                  <div className="card-body">
                    <div className="title">
                      <h2>{name}</h2>
                      <div className="barra" />
                    </div>

                    <p>De {site}</p>
                    <p>Profesor: {teacher}</p>

                    <nav>
                      <Button
                        variant="contained"
                        href={`/images/certificates/${image}`}
                        target="_blank"
                      >
                        Ver
                      </Button>
                      <Button variant="contained" href={link} target="_blank">
                        Ir al curso
                      </Button>
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

export default Certificates;
