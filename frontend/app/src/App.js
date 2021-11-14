import './App.css';
import React from "react";
import { HashRouter, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import  Main  from "./components/Main"



export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Main} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

