import React from 'react';
import Page from './page';
//import { flexColumn } from './styled.ts';

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
                let pos;
                productsArray.map((e, index) => {
                    let cantProduct = 0;
                    if(e.id == obj.id) {
                        let valorPrice = parseFloat(e.price.substr(1));
                        if (e.count > 1) {
                            e.count--;
                            //Precio total
                            this.setState(function (prevState) {
                                return {
                                    total:prevState.total-valorPrice
                                }
                            })
                        } else {
                            cantProduct = e.count;
                            pos = index;
                            e.count = 1;
                            productsArray.splice(pos, 1);
                            this.setState({ ... productsArray });
                            this.setState(function (prevState) {
                                return {
                                    total:prevState.total-(valorPrice*cantProduct)
                                }
                            })
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
                        let valorPrice = parseFloat(e.price.substr(1));
                        if (e.count < obj.stock) {
                            e.count++;
                            //Precio total
                            this.setState(function (prevState) {
                                return {
                                    total:prevState.total+valorPrice
                                }
                            })
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

        if (productsArray.length > 0) {
            const filter = productsArray.filter(e => e.id == product.id);
            console.log('filter',filter);
            if (filter.length > 0) {
                productsArray.map(e => {
                    if(e.id == product.id) {
                        let valorPrice = parseFloat(e.price.substr(1));
                        if (e.count < product.stock) {
                            e.count++;
                            //Precio total
                            this.setState(function (prevState) {
                                return {
                                    total:prevState.total+valorPrice
                                }
                            })
                        }
                    }
                });
                this.setState({ ... productsArray });
            }
            if (filter.length == 0) {
                productsArray.push(product);
                this.setState({ ... productsArray });
                let valorPrice = parseFloat(product.price.substr(1));
                //Precio total
                this.setState(function (prevState) {
                    return {
                        total:prevState.total+valorPrice
                    }
                })
            }
        } else {
            productsArray.push(product);
            let valorPrice = parseFloat(product.price.substr(1));
            this.setState({ ... productsArray });
            //Precio total
            this.setState(function (prevState) {
                return {
                    total:prevState.total+valorPrice
                }
            })
        }
    }
    deleteProductHamper(product) {
        const { productsArray } = this.state;
        console.log(product.id);

        let pos;

        productsArray.map((e, index) => {
            let cantProduct = 0;
            if(e.id == product.id) {
                cantProduct = e.count;
                pos = index;
                e.count = 1;
            }
            //Precio total
            let valorPrice = parseFloat(e.price.substr(1));
            this.setState(function (prevState) {
                return {
                    total:prevState.total-(valorPrice*cantProduct)
                }
            })
        });
        productsArray.splice(pos, 1);
        this.setState({ ... productsArray });
    }


    render() {
        const { productsArray } = this.state;
        
        console.log('array', productsArray);

        return (
            <>
                <div className='section-page'>
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