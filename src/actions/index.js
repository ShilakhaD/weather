import axios from 'axios'

const API_KEY = '900578763529ec4df6331883950a6d67'
const BASE_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const SEARCH_WEATHER = 'SEARCH_WEATHER';

export function searchWeather(city){

    const url=`${BASE_URL}&q=${city},us`
    const request= axios.get(url)


    return{
        type: SEARCH_WEATHER,
        payload: request
    };
}