module.exports = (app) => {
    const authController = app.controllers.authController;

    app.post('/v1/auth/login', authController.login);
}