import "./App.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./components/pages/Home";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/products/AddUser";
import UpdateProduct from "./components/products/UpdateProduct";
import Product from "./components/products/Product";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/users/add" element={<AddUser />} />
          <Route exact path="/users/update/:id" element={<UpdateProduct />} />
          <Route exact path="/users/:id" element={<Product />}></Route>
          <Route component={NotFound} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
