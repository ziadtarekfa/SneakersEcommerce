import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import MenCollection from './pages/MenCollection';
import WomenCollection from './pages/WomenCollection';
import AllCollections from './pages/AllCollections';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilterBar from './components/FilterBar';

function App() {
  return (
    <Router>
      <div className="App">

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Collections />} />
          <Route path='/products' element={<AllCollections />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/products/men' element={<MenCollection />} />
          <Route path='/products/women' element={<WomenCollection />} />
          <Route path='*' element={<FilterBar />}
          // page not found? 
          />

        </Routes>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
