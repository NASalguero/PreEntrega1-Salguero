import React from "react";
import "./App.css";

import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header title="Fallen Angels" subtitle="Perfumes" />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer itemId={2}/>}/>
          </Routes>

          <div className="MerchCard">
            <ItemListContainer />
          </div>

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
