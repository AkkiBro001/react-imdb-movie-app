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
        <Route path="/react-imdb-movie-app" element={<Home/>}/>
        <Route path="react-imdb-movie-app/movies/:type" element={<Popular/>}/>
        <Route path="react-imdb-movie-app/movies/:type" element={<TopRated/>}/>
        <Route path="react-imdb-movie-app/movies/:type" element={<Upcoming/>}/>
        <Route path="react-imdb-movie-app/movie/:id" element={<MovieDeatils/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
      
    </BrowserRouter>
    </div>
  );
}

export default App;
