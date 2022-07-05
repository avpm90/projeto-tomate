import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Divider, Input, Button, Row, Col } from "antd";
import { Link, useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState({
    login: "",
    senha: "",
    order: [],
  });


 function handleAdd(done) {
    setCart({ ...cart, order: [...cart.order, done] });
  }

  function handleChange(e) {
    setCart({ ...cart, [e.target.name]: e.target.value });
  }

 

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/menu-tomate"
        );
        console.log(response);
        setMenu(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchMenu();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post(
      "https://ironrest.herokuapp.com/projeto-tomate-angelo",
      cart
    );
    navigate("/cart");
  }

  return (
    <>
      <Link to="/" style={{ cursor: "pointer" }}>
        <Button>
          <h3>Home</h3>
        </Button>
      </Link>
      <Divider></Divider>
      {menu
        .sort((a, b) => {
          return a.Sabor - b.Sabor;
        })
        .map((currentMenu) => {
          return (
            <Card
              key={currentMenu._id}
              style={{
                width: 400,
                margin: 10,
                borderRadius: 50,
              }}
            >
              <img
                style={{
                  width: 300,
                  margin: 10,
                  borderRadius: 50,
                  selfAlign: "center",
                }}
                src={currentMenu.src}
                alt={`${currentMenu.Sabor}`}
              />
              <p>
                <h3>Sabor: {currentMenu.Sabor}</h3>
              </p>
              <p>Ingredientes: {currentMenu.Ingredientes}</p>
              <Button
                onClick={() => {
                  handleAdd(currentMenu);
                }}
              >
                Adicionar ao Carrinho
              </Button>
            </Card>
          );
        })}
      <form>
        <Card style={{ width: 400, margin: 10, borderRadius: 50 }}>
          <label>Login</label>
          <Input
            value={menu.login}
            type="text"
            name="login"
            onChange={handleChange}
          />
          <label>Senha</label>
          <Input.Password
            value={menu.senha}
            type="text"
            name="senha"
            onChange={handleChange}
          />
          <Button onClick={handleSubmit}>Ir para o carrinho</Button>
        </Card>
      </form>
      ;
    </>
  );
}

// <Button onClick={handleAdd}>Adicione ao Carrinho</Button>
// <Button onclick={handleAddCart}></Button>
