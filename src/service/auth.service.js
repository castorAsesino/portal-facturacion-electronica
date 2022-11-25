import axios from 'axios';
import authHeader from './auth-header';
const API_URL = '/auth';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-type': 'application/json'
    }
});

instance.interceptors.request.use(async (config) => {
    config.headers.Authorization = `Bearer ${authHeader()}`;
    return config;
});


export const signup = (username, password) => {
    return instance.post('/Account/login', {
        username,
        password,
    })
    .then((response) => {
        if (response.data.accessToken) {
            localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
    });

};


const login = (email, password) => {
    return axios
        .post(API_URL + '/login', {
            email,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

const authService = {
    signup,
    login,
    logout,
    getCurrentUser,
};

export default authService;