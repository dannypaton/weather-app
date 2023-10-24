import React from "react";

interface SearchFormProps {
  searchedCity: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSearch: () => void;
  unit: string;
  onUnitChange: (newUnit: string) => void;
}

const inputStyle = {
  alignItems: "flex-start",
  display: "flex",
  flexDirection: "column" as "column",
  margin: "10px 0",
};

const spacingStyle = {
  margin: "10px 0",
};

const SearchForm: React.FC<SearchFormProps> = ({
  searchedCity,
  onSearchChange,
  onSearch,
  unit,
  onUnitChange,
}) => {
  return (
    <div>
      <h2>Search for a City</h2>
      <div style={inputStyle}>
        <label>
          Name:&nbsp;
          <input
            type="text"
            placeholder="Enter a city name"
            value={searchedCity}
            onChange={onSearchChange}
            style={spacingStyle}
          />
        </label>
        <label>
          Temperature Unit:&nbsp;
          <select
            value={unit}
            onChange={(e) => {
              onUnitChange(e.target.value);
            }}
            style={spacingStyle}
          >
            <option value="metric">Celsius</option>
            <option value="imperial">Fahrenheit</option>
          </select>
        </label>
        <button onClick={onSearch}>Search</button>
      </div>
    </div>
  );
};

export default SearchForm;
