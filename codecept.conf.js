const server = require('./server/server')
exports.config = {
  output: './output',
  helpers: {
    Appium: {
      app: 'C:\\Users\\duda.castro\\Desktop\\Udemy\\curso\\app-release.apk',
      desiredCapabilities: {
        platformName: 'Android',
        appPackage: 'com.qazandoapp',
        appActivity: 'MainActivity',
        deviceName: 'Pixel',
        platformVersion: '9'
      }
    }
  },
  include: {
    I: './steps_file.js',
    home_page: './pages/home_page.js',
    login_page: './pages/login_page.js'
  },
  mocha: {},
  bootstrap: async () => {
    await server.start()
  },
  teardown: async () => {
    await server.stop()
  },
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    retryFailedStep: {
      enabled: true
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  tests: './steps/*test.js',
  name: 'curso'
}