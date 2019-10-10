import React, { Component } from 'react'

 class Headline extends Component {

    constructor(props){
        super(props);
    }
    render() {
        const{ header,desc } = this.props;

        return (
            <div data-test='HeadlineComponent'>
                {header && <h5 data-test='header'>{header}</h5> }
                {desc && <h6 data-test='desc'>{desc}</h6>}
            </div>
        )
    }
}
export default Headline;
