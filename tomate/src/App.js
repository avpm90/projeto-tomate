import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Contacts } from "./Pages/Contacts";
import { AboutUs } from "./Pages/AboutUs";
import { Cart } from "./Pages/Cart";
import { Login } from "./Pages/Login";
import {Home2} from "./Pages/Home2"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/in/:username" element={<Home2 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
