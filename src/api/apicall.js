import axios from "axios";

const AxiosInstance=axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

AxiosInstance.interceptors.request.use(function(config){
    const token =localStorage.getItem('token')
    config.headers['Authorization']='Bearer'+' '+token
    // config.headers['Access-control-Allow-Origin']='*'
    return config
})

AxiosInstance.interceptors.response.use(function(response) {
    return response;
}, function(error) {
    if (error.response && error.response.status === 401) {
        console.log('Unauthorized access detected');
    }
    return Promise.reject(error);
});

export default AxiosInstance