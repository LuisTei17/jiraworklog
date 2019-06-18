const jiraHelper = require('../../helpers/jiraHelper');

exports.makeAuth = async (req, h) => {
    try {
        const {authInfo} = await jiraHelper.jiraAuthentication(req.payload),
            cookie = `${authInfo.name}=${authInfo.value}`;

        return h.response({'cookie': cookie});      ;
        
    } catch (error) {
        throw error;
    }
};

exports.checkAuth = async (req, h) => {
    try {
        const authInfo = await jiraHelper.checkIfUserAuth(req.query.cookie);

        return h.response({'auth': authInfo});
        
    } catch (error) {
        throw error;
    }
};