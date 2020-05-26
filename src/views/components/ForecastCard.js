import React from 'react';
import {
    FaCloudMoonRain,
    FaCloudMoon,
    FaCloudRain,
    FaCloudShowersHeavy,
    FaCloudSunRain,
    FaCloudSun,
    FaCloud,
    FaSnowflake
} from "react-icons/fa";

const ForecastCard = ({forecast}) => {

    let weatherTypesToIcons = {
        '1': <FaCloud/>,
        '2': <FaCloudSunRain/>,
        '3': <FaCloudMoonRain/>,
        '4': <FaCloudMoon/>,
        '5': <FaCloudRain/>,
        '6': <FaCloudShowersHeavy/>,
        '7': <FaCloudSunRain/>,
        '8': <FaCloudSun/>,
        '9': <FaCloud/>,
        '10': <FaSnowflake/>,
    }

    return (
        <div className="bg-white shadow-md rounded-md my-2 px-6 py-4">
            <p className="mb-2"><span className="text-gray-900">{forecast.dayOfTheWeek}</span><span
                className="text-gray-600">, {forecast.date} {forecast.months}</span></p>

            <div className="grid grid-cols-3 grid-rows-4 grid-flow-col">
                {forecast.weather.map((data) => {
                    return (
                        <div className="col-start-1 row-auto">
                            <p className="text-gray-600">{data.dayTime}</p>
                        </div>
                    )
                })}
                {forecast.weather.map((data) => {
                    return (
                        <div className="col-start-2 row-auto text-center">
                            <p>
                                <span className="mr-3">{weatherTypesToIcons[data.weather]}</span>
                                <span>{data.temperature}°</span>
                            </p>
                        </div>
                    )
                })}
                {forecast.weather.map((data) => {
                    return (
                        <div className="col-start-3 row-auto text-right">
                            {data.windSpeed}
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default ForecastCard;
