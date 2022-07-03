import { Card, Row, Col, Divider, Input, Button } from "antd";
import { Link } from "react-router-dom";
import background from "../../components/assets/about.PNG";

export function AboutUs() {
  return (
    <div style={{ backgroungImage: `url(${background})` }}>
      <div>
        <Card>
          <h3 style={{ width: 600 }}>
            Com um novo conceito, a Pizza Tomate surgiu para oferecer a melhor
            experiência para seus clientes com uma ideia divertida, mistura a
            comida favorita da maioria das pessoas com obras de arte. A Tomate
            chegou para revolucionar o segmento de pizzarias, com uma entrega
            ágil e segura, garantimos o sabor inigualável de nossos produtos,
            com um armazenamento adequado durante o transporte para sua pizza
            chegar quentinha e extremamente saborosa, como se você estivesse
            comendo em nossa pizzaria. O nome Tomate faz referência a deliciosa
            pizza Marguerita que antigamente, era considerada o sabor da
            realeza. A primeira pizzaria criada foi em 1830, em Nápoles. Em uma
            visita a cidade, os reis italianos Umberto I e Margherita decidiram
            provar o tão famoso quitute. Para homenagear os visitantes, o
            pizzaiolo preparou o prato utilizando ingredientes apenas com as
            cores da bandeira italiana e a batizou de Margherita, presenteando a
            rainha. Os reis adoraram e hoje a pizza está presente no mundo
            inteiro. Queremos levar não só uma pizza até você e sim, uma obra de
            arte!!
          </h3>
          <Link to="/" style={{ cursor: "pointer" }}>
            <Button>
              <h3>Home</h3>
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
