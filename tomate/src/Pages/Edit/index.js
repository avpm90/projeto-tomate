import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Divider, Col, Row, Button, Form, Input, Card } from "antd";

export function Edit() {
  const { id } = useParams();
  const [cart, setCart] = useState({
    order: [{ Sabor: "", Ingredientes: "" }],
  });
  const [orders, setOrders] = useState([]);
  const [edit, setEdit] = useState([]);
  
  const navigate = useNavigate();
  const { TextArea } = Input;
  useEffect(() => {
    async function fetchId() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/projeto-tomate-angelo/${id}`
      );
      setCart(response.data);
      setOrders(response.data.order);
    }
    fetchId();
  }, [id]);

  function handleChange(e, cC) {
    const clone = { ...cC };
    clone.Ingredientes = e.target.value;

    console.log(clone);
  }

  async function deleteOrder() {
    await axios.delete(
      `https://ironrest.herokuapp.com/projeto-tomate-angelo/${id}`
    );
    navigate("/menu");
  }
  async function handleFinal(e) {
    e.preventDefault();
    try {
      await axios.put(
        `https://ironrest.herokuapp.com/projeto-tomate-angelo/${id}`
      );
      navigate("/order");
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Card style={{ width: 300, margin: 100, borderRadius: 50 }}>
        <p>{cart.login}</p>
        <Divider></Divider>
        {orders.map((cC) => {
          return (
            <div key={cC.Sabor}>
              <p>{cC.Sabor}</p>
              <p>{cC.Ingredientes}</p>
              <Form>
                <TextArea
                  name={"Ingredientes"}
                  rows={4}
                  onChange={(e) => {
                    handleChange(e, cC);
                  }}
                />{" "}
                <Button style={{ width: 120, margin: 10, borderRadius: 50 }}>
                  Edit
                </Button>
              </Form>
            </div>
          );
        })}
      </Card>{" "}
      <Button
        onClick={deleteOrder}
        style={{ width: 120, margin: 10, borderRadius: 50 }}
      >
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
