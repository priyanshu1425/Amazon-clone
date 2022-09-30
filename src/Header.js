import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
function Header() {
  return (
    <div className='header'>
        <a href='https://www.amazon.in/'><img className='header_logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" /></a>
        <div className='header_search'>
            <input className='header_searchInput' type="text" placeholder='Search here...'></input>
            <SearchIcon className='header_searchIcon' />
        </div>

        <div className='header_nav'>
            <a href='https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fcart%2Fview.html%3Fref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&'><div className='header_option'>
                <span className='header_optionLineOne'>Hello Guest</span>
                <span className='header_optionLineTwo'>Sign in </span>
            </div></a>

            <a href='https://www.amazon.in/ap/signin?_encoding=UTF8&accountStatusPolicy=P1&openid.assoc_handle=inamazon&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fcss%2Forder-history%3Fie%3DUTF8%26ref_%3Dnav_orders_first&pageId=webcs-yourorder&showRmrMe=1'><div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div></a>

            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
        
            <div className='header_optionBasket'>
            <a href='https://www.amazon.in/gp/cart/view.html?ref_=nav_cart'><ShoppingBasketIcon/></a>
            <span className='header_optionLineTwo header_basketCount'>0</span>
            </div>

        </div>
    </div>
  );
}

export default Header