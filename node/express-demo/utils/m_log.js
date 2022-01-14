const log4js = require('log4js')

log4js.addLayout('json', function (config) {
  return function (logEvent) {
    return JSON.stringify(logEvent) + config.separator
  }
});
log4js.configure({
  appenders: {
    stdout: {//控制台输出
      type: 'console'
    },
    out: {
      type: 'file',
      filename: "logs/log/error.log",
      layout: { type: 'json', separator: ',' }
    }
  },
  categories: {
    default: { appenders: ['stdout', 'out'], level: 'info' }
  }
})
const logger = log4js.getLogger('json-test')
exports.logger = logger;
exports.use = function (app) {
  app.use(log4js.connectLogger(logger, { level: 'info', format: '[:remote-addr :method :url :status :response-timems][:referrer HTTP/:http-version :user-agent]' }))
}

//等级依次提升
// 设置level :info  那么 trance和debug日志信息不能写入日志文件,只能写入info及之后等级的日志信息
// logger.trace("Entering cheese testing");
// logger.debug("Got cheese.");
// logger.info("Cheese is Comté.");
// logger.warn("Cheese is quite smelly.");
// logger.error("Cheese is too ripe!");
// logger.fatal("Cheese was breeding ground for listeria.");