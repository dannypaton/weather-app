import React, { useState, useEffect } from "react";
import SearchForm from "../components/SearchForm";
import CityList from "../components/CityList";
import axios from "axios"; // Import Axios for making API calls

interface City {
  name: string;
  temperature: number;
  weather: string;
  unit: string;
}

const errorStyle = {
  color: "#e44141",
};

const containerStyle = {
  maxWidth: "900px",
  margin: "0 auto",
};

const Dashboard: React.FC = () => {
  const [searchedCity, setSearchedCity] = useState<string>("");
  const [favorites, setFavorites] = useState<City[]>([]);
  const [unit, setUnit] = useState<string>("metric");
  const [error, setError] = useState("");

  useEffect(() => {
    // Load favorite cities from local storage (if available)
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    ) as City[];
    setFavorites(storedFavorites);
  }, []);

  useEffect(() => {
    // Store favorite cities in local storage whenever it changes
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleSearch = () => {
    // fetch weather data for the searched city and add it to the favorites
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchedCity}&units=${unit}&appid=19aa3a6db3cadea68b793afd1f642dd1`
      )
      .then((response) => {
        const newCity: City = {
          name: response.data.name,
          temperature: response.data.main.temp,
          weather: response.data.weather[0].description,
          unit,
        };
        setFavorites([...favorites, newCity]);
        setSearchedCity("");
        setError("");
      })
      .catch((error) => {
        setError(error.response.data.message);
      });
  };

  const removeFavorite = (cityName: string) => {
    const updatedFavorites = favorites.filter((city) => city.name !== cityName);
    setFavorites(updatedFavorites);
  };

  return (
    <div style={containerStyle}>
      <h1>Dashboard</h1>
      <SearchForm
        searchedCity={searchedCity}
        onSearchChange={(e) => setSearchedCity(e.target.value)}
        onSearch={handleSearch}
        unit={unit}
        onUnitChange={(newUnit) => setUnit(newUnit)}
      />
      <p style={errorStyle}>{error ? error : ""}</p>
      <CityList favorites={favorites} onRemove={removeFavorite} />
    </div>
  );
};

export default Dashboard;
