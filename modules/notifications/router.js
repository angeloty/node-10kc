const {
  getAll,
  getUnread,
  getOne,
  countUnread,
  readAll,
  readOne,
} = require("./controllers/notification.controller");
const initRoutes = (app) => {
  app.get("/api/notifications", getAll);
  app.get("/api/notifications/unread", getUnread);
  app.get("/api/notifications/:id", getOne);
  app.get("/api/notifications/unread/count", countUnread);
  app.put("/api/notifications/read/all", readAll);
  app.put("/api/notifications/read/:id", readOne);
};

module.exports = initRoutes;