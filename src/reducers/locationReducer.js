const initialState = {
    location: '',
    lat: 0,
    lng: 0,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOCATION':
            return {
                ...state,
                location: action.location,                
                lat: action.lat,
                lng: action.lng
            }
        default: break;
    }
    return state
}