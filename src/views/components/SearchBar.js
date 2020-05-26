import React, {Component} from 'react';
import { IoMdSearch } from "react-icons/io";


class SearchBar extends Component {
    state = {
        city:''
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    render() {
        return (
            <div className="flex bg-white shadow-md rounded-md p-3 mb-4 mt-2" >
                <div className="w-full">
                        <input
                            className="appearance-none w-full bg-transparent border-none text-gray-700 leading-tight focus:outline-none"
                            type="text" id="cityName" placeholder="City name" onChange={this.handleChange}/>
                </div>
                <div>
                    <button className="" onClick={this.handleSubmit}>
                        <IoMdSearch color="#A0AEC0" size="1.4rem"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default SearchBar;