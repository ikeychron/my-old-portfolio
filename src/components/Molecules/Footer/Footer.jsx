// Icons
import {
  FaFacebookSquare,
  FaTwitter,
  FaTwitch,
  FaGithubSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { IoPhonePortrait } from "react-icons/io5";

// Animations
import { Fade, Bounce } from "react-awesome-reveal";

// Data
const contactInfo = [
  {
    href: "https://www.twitter.com/ikeychron",
    icon: <FaTwitter size={50} />,
  },
  {
    href: "https://api.whatsapp.com/send?phone=584121556808&text=Hola,%20¿qué%20tal%20estás?",
    icon: <FaWhatsappSquare size={50} />,
  },
  {
    href: "mailto:juanbarrios045@gmail.com",
    icon: <FaEnvelope size={46} />,
  },
  {
    href: "https://www.github.com/ikeychron",
    icon: <FaGithubSquare size={50} />,
  },
  {
    href: "https://www.linkedin.com/in/carlosbarrios045",
    icon: <FaLinkedin size={50} />,
  },
  {
    href: "https://www.linkedin.com/in/carlosbarrios045",
    icon: <FaTwitch size={50} />,
  },
];

const Footer = () => (
  <Fade duration={1000}>
    <footer id="contact">
      <div className="container footer responsive-flex-column">
        <nav className="menu-footer">
          <ul>
            {contactInfo.map(({ href, icon }) => (
              <Bounce key={href}>
                <li>
                  <a href={href} target="_blank">
                    {icon}
                  </a>
                </li>
              </Bounce>
            ))}
          </ul>
        </nav>

        <div className="contact">
          <h2>Juan Carlos Barrios Sánchez</h2>
          <h3>
            <FaEnvelope size={22} style={{ marginRight: 6 }} />{" "}
            juanbarrios045@gmail.com
          </h3>
          <h3>
            <IoPhonePortrait size={22} style={{ marginRight: 6 }} /> +58412 -
            1556808
          </h3>
          <h3>
            <FaMapMarkerAlt size={22} style={{ marginRight: 6 }} /> Portuguesa -
            Venezuela
          </h3>
        </div>
      </div>
    </footer>
  </Fade>
);

export default Footer;
