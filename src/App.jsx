import Header from "./components/Header";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

const App = () => (

    <body class="home">
      <Header />
      <h1 className="p-40 text-3xl font-bold underline">
        Title
      </h1>
      <Cards />
      <Footer />
    </body>
);

export default App;