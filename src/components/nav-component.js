import React,{Component} from 'react';
import {Link} from 'react-router';

class Nav extends Component{
	render(){
		return(
			<div>
				<nav>
					<div>
						<ul>
							<li>Add Customer</li>
							<li><Link to="/customer">Customer List</Link></li>
						</ul>
					</div>
				</nav>
				<div className="navDefaultPage">
					{this.props.children}
				</div>
			</div>
		);
	}
}
export default Nav;