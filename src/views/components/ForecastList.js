import React, {Component} from 'react';
import {connect} from "react-redux";
import ForecastCard from "./ForecastCard";

class ForecastList extends Component {
    render() {
        if (this.props.forecast.length === 0)
            return (
                <div className="bg-background-secondary shadow-md rounded-md mx-3 p-4">
                    <img alt="" src={process.env.PUBLIC_URL + '/weather_app.svg'}/>
                    <p className="text-center mt-1 text-xl tracking-tight text-text-primary">
                        Minimalistic weather forecast
                    </p>
                </div>
            );

        return (
            <div>
                {this.props.forecast.map((forecastForDay) => {
                    return <ForecastCard key={forecastForDay.valid_date} forecast={forecastForDay}/>
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {forecast: state.forecast}
}

export default connect(mapStateToProps)(ForecastList);