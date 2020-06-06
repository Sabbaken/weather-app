const initialState = {}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DISPLAY_CITY_WEATHER':
            return action.payload;
            break;
        default:
            break;
    }
}

export default rootReducer
