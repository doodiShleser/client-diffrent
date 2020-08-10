import React, {Component } from 'react';
import axios from 'axios';
import '../index.css';
import history from '../history';
import { get } from 'lodash';
// const URL =  "http://localhost:3000/"
const API_LOGIN_URL =  "https://jiw9g3hymb.execute-api.eu-west-1.amazonaws.com/v1/newlogin";
// const API_EXISTS_URL = URL+"userExists";
class Login extends Component  {
    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : "",
            successMessage: null,
            asyncError: {
                errorText: 'undefined request error',
                errorState: false
              }
        }
    }
    handleChange = (e) => {
        const {id , value} = e.target;
        this.setState(prevState => ({
            ...prevState,
            [id] : value
        }));

    }
    handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "email":this.state.email,
            "password":this.state.password,
        }
        console.log("email: ", payload.email);
        let self = this;
        axios.post(API_LOGIN_URL, {user_name: self.state.email, password:self.state.password} )
        .then(data => {
          if (this.state.asyncError.errorState) {
            this.setState(prevState => {
              return {
                ...prevState,
                ...{
                  ...prevState.asyncError,
                  ...{
                    asyncError: {
                      errorText: '',
                      errorState: false
                    }
                  }
                }
              }
            })
          }
          history.push('/LanlordProps');
        })
        .catch(err => {
            console.log(get(err, 'response.data.errorCode'));
            switch(get(err, 'response.data.errorCode')){
                case 'DENIED_USER':
                    err = " אינך מורשה, אנא פנה למנהל האישי";
                    break;
                case 'MANY_ATTEMPTS':
                    err = " נחסמת מכניסה לאתר, נסה שוב בעוד 5 דקות";
                    break
                default:
                    err = "משהו השתבש, אנא פנה לתמיכה";
            }
            alert(err);

                
            this.setState(prevState => {
            return {
              ...prevState,
              ...{
                ...prevState.asyncError,
                ...{
                  asyncError: {
                    errorText: err,
                    errorState: true
                  }
                }
              }
            }
          })
        }) 
    };
    render(){
    return(
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}> 
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                {/* <label htmlFor="exampleInputEmail1">Email address</label> */}
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="אימייל" 
                       value={this.state.email}
                       onChange={this.handleChange}
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                </small> */}
                </div>
                <div className="form-group text-left">
                {/* <label htmlFor="exampleInputPassword1">Password</label> */}
                <input type="password" 
                       className="form-control" 
                       id="password" 
                       placeholder="סיסמא"
                       value={this.state.password}
                       onChange={this.handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={this.handleSubmitClick}
                >כניסה למערכת</button>
            </form>
            <div className="alert alert-success mt-2" style={{display: this.state.successMessage ? 'block' : 'none' }} role="alert">
                {this.state.successMessage}
            </div>
        </div>
        </div>
    )}
}

export default Login;