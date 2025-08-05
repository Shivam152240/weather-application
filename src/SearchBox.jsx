import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import  './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    
      let [city, setCity] = useState("");
      let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "155488e9c30c490065b4115159586e90";
    let getWeatherInfo = async () => {
        try{
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        let result = {
            city: jsonResponse.name,
            temp : jsonResponse.main.temp,
            temp_min : jsonResponse.main.temp_min,
            temp_max : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        }catch(err){
            throw err;
        }
    
    }
let handleChange = (evt) => {
    setCity(evt.target.value);
    setError(false); // Reset error on input change
}
let handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
        let newInfo = await getWeatherInfo();
        setCity("");
        setError(false); // Reset error on successful fetch
        updateInfo(newInfo);
    } catch (err) {
        setError(true);
    }
}

    return(
        <div className='SearchBox'>
            <form  onSubmit={handleSubmit}>
              <TextField
                className='search'
                id="city"
                label="City Name "
                variant="outlined"
                required
                value={city}
                onChange={handleChange}
                helperText={error ? "Please enter a valid city name" : ""}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "1rem"
                  },
                  "& .MuiFormHelperText-root": {
                    color: "red"
                  }
                }}
              />
             

              <br/><br/>
               <Button variant="contained" type='submit'> Search </Button>
              
            </form>
        </div>
    )
}