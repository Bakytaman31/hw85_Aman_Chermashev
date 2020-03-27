import axiosApp from "../../axiosApp";
import {push} from 'connected-react-router';

export const GET_TRACKS_SUCCESS = 'GET_TRACKS_SUCCESS';

export const getTracksSuccess = tracks => ({type: GET_TRACKS_SUCCESS, tracks});

export const getTracks = id => {
    return async dispatch => {
        const response = await axiosApp.get(`/tracks?album=${id}`);
        dispatch(getTracksSuccess(response.data));
    }
};

export const postTrack = track => {
    return async dispatch => {
        await axiosApp.post('/tracks', track);
        dispatch(push('/'));
    }
};

export const deleteTrack = (id, currentPageId) => {
    return async dispatch => {
        await axiosApp.delete('/tracks/' + id);
        dispatch(getTracks(currentPageId));
    }
};

export const publishTrack = (id, currentPageId) => {
    return async dispatch => {
        await axiosApp.post('/tracks/publish/' + id);
        dispatch(getTracks(currentPageId));
    }
};