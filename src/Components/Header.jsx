import React from 'react'
import logo from '../images/shelfie_icon.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
	<div>
		<header>
			<img src={logo} alt="" className='logo'/>
	  <h1>SHELFIE</h1>
		<Link className='header-link header-dashboard' to='/'>Dashboard</Link>
		<Link className='header-link' to='/add'>Add Inventory</Link>
		</header>
	</div>
  )
}
