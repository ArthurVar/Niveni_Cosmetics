import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {BsInstagram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";
import {FaCcVisa} from "react-icons/fa";
import {useTranslation} from "react-i18next";


const Footer = () => {
    
    const {t} = useTranslation();

    return (
        <footer className='footer'>
            <div className="container">
                <nav className="footer__nav">
                    <Link to='/' className='header__title'> Niveni</Link>
                    <ul className='header__list'>
                        <li className='header__item'><NavLink className='header__link'
                                                             to="/">{t("header.link1")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link'
                                                              to="/shop">{t("header.link2")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link'
                                                              to="/brands">{t("header.link3")}</NavLink></li>
                        <li className='header__item'><NavLink className='header__link'
                                                              to="/contact">{t("header.link4")}</NavLink></li>
                    </ul>
                    <div className='footer__contact'>
                        <a className='footer__contact-tel' href='tel: +374 (93) 01-36-37'>+374 (93) 013637</a>
                        <a className='footer__contact-tel' href='#'>arturvardanyan3637@gmail.com</a>
                    </div>
                </nav>
                <div className='footer__content'>
                    <div className='footer__content-right'>
                        <p className='footer__content-defense'dangerouslySetInnerHTML={{__html: t("footer.defense")}}/>
                    </div>
                    <div className='footer__content-left'>
                        <ul className='footer__content-icons'>
                            <li className='footer__content-icon'><BsInstagram/></li>
                            <li className='footer__content-icon'><BsFacebook/></li>
                            <li className='footer__content-icon'><BsTwitter/></li>
                        </ul>
                        <a className='footer__content-pay' href="#"><FaCcVisa/></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;