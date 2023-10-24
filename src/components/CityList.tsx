import React from "react";
import { Link } from "react-router-dom";

interface City {
  name: string;
  temperature: number;
  weather: string;
  unit: string;
}

interface CityListProps {
  favorites: City[];
  onRemove: (cityName: string) => void;
}

const listStyle = {
  listStyleType: "list",
};

const listItemStyle = {
  textDecoration: "none",
  // margin: '0 auto'
};

const CityList: React.FC<CityListProps> = ({ favorites, onRemove }) => {
  return (
    <div>
      <h2>Favorite Cities</h2>
      <ul style={listStyle}>
        {favorites.map((city) => (
          <li key={city.name}>
            <div>
              <Link to={`/${city.name}/${city.unit}`} style={listItemStyle}>
                <h3>{city.name}</h3>
                <p>
                  Temperature: {city.temperature}&deg;
                  {city.unit === "metric" ? "C" : "F"}
                </p>
                <p>Weather: {city.weather}</p>
              </Link>
              <button onClick={() => onRemove(city.name)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;
