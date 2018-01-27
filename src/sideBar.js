import React, { Component } from 'react';

class SideBar extends Component {
    render() {
        return (
            <ul className="sidebar-menu" data-widget="tree">
                <li className="active treeview menu-open">
                    <a>
                        <i className="fa fa-th"></i> <span>Dashboard</span>
                        <span className="pull-right-container">
                            <i className="fa fa-angle-left pull-right"></i>
                        </span>
                    </a>
                    <ul className="treeview-menu">
                        <li className="active">
                            <a>
                                <i className="fa fa-circle"></i> All
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-circle-o"></i> Empty Shelves
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-aqua">3</small>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-circle-o"></i> Under Refill
                            </a>
                        </li>
                        <li>
                            <a>
                                <i className="fa fa-circle-o"></i> Inventory Mismatch
                            </a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a>
                        <i className="fa fa-mobile"></i> <span>mPOS</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fa fa-indent"></i> <span>Inventory Management</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fa fa-exchange"></i> <span>Receiving & Transfers</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fa fa-credit-card"></i> <span>Item & Price Inquiry</span>
                    </a>
                </li>
                <li>
                    <a>
                        <i className="fa fa-users"></i> <span>Workforce Management</span>
                    </a>
                </li>
            </ul>);
    }
}

export default SideBar;