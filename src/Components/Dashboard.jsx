import React, { Component } from 'react'
import Product from './Product'
import axios from 'axios'
import Form from './Form'
import EditForm from './EditForm';

export class Dashboard extends Component {
	constructor(){
		super()
		this.state = {
			products: [],
			editFlag: false,
			editProduct: {}
		}
	}

componentDidMount(){
	axios.get('/api/products').then(res => {
		console.log(res.data)
		this.setState({
			products: res.data
		})
	}).catch(err => console.log('Front End error on getting all products'))
}

setEditProduct = (product) => {
	this.setState({
		editProduct: product
	})
}

editFlagState = (bool) => {
	this.setState({
		editFlag: bool
	})
}


  render() {
	return (
	<div className='main-container'>
	  <div className='product-container'>
			<Product setEditProduct={this.setEditProduct} componentDidMount={this.componentDidMount} editFlagState={this.editFlagState} products={this.state.products}/>
	  </div>
	  <div className='form-container'>

			{this.state.editFlag ? <EditForm editFlagState={this.editFlagState} editProduct={this.state.editProduct} editFlag={this.state.editFlag} /> : <Form editFlagState={this.editFlagState} editProduct={this.state.editProduct} editFlag={this.state.editFlag}/>}
			 
	  </div>

	</div>
	)
  }
}

export default Dashboard
