import React, {Component} from 'react';

class ForecastCard extends Component {
    state = {
        forecastData: [
        ]
    }

    render() {
        if (this.state.forecastData.length === 0)
            return (
                <div className="bg-white shadow-md rounded-md m-2 p-4">
                    <img src={process.env.PUBLIC_URL + '/weather_app.png'}/>

                    <p className="text-center text-lg tracking-wide text-gray-700">
                        Minimalistic weather forecast web app
                    </p>
                </div>
            );

        return (
            <div className="bg-white shadow-md rounded-md m-2 p-4">
            </div>
        );
    }
}

export default ForecastCard;