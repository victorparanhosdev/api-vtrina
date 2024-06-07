const axios = require('axios');

const api = axios.create({
    baseURL: 'https://apihm.vtrina.com',
});

api.interceptors.request.use(config => {
    config.headers['x-access-token'] = process.env.X_ACCESS_TOKEN || ''
    config.headers['storeId'] = process.env.STORE_ID || '';
    return config;
});

module.exports = api