// NavBar Component
import './NavBar.css';
import logo from '../../media/Reddit Logo.svg';
import searchImg from '../../media/search.svg';

export const NavBar = () => {
    return (
        <nav>
            <div id="title">
                <img id="logo-icon" src={logo} alt="Reddit Logo"/>
                <h1>Bluuit</h1>
            </div>
            <div id="search">
                <input type="search" id="search-field" placeholder="Search"></input>
                <img id="search-icon" src={searchImg} alt="Search" />
            </div>
        </nav>
    );
}