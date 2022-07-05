import { Card, Row, Col, Divider, Input, Button, FacebookOutlined } from "antd";
import { Link } from "react-router-dom";
export function Contacts() {
  return (
    <>
      <nav>
        <Link
          to={{
            pathname:
              "https://www.facebook.com/Pizza-Tomate-Ironhack-109843898445268",
          }}
          target="_blank"
        >
          {" "}
          <h2>FB</h2>
        </Link>
        <Link
          to={{
            pathname: "https://www.instagram.com/pizzatomateironhack/",
          }}
          target="_blank"
        >
          {" "}
          <h2>IG</h2>
        </Link>
      </nav>
      <Divider>
        <iframe
          title="This is a unique title"
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14629.144246736872!2d-46.68400423022461!3d-23.558167399999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce578158487f69%3A0xea6c731cfdf8b585!2sR.%20Capote%20Valente%2C%20397%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005409-001!5e0!3m2!1spt-BR!2sbr!4v1656888486487!5m2!1spt-BR!2sbr"
          }
          style={{
            allowFullScreen: "",
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
          }}
        ></iframe>
      </Divider>

      <Card>
        <Link to="/" style={{ cursor: "pointer" }}>
          <Button>
            <h3>Home</h3>
          </Button>
        </Link>
      </Card>
    </>
  );
}
