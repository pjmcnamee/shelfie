import React, { Component } from "react";
import axios from "axios";
import { Link } from 'react-router-dom'

export default class Form extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: 'https://www.blakleysflooring.com/wp-content/uploads/2016/03/Placeholder.png',
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
              <div className='create-form'>
              <div>
                <img src={this.state.imageUrl} alt=""/>
              </div>
              <div>
                <label>
                  Image URL:
                  <div className='input-div'>
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
                  <div className='input-div'>
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
                  <div className='input-div'>
                    <input
                      type="number"
                      value={this.state.productPrice}
                      onChange={e => this.handleProductPriceChange(e)}
                    />
                  </div>
                </label>
              </div>
              <div className="form-button-container">
                <Link className='green-links' to='/'>Cancel</Link>
                <Link className='green-links' to='/' onClick={() => this.addToDataBase()}>Add To Inventory</Link>
              </div>
              </div>
            </form>
          </div>
      </div>
    );
  }
}
