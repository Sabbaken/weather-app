import React from 'react';
import SearchBar from "../components/SearchBar";
import ForecastCard from "../components/ForecastCard";

const Main = () => {
    return (
        <div className="p-2 md:mx-auto w-full md:max-w-lg">
            <SearchBar/>
            <ForecastCard/>
        </div>
    );
};

export default Main;