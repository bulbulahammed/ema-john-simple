import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Products = (props) => {
    console.log(props);
    const { img, name, seller, stock, price } = props.product;
    return (
        <div className="single-product">
            <div>
                <img src={img} alt="Single product image" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>price {price}$</p>
                <br />
                <p><small>Only {stock} left in stock</small></p>
                <button
                    className="main-button"
                    onClick={() => props.handleAddProduct(props.product)}
                >
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart
                </button>
            </div>
        </div>
    );
};

export default Products;