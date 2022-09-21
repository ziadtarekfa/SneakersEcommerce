import './App.css';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import headerImage from './assets/Headers/men-header.jpg';
import BrandCard from './components/BrandCard';
import FilterBar from './components/FilterBar';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      {/* <CategoryCard headerImage={headerImage} category="Men" /> */}

      {/* <FilterBar />
      <Footer /> */}
      {/* <Home /> */}
      <Contact />

    </div>
  );
}

export default App;
