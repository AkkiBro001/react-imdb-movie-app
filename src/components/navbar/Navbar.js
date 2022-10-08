import { FaImdb } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

const activeStyle = {
    color: 'crimson'
}
const Navbar = () => {
    return (
        <nav>
            <Link to="/react-imdb-movie-app" className='logo'><FaImdb /></Link>
            <ul className='menu'>
                <li><NavLink to="/react-imdb-movie-app" 
                style={({ isActive }) =>
                    isActive ? activeStyle : null}
                >Home</NavLink></li>
                <li><NavLink to="react-imdb-movie-app/movies/popular"
                style={({ isActive }) =>
                    isActive ? activeStyle : null}
                >Popular</NavLink></li>
                <li><NavLink to="react-imdb-movie-app/movies/top_rated"
                style={({ isActive }) =>
                    isActive ? activeStyle : null}
                >Top Rated</NavLink></li>
                <li><NavLink to="/react-imdb-movie-app/movies/upcoming"
                style={({ isActive }) =>
                    isActive ? activeStyle : null}
                >Upcoming</NavLink></li>
            </ul>
        </nav>
    )

}

export default Navbar;