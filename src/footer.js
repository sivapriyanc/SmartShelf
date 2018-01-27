import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <i className="fa fa-th text-green"></i> <span>Normal Stock Level &nbsp; &nbsp; &nbsp;
          </span>
                <i className="fa fa-th  text-yellow"></i> <span>Below Min Shelf Capacity&nbsp; &nbsp; &nbsp;
          </span>
                <i className="fa fa-th text-red"></i> <span>Out of Stock
          </span>
            </footer>);
    }
}

export default Footer;