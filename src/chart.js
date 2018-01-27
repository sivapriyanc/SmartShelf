import React, { Component } from 'react';
import { LineChart } from 'react-easy-chart';

class Chart extends Component {
    render() {
        let datum = [
            [
                { x: '01/01/2018', y: 20 },
                { x: '01/02/2018', y: 10 },
                { x: '01/03/2018', y: 33 },
                { x: '01/04/2018', y: 45 },
                { x: '01/05/2018', y: 15 },
                { x: '01/06/2018', y: 30 },
                { x: '01/07/2018', y: 10 },
                { x: '01/08/2018', y: 15 }            
            ]
        ]
        return (
            <div id="myModal" className="modal fade" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Product Info</h4>
                        </div>
                        <div className="modal-body">
                            <LineChart
                                xType={'text'}
                                axes
                                width={500}
                                height={250}
                                interpolate={'cardinal'}
                                data={datum}
                            />
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Aisle #</th>
                                        <td>22</td>
                                        <th>Product ID</th>
                                        <td>HSBN001</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Shell Capacity</th>
                                        <td>100 </td>
                                        <th>Refill Order</th>
                                        <td>36</td>
                                    </tr>
                                    <tr>
                                        <th>Reorder Level</th>
                                        <td>30</td>
                                        <th>Shelf #</th>
                                        <td>23</td>
                                    </tr>
                                    <tr>
                                        <th>Order Date</th>
                                        <td>30/11/2018</td>
                                        <th>Expected Delivery Date</th>
                                        <td>31/12/2018</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Chart;