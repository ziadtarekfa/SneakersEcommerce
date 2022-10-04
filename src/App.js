import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Brands from './pages/Brands';
import Contact from './pages/Contact';
import MenCollection from './pages/MenCollection';
import WomenCollection from './pages/WomenCollection';
import AllCollections from './pages/AllCollections';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilterBar from './components/FilterBar';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Checkout from './pages/Checkout';
import ScrollToTop from './entities/ScrollToTop';
import PageNotFound from './components/PageNotFound';
import OrderSuccessful from './pages/OrderSuccessful';

function App() {
  return (

    <Router>
      <div className="App">

        <Header />

        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Brands />} />
          <Route path='/products' element={<AllCollections />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/men' element={<MenCollection />} />
          <Route path='/products/:id' element={<ProductDetails />} />
          <Route path='/products/women' element={<WomenCollection />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/checkout/order-successful' element={<OrderSuccessful />} />

          <Route path='*' element={<PageNotFound />}

          />

        </Routes>

        <Footer />

      </div>

    </Router>

  );
}

export default App;
