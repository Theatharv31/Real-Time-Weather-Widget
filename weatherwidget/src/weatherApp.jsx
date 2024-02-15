import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./indoBox";

export default function weatherApp() {

    const [weatherInfo, setWeatherInfo] = useState({
        city: "Banglore",
        feelslike:24.84,
        temp: 25.05,
        tempMax: 24,
        tempMin: 24,
        weather: "overcast clouds",
        humidity: 28,
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>
                Weather App By Atharv
            </h2>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info= {weatherInfo}/>
        </div>
    );
}