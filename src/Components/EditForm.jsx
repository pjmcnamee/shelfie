import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export class EditForm extends Component {
  constructor() {
    super();
    this.state = {
      imageUrl: "",
      productName: "",
      productPrice: 0,
      productId: null
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

  componentWillMount() {
    const {
      product_name,
      product_price,
      product_imageurl,
      product_id
    } = this.props.location.state.product;
    this.setState({
      imageUrl: product_imageurl,
      productName: product_name,
      productPrice: product_price,
      productId: product_id
    });
  }

  editItem = (e, bool) => {
    e.preventDefault();
    axios
      .put(`/api/products/${this.state.productId}`, {
        product_name: this.state.productName,
        product_price: this.state.productPrice,
        product_imageurl: this.state.imageUrl
      })
      .then(res => {
        res.status(200).send("Updated Product!");
      })
      .catch(err => console.log("Updating Product Error - Front End"));
    alert("Item edited");
  };

  render() {
    return (
      <div className="form-card">
        <div className="edit-form-card">
          <form>
            <div>
              <div>
                <img src={this.state.imageUrl} alt="" />
              </div>
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
              <Link className="edit-form-links" to="/">
                Cancel
              </Link>
              <Link
                className="edit-form-links"
                onClick={e => this.editItem(e, false)}
              >
                Save Changes
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default EditForm;
