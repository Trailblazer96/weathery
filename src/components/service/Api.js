import axios from "axios"


const URL="api.openweathermap.org/data/2.5/weather";
const API_KEY = "d4dd0cf64fcde68cdd68527ed40349b6";

export const getData =()=>{
    return axios.get(`${URL}?q=mumbai,india&appid=${API_KEY}&units=metric`)
}