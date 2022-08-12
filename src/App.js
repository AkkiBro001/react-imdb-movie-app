import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Home from './pages/Home';
import Popular from './pages/Popular';
import TopRated from './pages/TopRated';
import Upcoming from './pages/Upcoming';
import MovieDeatils from './pages/MovieDetail';
import ErrorPage from './pages/ErrorPage';

function App() {

  

  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movies/:type" element={<Popular/>}/>
        <Route path="movies/:type" element={<TopRated/>}/>
        <Route path="movies/:type" element={<Upcoming/>}/>
        <Route path="movie/:id" element={<MovieDeatils/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
