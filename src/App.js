import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className='container-products'>
        <ProductCard />
      </div>
    </div>
  );
}

export default App;
