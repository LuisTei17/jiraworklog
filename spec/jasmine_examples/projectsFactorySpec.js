let issueFactory, issue, strIssue;

describe("Projects factory", function() {
  beforeEach(function() {
    issueFactory = require('../../app/factories/projectsFactory'),
      issue = {'issues': [{
          'id': 234,
          'key': 'SMBN-56',
          'issue_date': 'Tue 21 aug 2019T03:00:23.23',
          'asignee': 'luis.teixeira',
          'fields': {
            'title': 'SMBN-56 mostrar dados de clientes inadimplentes no workflow',
            'summary': 'Indicar quais clientes são inadimplentes na consulta do workflow'
          }
        }]
      },
      strIssue = JSON.stringify(issue);
    
  });
  describe("when i want to format an raw issue", function() {
    it("should format the issue to a standard", function() {
      const formatedIssues = issueFactory.issueFormater(strIssue);
      // demonstrates use of 'not' with a custom matcher
      formatedIssues.forEach(formatedIssue => {
        expect(formatedIssue.issue_id).not.toBeUndefined()
        expect(formatedIssue.issue_key).not.toBeUndefined()
        expect(formatedIssue.issue_summary).not.toBeUndefined()
      })
    });

  });
});
