import React from 'react';
import SectionPageProduct from './section-page-product';
import SectionPageHamper from './section-page-hamper';

const SectionPage = props => {
    return (
        <div className="section-page">
            <SectionPageProduct />
            <SectionPageHamper />
        </div>
    )
}

export default SectionPage;