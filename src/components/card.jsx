import React from 'react';

const Card = (props) => {

    const { product, addProductsHamper } = props;

    return (
        <article className="card">
            <img src={product.url} alt=""/>
            <p>{product.nameProduct}</p>
            <p>{product.descProduct}</p>
            <br/>
            <p><b>Código:</b> {product.codeProduct}</p>
            <p> <b>Stock:</b> {product.stock}</p>
            <br/>
            <p>{product.price}</p>
            <br/>
            <button className="btn-addHamper" onClick={ () => addProductsHamper(product)}>Añadir</button>
        </article>
    )
}

export default Card;