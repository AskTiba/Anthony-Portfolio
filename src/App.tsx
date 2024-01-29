import "./App.css";
import Expectation from "./components/Expectation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Self from "./components/Self";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Self />
      <Expectation />
      <Location />
      <Footer />
    </>
  );
}

export default App;
