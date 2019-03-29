import React, { Component } from "react";
import Product from "./Product";
import axios from "axios";

export class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      deleteSwitch: false
    };
  }

  componentDidMount() {
    axios
      .get("/api/products")
      .then(res => {
        console.log(res.data);
        this.setState({
          products: res.data
        });
      })
      .catch(err => console.log("Front End error on getting all products"));
  }

  render() {
    return (
      <div className="main-container">
        <div className="product-container">
          <Product
            deleteSwitch={this.state.deleteSwitch}
            setEditProduct={this.setEditProduct}
            componentDidMount={this.componentDidMount}
            editFlagState={this.editFlagState}
            products={this.state.products}
          />
        </div>
        <div className="form-container" />
      </div>
    );
  }
}

export default Dashboard;
