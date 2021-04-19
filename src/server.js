/*
 * File: server.js
 * File Created: Monday, 19th April 2021 1:20:17 pm
 * Author: IFTK (ibrahimftk@banksultra.co.id)
 * Copyright @ 2021 Ibrahim FT Kurniawan
 */

const Hapi = require('@hapi/hapi');

const routes = require('./routes');

const init = async () => {
    const server = Hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.33.195',
        routes: {
            cors: {
                origin: ['*'],
            }
        }
    });

    server.route(routes)

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
