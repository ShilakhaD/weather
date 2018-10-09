import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {searchWeather} from '../actions/index';
import {
    Button,
    
} from 'carbon-components-react'

class SearchBar extends Component{

    constructor(props){
        super(props)
        this.state = {term: ''};
        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
this.setState({term: event.target.value})
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.searchWeather(this.state.term)
        this.setState({term:''})
        //we need to go and fetch weather data
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit}
            className="input-group">
            <input 
            placeholder="Enter the city you want the forcast for" 
            className="form-control"
            value={this.state.term}
            onChange={this.onInputChange}
            />
            <Button type="submit" className="btn btn-primary">Submit</Button>

            
            </form>


        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({searchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);