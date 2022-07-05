import { Card, Divider, Input, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function Cart() {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/projeto-tomate-angelo"
        );
        console.log(response);
        setOrder(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchOrder();
  }, []);

  return (
    <div>
      <h1>Carrinho</h1>
      <Divider></Divider>
      {order.map((currentOrder) => {
        return (
          <>
            <Card style={{ width: 300, margin: 100, borderRadius: 50 }}>
              <p>
                <h2>{currentOrder.login}</h2>
              </p>
              {currentOrder.order.map((cE) => {
                return (
                  <>
                    <p>{cE.Sabor}</p>
                  </>
                );
              })}
              <Link to={`/edit/${currentOrder._id}`}>Edit</Link>
            </Card>
          </>
        );
      })}

      <Divider></Divider>
      <Button style={{ cursor: "pointer" }}>Finalize seu pedido</Button>
    </div>
  );
}
