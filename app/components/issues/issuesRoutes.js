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
                    'comment': joi.string().required(),
                    'type': joi.string().valid('[DESENV]', '[REUNIAO]', '[TESTE]').required(),
                    'started': joi.date().required(),
                    'timeSpentSeconds': joi.number().integer().required()
                }
            }
        }
    }
]