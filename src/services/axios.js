const axios = require('axios');

const api = axios.create({
    baseURL: 'https://apihm.vtrina.com',
});

api.interceptors.request.use(config => {
    config.headers['x-access-token'] = 'ba5072931d5cd9a26e2c4a41c79919b0917741effba94776ee63fdaa6a9e702b323791a6c703e92410032bd269483e3229872f963a85c65b7ea21380fbdbebf8';
    config.headers['storeId'] = '65b108419076e09bc0fad50b';
    return config;
});

module.exports = api