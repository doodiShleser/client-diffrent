import React, {Component} from 'react'
import validate from '../utils/validate/validate.js';
import TextInput from './TextInput';

const ErrorMessages = require('../utils/validate/constants').ErrorMessages;
class PersonProps extends Component {

    constructor (props) {
    super(props);
    this.state = {
        formIsValid: false,
        formControls: {
            fname: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                    isString: true,
                  }

            },
            lname: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                    isString: true,
                  }
            },
            id: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                    isID: true
                  }
            },
            phone:  {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true, 
                    isPhone: true
                  }
            },
            email: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true, 
                    isEmail: true
                  },
            }
        }

    }
  }
  static defaultProps = {
    upData: { },
    no: 0,  
    }

//   sendAbove = (data,no,b) => {
//     this.props.upData(data,no,b);
//     console.dir(data)
//   }
  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;    
    const updatedControls = {
        ...this.state.formControls
        };
    const updatedFormElement = {
        ...updatedControls[name]
        };
    updatedFormElement.value = value;
    updatedFormElement.touched = true;
    updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

    updatedControls[name] = updatedFormElement;
    let formIsValid = true;
    for (let inputIdentifier in updatedControls) {
      formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
    }
    const formData = {};
    for (let formElementId in updatedControls) {
        formData[formElementId] = updatedControls[formElementId].value;
    }
    this.setState(
    prevState => ({
    formControls: updatedControls,
    formIsValid: formIsValid
    }
    ));
  //  () => {

        this.props.upData(formData,this.props.no,formIsValid);
 //   }
    
}

render () {
    let eMsg = ErrorMessages;
    return (
      <div>
            <div style = {{height: '18%' }}>
                <TextInput type = "text" name="fname" 
                    placeholder="שם פרטי"
                    value={this.state.formControls.fname.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.fname.touched}
                    valid={this.state.formControls.fname.valid}
                    errMsg =  {eMsg.NameErrorValidation}
                />
            </div>
            <div style = {{height: '18%'}}>
                <TextInput type = "text" name="lname"   
                    placeholder="שם משפחה"
                    value={this.state.formControls.lname.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.lname.touched}
                    valid={this.state.formControls.lname.valid}
                    errMsg =  {eMsg.NameErrorValidation}
                />
            </div>
            <div style = {{height: '18%'}}>
                <TextInput type = "text" name="id"   
                    placeholder="מספר ת.ז"
                    value={this.state.formControls.id.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.id.touched}
                    valid={this.state.formControls.id.valid}
                    errMsg =  {eMsg.IdErrorValidation}
                />
            </div>
            <div style = {{height: '18%'}}>
                <TextInput type = "text" name="phone"   
                    placeholder="מספר טלפון"
                    value={this.state.formControls.phone.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.phone.touched}
                    valid={this.state.formControls.phone.valid}
                    errMsg =  {eMsg.PhoneErrorValidation}
                 />
            </div>
            <div style = {{height: '18%'}}>
                <TextInput type = "email" name="email"   
                    placeholder='כתובת דוא"ל'
                    value={this.state.formControls.email.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.email.touched}
                    valid={this.state.formControls.email.valid}
                    errMsg =  {eMsg.EmailErrorValidation}
                />
            </div>
      </div>
    );        
  }
}export default PersonProps;