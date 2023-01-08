const initRoutes = require("./router");
const {
  NotificationModel,
  NotificationSchema,
} = require("./models/notification.schema");
const initDB = () => {
  return { NotificationModel, NotificationSchema };
};
const init = (app) => {
  initRoutes(app);
  initDB(app);
};

module.exports = init;