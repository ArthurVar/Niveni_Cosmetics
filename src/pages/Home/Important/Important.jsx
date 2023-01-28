import React from 'react';
import ImportantCard from "./ImportantCard";
import Vector1 from "../../../Assets/Home/Important/Vector1.png";
import Vector2 from "../../../Assets/Home/Important/Vector2.png";
import Vector3 from "../../../Assets/Home/Important/Vector3.png";
import {useTranslation} from "react-i18next";

const Important = () => {

    const {t} = useTranslation();

    return (
        <section className='important'>
            <div className="container">
                <h2 className="important__title">{t("home.important.title")}</h2>
                <div className="important__content">
                    <ImportantCard img={Vector1} title={t("home.important.text1")} text={t("home.important.info1")}/>
                    <ImportantCard img={Vector2} title={t("home.important.text2")} text={t("home.important.info2")}/>
                    <ImportantCard img={Vector3} title={t("home.important.text3")} text={t("home.important.info3")}/>
                </div>
            </div>

        </section>
    );
};

export default Important;