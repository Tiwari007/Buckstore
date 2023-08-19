import classes from "./App.module.css"
import Header from "./components/Header"
import Home from "./components/Home"
import { Routes, Route } from 'react-router-dom'
import Product from "./components/Product"
import Cart from "./components/Cart"
import OrderPlaced from "./components/OrderPlaced"

const App = () => {
  return (
    <div className={classes.app}>
      <Header />
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path="/products" element={<Home />} />
        <Route path= "/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orderPlaced" element={<OrderPlaced />} />
        <Route path="*" element={<div>404 Forbidden</div>} />
      </Routes>
    </div>
  )
}

export default App