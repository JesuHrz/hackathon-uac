import CheckOut from './Checkout'
import Products from './List'
import ProductDetail from './ProductDetail'
import OrderSumary from './Order';
import LandingP from './Home/LandingP'

import { Navbar, Nav } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App () {

  return (
    <div className='app'>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" className="ml-5 logo">Growing</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/" className="link mr-5">Home</NavLink>
              <NavLink to="/products" className="link mr-5">Products</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route path="/products" component={Products}></Route>
          <Route path="/checkout" component={CheckOut}></Route>
          <Route path="/productDetail" component={ProductDetail}></Route>
          <Route path="/OrderSumary" component={OrderSumary}></Route>
          <Route path="/" component={LandingP}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
