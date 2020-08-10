const regExs = require('./constants.js').regExs;
const validate = (value, rules) => {
    let isValid = true;
    for (let rule in rules) {
    
      switch (rule) {
            case 'isRequired': 
                isValid = isValid && requiredValidator(value); 
                break;
            case 'isEmail': 
                isValid = isValid && emailValidator(value); 
                break;
            case 'isPhone': 
                isValid = isValid && phoneValidator(value); 
                break;
            case 'isID': 
                isValid = isValid && idValidator(value); 
                break;
            case 'isString': 
                isValid = isValid && stringValidator(value); 
                break;
            default: 
                isValid = true;
      }
  
    }
    
    return isValid;
  }
  
  
  /**
   * minLength Val
   * @param  value 
   * @param  minLength
   * @return          
   */
  const minLengthValidator = (value, minLength) => {
      return value.length >= minLength;
  }

    /**
   * maxLength Val
   * @param  value 
   * @param  maxLength
   * @return          
   */
  const maxLengthValidator = (value, maxLength) => {
    return value.length <= maxLength;
}
  
  /**
   * Check to confirm that feild is required
   * 
   * @param  value 
   * @return       
   */
  const requiredValidator = value => {
      return value.trim() !== '';	
  }
  
  /**
   * Email validation
   * 
   * @param value
   * @return 
   */
  const emailValidator = value => {
      return regExs.EmailRegex.test(String(value).toLowerCase());
  }

   /**
   * phone validation
   * 
   * @param value
   * @return 
   */
  const phoneValidator = value => {
    return regExs.IsraelPhoneNumberRegex.test(String(value).toLowerCase());
}

   /**
   * id validation
   * 
   * @param value
   * @return 
   */
  const idValidator = value => {
    return regExs.IdNumberRegex.test(String(value).toLowerCase());
}

   /**
   * string validation
   * 
   * @param value
   * @return 
   */
  const stringValidator = value => {
    return regExs.InputStringRegex.test(String(value).toLowerCase());
}
  
  
  
  export default validate;