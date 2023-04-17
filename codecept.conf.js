const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://lifemart.ru/',
      show: true,
      browser: 'chromium',
      waitForNavigation: "networkidle0"
    }
  },
  include: {
    I: './steps_file.js',
    mainPage: "./pages/main.js",
    nPage: "./pages/n.js"
  },
  name: 'CodeseptJS'
}