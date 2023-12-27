/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./CartWidget.css"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartWidget = () => {
  
  
  return (
    <div className="count">
      <ShoppingCartIcon />
      <h2>{0}</h2>
    </div>
  );
};


export default CartWidget;
