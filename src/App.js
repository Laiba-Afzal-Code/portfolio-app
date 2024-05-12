import { useContext } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Toggel from "./components/toggel/Toggel";
import { ThemeContext } from "./context";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Intro />
      <Toggel />
      <About />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
