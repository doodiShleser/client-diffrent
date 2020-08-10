import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import TenantProps from "./components/TenantProps";
import Login from "./components/Login";
import LanlordProps from "./components/LanlordProps";
import history from './history';
import Register from "./components/Register";
import Properties from "./components/Properties";
import CardPage from "./components/CardPage";
import RentProps from "./components/RentProps";

export default class Routes extends Component {
    constructor(props){
        super(props);
        this.state ={
            userName: "",
            lanlordInfo : {},
            properties : {},
            tenantsInfo: [],
            price: "",
        }
    }
    setUserName = (name) =>{
        this.setState({
            userName: name
        });
    }
    setPrice = (p) =>{
        this.setState({
            price: p
        });
    }
    setLandlordData = (data) => {
        this.setState(
            prevState => ({
                lanlordInfo : data
            }));
    }
    setTenantsData = (data) => {
        this.setState(
            prevState => ({
                tenantsInfo : data
            }));
    }
    setProperties = (data) => {
        this.setState(
            prevState => ({
                properties : data
            }));
    }
    render() {
        let lanlordInfo =  this.state.lanlordInfo;
        let properties = this.state.properties;
        let tenantsInfo = [];//this.state.tenantsInfo[0];
        for(let prop in this.state.tenantsInfo[0])
        {
            console.log(this.state.tenantsInfo[0].email)
            tenantsInfo.push(this.state.tenantsInfo[0][prop]);
        }
        return(
            <Router history={history}>
                <Switch>
                    {/* <Route path="/Register"  component={Register} /> */}
                    <Route path="/"  exact component={() => <Login history = {history}/>} />
                    <Route path="/RentProps"  component={() => 
                        <RentProps 
                            history = {history} 
                            setPrice = {this.setPrice} 
                            tenantsData ={ tenantsInfo}
                            {...lanlordInfo}
                            {...properties}
                            
                        />
                        } 
                    />
                    <Route path="/LanlordProps"  component={() => <LanlordProps history = {history} upData = {this.setLandlordData}/>} />
                    <Route path="/Properties" component={() => <Properties history = {history} upData = {this.setProperties} />} />
                    <Route path="/CardPage" component={() => <CardPage history = {history} price = {this.state.price}/>} />
                    <Route path="/TenantProps" component={() => <TenantProps history = {history} upData = {this.setTenantsData} />} />
                    
                </Switch>
            </Router>
        )
    }
}