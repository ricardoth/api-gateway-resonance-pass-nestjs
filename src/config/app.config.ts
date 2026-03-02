export const EnvConfiguration = () => ({
    environment: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3002,
    urlApiDecimatio: process.env.URL_API_DECIMATIO,
    userDecimatioBasicAuth: process.env.USER_DECIMATIO_BASIC_AUTH,
    passDecimatioBasicAuth: process.env.PASSWORD_DECIMATIO_BASIC_AUTH,

    urlApiPagos: process.env.URL_API_PAGOS,
    userPagosBasicAuth: process.env.USER_PAGOS_BASIC_AUTH,
    passPagosBasicAuth: process.env.PASSWORD_PAGOS_BASIC_AUTH,
});