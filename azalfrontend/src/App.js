import Header from "./components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

import { useDispatch, useSelector } from "react-redux";
import { productRedux } from "./redux/productsslice/productslice";
import { useEffect, useState } from "react";
import Dashboard from "./dashboard/screens/Dashboard";



const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      const pdata = await fetch(
        "https://ecommerce-git-main-sukumarae5s-projects.vercel.app/products"
      );
      const finalProdData = await pdata.json();
      dispatch(productRedux(finalProdData));
    })();
  }, [dispatch]);

  const user = useSelector((state) => state.users);
  console.log(user);



  return (
    <>
      <Header />
      
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
