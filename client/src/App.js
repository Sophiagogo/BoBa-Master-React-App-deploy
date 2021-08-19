import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import ProductScreen from './pages/ProductScreen';
import CartScreen from "./pages/CartScreen";
import HomeScreen from "./pages/HomeScreen";
import CreditCardForm from './pages/CreditCardForm';
import Photos from './pages/photos';
import About from './pages/about';
import SignIn from './pages/signIn/signin';
import Footer from "../src/components/Footer/Footer.js";
import Profile from './pages/signIn/profile';
import ResetPassword from './pages/signIn/components/body/auth/ResetPassword';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/index' component={Home} />
          <Route exact path="/allproducts" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/allproducts/cart" component={CartScreen} />
          <Route path="/checkout" component={CreditCardForm} />
          <Route path='/photos' component={Photos} />
          <Route path='/about' component={About} />
          <Route path='/sign-in' component={SignIn} />
          <Route path="/user/reset/:token" component={ResetPassword} exact />
          <Route path="/cart" component={CartScreen} />
          <Route path="/profile" component={Profile} />
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;