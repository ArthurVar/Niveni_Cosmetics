import React from 'react';
import {Link} from "react-router-dom"
import CollectionCard from "./CollectionCard";
import niveni2 from "../../../Assets/Home/Collection/niveni2.jpg";
import niveni4 from "../../../Assets/Home/Collection/niveni4.jpg";
import niveni5 from "../../../Assets/Home/Collection/niveni5.jpg";
import {useTranslation} from "react-i18next";


const Collection = () => {

    const {t} = useTranslation();

    return (
        <section className='collection'>
            <div className="container">
                <h2 className="collection__title">{t("home.collection.title")}</h2>
                <div className="collection__content">
                    <CollectionCard img={niveni2} title={t("home.collection.text1")} priceThrough={<span>$229</span>}/>
                    <CollectionCard img={niveni4} title={t("home.collection.text2")}/>
                    <CollectionCard img={niveni5} title={t("home.collection.text3")} />
                </div>
                <Link to='shop'>
                <button type='button' className="collection__btn">
                   {t("home.collection.btn")}
                </button>
                </Link>
            </div>
        </section>
    );
};

export default Collection;