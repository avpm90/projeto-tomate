import { Card,  Button } from "antd";
import { Link } from "react-router-dom";
export function Home() {
  return (
    <>
      <Card>
        <Link to="/menu">
          <Button>
            <h2>Menu</h2>
          </Button>
        </Link>
        <Link to="/favs">
          <Button>
            <h2>Favorites</h2>
          </Button>
        </Link>
      </Card>
    </>
  );
}


//Row, Col, Divider, Input,