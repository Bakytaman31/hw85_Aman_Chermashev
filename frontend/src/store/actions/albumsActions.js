import axiosApp from "../../axiosApp";

export const GET_ALBUMS_SUCCESS = 'GET_ALBUMS_SUCCESS';

export const getAlbumsSuccess = albums => ({type: GET_ALBUMS_SUCCESS, albums});

export const getAlbums = id => {
    return async dispatch => {
        const response = await axiosApp.get(`/albums?artist=${id}`);
        console.log(response.data);
        dispatch(getAlbumsSuccess(response.data));
    }
};