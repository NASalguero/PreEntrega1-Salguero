/* eslint-disable react/prop-types */
import { pedirDatos } from "../../helpers/pedirDatos";
import { useEffect, useState } from "react";
import ItemList from "../ItemListContainer/ItemList";
import { useParams } from "react-router-dom";



const ItemListContainer = () => {
   
  const [perfumes, setPerfumes] = useState([]);
  const categoria = useParams().categoria;

  useEffect(() => {
    pedirDatos()
      .then((res) => {
        if (categoria){
          setPerfumes( res.filter((perf) => perf.categoria === categoria ) );
        }else{
          setPerfumes(res);
        }
        
      })

  }, [categoria])
  


  return (
    <div>
      <ItemList className="MerchCard" perfumes={perfumes} />
    </div>
  );
};

export default ItemListContainer;
