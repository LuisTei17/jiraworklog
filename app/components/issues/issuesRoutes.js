const handler = require('./issuesControllers'),
    joi = require('joi');

module.exports = [
    {
        'path':'/projects',
        'method': 'GET',
        'handler': handler.getProjects,
        'config': {
            'description': 'Get a projects list',
            'validate': {
                'query': {
                    'cookie': joi.string().required()
                }
            }
        }
    },
    {
        'path':'/issues/{id_project}',
        'method': 'GET',
        'handler': handler.getIssuesByProject,
        'config': {
            'description': 'Download a file',
            'validate': {
                'params': {
                    'id_project': joi.number().integer().required()
                },
                'query': {
                    'cookie': joi.string().required()
                }
            }
        }
    }
]