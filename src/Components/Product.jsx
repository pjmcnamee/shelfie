import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Product(props) {

	function deleteProduct(id, bool){
		axios.delete(`/api/products/${id}`).then(() => {
			console.log('Deleted Product!')
		}).catch(err => console.log('Front end error on deleting product ', err))
		if(bool === true){
		props.deleteSwitch(false)
	}else{
		props.deleteSwitch(true)
	}
}

  return (
	<div>
	  {props.products.map(product => {
		  return (
			  <div key={product.product_id} className='product-cards'>
				  <img src={product.product_imageurl} alt=""/>
					<div className='product-info'>
				  <h4>{product.product_name}</h4>
				  <h4>${product.product_price}</h4>
					</div>
					<div className='product-buttons'>
				<Link className='product-nav' onClick={() => deleteProduct(product.product_id, true)}>Delete</Link>
				<Link className='product-nav edit-link' to={{
					pathname: `/edit/${product.product_id}`,
					state: {
						product: product
					}
				}}>Edit</Link>
					</div>
			  </div>
		  )
	  })}
	</div>
  )
}
