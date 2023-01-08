const { NotificationModel } = require("../models/notification.schema");
const getAll = async () => {
  return new Promise((resolve, reject) => {
    NotificationModel.find({}).exec(function (error, notifications) {
      if (error) {
        console.log("Internal Error: ", error);
        reject(error);
        return;
      }
      resolve(notifications);
    });
  });
};
const getOne = async (id) => {
  return new Promise((resolve, reject) => {
    NotificationModel.findOne({ _id: id }).exec(function (error, notification) {
      if (error) {
        console.log("Internal Error: ", error);
        reject(error);
        return;
      }
      resolve(notification);
    });
  });
};

const getUnread = async () => {
  return new Promise((resolve, reject) => {
    NotificationModel.find({ read: false }).exec(function (
      error,
      notifications
    ) {
      if (error) {
        console.log("Internal Error: ", error);
        reject(error);
        return;
      }
      resolve(notifications);
    });
  });
};

const countUnread = async () => {
  return new Promise((resolve, reject) => {
    NotificationModel.find({ read: false }).exec(function (
      error,
      notifications
    ) {
      if (error) {
        console.log("Internal Error: ", error);
        reject(error);
        return;
      }
      resolve({ count: notifications.length });
    });
  });
};

const readAll = async () => {
  return new Promise((resolve, reject) => {
    NotificationModel.updateMany(
      { read: false },
      { $set: { read: true } }
    ).exec(function (error, updateResult) {
      if (error) {
        console.log("Internal Error: ", error);
        reject(error);
        return;
      }
      resolve({ count: updateResult.modifiedCount });
    });
  });
};

const read = async (id) => {
  return new Promise((resolve, reject) => {
    NotificationModel.updateOne({ _id: id }, { $set: { read: true } }).exec(
      function (error, updateResult) {
        if (error) {
          console.log("Internal Error: ", error);
          reject(error);
          return;
        }
        resolve({ success: updateResult.matchedCount });
      }
    );
  });
};

module.exports = {
  getAll,
  getOne,
  getUnread,
  countUnread,
  readAll,
  read,
};