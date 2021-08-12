import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import ProductScreen from './pages/ProductScreen';
import CartScreen from "./pages/CartScreen";
import Photos from './pages/photos';
import About from './pages/about';
import SignIn from './pages/signIn/signin';
import Footer from "./components/Footer/Footer.js";
import Products from './pages/products';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/index' component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/photos' component={Photos} />
          <Route path='/about' component={About} />
          <Route path='/sign-in' component={SignIn} />
          <Route path="/cart" component={CartScreen} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;