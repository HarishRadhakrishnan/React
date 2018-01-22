import React,{Component} from 'react';
import Add from './add-component';
import {connect} from 'react-redux';
import {editUserData} from '../actions/actions';
import {deleteUserData} from '../actions/actions';
import store from '../store/store';
import { Router } from 'react-router';

class Customer extends Component{
	constructor(props){
        super(props);
        this.state = {
            users : this.props.users
        }
    }
	static get contextTypes() {
		return {
		  router: React.PropTypes.object.isRequired,
		};
	  }
	editUserDetails(user,index){ 
		console.log(index);
		this.context.router.push('/nav');
		store.dispatch(editUserData(user,index));
	}
	
	deleteUserDetails(id){
		store.dispatch(deleteUserData(id));
	}
	
	_userData(){
		console.log("user",this.props)
		return this.props.userData.map((user,i)=> {
						return (
						<tr>
							<td>{user.firstname}</td>
							<td>{user.lastname}</td>
							<td>{user.state}</td>
							<td>{user.city}</td>
							<td>{user.email}</td>
							<td> <button onClick= {this.editUserDetails.bind(this,user,i)}>Edit</button></td>
							<td> <button onClick= {this.deleteUserDetails.bind(this,user.id)}>Delete</button></td>
						</tr>
						)
		})
	}
	render(){
		return(
			<div className="customer">
				<table className='table'>
					<thead>
						<tr><h3>Customer Details</h3></tr>
						<tr>
							<th>Firstname</th>
							<th>Lastname</th>
							<th>State</th>
							<th>City</th>
							<th>Email</th>
							<th>Edit</th>
							<th>Delete</th>
						</tr>
					</thead>
					<tbody>{this._userData()}</tbody>
				</table>
			</div>
		);
	}
}
const mapStateToProps = function(state){
	return {
		userData : state.todoApp1.users
	}
}
export default connect(mapStateToProps)(Customer);