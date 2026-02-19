import{Link} from 'react-router'
import './checkoutHeader.css'
import martLogoBlack from'../../assets/images/logo-black.png'
import checkoutLockIcon from'../../assets/images/icons/checkout-lock-icon.png'

export function CheckoutPageHeader(){

    return(
                   <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <Link to="/">
            <img className="logo" src={martLogoBlack} />
            <img className="mobile-logo" src={martLogoBlack} />
          </Link>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<Link className="return-to-home-link"
            to="/">3 items</Link>)
        </div>

        <div className="checkout-header-right-section">
          <img src={checkoutLockIcon} />
        </div>
      </div>
    </div>
    );
}