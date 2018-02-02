import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="main-footer">
                <img src="productimg/sn-green.png" alt="" /> <span>Normal Stock Level &nbsp; &nbsp; &nbsp;
          </span>
                <img src="productimg/sn-yellow.png" alt="" /> <span>Below Min Shelf Capacity&nbsp; &nbsp; &nbsp;
          </span>
                <img src="productimg/sn-red.png" alt="" /> <span>Out of Stock
          </span>
            </footer>);
    }
}

export default Footer;