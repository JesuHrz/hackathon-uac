import CheckOut from './Checkout'
import Products from './List'

import { Navbar, Nav, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'

function App () {
  return (
    <div className='app'>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home" className="ml-5">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavLink to="/" className="link mr-5">Home</NavLink>
              <NavLink to="/products" className="link mr-5">Products</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          {/* <Route path="/" component={Home} exact={true}></Route> */}
          <Route path="/products" component={Products}></Route>
          <Route path="/checkout" component={CheckOut}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
