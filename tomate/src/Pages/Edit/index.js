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
  const [loading, setLoading] = useState(true);
  const [content, setContent] = useState(<></>);
  const [updateNow, setUpdateNow] = useState("");
  const navigate = useNavigate();
  const { TextArea } = Input;

  // Updated API call with a syntax that I like
  // Should work just the same as AXIOS
  useEffect(() => {
    var reqOptions = {method: 'GET'}
    fetch(('https://ironrest.herokuapp.com/projeto-tomate-angelo/' + id), reqOptions)
      .then((response) => {return response.json()})
      .then((data) => {
        setCart(data);
        setOrders(data.order);
        setUpdateNow(!updateNow)
        setLoading(false)
      })
  }, [id]);
  
  // Component for each order as a list item <li></li>
  function Order({ id, Sabor, Ingredientes}) {
    return (
        <li key={id}>
          { Sabor }
          { Ingredientes }
        </li> 
    )
  }
  // For each order, generate the order component
  // Return them all inside an unordered list <ul></ul>
  function OrdersList() {
    let localOrders = [] 
    orders.forEach((order) => {
      localOrders.push(<Order key={order._id} id={order._id} Sabor={order.Sabor} Ingredientes={order.Ingredientes} />)
    })
    return (
      <>
        <ul>
          {localOrders}
        </ul>
      </>
    )
  }

  // onChange handler to update order
  function updateOrder(e, localOrders, index) {
    var orderToUpdate = localOrders[index]
    orderToUpdate.Ingredientes = e.target.value
    localOrders[index] = orderToUpdate
    setOrders(localOrders)
  }

  // Sets new content whenever setUpdateNow is called
  useEffect(() => {
    setContent(<OrdersList />)
  }, [updateNow])


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
      <div>
        <Card style={{ width: 300, margin: 100, borderRadius: 50 }}>
          <h3>
            Pedido atual de <span style={{fontWeight: "bold"}}>{cart.login}</span>
          </h3>
          <Divider></Divider>
          {loading ? 'loading' : content}
        </Card>{" "}

        <Card style={{ width: 300, margin: 100, borderRadius: 50 }}>
          <h3>Quer customizar o seu pedido?</h3>
          <Divider></Divider>
          <ul style={{ listStyle: "none" }}>
            {orders.map((order) => {
              return (
                <li key={order._id}>
                  <p>{order.Sabor}</p>
                  <Form>
                    <TextArea
                      name={"Ingredientes"}
                      rows={4}
                      value={order.Ingredientes}
                      onChange={(e) => {
                        updateOrder(e, orders, orders.indexOf(order));
                        setUpdateNow(!updateNow)
                      }}
                    />{" "}
                    <Button style={{ width: 120, margin: 10, borderRadius: 50 }}>
                      Edit
                    </Button>
                  </Form>
                </li>
              );
            })}
          </ul>
        </Card>{" "}
      </div>

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
