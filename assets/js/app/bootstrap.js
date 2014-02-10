define([
  'angular',
  'modules/common/main',
  'modules/user/main',
  'modules/car/main'
], function (angular) {

  angular.module('cargame', [
    'cargame.common',
    'cargame.car',
    'cargame.user'
  ]);

  angular.bootstrap(document, ['cargame']);
});