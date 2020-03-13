import axiosApp from '../../axiosApp'

export const GET_ARTISTS_SUCCESS = 'GET_ARTISTS_SUCCESS';

export const getArtistsSuccess = artists => ({type: GET_ARTISTS_SUCCESS, artists});
export const getArtists = () => {
    return async dispatch => {
        const response = await axiosApp.get('/artists');
        dispatch(getArtistsSuccess(response.data));
    }
};