import React from 'react';

class SectionPageHamper extends React.Component {
    render() {
        const { productsArray, minusCount, plusCount, deleteProductHamper } = this.props;
        return (
            <>
                <div id="section-page-hamper" className="section-page-hamper">
                    {productsArray.length > 0 &&
                        <>
                        <h2>CARRITO DE COMPRAS</h2>
                        <ul className='menu-hamper'>
                            <li className='item-hamper-menu bolt-letter'>Código</li>
                            <li className='item-hamper-menu bolt-letter'>Producto</li>
                            <li className='item-hamper-menu bolt-letter'>Cantidad</li>
                            <li className='item-hamper-menu bolt-letter'>Precio</li>
                            <li className='item-hamper-menu'>#</li>
                        </ul>
                        {
                            productsArray.map((obj, index) =>
                                <ul key={index} className='list-product-hamper'>
                                    <li className='item-hamper-product color-item-letter-gray'>{obj.codeProduct}</li>
                                    <li className='item-hamper-product color-item-letter-gray'>{obj.nameProduct}</li>
                                    <li className='item-hamper-product color-item-letter-gray'>
                                        <i className="fas fa-minus-circle icon-size color-item-letter-black" onClick={ () => minusCount(obj)}></i>
                                        {obj.count}
                                        <i className="fas fa-plus-circle icon-size color-item-letter-black" onClick={ () => plusCount(obj)}></i>
                                    </li>
                                    <li className='item-hamper-product color-item-letter-gray'>{obj.price}</li>
                                    <li className='item-hamper-product'>
                                        <i className="fas fa-trash icon-size" onClick={ () => deleteProductHamper(obj)}></i>
                                    </li>
                                </ul>
                            )
                        }
                        {
                            <div className='total-price'><p>Total: {this.props.total}</p></div>
                        }
                        </>
                    }                   
                </div>
            </>
        )
    }
}

export default SectionPageHamper;