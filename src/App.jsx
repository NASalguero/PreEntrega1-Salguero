import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ItemListContainer from "./components/MerchCard/ItemListContainer";
import Footer from "./components/Footer/Footer";

const imagen1 = "./assets/212vip-black-CH.webp";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="Fallen Angels" subtitle="Perfumes" />

        <div className="MerchCard">
          <ItemListContainer
            nombre="212 VIP Black"
            diseñador="Carolina Herrera"
            precio="$87000"
            imagen={imagen1}
          />
          <ItemListContainer
            nombre="Bad Boy Le Parfum"
            diseñador="Carolina Herrera"
            precio="$79000"
            imagen="./assets/bad-boy-leparfum.png"
          />
          <ItemListContainer
            nombre="Eros"
            diseñador="Versace"
            precio="$82000"
            imagen="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffourthsense.co%2Fversace-eros-edt-review%2F&psig=AOvVaw1FMrKpQnfiibbZXbUL8y16&ust=1702354924745000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIjE_LbEhoMDFQAAAAAdAAAAABAD"
          />
          <ItemListContainer
            nombre="Le Male"
            diseñador="Jean Paul Gaultier"
            precio="$85000"
            imagen="./assets/le-male.png"
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default App;
