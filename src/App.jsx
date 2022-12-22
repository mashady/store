import "./App.css";
import Navbar from "./components/navbar";
import Product from "./components/product";
import Swiper from "./components/common/swiper";
import Genre from "./components/genre";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
