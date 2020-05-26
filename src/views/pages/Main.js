import React from 'react';
import SearchBar from "../components/SearchBar";
import ForecastList from "../components/ForecastList";

const Main = () => {
    return (
        <div className="p-1 md:mx-auto w-full md:max-w-lg">
            <SearchBar/>
            <ForecastList/>
        </div>
    );
};

export default Main;