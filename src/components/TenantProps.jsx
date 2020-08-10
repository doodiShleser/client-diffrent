import React, {Component} from 'react'
import PersonProps from '../customs/PersonProps';
import history from '../history'

class TenantProps extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            isValid : [false],
            tenant_no : 1,
            formData : []
        }
    }

    click_no = (i) => {
        let valid = this.state.isValid;
        if( i > this.state.tenant_no ){
            for(let j = this.state.tenant_no; j<i;j=j+1)
                valid.push(false);
            this.setState(
                prevState => ({
                    tenant_no: i,
                    isValid : valid,
                }));
        }
        
        else if( i < this.state.tenant_no) {
            valid = valid.slice(0,i);
        }
        this.setState(
            prevState => ({
                tenant_no: i,
                isValid : valid,
            }));
            console.log(valid)
    }

    saveData = (data, i,valid) => {
        let data2keep = this.state.formData;
        data2keep[i] = data;

        let validArray = this.state.isValid;
        validArray[i] = valid;
       
        this.setState(
            prevState => ({
            formData: data2keep,  
            isValid : validArray
            }));
    }
    formSubmitHandler = () => {
        console.dir(this.state.formData);
        this.props.upData(this.state.formData);
        alert('פרטי השוכרים מועברים לבדיקה');
        alert('מיד נעבור לביצוע הסליקה ')
        history.push('/RentProps');
    }

    formReturnHandler = () => {
        history.go(-1);
    }
    render() {
        let allValid = true;
        for (let valid in this.state.isValid) {
            allValid = this.state.isValid[valid] && allValid;
        } 

        let tenantsInfo = [];
        for (let i = 0; i < this.state.tenant_no; i = i+1)
        {
            tenantsInfo.push(
                <div >
                    <p> שוכר {i+1}:</p>
                    <PersonProps upData = {this.saveData} no = {i} />
            </div>
            )
        } 
        return(
            <div style = {{display : 'inline-flex', direction: 'rtl' } }>
                <div style = {{ width : '20%'}}>
                    <p> מהו מספר השוכרים אותם תרצה לבדוק?</p>
                    <div >
                        <button className = {this.state.tenant_no ===1 ? "used" : "not-used"}
                            onClick = { () => this.click_no (1)}> 1</button>
                        <button className = {this.state.tenant_no ===2 ? "used" : "not-used"}
                            onClick = { () =>this.click_no(2)}>2</button>
                        <button className = {this.state.tenant_no ===3 ? "used" : "not-used"}
                            onClick = {() => this.click_no(3)}>3</button>
                        <button className = {this.state.tenant_no ===4 ? "used" : "not-used"}
                            onClick = {() => this.click_no(4)}>4</button>
                    </div>
                </div>
                <div style = {{width: '80%'}}>
                    <div style = {{display : 'inline-flex', direction: 'rtl'} }>
                        {tenantsInfo}
                    </div>
                    <div>
                        <button 
                            style = {{width: '60px', height: '30px', margin: '20px' }}
                            onClick={this.formReturnHandler}>        
                            חזור
                        </button>
                        <button 
                            style = {{width: '60px', height: '30px', margin: '20px' }}
                            onClick={this.formSubmitHandler}       
                            disabled={!allValid | this.state.formData.length === 0}> 
                            בדוק 
                        </button>
                    </div>
                </div>
      
                
            </div>
      
        );
    }
}export default TenantProps;