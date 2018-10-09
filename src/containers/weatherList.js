import React, {Component} from 'react'
import {connect} from 'react-redux'
import Chart from '../components/chart'
import GoogleMap from '../components/googleMap'

class weatherList extends Component{

renderWeather(cityData){
const name= cityData.city.name;
const temps = cityData.list.map(weather => weather.main.temp);
const pressures = cityData.list.map(weather => weather.main.pressure)
const humidities = cityData.list.map(weather => weather.main.humidity)
const {lat,lon} = cityData.city.coord


        return (
            <tr key={name}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td><Chart data={temps} color="yellow" units="K"/></td>
                <td><Chart data={pressures} color="green" units="hPA"/></td>
                <td><Chart data={humidities} color="brown" units="%"/></td>
                
            </tr>
        )
    }

    render(){
        return(

<table className="table table-hover">
<thead>

<tr>
    <th>City</th>
    <th>Temperature(K)</th>
    <th>Pressure(hPA)</th>
    <th>Humidity(%)</th>
    </tr>

</thead>
<tbody>
    {this.props.weather.map(this.renderWeather)}
</tbody>
</table>

        );
    }
}

function mapStateToProps(state){
    return {weather: state.weather};
}

export default connect(mapStateToProps)(weatherList)