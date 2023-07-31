import { useEffect } from 'react';
import './navbar.css'
import { useLocation } from 'react-router-dom';

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname
    useEffect(()=> {
        console.log(currentPath)
    }, [])

    var activeLink = "active"

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Vonchez Inc.</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className={(currentPath === '/') ? "nav-link " + activeLink : "nav-link"} aria-current={(currentPath === '/') ? "page" : undefined} href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={(currentPath === '/products') ? "nav-link " + activeLink : "nav-link"} aria-current={(currentPath === '/products') ? "page" : undefined} href="/products">Products</a>
                        </li>
                        <li className="nav-item">
                            <a className={(currentPath === '/aboutus') ? "nav-link " + activeLink : "nav-link"} aria-current={(currentPath === '/aboutus') ? "page" : undefined} href="/aboutus">About Us</a>
                        </li>
                    </ul>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <a className={(currentPath === '/cart') ? "nav-link " + activeLink : "nav-link"} aria-current={(currentPath === '/aboutus') ? "page" : undefined} href="/cart"><i className="cart-icon fa-solid fa-cart-shopping"></i>| My Cart</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Navbar;