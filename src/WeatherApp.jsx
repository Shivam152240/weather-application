import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";


export default function weatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
         city: "Delhi",
        feelslike:37.46,
        temp: 30.46,
        temp_min: 30.46,
        temp_max: 30.46,
        humidity: 81,
        weather: "overcast clouds"
    })
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);

    }
    return (
        <div style={{textAlign: 'center'}}>
            <h1>WEATHER  APPLICATION</h1>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
          
        </div>
    );
}