import React, {Component } from 'react';
import '../index.css';
import validate from '../utils/validate/validate.js';
import TextInput from '../customs/TextInput';
import history from '../history';
const ErrorMessages = require('../utils/validate/constants').ErrorMessages;

class CardPage extends Component  {
    constructor(props){
        super(props);
        this.state = {
            formIsValid: false,
            formControls: {
                card: {
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
                        isString: true,
                      }
    
                },
                cvv: {
                    value:'',
                    touched: false,
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isString: true,
                      }
    
                },
                owner: {
                    value:'',
                    touched: false,
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isString: true,
                      }
    
                },
                validity: {
                    value:'',
                    touched: false,
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isString: true,
                      }
    
                },
                email: {
                    value:'',
                    touched: false,
                    valid: false,
                    validationRules: {
                        isRequired: true,
                        isEmail: true,
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

    reagain =  () => {
        history.go(-1);
    }
    newCheck =  () => {
        alert("העסקה בוצעה בהצלחה")
        history.go(-(history.length - 2));
    }

    render(){
        let eMsg = ErrorMessages;
    return(
        <div style = {{display : 'inline-flex', direction: 'rtl' } }>
            <div>
                <p>לתשלום: 2.5% מסך העסקה</p>
                <p>  {this.props.price} ש"ח</p>
            </div>
            <div>
                <h2> אמצעי תשלום</h2>
                <div > 
            
                    <div style = {{height: '18%' }}>
                        <TextInput type = "text" name="card" 
                            placeholder="מספר כרטיס אשראי"
                            value={this.state.formControls.card.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.card.touched}
                            valid={this.state.formControls.card.valid}
                            errMsg =  {eMsg.NameErrorValidation}
                        />
                    </div>
                    <div style = {{height: '18%' }}>
                        <TextInput type = "text" name="validity" 
                            placeholder="תוקף"
                            value={this.state.formControls.validity.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.validity.touched}
                            valid={this.state.formControls.validity.valid}
                            errMsg =  {eMsg.NameErrorValidation}
                        />
                    </div>
                    <div style = {{height: '18%' }}>
                        <TextInput type = "text" name="cvv" 
                            placeholder="CVV"
                            value={this.state.formControls.cvv.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.cvv.touched}
                            valid={this.state.formControls.cvv.valid}
                            errMsg =  {eMsg.NameErrorValidation}
                        />
                    </div>
                    <div style = {{height: '18%' }}>
                        <TextInput type = "text" name="owner" 
                            placeholder="שם בעל הכרטיס"
                            value={this.state.formControls.owner.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.owner.touched}
                            valid={this.state.formControls.owner.valid}
                            errMsg =  {eMsg.NameErrorValidation}
                        />
                    </div>
                    <div style = {{height: '18%' }}>
                        <TextInput type = "text" name="id" 
                            placeholder="מספר ת.ז של בעל הכרטיס"
                            value={this.state.formControls.id.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.id.touched}
                            valid={this.state.formControls.id.valid}
                            errMsg =  {eMsg.IdErrorValidation}
                        />
                    </div>
                    <div style = {{height: '18%' }}>
                        <TextInput type = "email" name="email" 
                            placeholder="כתובת מייל לשליחת חשבונית"
                            value={this.state.formControls.email.value}
                            onChange={this.changeHandler}
                            touched={this.state.formControls.email.touched}
                            valid={this.state.formControls.email.valid}
                            errMsg =  {eMsg.EmailErrorValidation}
                        />
                    </div>
                </div>
                <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh'}}>
                    <button onClick = {this.reagain }>חזור</button>
                    <button 
                        style = {{width: '60px', height: '30px', margin: '20px' }}
                        disabled={!this.state.formIsValid} 
                        onClick = {this.newCheck }>
                            אישור
                    </button>
            </div>
            </div>
        </div>

    )}
}

export default CardPage;