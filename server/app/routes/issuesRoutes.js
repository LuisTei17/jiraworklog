module.exports = (app) => {
    const issuesController = app.controllers.issuesController;

    app.get('/v1/all-issues', issuesController.getAllIssues);
}