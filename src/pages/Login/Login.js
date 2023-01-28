import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form";
import {CustomContext} from "../../Context";
import {useTranslation} from "react-i18next";



const Login = () => {

    const {t} = useTranslation();

    const {loginUser} = useContext(CustomContext);


    const {
        register, handleSubmit} = useForm();



    return (
        <section className='login'>
            <form className='login__form' onSubmit={handleSubmit(loginUser)}>
                <h2 className='login__title'>{t("login.signin")}</h2>
                <p className='login__text'>{t("login.text")}</p>
                <label className='login__label' htmlFor="1">{t("login.email")}</label>
                <input id='1' {...register('email')} className='login__input' type="email" placeholder={t("login.logemail")}/>
                <label className='login__label' htmlFor="2">{t("login.password")}</label>
                <input id='2' {...register('password')} className='login__input' type="password" placeholder={t("login.logpswd")}/>
                <button className='login__btn' type='submit'>{t("login.login")}</button>
                <p className='login__quest'>{t("login.question")} <Link className='login__link' to='/register'>{t("login.register")}</Link> </p>
                <Link to='/' className='home'>{t("login.homelink")}</Link>
            </form>
        </section>
    );
};

export default Login;