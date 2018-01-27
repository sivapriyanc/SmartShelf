import React, { Component } from 'react';

class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-static-top">
                <a className="sidebar-toggle" data-toggle="push-menu" role="button">
                    <span className="sr-only">Toggle navigation</span>
                </a>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        <li className="dropdown notifications-menu">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-bell-o"></i>
                                <span className="label label-warning">3</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="header">You have 3 notifications</li>
                                <li>
                                    <ul className="menu">
                                        <li>
                                            <a >
                                                <i className="fa fa-circle text-yellow"></i> 5 Shelves - below Min Shelf Capacity

                          </a>
                                        </li>
                                        <li>
                                            <a >
                                                <i className="fa fa-circle text-red"></i> 2 Shelves - Out of Stock
                          </a>
                                        </li>
                                        <li>
                                            <a >
                                                <i className="fa fa-circle text-green"></i> 2 Shelves - Normal Stock Level
                          </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown user user-menu">
                            <a className="dropdown-toggle" data-toggle="dropdown">
                                <i className="fa fa-user-circle"></i>
                                <span className="hidden-xs">John Smith</span>
                            </a>
                            <ul className="dropdown-menu">
                                <li className="user-header">
                                    <h1><i className="fa fa-user-circle"></i></h1>
                                    <p>
                                        John Smith - System Admin
                        <small>Member since Nov. 2015</small>
                                    </p>
                                </li>
                                <li className="user-footer">
                                    <div className="pull-left">
                                        <a className="btn btn-default btn-flat">Profile</a>
                                    </div>
                                    <div className="pull-right">
                                        <a className="btn btn-default btn-flat">Sign out</a>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                        </li>
                    </ul>
                </div>
            </nav>);
    }
}

export default Navigation;