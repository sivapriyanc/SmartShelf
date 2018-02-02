import React, { Component } from 'react';
import './App.css';
import AislesLayout from './aislesLayout';
import CategoryList from './categoryList';
import Navigation from './navigation';
import SideBar from './sideBar';
import SearchBar from './searchBar';
import Footer from './footer';
import myData from './data/product.json';
import Chart from './chart';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: myData
    }

    this.loadCategories = this.loadCategories.bind(this);
    this.resetProduct = this.resetProduct.bind(this);
    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter(filter) {
    let categories = myData;

    categories = categories.map((cate) => {
      let prods = cate.Products.filter((prod) => {
        if (filter === "empty")
          return prod.InStock === 0;
        else if (filter === "threshold")
          return cate.ThresholdVolume < prod.InStock
        else if (filter === "normal")
          return cate.ThresholdVolume >= prod.InStock
        else
          return true
      });

      cate.Products = prods;
      return cate;
    });

    this.setState({
      categories: categories
    });
  }

  resetProduct(product, maxVolume) {
    let categories = this.state.categories;

    categories = categories.map((cate) => {
      let prods = cate.Products.map((prod) => {
        if (prod.ProductID === product.ProductID) {
          prod.InStock = maxVolume
        }
        return prod;
      });

      cate.Products = prods;
      return cate;
    });

    this.setState({
      categories: categories
    });

  }

  loadCategories() {
    let categories = this.state.categories;
    let cat = categories[Math.floor(Math.random() * categories.length)];
    let product = cat.Products[Math.floor(Math.random() * cat.Products.length)];
    if (product !== undefined) {
      product.InStock = product.InStock === 0 ? product.InStock : product.InStock - 1;

      categories = categories.map((cate) => {
        let prods = cate.Products.map((prod) => {
          if (prod.ProductID === product.ProductID) {
            prod.InStock = prod.InStock === 0 ? prod.InStock : prod.InStock - 10;
            prod.InStock = prod.InStock < 0 ? 0 : prod.InStock;
          }

          return prod;
        });

        cate.Products = prods;

        return cate;
      })

      this.setState({
        categories: categories
      })
    }
  }

  componentDidMount() {
    setInterval(this.loadCategories, 100);
  }

  render() {
    let categories = this.state.categories.map((category, index) => {
      return <CategoryList ResetProduct={this.resetProduct} key={index} category={category} />
    });
    return (

      <div className="wrapper">

        <header className="main-header">
          <a href="index2.html" className="logo">
            <span className="logo-mini"><b>A</b>isle</span>
            <span className="logo-lg"><b>Aisle</b> Shelves</span>
          </a>
          <Navigation />
        </header>
        <aside className="main-sidebar">
          <section className="sidebar">
            <SearchBar />
            <SideBar FilterShelf={this.applyFilter} />
          </section>
        </aside>
        <div className="content-wrapper">
          <div className="content-table">
            {categories}
          </div>
          <AislesLayout />
        </div>
        <Chart />
        <Footer />
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

export default App;
