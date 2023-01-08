const Router = require("./router");
class NotificationModule {
  static init(app) {
    const router = new Router(app);
    router.init(app);
  }
}

module.exports = NotificationModule;