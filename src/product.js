import React, { Component } from 'react';
import img from './no-image.png';
class Product extends Component {
    render() {
        let height = Math.round(this.props.product.InStock * 100 / this.props.maxVolume);
        let cls = "section-fill bg-green";
        if (height === 0) {
            cls = "section-fill bg-red";
        }
        else if (height < this.props.thresholdVolume) {
            cls = "section-fill bg-yellow";
            height = 100 - height;
        }
        else {
            height = 100 - height;
        }

        height = { height: height + '%' };

        return (
            <div className="flex-content">
                <div className="section-content">
                    <div className={cls}>
                        <div className="section-unfill" style={height}></div>
                    </div>
                    <div className="product-img">
                        <img alt={this.props.product.ProductName} src={img} />
                    </div>
                </div>
                <div className={cls !== "section-fill bg-green" ? "section-title-action" : "section-title-action bg-green"}>
                    <i className={cls !== "section-fill bg-green" ? "fa fa-upload" : "disp-none"}></i><span>{this.props.product.ProductName}</span>
                </div>
            </div>
        );
    }
}

export default Product;