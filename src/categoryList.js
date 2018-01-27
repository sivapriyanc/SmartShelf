import React, { Component } from 'react';
import Product from './product';

class CategoryList extends Component {
    render() {
        let products = this.props.category.Products.map((product, index) => {
            return <Product maxVolume={this.props.category.MaxVolume}
                thresholdVolume={this.props.category.ThresholdVolume}
                product={product} key={index} />
        });

        return (
            <div className="table-row">
                <div className="table-cell-left">
                    {this.props.category.CategoryName}
                </div>
                <div className="table-cell-right">
                    <div className="flex-container">
                        {products}
                    </div>
                </div>
            </div>);
    }
}

export default CategoryList;