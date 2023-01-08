const { NotificationModel } = require("../models/notification.schema");
class NotificationService {
  constructor() {}

  async getAll() {
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
  }
  async getOne(id) {
    return new Promise((resolve, reject) => {
      NotificationModel.findOne({ _id: id }).exec(function (
        error,
        notification
      ) {
        if (error) {
          console.log("Internal Error: ", error);
          reject(error);
          return;
        }
        resolve(notification);
      });
    });
  }
  async getUnread() {
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
  }
  async countUnread() {
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
  }
  async readAll() {
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
  }
  async read(id) {
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
  }
}

module.exports = NotificationService;