import { Col, Button, Divider } from "antd";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
     
      <Divider></Divider>
      <div>
        <Col>
          <Link to="/menu" style={{ cursor: "pointer" }}>
            <h2>Cardápio</h2>
          </Link>
          <Link to="/contact" style={{ cursor: "pointer" }}>
            <h2>Contato</h2>
          </Link>
          <Link to="/us" style={{ cursor: "pointer" }}>
            <h2>Sobre Nós</h2>
          </Link>
        </Col>
      </div>
    </>
  );
}

//Row, Col, Divider, Input,
//<nav>
//<Link to="/login" style={{ cursor: "pointer" }}>
//  <h4>Login</h4>
//</Link>
//</nav>