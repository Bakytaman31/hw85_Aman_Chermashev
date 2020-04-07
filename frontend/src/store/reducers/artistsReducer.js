import {GET_ARTIST_SUCCESS, GET_ARTISTS_SUCCESS} from "../actions/artistsActions";

const initialState = {
    artists: [],
    artist: {}
};

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTISTS_SUCCESS:
            return {...state, artists: action.artists};
        case GET_ARTIST_SUCCESS:
            return {...state, artist: action.artist};
        default:
            return state;
    }
};

export default artistsReducer;