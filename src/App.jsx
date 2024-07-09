import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contacts';
import Checkout from './pages/Checkout';
import Collection from './pages/Collection';
import Cart from "./pages/Cart"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;