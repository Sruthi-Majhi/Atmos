import * as React from "react";
import { useState } from "react";
import "./SearchBox.css";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function SearchBox({updateInfo}) {
  
    let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "020fc555ba8eca4aa7665a50ba1d3ba0";

  
  
  let getWeatherInfo = async () => {
    try{
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    let jsonResponse = await response.json();
    console.log(jsonResponse);
    let result = {
      city:city,
      temp: jsonResponse.main.temp,
      tempMin: jsonResponse.main.temp_min,
      tempMax: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };
    setError(false);
    return result;
  }

catch(err)
{
  throw err;
}
  }
 

  

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
   try{
    e.preventDefault();
    setCity("");
    let newinfo = await getWeatherInfo();
    updateInfo(newinfo);
   }
   catch(err)
   {
    setError(true);
   }

   
  };

  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <br />
        <TextField
          id="outlined-basic"
          label="City"
          variant="outlined"
          required
          onChange={handleChange}
          value={city}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
      {error && <p style={{color:"red"}}>No such place exists!</p>}
    </div>
  );
}

