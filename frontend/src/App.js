import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CollectionPage } from './pages/CollectionPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { OrdersPage } from './pages/OrdersPage';
import { RegisterPage } from './pages/RegisterPage';
import { AuthProvider } from './components/AuthProvider';
import { AboutPage } from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path='/collection' element={<CollectionPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/orders' element={<OrdersPage />} />
            <Route path='/about' element={<AboutPage />} />

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
