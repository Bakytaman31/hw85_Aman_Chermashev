import {GET_ARTISTS_SUCCESS} from "../actions/artistsActions";

const initialState = {
    artists: []
};

const artistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ARTISTS_SUCCESS:
            return {...state, artists: action.artists, loading: false};
        default:
            return state;
    }
};

export default artistsReducer;