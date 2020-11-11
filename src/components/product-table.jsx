import React from 'react';
import HeaderMenu from './header-menu';
import SectionPage from './section-page';

class ProductTable extends React.Component {
    render() {
        return (
            <div className='app'>
                <HeaderMenu />
                <SectionPage products={this.props.products} />
            </div>
        );
    };
}

export default ProductTable;