import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import CreateForm from './Components/Form'
import EditForm from './Components/EditForm'

export default (
	<Switch>
		<Route component={Dashboard} exact path='/'/>
		<Route component={CreateForm} path='/add'/>
		<Route component={EditForm} path='/edit/:id'/>
	</Switch>
)