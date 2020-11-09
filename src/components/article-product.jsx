import React from 'react';

class ArticleProduct extends React.Component {
    addHamper() {
        alert("Hola ArticleProduct");
    }
    render() {
        const product = this.props.product;

        return (
            <article className="article-product">
                <img src={product.url} alt=""/>
                <p>{product.nameProduct}</p>
                <p>{product.codeProduct}</p>
                <p>{product.descProduct}</p>
                <p>{product.proce}</p>
                <p>{product.stock}</p>
                <button className="btn-addHamper" onClick={this.addHamper}> Añadir</button>
            </article>
        );
    }
}

export default ArticleProduct;