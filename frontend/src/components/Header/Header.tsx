// import { ArrowUpIcon } from "lucide-react";
// import { Button } from "../ui/button";
import "./Header.css";

export default function Header() {
  return (
    <nav>
      {/* // < className={`header ${hidden ? "header_hidden" : ""}`}> */}
      <div className="header_left">
        <div className="header_logo">
          <img
            src="./LogoPortfolio.png"
            alt="Logo"
            className="header_logo_img"
          />
        </div>
      </div>

      <div className="header_center">
        <ul className="header_links">
          <li>
            <a href="#home">Início</a>
          </li>
          <li>
            <a href="#servicos">Imagens</a>
          </li>
          <li>
            <a href="#Fale conosco">Fale conosco</a>
          </li>
        </ul>
      </div>

      <div className="header_right">deez</div>
    </nav>
  );
}
