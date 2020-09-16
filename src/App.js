import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Reports from "./components/pages/Reports";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/products" component={Products}/>
          <Route path="/reports" component={Reports}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
