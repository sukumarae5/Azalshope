import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../src/redux/index";
import Homescreen from "./screens/Homescreen";
import Productscreen from "./screens/Productscreen";
import Cartscreen from "./screens/Cartscreen";
import Checkoutscreen from "./screens/Checkoutscreen";
import Orderhistoryscreen from "./screens/Orderhistoryscreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./dashboard/screens/Dashboard";
import Dashdata from "./dashboard/components/Dashdata";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Homescreen />} />
            <Route path="/productscreen" element={<Productscreen />} />
            <Route path="/cartscreen" element={<Cartscreen />} />
            <Route path="/checkoutscreen" element={<Checkoutscreen />} />
            <Route path="/orderhistoryscreen" element={<Orderhistoryscreen />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="dashdata" element={<Dashdata />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);  

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
