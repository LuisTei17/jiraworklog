const request = require('request'),
    url = require('../../conf/env/jira.json').url;

exports.jiraAuthentication = ({username, password}) => {
    return new Promise((resolve, reject) => {
        request.post(url + '/rest/auth/1/session',
        {
            json:{
                username: username,
                password: password
            }
        },
        (error, response) => {
            if (error)
                return reject(error);

                resolve({'authInfo': response.body.session});
        });
    });
};

exports.getProjects = ({cookie}) => {
    return new Promise((resolve, reject) => {
        request.get(url + '/rest/api/2/project',
        {
            headers:{
                cookie: cookie
            }
        },
        (error, response) => {
            if (error)
                return reject(error);

                resolve(response.body);
        });
    });
};

exports.getIssuesByProject = (cookie, project_id) => {
    path = `/rest/api/2/search?jql=(
            (project=${project_id})
            AND (status = 'To desenv' OR status = 'In progress')
        )`;

    return new Promise((resolve, reject) => {
        request.get(url + path,
        {
            headers:{
                cookie: cookie
            }
        },
        (error, response) => {
            if (error)
                return reject(error);

                resolve(response.body);
        });
    });
};