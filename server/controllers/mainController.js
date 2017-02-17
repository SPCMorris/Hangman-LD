const UserCtrl = require('./userController.js');
const GameCtrl = require('./gameController.js');

// Aggregates all controllers to export as one to reduce redundancy and help with debugging
const Routes = {
  UserCtrl,
  GameCtrl
};

module.exports = Routes;
