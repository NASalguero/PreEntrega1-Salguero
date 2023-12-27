/* eslint-disable react/prop-types */
import { pedirDatos } from "../../helpers/pedirDatos";
import { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList";

const ItemListContainer = () => {
   
  const [perfumes, setPerfumes] = useState([])
  console.log(perfumes);

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        setPerfumes(res);
      })

  }, [])
  


  return (
    <div>
      <ItemList perfumes={perfumes} />
    </div>
  );
};

export default ItemListContainer;
