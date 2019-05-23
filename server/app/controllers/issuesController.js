const projects = require('../../projects.json'),
    credentials = require('../../credentials.json'),
    request = require('request');

module.exports = () => {
    const issueController = {}

    issueController.selectProject = (req, res) => {
        const idProject = req.params.idProject;
    }

    return issueController;
};