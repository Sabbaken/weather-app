import React, {Component} from 'react';
import ForecastCard from "./ForecastCard";

class ForecastList extends Component {
    state = {
        forecastData: []
    }

    render() {
        if (this.state.forecastData.length === 0)
            return (
                <div className="bg-white shadow-md rounded-md p-4">
                    <img alt="" src={process.env.PUBLIC_URL + '/weather_app.png'}/>

                    <p className="text-center text-xl tracking-tight text-gray-700">
                        Minimalistic weather forecast
                    </p>
                </div>
            );

        return (
            <div>
                <p className="mx-3 text-lg tracking-wide text-gray-900">Weather for 5 days</p>
                {this.state.forecastData.map((forecastForDay) => {
                    return <ForecastCard key={forecastForDay.id} forecast={forecastForDay}/>
                })}
            </div>
        );
    }
}

export default ForecastList;