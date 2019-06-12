const hapi = require('hapi'),
    routes = require('./conf/routes/routes');


const init = async () => {
    const server = hapi.server({
        port: 5000,
        host: 'localhost',
        routes: {
            cors: true
        }
    });

    await routes.mountRoutes(server);

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', err => {
    console.log(err);
    process.exit(1);
})

init();