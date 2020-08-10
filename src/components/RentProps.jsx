import React, {Component} from 'react'
import validate from '../utils/validate/validate.js';
import TextInput from '../customs/TextInput';
import history from '../history';
const ErrorMessages = require('../utils/validate/constants').ErrorMessages;
class RentProps extends Component {

    constructor (props) {
    super(props);
    this.state = {
        formIsValid: false,
        formControls: {
            pay: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                    isString: true,
                  }

            },
            start: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                  }
            },
            end: {
                value:'',
                touched: false,
                valid: false,
                validationRules: {
                    isRequired: true,
                  }
            },
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

setPrevData = (data) => {
    let prevData = {};
    for(let prop in data)
    {
        prevData.push(data[prop])
    }
}

formSubmitHandler = (e) => {
	const formData = {};
	for (let formElementId in this.state.formControls) {
	    formData[formElementId] = this.state.formControls[formElementId].value;
	}
    
        alert(`סכום העמלה החודשי הינו ${formData.pay*0.025} ש"ח`);
        this.props.setPrice(formData.pay*0.025);
        history.push('/CardPage');
        
  }

formReturnHandler = () => {
    history.go(-1);
}

render () {
    let eMsg = ErrorMessages;
    return (
      <div style = {{display : 'inline-flex', direction: 'rtl' } }>
          <button onClick = {console.dir(this.props.tenantsData)}> </button>
            <div>
              
                <div>
                    <p> פרטי בעל הדירה:</p>
                    <div>
                        <span>שם: {this.props.fname} {this.props.lname}</span>
                    </div>
                    <div>
                        <span>מספר ת.ז: {this.props.id}</span>
                    </div>
                    <div>
                        <span>טלפון: {this.props.phone}</span>
                    </div>
                    <div>
                        <span>כתובת מייל: {this.props.email}</span>
                    </div> 
                </div>
               
                 <div>
                    <p> פרטי הנכס המושכר:</p>
                    <div>
                        <span>כתובת: {this.props.street} {this.props.street_no} {this.props.city} דירה {this.props.apt_no}</span>
                    </div>
                </div>
                <div>
                    <p> פרטי השוכר:</p>
                    <div>
                        <span>שם: {this.props.tenantsData[0]} {this.props.tenantsData[1]}</span>
                    </div>
                    <div>
                        <span>מספר ת.ז: {this.props.tenantsData[2]}</span>
                    </div>
                    <div>
                        <span>טלפון: {this.props.tenantsData[3]}</span>
                    </div>
                    <div>
                        <span>כתובת מייל: {this.props.tenantsData[4]}</span>
                    </div>
                </div>
            </div>
           
            <div>
                <div>
                    קדימה, נשלים פרטים לביצוע העסקה
                </div>
                <div style = {{height: '18%' }}>
                    <TextInput type = "text" name="pay" 
                        placeholder="שכר הדירה בהסכם השכירות"
                        value={this.state.formControls.pay.value}
                        onChange={this.changeHandler}
                        touched={this.state.formControls.pay.touched}
                        valid={this.state.formControls.pay.valid}
                        errMsg =  {eMsg.NameErrorValidation}
                    />
                </div>
                <div >
                    <TextInput type = "date" name="start"   
                        placeholder=""
                        value={this.state.formControls.start.value}
                        onChange={this.changeHandler}
                        touched={this.state.formControls.start.touched}
                        valid={this.state.formControls.start.valid}
                        //errMsg =  {eMsg.NameErrorValidation}
                    />
                    <span> תאריך כניסה</span>
                </div>
                <div >
                    <TextInput type = "date" name="end"   
                        placeholder=""
                        value={this.state.formControls.end.value}
                        onChange={this.changeHandler}
                        touched={this.state.formControls.end.touched}
                        valid={this.state.formControls.end.valid}
                        //errMsg =  {eMsg.IdErrorValidation}
                    />
                    <span> תאריך יציאה</span>
                </div>
                <div >
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
      </div>
    );        
  }
}export default RentProps;