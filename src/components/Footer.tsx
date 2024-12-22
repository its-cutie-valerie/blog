import { FaHeart } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "1rem" }}>
      <p><a
          href="https://github.com/its-cutie-valerie"
          target="_blank"
          rel="noopener noreferrer"
        >
        Made with <FaHeart color="red" /> by Valérie
        </a>
      </p>
      <nav>
        <a href="https://github.com/its-cutie-valerie"           target="_blank"
          rel="noopener noreferrer"style={{ margin: "0 0.5rem" }}>
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
      {/* <a href="https://www.buymeacoffee.com/adorkababe" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png" alt="Buy Me A Coffee" style={{ height: "60px", width: "217px" }} /></a> */}
    </footer>
  );
}

export default Footer;
