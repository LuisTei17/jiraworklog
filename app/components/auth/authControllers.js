const jiraHelper = require('../../helpers/jiraHelper');

exports.makeAuth = async (req, h) => {
    try {
        const {authInfo} = await jiraHelper.jiraAuthentication(req.payload),
            cookie = `${authInfo.name}=${authInfo.value}`;

        return h.response({'cookie': cookie});      ;
        
    } catch (error) {
        console.log(error);
    }
};