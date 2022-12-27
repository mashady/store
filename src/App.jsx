import "./App.css";
import Navbar from "./components/navbar";
import Product from "./components/product";
import Swiper from "./components/common/swiper";
import Genre from "./components/genre";
import Home from "./components/home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
