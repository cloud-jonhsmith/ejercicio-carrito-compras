import React from 'react';
import SectionPageHamper from './section-page-hamper';

class Card extends React.Component {
    addHamper() {
        alert('Hola')
    }
    render() {
        const product = this.props.product;

        return (
            <article className="card">
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

export default Card;