import React, { Component } from 'react';
import img from './no-image.png';

class Product extends Component {
    constructor(props) {
        super(props);
        this.resetProduct = this.resetProduct.bind(this);
    }

    resetProduct(product, maxVolume) {
        if (typeof this.props.ResetProduct === "function") {
            this.props.ResetProduct(this.props.product, this.props.maxVolume)
        }
    }

    render() {
        let height = Math.round(this.props.product.InStock * 100 / this.props.maxVolume);
        let cls = "section-fill bg-green";
        if (height === 0) {
            cls = "section-fill bg-gray";
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
                        <div className="section-unfill" style={height}>
                        </div>
                    </div>
                    <div className="product-img">
                        <a data-toggle="modal" data-target="#myModal">
                            <img alt={this.props.product.ProductName} src={img} />
                        </a>
                    </div>
                </div>
                <div className={cls !== "section-fill bg-green" ? "section-title-action" : "section-title-action bg-green"}>
                    <span onClick={cls !== "section-fill bg-green" ? this.resetProduct : ""}>
                        <i className={cls !== "section-fill bg-green" ? "fa fa-upload" : "disp-none"}></i><span>{this.props.product.ProductName}</span>
                    </span>
                </div>
            </div>
        );
    }
}

export default Product;