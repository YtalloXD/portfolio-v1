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
import Footer from "./components/Footer/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="min-h-full text-gray-200 flex flex-col leading-1.4 max-w-lg">
      <div className="portfolio-card">
        {/* <Header /> */}

        <section className="p-16 w-full font-thin">
          <h1 className="text-4xl text-center">Reginaldo Ytalo</h1>
          <img
            src="Ytalofoto1.png"
            alt=""
            width={300}
            height={300}
            className="rounded-r-full"
          />
          <p>Graduando em Gestão de Tecnologia da Informação.</p>
          <p>
            Desenvolvedor Full-Stack. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Magni dolores explicabo ipsa quis rerum repellat
            odio possimus alias. Nisi repudiandae illum dolorum ut dolore
            deserunt voluptatibus possimus vel, quam nam.
          </p>
        </section>

        <section className="p-16">
          <h1>Tech Stack:</h1>
          <p>React, JavaScript, Node.js, PostgreSQL</p>
        </section>

        <section className="p-16">deez</section>

        <Footer />
      </div>
    </div>
  );
}
