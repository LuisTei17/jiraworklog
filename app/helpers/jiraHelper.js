const request = require('request'),
url = require('../../conf/env/jira.json').url,
path = `api/2/search?jql=((project=20500 OR project =20800) AND (status = 'To desenv' OR status = 'In progress'))`;

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

                resolve({'header': response.headers, 'body': response.body});
        })
    })
}