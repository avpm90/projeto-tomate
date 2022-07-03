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
        <Link to="/">
          <Button>
            <h2>Home</h2>
          </Button>
        </Link>
      </Card>
    </>
  );
}

// <Button onClick={handleAdd}>Adicione ao Carrinho</Button>
