import React from "react";
import {Router, Route, IndexRoute, hashHistory } from "react-router";
import Product from "./views/product";
import Blog from "./views/blog";
import Details from "./views/details";
import Home from "./views/home";
import Company from "./views/company"
import App from "./App";


//Router start
export default class RouterComponent extends React.Component {

  render() {
    var books = this.props.bookStore.books;
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="products" component={Product}
                   books={books}/>
            <Route path="products/details/:id" component={Details}
                   books={books}/>
            <Route path="company" component={Company}/>
            <Route path="blog" component={Blog}/>
          </Route>
        </Router>
      </div>
    );
  }
}

//Router end