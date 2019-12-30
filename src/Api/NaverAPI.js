import { hadleActions, handleActions } from "redux-actions"
import axios from "axios"

const GET_NAVER_PENDING = "GET_WEATHER_PENDING"
const GET_NAVER_SUCCESS = "GET_WEATHER_SUCCESS"
const GET_NAVER_FAILURE = "GET_WEATHER_FAILURE"

export const apiCall = params => dispatch => {
    dispatch({ type: GET_NAVER_PENDING })

    return axios
        .get("https://www.naver.com/")
        .then(response => {
            dispatch({ type: GET_NAVER_SUCCESS, payload: response })
        })
        .catch(error => {
            dispatch({
                type: GET_NAVER_FAILURE,
                payload: error
            })
        })
}

const initialState = {
    pending: false,
    error: false,
    data: null,
    errorMsg: ""
}

export default handleActions(
    {
        [GET_NAVER_PENDING]: (state, actions) => {
            return {
                ...state,
                pending: true,
                error: false,
            }
        },
        [GET_NAVER_SUCCESS]: (state, actions) => {
            return {
                ...state,
                pending: false,
                data: actions.payload.data
            }
        },
        [GET_NAVER_FAILURE]: (state, actions) => {
            return {
                ...state,
                pending: false,
                error: true,
                errorMsg: actions.payload
            }
        }
    },
    initialState
)