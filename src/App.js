import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Products from "./Components/Products";
import DisplayProduct from "./Components/DisplayProduct"
import NotFound from './Components/NotFound'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="products/*" element={<Products/>}>
        <Route path=":id/:name" element={<DisplayProduct/>}/>
        </Route>
        <Route path="notfound" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
