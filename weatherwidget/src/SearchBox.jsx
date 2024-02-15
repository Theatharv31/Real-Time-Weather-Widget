import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  "./SearchBox.css";
import { useState } from 'react';
import { colors } from '@mui/material';



export default function SearchBox({updateInfo}) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);


    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "//";

    let getWeatherInfo = async () => {
        try{
            let responce = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponce = await responce.json();
        
        let result = {
            city: city,
            temp: jsonResponce.main.temp,
            tempMin: jsonResponce.main.temp_min,
            tempMax: jsonResponce.main.temp_max,
            humidity: jsonResponce.main.humidity,
            feelsLike: jsonResponce.main.feels_like,
            weather: jsonResponce.weather[0].description,


        };
        console.log(result);
        return result;

        }
        catch(err){
            throw(err);
        }
    };
        


  


    let handleChange = (event) => {

        setCity(event.target.value);    

    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setError(false);
        }catch(err){
            setError(true);
        }
       
    };
    return(
        <div className="SearchBox">
            
            <form onSubmit={handleSubmit}>
            <TextField id="city" label="City-name" variant="outlined" required value={city} onChange={handleChange} />
            <br></br>
            <br></br>
            <Button variant="contained" type= "submit" >
        Search
      </Button>
      {error && <p style={{color: "red"}}>No such Place Exist!</p>}
            </form>
        </div>

    );
}