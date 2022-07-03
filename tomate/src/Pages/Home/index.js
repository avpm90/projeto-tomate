import { Card, Button } from "antd";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <Card>
        <Link to="/menu">
          <Button>
            <h2>Cardápio</h2>
          </Button>
        </Link>
        <Link to="/contacts">
          <Button>
            <h2>Contato</h2>
          </Button>
        </Link>
        <Link to="/us">
          <Button>
            <h2>Sobre Nós</h2>
          </Button>
        </Link>
      </Card>
    </>
  );
}

//Row, Col, Divider, Input,
