import React from 'react';

class ArticleProdcut extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nameProd: '',
            codigoProd: '',
            descProd: '',
            price: '',
            stock: '',
        }
    }

    hola(){
        alert("Hola");
    }

    render() {
        return (
            <article className="article">
                <img src="" alt=""/>
                <p>Nombre del producto</p>
                <p>Código del producto</p>
                <p>Descripción</p>
                <p>Precio</p>
                <p>Stock</p>
                <button onClick={this.hola}>Añadir</button>
            </article>
        )
    }
}

export default ArticleProdcut;