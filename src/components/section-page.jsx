import React from 'react';
import SectionPageProduct from './section-page-product';
import SectionPageHamper from './section-page-hamper';

class SectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products
        }
    }
    render() {
        return (
            <div className="section-page">
                <SectionPageProduct
                    products={this.state.products} />
                <SectionPageHamper
                    products={this.state.products} />
            </div>
        );
    };
}

export default SectionPage;