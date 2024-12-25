import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem" }}>
      <p><a
          href="https://github.com/its-cutie-valerie"
          target="_blank"
          rel="noopener noreferrer"
        >
        Made with <FaHeart color="purple" /> by Valérie
        </a>
      </p>
      <nav>
        <a href="https://github.com/its-cutie-valerie" target="_blank"
          rel="noopener noreferrer" style={{ margin: "0 0.5rem" }}>
          Github
        </a>
        <a href="#link2"           target="_blank"
          rel="noopener noreferrer"style={{ margin: "0 0.5rem" }}>
          Portfolio
        </a>
        <a href="#link3"           target="_blank"
          rel="noopener noreferrer"style={{ margin: "0 0.5rem" }}>
          Linkedin
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
