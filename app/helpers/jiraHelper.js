const request = require('request'),
    url = require('../../conf/env/jira.json').url,
    moment = require('moment');

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
            if (error || response.statusCode === 401 || (response.body && response.body.errorMessages))
                return reject(error);

                resolve({'authInfo': response.body.session});
        });
    });
};

exports.checkIfUserAuth = (cookie) => {
    return new Promise((resolve, reject) => {
        request.get(url + '/rest/auth/1/session',
        {
            headers:{
                cookie: cookie
            }
        },
        (error, response) => {
            if (error || response.statusCode === 401 || (response.body && response.body.errorMessages))
                return reject(error);

                resolve(response.body);
        });
    });
}

exports.getProjects = (cookie) => {
    return new Promise((resolve, reject) => {
        request.get(url + '/rest/api/2/project',
        {
            headers:{
                cookie: cookie
            }
        },
        (error, response) => {
            if (error || response.statusCode === 401 || (response.body && response.body.errorMessages))
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
            if (error || response.statusCode === 401 || (response.body && response.body.errorMessages))
                return reject(error);

                resolve(response.body);
        });
    });
};

exports.logHourInIssue = (cookie, id_issue, {comment, type, started, timeSpentSeconds}) => {
    const path = `/rest/api/2/issue/${id_issue}/worklog`,
        requestBody = {
            "comment": `${type} ${comment}`,
            "started": moment(started).format('YYYY-MM-DDThh:mm:ss.0ssZZ'),
            "timeSpentSeconds": timeSpentSeconds
        },
        options = {
            headers:{
                cookie: cookie
            },
            json: requestBody
        };

    return new Promise((resolve, reject) => {
        request.post(url + path,
            options,
            (error, response) => {
                if (error || response.statusCode === 401 || (response.body && response.body.errorMessages))
                    return reject(error);

                    resolve(response.body);
            }
        );
    });
};