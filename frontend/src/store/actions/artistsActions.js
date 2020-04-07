import axiosApp from '../../axiosApp'
import {push} from 'connected-react-router';

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';
export const GET_ARTIST_SUCCESS = 'GET_ARTIST_SUCCESS';

export const getArtistsSuccess = artists => ({type: GET_ARTISTS_SUCCESS, artists});
export const getArtistSuccess = artist => ({type: GET_ARTIST_SUCCESS, artist});

export const getArtists = () => {
    return async dispatch => {
        const response = await axiosApp.get('/artists');
        dispatch(getArtistsSuccess(response.data));
    }
};

export const getArtist = id => {
    return async dispatch => {
        const response = await axiosApp.get(`/artists/${id}`);
        dispatch(getArtistSuccess(response.data));
    }
};

export const postArtist = artist => {
    return async dispatch => {
        await axiosApp.post('/artists', artist);
        dispatch(getArtists());
        dispatch(push('/'));
    }
};

export const deleteArtist = id => {
    return async dispatch => {
        await axiosApp.delete('/artists/' + id);
        dispatch(getArtists());
    }
};

export const publishArtist = id => {
    return async dispatch => {
        await axiosApp.post('/artists/publish/' + id);
        dispatch(getArtists());
    }
};