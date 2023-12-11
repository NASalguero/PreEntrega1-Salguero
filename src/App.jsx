import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ItemListContainer from "./components/MerchCard/ItemListContainer";

const imagen1 = "./assets/212vip-black-CH.webp";




class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="Fallen Angels" subtitle="Perfumes" />

        <div className="MerchCard">
          <ItemListContainer nombre="212 VIP Black" diseñador="Carolina Herrera" precio="87000" imagen={imagen1}/>
          <ItemListContainer nombre="Bad Boy Le Parfum" diseñador="Carolina Herrera" precio="79000" imagen="./assets/bad-boy-leparfum.png"/>
          <ItemListContainer nombre="Eros" diseñador="Versace" precio="82000" imagen="./assets/eros-versace.png"/>
          <ItemListContainer nombre="Le Male" diseñador="Jean Paul Gaultier" precio="85000" imagen="./assets/le-male.png"/>
        </div>
      </div>
    );
  }
}

export default App;
