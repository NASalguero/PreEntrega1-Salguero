import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Cart from "./components/Cart/Cart";
import Front from "./components/Front/Front";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header title="Fallen Angels" subtitle="Perfumes" />

          <Routes>
            <Route path="/" element={<Front />} />
            <Route path="/item/:id" element={<ItemDetailContainer itemId={2}/>}/>
            <Route path="/perfumes/:categoria" element={<ItemListContainer />}/>
            <Route path="/perfumes" element={<ItemListContainer/>} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>

          {/* <div className="MerchCard">
            <ItemListContainer />
          </div> */}

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
