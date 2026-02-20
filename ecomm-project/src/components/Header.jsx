import './Header.css'
import {Link} from 'react-router'
import martLogo from'../assets/images/e-logo.png'
import logo from'../assets/images/logo-e.png'
import cartIcon from'../assets/images/icons/cart-icon.png'
import searchIcon from '../assets/images/icons/search-icon.png'

export function Header({cart}) {
    let totalQuantity =0;

    cart.forEach(element => {
        totalQuantity += element.quantity;
    });
    return (
        <div className="header">
            <div className="left-section">
                <Link to="/" className="header-link">
                    <img className="logo"
                        src={martLogo} />
                    <img className="mobile-logo"
                        src={logo} />
                </Link>
            </div>

            <div className="middle-section">
                <input className="search-bar" type="text" placeholder="Search" />

                <button className="search-button">
                    <img className="search-icon" src={searchIcon} />
                </button>
            </div>

            <div className="right-section">
                <Link className="orders-link header-link" to="/orders">

                    <span className="orders-text">Orders</span>
                </Link>

                <Link className="cart-link header-link" to="checkout">
                    <img className="cart-icon" src={cartIcon} />
                    <div className="cart-quantity">{totalQuantity}</div>
                    <div className="cart-text">Cart</div>
                </Link>
            </div>
        </div>
    );
}