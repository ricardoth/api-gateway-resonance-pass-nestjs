export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3002,
    urlApiDecimatio: process.env.URL_API_DECIMATIO,
    userDecimatioBasicAuth: process.env.USER_DECIMATIO_BASIC_AUTH,
    passDecimatioBasicAuth: process.env.PASSWORD_DECIMATIO_BASIC_AUTH
});