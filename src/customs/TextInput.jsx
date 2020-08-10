import React from 'react';
const TextInput = props => {

    let formControl = "form-control";
    let errTag = false;
    if (props.touched && !props.valid) {
        formControl = 'form-control control-error';
        errTag = true;
    }


    return (
        <div>
            <div >
                <input 
                    type={props.type} 
                    className={formControl} 
                    errmsg = {props.errMsg}
                    {...props} 
                />
            </div>
            <div>
                <div >
                    <p 
                        style = {{display: errTag ? 'block' : 'none' }} 
                        className = "error-message">{props.errMsg}
                    </p>
                </div>
            </div>

        </div>
    );
}

export default TextInput;



// import React, {Component} from 'react';
// import PhoneErrorValidation from '../utils/validate/constants';
// import IdErrorValidation from '../utils/validate/constants';
// import NameErrorValidation from '../utils/validate/constants';
// import EmailErrorValidation from '../utils/validate/constants';
// //import {NameErrorValidation,PhoneErrorValidation,IdErrorValidation,EmailErrorValidation} from '../utils/validate/constants';
// class TextInput extends Component {

//      constructor (props) {
//         super(props);
//         this.state = {
//             errText : {
//                 name: NameErrorValidation,
//                 phone: PhoneErrorValidation,
//                 id: IdErrorValidation,
//                 email: EmailErrorValidation
//             },
//         }
//         }
//     render() {
//         let formControl = "form-control";
//         if (this.props.touched && !this.props.valid) {
//             formControl = 'form-control control-error';
//         }

//         let errMsg = this.state.errText[this.props.name];
//         let valid =  this.props.valid;
//         return (
//             <div className="form-group">
//                 <div>
//                     <input 
//                         type={this.props.type} 
//                         className={formControl}
//                         placeholder = {this.props.placeholder}
//                         value = {this.props.value}
//                     />
//                 </div>
//                 <div style = { { display: valid ? 'block' : 'none'} } className = "error-message" >
//                     <p>errMsg</p>
//                 </div>
//             </div>
//         );
//     }
// } export default TextInput;