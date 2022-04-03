import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './page/Home/Home';
import ReviewPage from './page/Review/ReviewPage';
import Dashboard from './page/Dashboard/Dashboard';
import Blogs from './page/Blogs/Blogs';
import About from './page/About/About';
import NotFound from './page/NotFound/NotFound';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <Header />

      <main className='container mb-5'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/review' element={<ReviewPage />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>

      <Footer />







    </div>
  );
}

export default App;
