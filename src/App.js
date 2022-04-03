import Header from './components/Header/Header';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './page/Home/Home';
import Review from './page/Review/Review';
import Dashboard from './page/Dashboard/Dashboard';
import Blogs from './page/Blogs/Blogs';
import About from './page/About/About';
import NotFound from './page/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header />

      <main className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/review' element={<Review />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
      </main>







    </div>
  );
}

export default App;
