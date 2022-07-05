import axios from "axios";
import { useState, useEffect } from "react";

export function EditOrder() {
  const [edit, setEdit] = useState([]);

  useEffect(() => {
    async function fecthEdition() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/projeto-tomate-angelo/${id}"
        );
        console.log(response);
        setEdit(response.data)
      } catch (err) {
        console.log(err);
      }
    }
  });

  return <></>;
}
