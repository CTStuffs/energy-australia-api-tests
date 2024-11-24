const reporter = require('cucumber-html-reporter')

const options = {
 // themes : either (bootstrap, heirarchy, foundation, simple)
 theme: 'bootstrap',
 jsonFile: './reporting/cucumber_report.json',
 output: './reporting/cucumber_report.html',
 reportSuiteScenarios: true,
 launchReport: false,
}

reporter.generate(options)