import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"
import axios from "axios";

export function Order() {
  const [finalized, setFinalized] = useState([]);

/*   useEffect(() => {
    async function fetchOrder() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/projeto-tomate-angelo/${id}`
        );
        console.log(response);
        setFinalized(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchOrder();
  }, []); */
  return <></>;
}
