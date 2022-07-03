import { useState, useEffect } from "react";
//import axios from "axios";
import { Card, Divider, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";

export function Menu() {
  const [add, setAdd] = useState();
  const navigate = useNavigate();

  //  function handleAdd() {
  //    setAdd();
  //    navigate("/cart");
  //  }

  return (
    <>
      <Card>
        <Link to="/" style={{ cursor: "pointer" }}>
          <Button>
            <h3>Home</h3>
          </Button>
        </Link>
        <Divider></Divider>

        <Link to="/cart" style={{ cursor: "pointer" }}>
          <Button style={{ cursor: "pointer" }}>
            <h3>Adicionar ao Carrinho</h3>
          </Button>
        </Link>
      </Card>
    </>
  );
}

// <Button onClick={handleAdd}>Adicione ao Carrinho</Button>
