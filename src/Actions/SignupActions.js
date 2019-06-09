// import axios from 'axios';
import axios from '../AxiosInstances';


export function userSignupRequest(userData){
    //encrypt the password befor adding to the database
    //check if the user already in the userbase

    
    return dispatch => {
        return axios.post('/signup.json', userData);
    }
}