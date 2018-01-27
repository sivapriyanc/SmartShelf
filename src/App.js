import React, { Component } from 'react';
import Timer from 'react.timer'
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header className="main-header">
          <a href="index2.html" className="logo">
            <span className="logo-mini"><b>A</b>isle</span>
            <span className="logo-lg"><b>Aisle</b> Shelves</span>
          </a>      
         <nav className="navbar navbar-static-top">
            <a href="#" className="sidebar-toggle" data-toggle="push-menu" role="button">
              <span className="sr-only">Toggle navigation</span>
            </a>
            <div className="navbar-custom-menu">
              <ul className="nav navbar-nav">
                <li className="dropdown notifications-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                    <i className="fa fa-bell-o"></i>
                    <span className="label label-warning">3</span>
                  </a>
                  <ul className="dropdown-menu">
                    <li className="header">You have 3 notifications</li>
                    <li>
                      <ul className="menu">
                        <li>
                          <a href="#">
                            <i className="fa fa-circle text-yellow"></i> 5 Shelves - below Min Shelf Capacity
                            
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-circle text-red"></i> 2 Shelves - Out of Stock
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-circle text-green"></i> 2 Shelves - Normal Stock Level
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="dropdown user user-menu">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown">
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
                        <a href="#" className="btn btn-default btn-flat">Profile</a>
                      </div>
                      <div className="pull-right">
                        <a href="#" className="btn btn-default btn-flat">Sign out</a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" data-toggle="control-sidebar"><i className="fa fa-gears"></i></a>
                </li>
              </ul>
            </div>
      
          </nav>
        </header>
        <aside className="main-sidebar">
          <section className="sidebar">
            <form action="#" method="get" className="sidebar-form">
              <div className="input-group">
                <input type="text" name="q" className="form-control" placeholder="Search..." />
                <span className="input-group-btn">
                      <button type="submit" name="search" id="search-btn" className="btn btn-flat">
                        <i className="fa fa-search"></i>
                      </button>
                    </span>
              </div>
            </form>
            <ul className="sidebar-menu" data-widget="tree">
              <li className="active treeview menu-open">
                <a href="#">
                  <i className="fa fa-th"></i> <span>Dashboard</span>
                  <span className="pull-right-container">
                    <i className="fa fa-angle-left pull-right"></i>
                  </span>
                </a>
                <ul className="treeview-menu">
                  <li className="active"><a href="#"><i className="fa fa-circle"></i> All</a></li>
                  <li><a href="#"><i className="fa fa-circle-o"></i> Empty Shelves 
                    <span className="pull-right-container">
                    <small className="label pull-right bg-aqua">3</small>
                  </span></a></li>
                  <li><a href="#"><i className="fa fa-circle-o"></i> Under Refill</a></li>
                  <li><a href="#"><i className="fa fa-circle-o"></i> Inventory Mismatch</a></li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-mobile"></i> <span>mPOS</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-indent"></i> <span>Inventory Management</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-exchange"></i> <span>Receiving & Transfers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-credit-card"></i> <span>Item & Price Inquiry</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-users"></i> <span>Workforce Management</span>
                </a>
              </li>
              </ul>
          </section>
        </aside>
        <div className="content-wrapper">
          <div className="content-table">
            <div className="table-row">
                <div className="table-cell-left">
                A1
              </div>
                  <div className="table-cell-right">
                    <div className="flex-container">
                      <div className="flex-content">
                        <div className="section-content">
                          <div className="section-fill bg-green">
                            <div className="section-unfill" style={{height: '20px'}}></div>
                          </div>
                          <div className="product-img">
                            <img alt="" src="productimg/product1.jpg" />
                          </div>
                        </div>
                        <div className="section-title-action">
                          <i className="fa fa-upload"></i><span>Product Name asfdsdf asfdsfsdaf sdfdad fsdadf</span>
                        </div>
                      </div>
                      <div className="flex-content">
                      <div className="section-content">
                        <div className="section-fill bg-green">
                          <div className="section-unfill" style={{height: '20px'}}></div>
                        </div>
                        <div className="product-img">
                          <img alt="" src="productimg/product1.jpg" />
                        </div>
                      </div>
                      <div className="section-title-action">
                        <i className="fa fa-upload"></i><span>Product Name asfdsdf asfdsfsdaf sdfdad fsdadf</span>
                      </div>
                    </div>  
                    </div>
                    
                  </div>
              </div>
              <div className="table-row">
                <div className="table-cell-left">
                A1
              </div>
                  <div className="table-cell-right">
                  </div>
              </div>
          </div>
        </div>
        <footer className="main-footer">
          <i className="fa fa-th text-green"></i> <span>Normal Stock Level &nbsp; &nbsp; &nbsp;
          </span>
          <i className="fa fa-th  text-yellow"></i> <span>Below Min Shelf Capacity&nbsp; &nbsp; &nbsp;
          </span>
          <i className="fa fa-th text-red"></i> <span>Out of Stock      
          </span>
        </footer>
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

export default App;
