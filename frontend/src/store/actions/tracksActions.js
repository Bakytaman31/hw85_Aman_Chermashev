import axiosApp from "../../axiosApp";

export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';

export const getTracksSuccess = tracks => ({type: GET_TRACKS_SUCCESS, tracks});

export const getTracks = id => {
    return async dispatch => {
        const response = await axiosApp.get(`/tracks?album=${id}`);
        dispatch(getTracksSuccess(response.data));
    }
};