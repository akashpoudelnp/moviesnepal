
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import ShowMovie from './pages/ShowMovie';
import ShowTv from './pages/ShowTv';
import TV from './pages/TV';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/browse/movies' element={<Movies />} />
          <Route path='/browse/tv' element={<TV />} />
          <Route path='/movie/view/:id' element={<ShowMovie />} />
          <Route path='/tv/view/:id' element={<ShowTv />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
