import React from 'react';
import ReactDOM from 'react-dom';

import ProductTable from './components/product-table';

import "./scss/app.scss";

const PRODUCTS = [
    {nameProduct: 'Monitor LED LG', codeProduct: '11111', descProduct: '21\'', price: '$200.00', stock: 12, url: 'https://loremflickr.com/200/200/technology,monitor', id: 1},
    {nameProduct: 'Monitor a color SAMSUNG', codeProduct: '22222', descProduct: '27\'', price: '$450.00', stock: 10, url: 'https://loremflickr.com/200/201/technology,monitor', id: 2},
    {nameProduct: 'Monitor curvo', codeProduct: '33333', descProduct: '24\'', price: '$400.00', stock: 6, url: 'https://loremflickr.com/200/202/technology,monitor', id: 3},
    {nameProduct: 'Monitor curvo SAMSUNG', codeProduct: '44444', descProduct: '32\'', price: '$600.00', stock: 3, url: 'https://loremflickr.com/200/203/technology,monitor', id: 4},
    {nameProduct: 'Monitor gamer', codeProduct: '55555', descProduct: '27\'', price: '$500.00', stock: 4, url: 'https://loremflickr.com/200/204/technology,monitor', id: 5},
    {nameProduct: 'Monitor gamer curvo', codeProduct: '666666', descProduct: '32\'', price: '$700.00', stock: 1, url: 'https://loremflickr.com/200/205/technology,monitor', id: 6},
];

ReactDOM.render(
    <ProductTable products={PRODUCTS} />, document.getElementById('container')
);