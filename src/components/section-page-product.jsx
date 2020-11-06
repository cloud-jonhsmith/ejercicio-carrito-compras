import React from 'react';
import ArticleProduct from './article-product';

class SectionPageProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lado: 'izquierda'
        }
    }

    render() {
        return (
            <div className="section-page-product">
                <ArticleProduct />
                <ArticleProduct />
                <ArticleProduct />
                <ArticleProduct />
                <ArticleProduct />
                <ArticleProduct />
            </div>
        )
    }
}

export default SectionPageProduct;