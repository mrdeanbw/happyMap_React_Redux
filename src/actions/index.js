export const setLocation = (location, lat, lng) => {
    return {
        type: 'SET_LOCATION',
        location: location,
        lat: lat, 
        lng: lng
    }
}

