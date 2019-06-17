const joi = require('joi'),
    handler = require('./authControllers');

module.exports = [
    {
        'path':'/auth/',
        'method': 'POST',
        'handler': handler.makeAuth,
        'config': {
            'description': 'Download a file',
            'validate': {
                'payload': {
                    'username': joi.string().required(),
                    'password': joi.string().required()
                }
            }
        }
    },
    {
        'path':'/auth/',
        'method': 'GET',
        'handler': handler.checkAuth,
        'config': {
            'description': 'Check auth',
            'validate': {
                'headers': {
                    'cookie': joi.string().required()
                }
            }
        }
    }
];