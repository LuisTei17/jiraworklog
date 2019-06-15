const jiraHelper = require('../../helpers/jiraHelper');

exports.makeAuth = async (req, h) => {
    try {
        const authInfo = await jiraHelper.jiraAuthentication(req.payload);
        
        return h.response(authInfo);
    } catch (error) {
        console.log(error);
    }
};