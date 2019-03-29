import React from 'react'
import axios from 'axios';

export default function Product(props) {

	function deleteProduct(id){
		axios.delete(`/api/products/${id}`).then(() => {
			console.log('Deleted Product!')
		}).catch(err => console.log('Front end error on deleting product ', err))
		props.componentDidMount()
	}

	function sendEditProductInfo(product, bool){
		props.editFlagState(bool)
		props.setEditProduct(product)
	}

  return (
	<div>
	  {props.products.map(product => {
		  return (
			  <div key={product.product_id} className='product-cards'>
				  <img src={product.product_imageurl} alt=""/>
				  <h4>{product.product_name}</h4>
				  <h4>${product.product_price}</h4>
				  <button onClick={() => deleteProduct(product.product_id)}>Delete</button>
				  <button onClick={() => sendEditProductInfo(product, true)}>Edit</button>
			  </div>
		  )
	  })}
	</div>
  )
}
