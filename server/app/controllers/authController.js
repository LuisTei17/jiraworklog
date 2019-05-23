const http = require('http');

module.exports = () => {
    const authController = {};

    authController.login = (req, res) => {
        if (!req.body.username || !req.body.password)
            return res.status(400).json({'msg': 'Invalid request'});

        res.status(200).json({'msg': 'Worked'});
    }

    return authController;
}