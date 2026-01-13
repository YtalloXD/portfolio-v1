// // import AnimatedListThings from "./components/Aboutme/AnimatedListThings";
// import Header from "./components/Header/Header";
// import "./App.css";

// import Footer from "./components/Footer/Footer";
// import Header from "./components/Header/Header";

// function App() {
//   // const [count, setCount] = useState(0)

//   return (
//     <div className="pt-container">
//       <div className="pt-card">
//         <h1>Portfolio</h1>
//         <Header />
//         {/* <AnimatedListThings /> */}
//       </div>
//     </div>
//   );
// }

// export default App;

// import Header from "./components/Header/Header";
import "./App.css";
import { Github, Linkedin } from "lucide-react";
import Footer from "./components/Footer/Footer";
// import WhatsApp from "./components/WhatsApp/WhatsApp";
import { FaWhatsapp } from "react-icons/fa";

export default function App() {
  // Código para calcular a minha idade e mostrar na tela, sem precisar mudar o código toda hora
  const birthDate = new Date("February 18, 2005");
  const currentDate = new Date();
  let age = currentDate.getFullYear() - birthDate.getFullYear();
  const month = currentDate.getMonth() - birthDate.getMonth();
  const day = currentDate.getDate() - birthDate.getDate();

  if (month < 0 || (month === 0 && day < 0)) {
    age--;
  }

  return (
    <div className="min-h-full text-gray-200 flex flex-col leading-1.4 max-w-lg">
      {/* <Header /> */}
      <div className="portfolio-card">
        <section className="p-16 w-full font-thin">
          <h1 className="text-4xl text-center">Reginaldo Ytalo</h1>
          <img
            src="Ytalofoto1.png"
            alt=""
            width={300}
            height={300}
            className="rounded-full"
          />
          <h1>Sobre mim:</h1>
          <p>
            Possuo {age} anos, e sou um Desenvolvedor Full-Stack apaixonado por
            tecnologia.
          </p>
          <p>Graduando em Gestão de Tecnologia da Informação.</p>
        </section>

        <section className="p-16 font-thin">
          <h1>Tech Stack/Tecnologias:</h1>
          <h2>Front-End:</h2>
          <p>React, TailWindCSS. </p>
          <h2>Back-End:</h2>
          <p>JavaScript, Node.js, PHP, Python, Prisma ORM, JWT.</p>
          <h2>Banco de dados:</h2>
          <p>MySQL, PostgreSQL.</p>
        </section>

        <section className="p-16 font-thin">
          <h1>Contato:</h1>
          <h2 className="items-center mb-4">
            Linkedin:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/reginaldo-ytalo-felix-mota"
            >
              Reginaldo Ytalo Félix Mota
              <Linkedin className="inline-block align-middle ml-12" />
            </a>
          </h2>
          <h2 className="items-center mb-4">
            WhatsApp:{" "}
            <a
              className="whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/5585989260182"
            >
              +55 (85) 98926-0182
              <FaWhatsapp className="inline-block align-middle ml-12" />
              {/* <WhatsApp width={20} height={20} /> */}
            </a>
          </h2>
          <h2 className="items-center mb-4">
            Github:{" "}
            <a
              className="github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/YtalloXD"
            >
              YtalloXD
              <Github className="inline-block align-middle ml-12" />
            </a>
          </h2>
        </section>

        <Footer />
      </div>
    </div>
  );
}
