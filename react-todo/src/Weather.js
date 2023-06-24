import React from "react";
import styles from "./Weather.module.css";


const Weather = () => {

    const [weatherData, setWeatherData]= React.useState(["city", "weather"])

    const geoSuccess = async (position) => {
        const {
            coords: {latitude, longitude}
        } = position;
    
        const API_KEY = "7a38e6a93c3e57a925e618636e9ba5fb";
        const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        
        try { 
            const response = await fetch(API_URL);
            const data = await response.json();
            console.log(data);
            setWeatherData([data.name, `${data.weather[0].main} / ${data.main.temp} °C`])
        } catch (error) {
            console.log(error);
        }
    }

    const geoFail = ()=> {
        setWeatherData(["nowhere", "not found"]);
        console.log("failed to get location data");
    };

    React.useEffect(()=>{
    navigator.geolocation.getCurrentPosition(geoSuccess, geoFail);
    }, []);

    return (
        <div className={styles.Weather}>
            <span>{weatherData[0]}</span>
            <span>{weatherData[1]}</span>
        </div>
    );
};


export default Weather;



