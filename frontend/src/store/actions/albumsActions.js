import axiosApp from "../../axiosApp";
import {push} from 'connected-react-router'

export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';

export const getAlbumsSuccess = albums => ({type: GET_ALBUMS_SUCCESS, albums});

export const getAlbums = id => {
    return async dispatch => {
        const response = await axiosApp.get(`/albums?artist=${id}`);
        dispatch(getAlbumsSuccess(response.data));
    }
};

export const postAlbum = album => {
    return async dispatch => {
        await axiosApp.post('/albums', album);
        dispatch(push('/'));
    }
};

export const getAlbumsForForm = () => {
    return async dispatch => {
        const response = await axiosApp.get('/albums');
        dispatch(getAlbumsSuccess(response.data))
    }
};

export const deleteAlbum = (id, currentPageId) => {
    return async dispatch => {
        await axiosApp.delete('/albums/' + id);
        dispatch(getAlbums(currentPageId));
    }
};

export const publishAlbum = (id, currentPageId) => {
    return async dispatch => {
        await axiosApp.post('/albums/publish/' + id);
        dispatch(getAlbums(currentPageId));
    }
};