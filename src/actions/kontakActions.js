import axios from 'axios'

export const GET_LIST_KONTAK = 'GET_LIST KONTAK'

export const getListKontak = () => {
    return (dispatch) => {
        // Buat Loading

        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // Get Api List Kontak
        axios({
            method: "GET",
            url: "http://localhost:3000/kontaks",
            timeout: "120000"
        })
            .then((response) => {
                //Berhasil Get api
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })
            .catch((error) => {
                // Gagal Get api
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })

    }
}