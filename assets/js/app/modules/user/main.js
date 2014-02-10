define([
  'angular',
  'modules/user/controllers/Display'
], function (angular, DisplayCtrl) {
  return angular.module('cargame.user', [])
    .controller('cargame.user.Display', DisplayCtrl);
});