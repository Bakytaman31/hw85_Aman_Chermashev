import axiosApp from "../../axiosApp";

export const GET_TRACK_HISTORY_SUCCESS = 'GET_TRACK_HISTORY_SUCCESS';

export const getTrackHistorySuccess = trackHistory => ({type: GET_TRACK_HISTORY_SUCCESS, trackHistory});

export const getTrackHistory = () => {
    return async (dispatch, getState) => {
        const user = getState().users.user;
        const response = await axiosApp.get('/trackHistory', {headers: {'Authorization': 'Token ' + user.token}});
        dispatch(getTrackHistorySuccess(response.data));
    }
};

export const addTrackHistory = track => {
    return async (dispatch, getState) => {
        try {
            const obj = {track: track};
            const user = getState().users.user;
            await axiosApp.post('/trackHistory', obj, {headers: {'Authorization': 'Token ' + user.token}});
        } catch (e) {
            console.log(e);
        }
    }
};