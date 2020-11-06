import React from 'react';

class SectionPageHamper extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lado: 'derecha'
        }
    }

    render() {
        return (
            <div className="section-page-hamper">
                <p>Page {this.state.lado}</p>
            </div>
        )
    }
}

export default SectionPageHamper;