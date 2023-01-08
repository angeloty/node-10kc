NotificationService = require("../services/notification.service");
class NotificationController {
  constructor() {
    this.service = new NotificationService();
  }
  async getAll(req, res, next) {
    try {
      const notifications = await this.service.getAll();
      res.json(notifications);
    } catch (error) {
      console.log("Internal Error: ", error);
      res.sendStatus(500);
    }
  }

  async getOne(req, res, next) {
    if (!req.params.id) {
      res.sendStatus(400);
      return;
    }
    try {
      const notification = await this.service.getOne(req.params.id);
      if (!notification) {
        res.sendStatus(404);
        return;
      }
      res.json(notification);
    } catch (error) {
      console.log("Internal Error: ", error);
      res.sendStatus(500);
    }
  }

  async getUnread(req, res, next) {
    try {
      const notifications = await this.service.getUnread();
      res.json(notifications);
    } catch (error) {
      console.log("Internal Error: ", error);
      res.sendStatus(500);
    }
  }

  async countUnread(req, res, next) {
    try {
      const { count } = await this.service.countUnread();
      res.json({ count });
    } catch (error) {
      console.log("Internal Error: ", error);
      res.sendStatus(500);
    }
  }

  async readAll(req, res, next) {
    try {
      const { count } = await this.service.readAll();
      res.json({ count });
    } catch (error) {
      console.log("Internal Error: ", error);
      res.sendStatus(500);
    }
  }

  async readOne(req, res, next) {
    if (!req.params.id) {
      res.sendStatus(400);
      return;
    }
    try {
      const { success } = await this.service.read(req.params.id);
      res.json({ success });
    } catch (error) {
      console.log("Internal Error: ", error);
      res.sendStatus(500);
    }
  }
}

module.exports = NotificationController;