import React, {useContext, useState} from 'react';
import {BsHandbag} from "react-icons/bs";
import {Link, NavLink} from "react-router-dom"
import { CustomContext } from '../../Context';
import {useTranslation} from "react-i18next";
import {FaUser} from 'react-icons/fa'

const Header = () => {

    const [burger, setBurger] = useState(false);

    const {user, logOutUser, cart} = useContext(CustomContext);

    const {t, i18n} = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
    };

    const closeCart = (e) => {
        if (e.target.class === 'overlay') {

        }
    };


    return (
        <div className='header'>
            <div className="container">
                <nav className='header__nav'>
                    <p className='header__logo'>
                        <Link to='/' className='header__title'> NIVENI</Link>
                    </p>
                    <ul onClick={closeCart} className={`header__list ${burger ? 'header__list_active' : ''}`}>
                        <li className='header__item'><NavLink className='header__link' to="/">{t("header.link1")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link' to="/shop">{t("header.link2")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link' to="/brands">{t("header.link3")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link' to="/contact">{t("header.link4")}</NavLink></li>
                        {
                            user.email === 'avardanyan955@gmail.com' ? <li className='header__item'><NavLink className='header__link' to="/cosmetics">Admin Panel</NavLink></li> : ''
                        }
                    </ul>
                    <div className='header__info'>

                        <NavLink className="header__link header__link_basket" to="/basket">
                            <BsHandbag/><span style={{background: cart.length ? '#998E78' : ''}} className='header__link_cart'>{cart.length  || ''}</span>
                        </NavLink>
                        <div className='header__btns'>
                            <button style={{background: i18n.language === 'ru' ? 'lightblue' : ''}} className='header__btn ' onClick={() => changeLanguage('ru')} type='button'>Ru</button>
                            <button style={{background: i18n.language === 'am' ? 'lightblue' : ''}} className='header__btn ' onClick={() => changeLanguage('am')} type='button'>Am</button>
                            <button style={{background: i18n.language === 'en' ? 'lightblue' : ''}} className='header__btn' onClick={() => changeLanguage('en')} type='button'>Eng</button>
                        </div>

                        {
                            user.login.length
                            ? <NavLink className='header__user' to='profile'><FaUser/></NavLink>
                            : ''
                        }

                        {
                            user.login.length
                            ? <Link className='header__out' to='/' onClick={() => logOutUser()} >Выйти</Link>
                            : <Link className='header__login' to='login'>Войти</Link>
                        }

                    </div>
                </nav>

                <div className={`burger ${burger ? 'burger_active' : ''}`} onClick={() => setBurger(!burger)}>
                     <span className='burger__line'></span>
                </div>
            </div>

            <div onClick={() => setBurger(false)} className={`overlay ${burger ? 'overlay_active' : ''}`}></div>

        </div>
    );
};

export default Header;

