import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import Product from './Product';

const Products = () => {
  const match = useRouteMatch();

  return (
    <div>
      <h1>Products</h1>

      <Router>
        <nav>
          <Link to={`${match.url}/1`}>Product 1</Link><br/>
          <Link to={`${match.url}/2`}>Product 2</Link><br/>
          <Link to={`${match.url}/3`}>Product 3</Link><br/>
          <Link to={`${match.url}/4`}>Product 4</Link><br/>
          <Link to={`${match.url}/5`}>Product 5</Link>
        </nav>

        <Switch>
          <Route path={`${match.path}/:id`} component={Product} />
          <Route path={match.path}>
            <p>Choose a product from the list above</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Products;
