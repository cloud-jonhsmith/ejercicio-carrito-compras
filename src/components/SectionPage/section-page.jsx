import React from 'react';
import Page from './page';

class SectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsArray:[]
        }
        this.addProductsHamper = this.addProductsHamper.bind(this);
    }
    addProductsHamper(product) {
        console.log('product', product);
        const { productsArray } = this.state;

        if (productsArray.length > 0) {
            const filter = productsArray.filter(e => e.id == product.id);
            if (filter.length > 0) {
                productsArray.map(e => {
                    if(e.id == product.id) {
                        e.count++;
                    }
                });
                this.setState({ ... productsArray });
            }
            if (filter.length == 0) {
                productsArray.push(product);
                this.setState({ ... productsArray });
            }
        } else {
            productsArray.push(product);
            this.setState({ ... productsArray });
        }
    }

    render() {
        const { productsArray } = this.state;
        
        console.log('array', productsArray);

        return (
            <>
                <div className="section-page">
                <Page
                    addProductsHamper={this.addProductsHamper}
                    productsArray={productsArray}
                />
                </div>
            </>
        );
    };
}

export default SectionPage;