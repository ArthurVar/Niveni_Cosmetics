import React from 'react';
import ideaImg from "../../../Assets/Brands/niveni-brand.webp"
import './idea.scss'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import {useTranslation} from "react-i18next";


const Idea = () => {

    const {t} = useTranslation();

    return (
        <section className="idea">
            <div className="container">
                <div className="idea__content">
                        <LazyLoadImage
                            alt='image'
                            src={ideaImg}
                            effect='blur'
                            className="idea__inner"
                        />
                    <div className="idea__inner2">
                        <h3 className="idea__title" dangerouslySetInnerHTML={{__html: t("brands.idea.title")}}/>
                        <p className="idea__text" dangerouslySetInnerHTML={{__html: t("brands.idea.text")}}/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Idea;