const Vue = require('vue');
Vue.config.productionTip = false;

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./', true, /\.spec$/);
testsContext.keys().forEach(testsContext);

// require all src files for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.
const srcContext = require.context('../../client', true);
srcContext.keys().forEach(srcContext);