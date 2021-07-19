export const UPDATE_PREFECTURE = 'UPDATE_PREFECTURE'
export const FETCH_DATA = 'FETCH_DATA'
export const UPDATE_WEATHER = 'UPDATE_WEATHER'
export const UPDATE_ERROR = 'UPDATE_ERROR'

export const updatePrefecture = (prefecture) => {
    return {
        type: UPDATE_PREFECTURE,
        payload: {
            prefecture: prefecture
        }
    }
}

export const fetchData = () => {
    return {
        type: FETCH_DATA
    }
}

export const updateWeather = (searchState) => {
    console.log(searchState)
    return {
        type: UPDATE_WEATHER,
        payload: {
            data: searchState.data,
            pref: searchState.pref,
            description: searchState.description,
            temperature: searchState.temperature
        }
    }
}

export const updateError = (error) => {
    return {
        type: UPDATE_ERROR,
        payload: {
            error: error
        }
    }
}
