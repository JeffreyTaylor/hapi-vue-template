const SpecReporter = require('jasmine-spec-reporter').SpecReporter;

//as explained here:
// https://github.com/bcaudan/jasmine-spec-reporter/tree/master/examples/node
jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(new SpecReporter({
  spec: {
    displayPending: true
  }
}));