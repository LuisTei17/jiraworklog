const jiraHelper = require('../helpers/jiraHelper');

exports.checkAuth = async (request, h) => {
    try {
        await jiraHelper.checkIfUserAuth(request.query.cookie);

        h.continue;
    } catch (error) {
        throw error;
    }
}