import React from 'react';
import Page from './page';

class SectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsArray:[],
            total:0
        }
        this.addProductsHamper = this.addProductsHamper.bind(this);
        this.minusCount = this.minusCount.bind(this);
        this.plusCount = this.plusCount.bind(this);
        this.deleteProductHamper = this.deleteProductHamper.bind(this);
    }
    minusCount(obj) {
        const { productsArray, total } = this.state;

        if (productsArray.length > 0) {
            const filter = productsArray.filter(e => e.id == obj.id);
            if (filter.length > 0) {
                productsArray.map(e => {
                    if(e.id == obj.id) {
                        if (e.count > 1) {
                            e.count--;
                        }
                    }
                });
                this.setState({ ... productsArray });
            }
        }
    }
    plusCount(obj) {
        const { productsArray } = this.state;

        if (productsArray.length > 0) {
            const filter = productsArray.filter(e => e.id == obj.id);
            if (filter.length > 0) {
                productsArray.map(e => {
                    if(e.id == obj.id) {
                        if (e.count < obj.stock) {
                            e.count++;
                        }
                    }
                });
                this.setState({ ... productsArray });
            }
        }
    }
    addProductsHamper(product) {
        console.log('product', product);
        const { productsArray } = this.state;
        let sumPrice = 0;

        if (productsArray.length > 0) {
            const filter = productsArray.filter(e => e.id == product.id);
            if (filter.length > 0) {
                productsArray.map(e => {
                    if(e.id == product.id) {
                        if (e.count < product.stock) {
                            e.count++;
                        }
                        //Precio total
                        sumPrice=sumPrice+e.price;
                    }
                });
                this.setState({ ... productsArray });
                //Precio total
                this.setState(function (prevState) {
                    return {
                        total:prevState.total+sumPrice
                    }
                })
            }
            if (filter.length == 0) {
                productsArray.push(product);
                this.setState({ ... productsArray });
                //Precio total
                sumPrice=sumPrice+product.price;
                this.setState(function (prevState) {
                    return {
                        total:prevState.total+sumPrice
                    }
                })
            }
        } else {
            productsArray.push(product);
            this.setState({ ... productsArray });
            //Precio total
            sumPrice=sumPrice+product.price;
            this.setState(function (prevState) {
                return {
                    total:prevState.total+sumPrice
                }
            })
        }
    }
    deleteProductHamper(product) {
        const { productsArray } = this.state;
        console.log(product.id);

        let pos;
        //const filter = productsArray.filter(e => e.id != product.id);

        productsArray.map((e, index) => {
            if(e.id == product.id) {
                pos = index;
                e.count = 1;
                //this.setState({ ... productsArray });
            }
        });
        productsArray.splice(pos, 1);
        this.setState({ ... productsArray });
    }


    render() {
        const { productsArray } = this.state;
        
        console.log('array', productsArray);

        return (
            <>
                <div className="section-page">
                <Page
                    addProductsHamper={this.addProductsHamper}
                    minusCount={this.minusCount}
                    plusCount={this.plusCount}
                    deleteProductHamper={this.deleteProductHamper}
                    productsArray={productsArray}
                    total={this.state.total}
                />
                </div>
            </>
        );
    };
}

export default SectionPage;