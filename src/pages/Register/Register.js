import React, {useContext, useRef} from 'react';
import {CustomContext} from "../../Context";
import InputMask from 'react-input-mask';
import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import {useTranslation} from "react-i18next";

const Register = () => {

    const {t} = useTranslation();

    const {registerUser} = useContext(CustomContext);

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        watch,
        
    } = useForm({
            mode: 'onBlur'
        }
    );
    const password = useRef({});
    password.current = watch("password", "");

    return (
        <section className='register'>
            <form className='register__form' onSubmit={handleSubmit(registerUser)}>
                <h2 className='register__title'>{t("register.register")}</h2>
                <p className='register__text'>{t("register.text")}</p>
                <label className='register__label' htmlFor="1">{t("register.email")}</label>
                <input id='1' {...register('email', {
                    required : 'Это поле обязательное *',
                })} className='register__input' type="email" placeholder={t("register.text1")}/>
                <span>{errors?.email?.message}</span>
                <label className='register__label' htmlFor="2">{t("register.login")}</label>
                <input id='2' {...register('login', {
                    required: 'Это поле обязательное *'
                })} className='register__input' type="text" placeholder={t("register.text2")}/>
                <span>{errors?.login?.message}</span>
                <label className='register__label' htmlFor="tel">{t("register.phone")}</label>
                <InputMask mask={`+\\374\\(99)99-99-99`} type='tel'  id='tel' {...register('phone', {
                    required: 'Это поле обязательное *'
                })} className="register__input" placeholder={t("register.text3")}/>
                <span>{errors?.phone?.message}</span>
                <label className='register__label' htmlFor="4">{t("register.password")}</label>
                <input id='4' {...register('password', {
                    required: "You must specify a password",
                    minLength: {
                        value: 5,
                        message: "Password must have at least 5 characters"
                    }
                })} className="register__input" type='password' placeholder={t("register.text4")}/>
                <span>{errors?.password?.message}</span>
                <label className='register__label' htmlFor="5">{t("register.confirmpsd")}</label>
                <input id='5' className="register__input"  type='password' placeholder={t("register.text5")} {...register('confirmPwd', {
                    validate: value =>
                        value === password.current || "The password do not match"
                })}/>
                {errors?.confirmPwd && <p>{errors?.confirmPwd?.message}</p>}
                <button className='register__btn'>{t("register.register1")}</button>
                <p className='register__quest'>{t("register.quest")} <Link className='register__link' to='/login'>{t("register.signin")}</Link> </p>
                <Link to='/' className='home'>{t("register.home")}</Link>

            </form>
        </section>
    );
};

export default Register;