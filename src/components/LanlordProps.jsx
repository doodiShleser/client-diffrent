import React, {Component} from 'react'
import PersonProps from '../customs/PersonProps';
import history  from '../history';
class LandlordProps extends Component {
    constructor (props) {
        super(props);
        this.state = {
            formData: {}
        }
    }

    saveData = (data) => {
        this.setState(
            prevState => ({
            formData: data
        }));
    }
    
    formSubmitHandler = () => {
        console.dir(this.state.formData);
        this.props.upData(this.state.formData);
        history.push('/Properties');
      }

    render() {
        return(
            <div>
                <div>
                    אנא הזן את פרטי בעל הנכס
                </div>
                    <PersonProps upData = {this.saveData} />
                <div>

                <button 
                    style = {{width: '60px', height: '30px', margin: '20px' }}
                    onClick={this.formSubmitHandler}       
                    disabled={ this.state.formData.length === 0}> 
                    המשך 
                </button>
                </div>
            </div>
      
        );
    }
}export default LandlordProps;