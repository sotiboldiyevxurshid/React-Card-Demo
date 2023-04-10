import React, { useState } from "react";
// import Amazon from "./components/amazon";
// import Navbar from "./components/navbar";
// import Cart from "./components/cart";
// import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateData from "./companents/CreateData/CreateData";
import Home from "./companents/Home/Home";
import NavbarRouter from "./companents/Navbar/NavbarRouter";
import EditPage from "./EditPage/EditPage";
import TableList from "./TableList/TableList";

const App = () => {
  // const [show, setShow] = useState(true);
  // const [cart, setCart] = useState([]);

  // const handleClick = (item) => {
  //   if (cart.indexOf(item) !== -1) return;
  //   setCart([...cart, item]);
  // };

  // const handleChange = (item, d) => {
  //   const ind = cart.indexOf(item);
  //   const arr = cart;
  //   arr[ind].amount += d;

  //   if (arr[ind].amount === 0) arr[ind].amount = 1;
  //   setCart([...arr]);
  // };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
   <>
   
   <Router>
  <NavbarRouter/>
    <Routes>
      <Route path="/home" element={<Home/>} />
      <Route path="/create" element={<CreateData/>} />
      <Route path="/table" element={<TableList/>} />
      <Route path="/table/edit/:id" element={<EditPage/>} />

    </Routes>
  </Router>
   </>
  );
};

export default App;
