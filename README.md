# Getting Started with Weather App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

This will install npm packages.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# App Information

In src folder, there are two folders: components and pages.

# Pages features Dashboard and CityDetails

Dashboard page - features a fetch call that sends data to SearchForm.

CityDetails - features a fetch call that displays favorite city details.

# Components features CityList and SearchForm

CityList display added cities to favorite list, and gives user ability to remove city.

SearchForm displays a search form with two units, to enter city and choose temperature unit.

# Page routing in App

Using react-router-dom, we have two page routes, Dashboard (/) and CityDetails which is dynamic (/:cityName/:unit)