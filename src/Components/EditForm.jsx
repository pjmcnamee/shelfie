import React, { Component } from 'react'
import axios from 'axios'

export class EditForm extends Component {
	constructor() {
		super();
		this.state = {
		  imageUrl: "",
		  productName: "",
		  productPrice: 0,
		  productId: null,
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


	  cancleEdit = (e, bool) => {
		e.preventDefault();
		this.props.editFlagState(bool);
		};

	  componentWillMount(){
		const {
			product_name,
			product_price,
			product_imageurl,
			product_id
		} = this.props.editProduct
		if(this.props.editFlag)
		this.setState({
			imageUrl: product_imageurl,
			productName: product_name,
			productPrice: product_price,
			productId: product_id
		})
	}

	editItem =(e, bool) => {
		axios.put(`/api/products/${this.state.productId}`, {
			product_name: this.state.productName,
			product_price: this.state.productPrice,
			product_imageurl: this.state.imageUrl
		}).then(res => {
			res.status(200).send('Updated Product!')
		}).catch(err => console.log('Updating Product Error - Front End'))
	}


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
                <button onClick={e => this.cancleEdit(e, false)}>Cancel</button>
                <button onClick={e => this.editItem(e, false)}>Save Changes</button>
              </div>
            </form>
          </div>
	  </div>
	)
  }
}

export default EditForm
