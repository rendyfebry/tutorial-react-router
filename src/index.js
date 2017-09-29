import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'

import logo from './logo.svg';
import './index.css'

import Welcome from './Welcome'
import App1 from './App1'
import App2 from './App2'


const Header = () => (
	<nav className="navbar navbar-default">
		<div className="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Project name</a>
			</div>
			<div className="navbar-collapse collapse">
				<ul className="nav navbar-nav">
					<li><Link to='/'>Home</Link></li>
					<li><Link to='/app1'>App 1</Link></li>
					<li><Link to='/app2'>App 2</Link></li>
				</ul>
			</div>
		</div>
	</nav>
)

const Main = () => (
	<main>
		<header className="jumbotron">
			<img src={logo} className="App-logo" alt="logo" />
			<h1 className="App-title">Welcome to React</h1>
		</header>
		<div className="content">
			<Switch>
				<Route exact path='/' component={Welcome} />
				<Route path='/app1' component={App1} />
				<Route path='/app2' component={App2} />
			</Switch>
		</div>
	</main>
)

ReactDOM.render((
	<BrowserRouter>
		<div className="container">
			<Header />
			<Main />
		</div>
	</BrowserRouter>
), document.getElementById('root'))

registerServiceWorker()
