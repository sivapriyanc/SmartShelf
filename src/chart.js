import React, { Component } from 'react';
import { LineChart } from 'react-easy-chart';

class Chart extends Component {
    
    render() {

        var styles = {
            color:'red',
           
            fontWeight:'bold'
        };
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
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Product Info</h4>
                        </div>
                        <div className="modal-body">
                            <div className="disp-none">
                            <LineChart
                                xType={'text'}
                                axes
                                width={500}
                                height={250}
                                interpolate={'cardinal'}
                                data={datum}
                            />
                            </div>
                            <div className="text-center">
                                <img id ="imgid" src="productimg/seafood.jpg" className="productimg" alt="" />
                            </div>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Aisle position</th>
                                        <td id="aisleid">22</td>
                                        <th>Product ID</th>
                                        <td>HSBN001</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Shelf position</th>
                                        <td id ="shelfid">100 </td>
                                        <th>Shelf capacity</th>
                                        <td id="capacityid">36</td>
                                    </tr>
                                    <tr>
                                        <th>SKU</th>
                                        <td id="skuid">30</td>
                                        <th>Current quantity</th>
                                        <td id="currentid">23</td>
                                    </tr>
                                    <tr>
                                        <th>Sale velocity in last hour</th>
                                        <td id="saleid">30/11/2018</td>
                                        <th>No of visitors in the last hour</th>
                                        <td id="visitorsid">31/12/2018</td>
                                    </tr>
                                    <tr>
                                        <th>Reorder level</th>
                                        <td id="recorderid">100 </td>
                                        <th >Time to replenish</th>
                                        <td id="replid">36</td>
                                    </tr>
                                    <tr>
                                        <th>Last cycle count</th>
                                        <td id ="cycleid">30</td>
                                        <th >Next cycle count due</th>
                                        <td id ="nxtcycle">23</td>
                                    </tr>
                                    <tr>
                                        <th>Shelf temp</th>
                                        <td id="tempid"><i className="fa fa-thermometer-empty text-red"></i> 63° F</td>

                                       
                                        <th>Alert</th>
                                        <td id="alertid" class="tab blink" style={styles}></td> 
                                      
                                       
                                    </tr>
                                    <tr>
                                        <th>Store associate</th>
                                        <td id ="assoid"> 63° F</td>
                                        
                                        <th>Store Manager</th>
                                        <td>Steven</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default Chart;