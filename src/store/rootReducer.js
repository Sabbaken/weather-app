const initialState = {
    forecast: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_CITY_WEATHER':
            state.forecast =  action.payload.forecast;
            return Object.assign({}, state)
        default:
            return state;
    }
}

export default rootReducer
