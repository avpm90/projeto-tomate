import { Card, Row, Col, Divider, Input, Button } from "antd";
import { Link } from "react-router-dom";
export function Favorites() {
  return (
    <>
      <Card>
        <Link to="/">
          <Button>
            <h2>Home</h2>
          </Button>
        </Link>
      </Card>
    </>
  );
}
