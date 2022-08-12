import { FaImdb } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

const activeStyle = {
    color: 'crimson'
}
const Navbar = () => {
    return (
        <nav>
            <Link to="/" className='logo'><FaImdb /></Link>
            <ul className='menu'>
                <li><NavLink to="/" 
                style={({ isActive }) =>
                    isActive ? activeStyle : null}
                >Home</NavLink></li>
                <li><NavLink to="movies/popular"
                style={({ isActive }) =>
                    isActive ? activeStyle : null}
                >Popular</NavLink></li>
                <li><NavLink to="movies/top_rated"
                style={({ isActive }) =>
                    isActive ? activeStyle : null}
                >Top Rated</NavLink></li>
                <li><NavLink to="movies/upcoming"
                style={({ isActive }) =>
                    isActive ? activeStyle : null}
                >Upcoming</NavLink></li>
            </ul>
        </nav>
    )

}

export default Navbar;