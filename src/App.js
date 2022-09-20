import './App.css';
import CategoryCard from './components/CategoryCard';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import headerImage from './assets/Headers/men-header.jpg';

function App() {
  return (
    <div className="App">
      <Header />

      <CategoryCard headerImage={headerImage} category="Men" />
      <Footer />

    </div>
  );
}

export default App;
