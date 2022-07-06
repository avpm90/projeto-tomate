import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Menu } from "./Pages/Menu";
import { Contacts } from "./Pages/Contacts";
import { AboutUs } from "./Pages/AboutUs";
import { Cart } from "./Pages/Cart";
import { Order } from "./Pages/Order";
import { Edit } from "./Pages/Edit";
import { Divider, Col, Row, Button, Form, Input, Card } from "antd";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/menu"
          element={
            <Row style={{backgroundColor:"beige", width:"80%", justifyContent: "space-evenly" }}>
              <Menu />
            </Row>
          }
        />
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
