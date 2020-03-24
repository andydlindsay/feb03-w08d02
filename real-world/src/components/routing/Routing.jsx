import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Products from './Products';

const Routing = () => {
  return (
    <Router>
      <h1>Routing</h1>

      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/products">Products</Link>
      </nav>

      {/* <Route path="/">
        <h2>Home Page</h2>
      </Route>
      <Route path="/about">About Page</Route>
      <Route path="/products" component={Products} /> */}

      <Switch>
        <Route path="/about">About Page</Route>
        <Route path="/products" component={Products} />
        <Route path="/"><h2>Home Page</h2></Route>
      </Switch>
    </Router>
  );
};

export default Routing;
