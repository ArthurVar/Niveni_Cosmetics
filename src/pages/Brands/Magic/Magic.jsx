import React from 'react';
import magicImg from "../../../Assets/Brands/niveni-brand2.webp";
import {Link} from "react-router-dom";
import './magic.scss'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {useTranslation} from "react-i18next";


const Magic = () => {

    const {t} = useTranslation();

    return (
        <section className="magic">
            <div className="container">
                <div className="magic__content">

                    <div className="magic__inner">
                        <h3 className="magic__title" dangerouslySetInnerHTML={{__html: t("brands.magic.title")}}/>
                        <p className="magic__text" dangerouslySetInnerHTML={{__html: t("brands.magic.text")}}/>
                    </div>
                        <LazyLoadImage
                            alt='image'
                            src={magicImg}
                            effect='blur'
                            className="magic__inner2"
                        />
                </div>
                <div className="magic__go">
                    <Link to='/shop'><button type="button" className="magic__btn" dangerouslySetInnerHTML={{__html: t("brands.magic.btn")}}/>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Magic;