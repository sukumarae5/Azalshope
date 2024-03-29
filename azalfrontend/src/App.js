import React, { useEffect } from "react";
import Header from "./components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

const App = () => {
  useEffect(()=>{
    const data = fetch(process.env.REACT_APP_USERS_API).then(res => res.json()).then(res1 => console.log(res1))
  },[])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
