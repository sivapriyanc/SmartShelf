import React, { Component } from 'react';
import './App.css';
import CategoryList from './categoryList';
import Navigation from './navigation';
import SideBar from './sideBar';
import SearchBar from './searchBar';
import Footer from './footer';
import myData from './data/product.json';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      categories: myData
    }

    this.loadCategories = this.loadCategories.bind(this);
  }

  loadCategories() {
    let categories = this.state.categories;
    let cat = categories[Math.floor(Math.random() * categories.length)];
    let product = cat.Products[Math.floor(Math.random() * cat.Products.length)];
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

  componentDidMount() {
    setInterval(this.loadCategories, 100);
  }

  render() {
    let categories = this.state.categories.map((category, index) => {
      return <CategoryList key={index} category={category} />
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
            <SideBar />
          </section>
        </aside>
        <div className="content-wrapper">
          <div className="content-table">
            {categories}
          </div>
        </div>
        <Footer />
        <div className="control-sidebar-bg"></div>
      </div>
    );
  }
}

export default App;
