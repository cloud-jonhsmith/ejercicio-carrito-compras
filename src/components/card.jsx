import React from 'react';
import AddHamper from './add-hamper';

const Card = (props) => {

    const { product, addProductsHamper } = props;

    return (
        <article className="card">
            <img src={product.url} alt=""/>
            <p>{product.nameProduct}</p>
            <p>{product.codeProduct}</p>
            <p>{product.descProduct}</p>
            <p>{product.price}</p>
            <p>{product.stock}</p>
            <button className="btn-addHamper" onClick={ () => addProductsHamper(product)}>Añadir</button>
        </article>
    )
}

export default Card;