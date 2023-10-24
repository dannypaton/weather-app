import React, { useEffect, useState } from "react";

interface CityDetailsProps {
  cityName?: string;
  unit?: string;
}

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
  weather: {
    description: string;
  }[];
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
}

const containerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
};

const CityDetails: React.FC<CityDetailsProps> = ({ cityName, unit }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unit}&appid=19aa3a6db3cadea68b793afd1f642dd1`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(
          "Error fetching weather data:",
          error.response.data.message
        );
        setLoading(false);
      });
  }, [cityName, unit]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!weatherData) {
    return <div>Error loading data</div>;
  }

  return (
    <div style={containerStyle}>
      <h2>Weather Details for {cityName}</h2>
      <p>
        Current Temperature: {weatherData.main.temp}°
        {unit === "imperial" ? "F" : "C"}
      </p>
      <p>
        Feels like: {weatherData.main.feels_like}°
        {unit === "imperial" ? "F" : "C"}
      </p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
      <p>Wind Direction: {weatherData.wind.deg}°</p>
      {weatherData.wind.gust && <p>Wind Gust: {weatherData.wind.gust} m/s</p>}
    </div>
  );
};

export default CityDetails;
