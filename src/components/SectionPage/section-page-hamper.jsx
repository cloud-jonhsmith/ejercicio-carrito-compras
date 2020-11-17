import React from 'react';

class SectionPageHamper extends React.Component {
    render() {
        const { productsArray, minusCount, plusCount, deleteProductHamper } = this.props;
        return (
            <div id="section-page-hamper" className="section-page-hamper">
                <div id="menuHamper" className="menuHamper">
                    {productsArray.length > 0 &&
                        <>
                        <div>CARRITO DE COMPRAS</div>
                        <ul className='menu-hamper'>
                            <li className='item-hamper'>Código</li>
                            <li className='item-hamper'>Producto</li>
                            <li className='item-hamper'>Cantidad</li>
                            <li className='item-hamper'>Precio</li>
                            <li className='item-hamper'>#</li>
                        </ul>
                        {
                            productsArray.map((obj, index) =>
                                <ul key={index} className='menu-hamper'>
                                    <li className='item-hamper'>{obj.codeProduct}</li>
                                    <li className='item-hamper'>{obj.nameProduct}</li>
                                    <li className='item-hamper'>
                                        <i className="fas fa-minus-circle" onClick={ () => minusCount(obj)}></i>
                                        {obj.count}
                                        <i className="fas fa-plus-circle" onClick={ () => plusCount(obj)}></i>
                                    </li>
                                    <li className='item-hamper'>{obj.price}</li>
                                    <li className='item-hamper'>
                                        <i className="fas fa-trash" onClick={ () => deleteProductHamper(obj)}></i>
                                    </li>
                                </ul>
                            )
                        }
                        {
                            <div>Total: {0}</div>
                        }
                        </>
                    }                   
                </div>
            </div>
        )
    }
}

export default SectionPageHamper;