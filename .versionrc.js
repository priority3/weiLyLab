module.exports = {
  commitUrlFormat: '{{host}}/{{owner}}/{{repository}}/commit/{{hash}}',
  issueUrlFormat: 'http://jira.dev.ztosys.com/browse/{{hash}}',
  types: [
    { type: 'feat', section: 'Features' },
    { type: 'fix', section: 'Bug Fixes' },
    { type: 'test', section: 'Tests', hidden: true },
    { type: 'build', section: 'Build System', hidden: true },
    { type: 'ci', hidden: true }
  ]
}
