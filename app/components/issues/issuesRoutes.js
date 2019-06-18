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
            },
            'plugins': {
                'policies': ['checkAuth']
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
            },
            'plugins': {
                'policies': ['checkAuth']
            }
        }
    },
    {
        'path':'/worklog/issues/{id_issue}',
        'method': 'POST',
        'handler': handler.logHourInIssue,
        'config': {
            'description': 'Download a file',
            'validate': {
                'params': {
                    'id_issue': joi.number().integer().required()
                },
                'query': {
                    'cookie': joi.string().required()
                },
                'payload': {
                    'comment': joi.string().allow('').required(),
                    'type': joi.string().valid('[DESENV]', '[REUNIAO]', '[TESTE]').required(),
                    'started': joi.string().required(),
                    'timeSpentSeconds': joi.number().integer().required()
                }
            },
            'plugins': {
                'policies': ['checkAuth']
            }
        }
    }
]