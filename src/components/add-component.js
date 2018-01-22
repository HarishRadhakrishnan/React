import React,{Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import store from '../store/store';
import Customer from './customer-component';
import {addUserData} from '../actions/actions';
import {updateUserData} from '../actions/actions';

class Add extends Component{
	constructor(props){
		super(props);
		this.state={
			submitName:'',
			firstname:this.props.firstname,
			lastname:this.props.lastname,
			state:this.props.state,
			city:this.props.city,
			email:this.props.email,
			id : this.props.id
		}
	}
	static get contextTypes() {
		return {
		  router: React.PropTypes.object.isRequired,
		};
	  }
	
	onChange(e){
		this.setState({
			[e.target.name]:e.target.value,
		})
	}
	_onSubmit(e){
		e.preventDefault();
		if(this.state.submitName == "ADDUSER"){
			store.dispatch(addUserData(this.state));
		}
		else if(this.state.submitName == "UPDATEUSER"){
			store.dispatch(updateUserData(this.state));
		}
		this.context.router.push('/customer');
	}
	
	setSubmit(e){	
		if(e.target.value == "ADDUSER"){
			this.setState({
				submitName : e.target.value,
				id:Date.now()
			});
		}
		else{
			this.setState({
				submitName : e.target.value
			});
		}
		
	}
	
	render(){
		return(
			<div className="addUser container">
				<h1>Add Customer</h1>
				<form className="form" onSubmit = {this._onSubmit.bind(this)}>
					<div className="form-group">
						<label for="fnameInput">First Name</label>
						<input type="text" className="form-control" name="firstname" value={this.state.firstname} onChange={this.onChange.bind(this)}/>
					</div>
					<div className="form-group">
						<label for="lnameInput">Last Name</label>
						<input type="text" className="form-control" name="lastname" value={this.state.lastname} onChange={this.onChange.bind(this)}/>
					</div>
					<div className="form-group">
						<label for="stateInput">State</label>
						<select className="form-control" name="state" value={this.state.state} onChange={this.onChange.bind(this)}>
                            <option value="">Select State</option>
                            <option value="Karnataka">Karnataka</option>
                            <option value="TamilNadu">TamilNadu</option>
							<option value="Maharastra">Maharastra</option>
							<option value="Kerala">Kerala</option>
                        </select>
					</div>
					<div className="form-group">
						<label for="cityInput">City</label>
						<select className="form-control" name="city" value={this.state.city} onChange={this.onChange.bind(this)}>
                            <option value="">Select City</option>
                            <option value="Bengaluru">Bengaluru</option>
                            <option value="Chennai">Chennai</option>
							<option value="Mumbai">Mumbai</option>
							<option value="Kochi">Kochi</option>
                        </select>
					</div>
					<div className="form-group">
						<label for="emailInput">Email</label>
						<input type="email" className="form-control" name="email" value={this.state.email} onChange={this.onChange.bind(this)}/>
					</div>
					<input type="submit" className="btn btn-primary" value="ADDUSER" onClick={this.setSubmit.bind(this)}/>
					<input type="submit" className="btn btn-primary" value="UPDATEUSER" onClick={this.setSubmit.bind(this)}/>
				</form>
				
			</div>
		);
	}
}

const mapStateToProps = function(state){
	return {
		firstname:state.todoApp1.userInfo.firstname,
		lastname:state.todoApp1.userInfo.lastname,
		state:state.todoApp1.userInfo.state,
		city:state.todoApp1.userInfo.city,
		email:state.todoApp1.userInfo.email,
		id : state.todoApp1.userInfo.id
	}
}
export default connect(mapStateToProps)(Add);