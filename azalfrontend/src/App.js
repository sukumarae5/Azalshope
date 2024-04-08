
import Header from "./components/common/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

import Cart from "./components/cart/Cart";
const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    
      <Cart/>
      
    </>
  );
};

export default App;
