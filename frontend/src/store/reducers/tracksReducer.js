import {GET_TRACKS_SUCCESS} from "../actions/tracksActions";

const initialState = {
    tracks: []
};

const tracksReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TRACKS_SUCCESS:
            return {...state, tracks: action.tracks, loading: false};
        default:
            return state;
    }
};

export default tracksReducer;