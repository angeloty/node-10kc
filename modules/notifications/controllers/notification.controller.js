const service = require("../services/notification.service");
const getAll = async (req, res, next) => {
  try {
    const notifications = await service.getAll();
    res.json(notifications);
  } catch (err) {
    console.log("Internal Error: ", error);
    res.sendStatus(500);
  }
};
const getOne = async (req, res, next) => {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }
  try {
    const notification = await service.getOne(req.params.id);
    if (!notification) {
      res.sendStatus(404);
      return;
    }
    res.json(notification);
  } catch (err) {
    console.log("Internal Error: ", error);
    res.sendStatus(500);
  }
};

const getUnread = async (req, res, next) => {
  try {
    const notifications = await service.getUnread();
    res.json(notifications);
  } catch (err) {
    console.log("Internal Error: ", error);
    res.sendStatus(500);
  }
};

const countUnread = async (req, res, next) => {
  try {
    const { count } = await service.countUnread();
    res.json({ count });
  } catch (err) {
    console.log("Internal Error: ", error);
    res.sendStatus(500);
  }
};

const readAll = async (req, res, next) => {
  try {
    const { count } = await service.readAll();
    res.json({ count });
  } catch (err) {
    console.log("Internal Error: ", error);
    res.sendStatus(500);
  }
};

const readOne = async (req, res, next) => {
  if (!req.params.id) {
    res.sendStatus(400);
    return;
  }
  try {
    const { success } = await service.read(req.params.id);
    res.json({ success });
  } catch (err) {
    console.log("Internal Error: ", error);
    res.sendStatus(500);
  }
};

module.exports = {
  getAll,
  getOne,
  getUnread,
  countUnread,
  readAll,
  readOne,
};