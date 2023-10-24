import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import CityDetails from "./pages/CityDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/:cityName/:unit" element={<CityDetailsPage />} />
      </Routes>
    </Router>
  );
};

const CityDetailsPage: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();
  const { unit } = useParams<{ unit: string }>();
  return <CityDetails cityName={cityName} unit={unit} />;
};

export default App;
