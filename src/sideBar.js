import React, { Component } from 'react';

class SideBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: "all"
        }

        this.filterShelf = this.filterShelf.bind(this);
    }

    filterShelf(e) {
        if (typeof this.props.FilterShelf === "function") {
            this.props.FilterShelf(e.target.id)
        }

        this.setState({
            filter: e.target.id
        })
    }

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
                        <li id="all" onClick={this.filterShelf} className={this.state.filter === "all" ? "active" : ""}>
                            <a id="all">
                                <i className={this.state.filter === "all" ? "fa fa-circle" : "fa fa-circle-o"}></i> All
                            </a>
                        </li>
                        <li id="empty" onClick={this.filterShelf} className={this.state.filter === "empty" ? "active" : ""}>
                            <a id="empty">
                                <i className={this.state.filter === "empty" ? "fa fa-circle" : "fa fa-circle-o"}></i> Empty Shelves
                                <span className="pull-right-container">
                                    <small className="label pull-right bg-aqua">3</small>
                                </span>
                            </a>
                        </li>
                        <li id="threshold" onClick={this.filterShelf} className={this.state.filter === "threshold" ? "active" : ""}>
                            <a id="threshold">
                                <i className={this.state.filter === "threshold" ? "fa fa-circle" : "fa fa-circle-o"}></i> Under Refill
                            </a>
                        </li>
                        <li id="normal" onClick={this.filterShelf} className={this.state.filter === "normal" ? "active" : ""}>
                            <a id="normal">
                                <i className={this.state.filter === "normal" ? "fa fa-circle" : "fa fa-circle-o"}></i> Normal Inventory
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