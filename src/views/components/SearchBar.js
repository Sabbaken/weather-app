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
                <div className="flex bg-background-secondary shadow-md rounded-md p-3 m-3">

                    <div className="w-full">
                        <input
                            className="ml-3 appearance-none w-full bg-transparent border-none text-text-secondary focus:text-text-primary leading-tight focus:outline-none"
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