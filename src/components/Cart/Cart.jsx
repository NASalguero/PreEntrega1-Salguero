import "./Cart.css"
import emptyCart from "../../assets/carrito-vacio.png"

const Cart = () => {
  return (
    <div className="mainCart">
        <h3>Bienvenido a tu carrito</h3>
        <img className="imgCart" src={emptyCart} alt="carrito vacío" />

    </div>
  )
}

export default Cart