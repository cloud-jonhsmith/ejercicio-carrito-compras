import React from 'react';

class AddHamper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product
        }
    }
    render() {
        const itemCode = <li key={item.id}>{item.codeProduct}</li>;
        const itemName = <li key={item.id}>{item.nameProduct}</li>;
        const itemStock = (
        <li key={item.id} class="cantProduct">
            <i id="minusButton${this.state.product.id}" class="fas fa-minus-circle"></i>
            ${this.state.countStock}
            <i id="plusButton${this.state.product.id}" class="fas fa-plus-circle"></i>
        </li>);
        const itemPrice = <li key={item.id}>{this.state.product.price}</li>;
        const itemIconDelete = <li key={item.id}><i class="fas fa-trash"></i></li>;
        return (
            <React.Fragment>
                {this.props.elementsAddMenuHamper.appendChild(itemCode)}
            </React.Fragment>
        )
    }
}

export default AddHamper;