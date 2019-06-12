const glob = require('glob'),
    componentsPath = 'app/components/**/*Routes.js'

exports.mountRoutes = async (server) => {
    await new Promise(resolve => {
        glob(componentsPath, {}, (err, files) => {
            files.forEach(file => {
                const routes = require(process.cwd() + '/' + file);

                routes.forEach(route => {
                    try {
                        server.route(route)
                        console.log(`Route ${route.path} ${route.method}`);
                    } catch (err) {
                        console.log(err);
                    }
                });
            });
            resolve();
        });
    });
};