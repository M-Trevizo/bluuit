// NavBar Component
import './NavBar.css';
import logo from '../../media/RedditLogo.svg';
import searchImg from '../../media/search.svg';

export const NavBar = () => {
    return (
        <nav>
            <img id="logo" src={logo} alt="Reddit Logo"/>
            <h1>Bluuit</h1>
            <input type="search" id="search-field" placeholder="Search"></input>
            <img id="search" src={searchImg} alt="Search" />
        </nav>
    );
}