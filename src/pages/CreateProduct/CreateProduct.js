import React, {useContext} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import axios from "axios";
import {CustomContext} from "../../Context";

const CreateProduct = () => {
    const {getAllCosmetics} = useContext(CustomContext);
    const {t} = useTranslation();
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();


    const createProduct = (data) => {
        axios.post('http://localhost:8080/cosmetics', {
            ...data,
            imge: 'Shop/' + data.imge
        }).then(() => {
            getAllCosmetics();
            navigate('/shop')
        })
    };


    return (
        <section className="create">
            <div className="container">
                <h2 className="create__title">Создать продукт</h2>
                <div className="contactHeader__links">
                    <Link className="contactHeader__link" to='/'>{t("contacts.crumbs.link1")}</Link>
                    -
                    <NavLink className="contactHeader__link" to='/shop'>Магазин</NavLink>
                    -
                    <NavLink className="contactHeader__link" to='/create'>Создание товара</NavLink>
                </div>
                <form className='create__form' onSubmit={handleSubmit(createProduct)}>
                    <div className='create__form-content'>
                        <div className='create__form-block'>
                            <label htmlFor="title">Название</label>
                            <input className='create__form-input' {...register('title')} type="text" id='title'/>
                        </div>
                        <div className='create__form-block'>
                            <label htmlFor="price">Цена</label>
                            <input className='create__form-input' {...register('price')} type="number" id='price'/>
                        </div>
                        <div className='create__form-block'>
                            <label htmlFor="inStock">Количество</label>
                            <input className='create__form-input' {...register('inStock')} type="number" id='inStock'/>
                        </div>
                        <div className='create__form-block'>
                            <label htmlFor="imge">Картинка</label>
                            <input {...register('imge')} type="file" id='imge'/>
                        </div>
                        
                        <div className='create__form-block'>
                            <label htmlFor="category">Категория</label>
                            <select className='create__form-select' {...register('category')} id='category'>
                                <option>crem</option>
                                <option>Shanpoo</option>
                                <option>soap</option>
                                <option>oil</option>
                                <option>mask & scrub</option>
                            </select>
                        </div>
                        <button className='create__form-btn' type='submit'>Создать</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default CreateProduct;