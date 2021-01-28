import axios from 'axios'
import {
    FETCH_STOCK,
    SET_LOADING
} from './index'

const baseUrl = 'http://testfai.herokuapp.com/ticker'

export const isLoading = (payload) => {
    return {
        type: SET_LOADING,
        payload
    }
}

export const fetchStock = () => {
    return async (dispatch) => {
        try {
            const stock = await axios
                .get(baseUrl)
                .then((result) => {
                    // console.log(result);
                    dispatch({ type: FETCH_STOCK, payload: result?.data?.ticker  })
                    dispatch(isLoading(false))
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error);
        }
    }
}