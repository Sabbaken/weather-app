import React from 'react';
import {
    WiDayFog,
    WiDayRain,
    WiDayShowers,
    WiDaySnow,
    WiDayThunderstorm,
    WiNa,
    WiNightPartlyCloudy,
} from 'react-icons/wi';

const ForecastCard = ({forecast}) => {
    const iconSize = '3rem';
    const weatherTypesToIcons = {
        '2': <WiDayThunderstorm size={iconSize}/>,
        '3': <WiDayShowers size={iconSize}/>,
        '5': <WiDayRain size={iconSize}/>,
        '6': <WiDaySnow size={iconSize}/>,
        '7': <WiDayFog size={iconSize}/>,
        '8': <WiNightPartlyCloudy size={iconSize}/>,
        '9': <WiNa size={iconSize}/>
    }
    
    return (
        <div className="text-text-primary inline flex bg-background-secondary shadow-md rounded-lg my-5 mx-3 py-4 px-6 ">
            <div className="block w-5/12 text-left flex leading-tight ">
                <div className="my-auto">
                    <div>
                        <span className="font-bold tracking-tight">{getDayOfTheWeek(forecast.valid_date)}</span>
                    </div>
                    <div>
                        <span>{getDate(forecast.valid_date)},{getMonths(forecast.valid_date)}</span>
                    </div>
                </div>
            </div>


            <div className="block w-3/12 text-right">
                <div className="my-auto">
                    <span className="mr-3 icon">{weatherTypesToIcons[(forecast.weather.code + '')[0]]}</span>
                </div>
            </div>

            <div className="block w-4/12 text-right">
                <span className="font-bold tracking-tight text-4xl">{Math.round(forecast.temp)}°</span>
            </div>
        </div>
    );

    function getDayOfTheWeek(date_string) {
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let date = new Date(date_string);
        return days[date.getDay()];
    }

    function getDate(date_string) {
        let date = new Date(date_string);
        return date.getDate();
    }

    function getMonths(date_string) {
        let days = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let date = new Date(date_string);
        return days[date.getMonth()];
    }
};

export default ForecastCard;
