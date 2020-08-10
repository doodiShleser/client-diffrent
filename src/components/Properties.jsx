import React, {Component} from 'react'
import validate from '../utils/validate/validate.js';
import TextInput from '../customs/TextInput';
import history from '../history';
const ErrorMessages = require('../utils/validate/constants').ErrorMessages;
class Properties extends Component {

    constructor (props) {
    super(props);
    this.state = {
        formIsValid: false,
        formControls: {
            city: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                    isString: true,
                  }

            },
            street: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                    isString: true,
                  }
            },
            street_no: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                    isNumber: true
                  }
            },
            apt_no:  {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true, 
                    isNumber: true
                  }
            },
            rooms: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true, 
                    isNumber: true
                  },
            }
        }

    }
  }
  
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
  
    this.setState({
      formControls: updatedControls,
      formIsValid: formIsValid
    });
    
}

formSubmitHandler = () => {
	const formData = {};
	for (let formElementId in this.state.formControls) {
	    formData[formElementId] = this.state.formControls[formElementId].value;
	}
    
        this.props.upData(formData);
        history.push('/TenantProps');
        
  }

formReturnHandler = () => {
    history.go(-1);
}

render () {
    let eMsg = ErrorMessages;
    return (
      <div>
            <div>
                אנא הזן את פרטי הנכס
            </div>
            <div style = {{height: '18%' }}>
                <TextInput type = "text" name="city" 
                    placeholder="עיר"
                    value={this.state.formControls.city.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.city.touched}
                    valid={this.state.formControls.city.valid}
                    errMsg =  {eMsg.NameErrorValidation}
                />
            </div>
            <div style = {{height: '18%'}}>
                <TextInput type = "text" name="street"   
                    placeholder="רחוב"
                    value={this.state.formControls.street.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.street.touched}
                    valid={this.state.formControls.street.valid}
                    errMsg =  {eMsg.NameErrorValidation}
                />
            </div>
            <div style = {{height: '18%'}}>
                <TextInput type = "number" name="street_no"   
                    placeholder="מספר בית"
                    value={this.state.formControls.street_no.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.street_no.touched}
                    valid={this.state.formControls.street_no.valid}
                    errMsg =  {eMsg.IdErrorValidation}
                />
            </div>
            <div style = {{height: '18%'}}>
                <TextInput type = "number" name="apt_no"   
                    placeholder="מספר דירה"
                    value={this.state.formControls.apt_no.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.apt_no.touched}
                    valid={this.state.formControls.apt_no.valid}
                    errMsg =  {eMsg.PhoneErrorValidation}
                 />
            </div>
            <div style = {{height: '18%'}}>
                <TextInput type = "number" name="rooms"   
                    placeholder='מספר חדרים'
                    value={this.state.formControls.rooms.value}
                    onChange={this.changeHandler}
                    touched={this.state.formControls.rooms.touched}
                    valid={this.state.formControls.rooms.valid}
                    errMsg =  {eMsg.EmailErrorValidation}
                />
            </div>
            <div style = {{height: '10%'}}>
                <button 
                    style = {{width: '60px', height: '30px', margin: '20px' }}
                    onClick={this.formSubmitHandler}       
                    disabled={!this.state.formIsValid}> 
                    המשך 
                </button>
                <button 
                    style = {{width: '60px', height: '30px', margin: '20px' }}
                    onClick={this.formReturnHandler}>      
                    חזור
                </button>
            </div>

      </div>
    );        
  }
}export default Properties;