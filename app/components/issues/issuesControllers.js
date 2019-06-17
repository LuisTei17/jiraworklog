const jiraHelper = require('../../helpers/jiraHelper'),
    projectsFactory = require('../../factories/projectsFactory');

exports.getProjects = async (req, h) => {
    try {
        const projects = await jiraHelper.getProjects(req.query),
            validProjects = projectsFactory.getValidProjects(projects);

        return h.response(validProjects);      
    } catch (error) {
        throw error;
    }
};

exports.getIssuesByProject = async (req, h) => {
    try {
        const issues = await jiraHelper.getIssuesByProject(req.query.cookie, req.params.id_project),
            formatedIssues = projectsFactory.issueFormater(issues);

        return h.response(formatedIssues);      
    } catch (error) {
        throw error;
    }
};

exports.logHourInIssue = async (req, h) => {
    try {
        const logHourInIssue = await jiraHelper.logHourInIssue(req.query.cookie, req.params.id_issue, req.payload);

        return h.response(logHourInIssue);      
    } catch (error) {
        throw error;
    }
};