const InfinitoApi = require('node-infinito-api');
const {API_KEY, SECRET, BASE_URL, LOG_LEVEL, VERSION} = require('./config');

const opts = {
     apiKey: API_KEY,
     secret: SECRET,
     baseUrl: BASE_URL,
     logLevel: LOG_LEVEL,
     version: VERSION
 };
const api = new InfinitoApi(opts);
const coinAPI = api.BTC;

exports.getCoinAPIBalance = async (req, res, next) =>{
    try {
        const result = await coinAPI.getBalance('1Dp1TZfsMDfrNwuAzXi8mJwcXNA5xiHPor');
        res.render('index' , {data: result});
        next();
    } catch (error) {
        next(error);
    }
}