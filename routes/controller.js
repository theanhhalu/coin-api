const InfinitoApi = require('node-infinito-api');
const opts = {
     apiKey: '68b2fa19-c920-4315-96d3-8d883f330d86',
     secret: 'etzz6w9UdsjWBA4NJtV46W6sckwhuGQruSqHWVarggHU7vU7Ldv509qLuGdUKHe3',
     baseUrl: 'https://staging-api-testnet.infinitowallet.io',
     logLevel: 'NONE',
     version: v1
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