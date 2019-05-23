const request = require('request');

module.exports = () => {
    const authController = {};

    authController.login = async (req, res) => {
        if (!req.body.username || !req.body.password)
            return res.status(400).json({'msg': 'Invalid request'});
        try {

            const authInfo = await new Promise((resolve, reject) => {
                request.post('http://jira.kbase.inf.br/rest/auth/1/session',
                {
                json:{
                    username: req.body.username,
                    password: req.body.password
                }
            }, (error, response) => {
                if (error)
                    return reject(error);

                return resolve(response.body);
                })
            })
            
            res.status(200).json(authInfo);
        } catch (error) {
            console.log(error);
        }
    }

    return authController;
}