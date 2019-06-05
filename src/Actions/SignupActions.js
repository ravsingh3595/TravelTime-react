// import axios from 'axios';
import axios from '../AxiosInstances';


export function userSignupRequest(userData){
    return dispatch => {
        return axios.post('/signup.json', userData);
    }
}