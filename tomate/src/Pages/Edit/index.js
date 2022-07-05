import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Divider, Col, Row, Button, Form, Input, Card } from "antd";

export function Edit() {
  const { id } = useParams();
  const [change, setChange] = useState([]);
  const navigate = useNavigate();
  const [finalOrder, setFinalOrder] = useState([]);

  useEffect(() => {
    async function fetchId() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/projeto-tomate-angelo/${id}`
      );
      setChange(response.data);
      setFinalOrder([...response.data.order]);
    }
    fetchId();
  }, [id]);

  return (
    <>
      <Card style={{ width: 300, margin: 100, borderRadius: 50 }}>
        <p>{change.login}</p>
        <Divider></Divider>
        {finalOrder.map((cC) => {
          return (
            <>
              <p>{cC.Sabor}</p>
              <p>{cC.Ingredientes}</p>
              <Button style={{ width: 100, margin: 10, borderRadius: 50 }}>
                Editar
              </Button>
            </>
          );
        })}
      </Card>{" "}
      <Button style={{ width: 120, margin: 10, borderRadius: 50 }}>
        Deletar Pedido
      </Button>
      <Button style={{ width: 120, margin: 10, borderRadius: 50 }}>
        Finalizar Pedido
      </Button>
      <Link to="/">
        <Button style={{ width: 120, margin: 10, borderRadius: 50 }}>
          Home
        </Button>
      </Link>
    </>
  );
}
