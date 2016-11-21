module.exports.config = {
    useAllAngular2AppRoots: true,
    specs: '*_spec.js',
    directConnect: true,
    baseUrl: 'http://www.hiteshbalar.com/preserver/',
    onPrepare: function () {

    //Defining nice console reporter
    let JasmineReporter = require('jasmine2-reporter').Jasmine2Reporter

    //Options object for console reporter
    let options = {
      pendingSpec: false,
      symbols: {
        pending: '*  '.strikethrough,
      }
    };
    //Adding reporter to jasmine.
   jasmine.getEnv().addReporter(new JasmineReporter(options));
    }
}