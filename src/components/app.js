import React, { Component } from 'react';
import Title from './Title'
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weatherList'

export default class App extends Component {
  render() {
    return (
      <div>
        <Title/>
        <SearchBar/>
        <WeatherList/>
      </div>
    );
  }
}
