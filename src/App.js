
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import ShowMovie from './pages/ShowMovie';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movie/view/:id' element={<ShowMovie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
