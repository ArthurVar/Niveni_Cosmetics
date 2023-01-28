import React from 'react';
import {Link} from 'react-router-dom'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const CollectionCard = ({img, title, priceThrough}) => {
    return (
        <div className="collection__content-card">
            <Link to={`/shop`} className='shop__card-link'>
                <LazyLoadImage
                    alt="soap"
                    src={img}
                    effect='blur'
                    height={"400px"}
                    width={"100%"}
                />
            </Link>
            <p className='collection__content-text'>
                {title}
            </p>
            <div className='collection__content-prices'>
                <span className='collection__content-price collection__content-through'>{priceThrough}</span>
                <span className='collection__content-price'>$129</span>
            </div>
        </div>
    );
};

export default CollectionCard;