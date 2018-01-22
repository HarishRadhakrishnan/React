import React,{Component} from 'react';
import {Link} from 'react-router';

class Login extends Component{
	render(){
		return(
			<div className="container">
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<div className="panel panel-default loginview">
							<div className="panel-heading">
								<h3 className="panel-title">Login to your account</h3>
							</div>
							<div className="panel-body">
								<form accept-charset="UTF-8" role="form">
								<fieldset>
									<div className="form-group">
										<input className="form-control" placeholder="Email address" name="email" type="text"/>
									</div>
									<div className="form-group">
										<input className="form-control" placeholder="Password" name="password" type="password"/>
									</div>
									<div className="checkbox">
										<label>
											<input name="remember" type="checkbox" value="Remember Me"/> Remember Me
										</label>
									</div>
									<Link to="/nav"><button className="btn btn-lg btn-success btn-block" type="submit">Get In</button></Link>
								</fieldset>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		/*	<div className="container">
				<h3>Login to your account</h3>
				<form className="form">
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-addon"><span className="glyphicon glyphicon-envelope"></span></div>
							<input type="text" placeholder="email address" className="uname" required/>
						</div>
					</div>
					<div className="form-group">
						<div className="input-group">
							<div className="input-group-addon"><span className="glyphicon glyphicon-lock"></span></div>
							<input type="text" placeholder="password" className="pswd" required/>
						</div>
					</div>	
					<button type="submit" className="btn btn-success"><Link to="/nav">Submit</Link></button>
				</form>
			</div>	*/
		);
	}
}
export default Login;