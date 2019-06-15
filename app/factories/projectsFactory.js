exports.getValidProjects = (projects) => {
    const projectsJson = JSON.parse(projects),
        validKeys = [ 'SEBN', 'PEB', 'SMBN' ];
        validProjects = projectsJson
            .filter(project => validKeys.includes(project.key))
            .map(project => {
                return {
                    'projectId': project.id,
                    'projectName': project.name
                }
            });
    
    return validProjects;
}

exports.issueFormater = (projectIssuesStr) => {
    const projectIssues = JSON.parse(projectIssuesStr),
        issues = projectIssues.issues;
    
    return issues.map(issue => {
        return {
            'issue_id': issue.id,
            'issue_key': issue.key, 
            'issue_summary': issue.fields.summary
        };
    });
};