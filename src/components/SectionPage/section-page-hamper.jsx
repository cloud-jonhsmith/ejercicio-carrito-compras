import React from 'react';

class SectionPageHamper extends React.Component {
    render() {
        const { productsArray } = this.props;
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
                                        <i class="fas fa-minus-circle"></i>
                                        {obj.count}
                                        <i class="fas fa-plus-circle"></i>
                                    </li>
                                    <li className='item-hamper'>{obj.price}</li>
                                    <li className='item-hamper'>
                                        <i class="fas fa-trash"></i>
                                    </li>
                                </ul>
                            )
                        }
                        </>
                    }                   
                </div>
            </div>
        )
    }
}

export default SectionPageHamper;