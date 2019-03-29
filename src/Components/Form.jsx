import React, { Component } from "react";
import axios from "axios";

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      productName: "",
      productPrice: 0
    };
  }

  handleImageUrlChange = e => {
    this.setState({
      imageUrl: e.target.value
    });
  };

  handleProductNameChange = e => {
    this.setState({
      productName: e.target.value
    });
  };

  handleProductPriceChange = e => {
    this.setState({
      productPrice: e.target.value
    });
  };

  cancelProductAddition = e => {
    e.preventDefault();
    this.setState({
      imageUrl: "",
      productName: "",
      productPrice: 0
    });
  };

  addToDataBase = e => {
    axios
      .post("/api/products", {
        product_name: this.state.productName,
        product_price: this.state.productPrice,
        product_imageurl: this.state.imageUrl
      })
      .then(() => {
        console.log("Added product to DB");
      })
      .catch(err => console.log("front end error adding product to DB", err));
  };

  
	
	  
  render() {
    return (
      <div className="form-card">
          <div className="create-form-card">
            <form>
              <div>
                <label>
                  Image URL:
                  <div>
                    <input
                      type="text"
                      value={this.state.imageUrl}
                      onChange={e => this.handleImageUrlChange(e)}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label>
                  Product Name:
                  <div>
                    <input
                      type="text"
                      value={this.state.productName}
                      onChange={e => this.handleProductNameChange(e)}
                    />
                  </div>
                </label>
              </div>
              <div>
                <label>
                  Price:
                  <div>
                    <input
                      type="number"
                      value={this.state.productPrice}
                      onChange={e => this.handleProductPriceChange(e)}
                    />
                  </div>
                </label>
              </div>
              <div className="form-button-container">
                <button onClick={e => this.cancelProductAddition(e)}>
                  Cancel
                </button>
                <button onClick={e => this.addToDataBase(e)}>
                  Add to Inventory
                </button>
              </div>
            </form>
          </div>
      </div>
    );
  }
}
