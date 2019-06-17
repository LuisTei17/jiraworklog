const jiraHelper = require('../helpers/jiraHelper');

module.exports = async (request, h) => {
    try {
        await jiraHelper.checkIfUserAuth(request.header.cookie);

        h.continue();
    } catch (error) {
        throw error;
    }
}