import React, {Component} from 'react';
import {IoMdSearch} from "react-icons/io";
import {connect} from 'react-redux'
import {fetchCityWeather} from "../../store/actions";

class SearchBar extends Component {
    state = {
        cityName: ''
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.getCityWeather(this.state.cityName)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="flex bg-white shadow-md rounded-md p-3 mb-4 mt-2">

                    <div className="w-full">
                        <input
                            className="appearance-none w-full bg-transparent border-none text-gray-700 leading-tight focus:outline-none"
                            type="text" id="cityName" placeholder="City name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <button type="submit">
                            <IoMdSearch color="#A0AEC0" size="1.4rem"/>
                        </button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCityWeather: (cityName) => dispatch(fetchCityWeather(cityName))
    }
}

const mapStateToProps = (state) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);