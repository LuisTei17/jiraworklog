const projects = require('../../projects.json'),
    credentials = require('../../credentials.json'),
    request = require('request'),
    path = `api/2/search?jql=((project=20500 OR project =20800) AND (status = 'To desenv' OR status = 'In progress'))`

module.exports = () => {
    const issueController = {}

    issueController.getAllIssues = async (req, res) => {
        const idProject = req.params.idProject,
            issues = await new Promise((resolve, reject) => {
                request.get(projects.url + path,
                    (error, response) => {
                    if (error)
                        return reject(error);

                    return resolve(response.body);
                    })
            })
        return res.status(200).json(issues);
    }

    return issueController;
};