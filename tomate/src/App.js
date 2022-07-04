import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Contacts } from "./Pages/Contacts";
import { AboutUs } from "./Pages/AboutUs";
import { Cart } from "./Pages/Cart";
// import { Login } from "./Pages/Login";
// import {Home2} from "./Pages/Home2"
import { Order } from "./Pages/Order";
import {Edit} from "./Pages/Edit";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/us" element={<AboutUs />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/edit/:id" element={<Edit />} />


      </Routes>
    </div>
  );
}

export default App;

// <Route path="/in/:username" element={<Home2 />} />
// <Route path="/login" element={<Login />} />
