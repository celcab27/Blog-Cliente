import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NavbarComponent from "./components/navbar";
import CardsHomeComponent from "./components/cardsHome";
import DetalleComponent from "./components/detalle";
import NuevoPostComponent from "./components/nuevoPost";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/:id">
¿            <NavbarComponent></NavbarComponent>
            <DetalleComponent></DetalleComponent>
        </Route>
        <Route path="/" exact>
            <NavbarComponent></NavbarComponent>
            <NuevoPostComponent></NuevoPostComponent>
            <CardsHomeComponent></CardsHomeComponent>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
