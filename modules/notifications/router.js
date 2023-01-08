const NotificationController = require("./controllers/notification.controller");
class NotificationRouter {
  constructor() {
    this.controller = new NotificationController();
  }
  init(app) {
    app.get("/api/notifications", (req, res, next) => {
      return this.controller.getAll(req, res, next);
    });
    app.get("/api/notifications/unread", (req, res, next) => {
      return this.controller.getUnread(req, res, next);
    });
    app.get("/api/notifications/:id", (req, res, next) => {
      return this.controller.getOne(req, res, next);
    });
    app.get("/api/notifications/unread/count", (req, res, next) => {
      this.controller.countUnread(req, res, next);
    });
    app.put("/api/notifications/read/all", (req, res, next) => {
      return this.controller.readAll(req, res, next);
    });
    app.put("/api/notifications/read/:id", (req, res, next) => {
      return this.controller.readOne(req, res, next);
    });
  }
}

module.exports = NotificationRouter;