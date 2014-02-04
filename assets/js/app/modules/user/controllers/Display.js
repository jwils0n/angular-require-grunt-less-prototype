define([
  'angular'
], function (angular) {
  var DisplayCtrl = function DisplayCtrl ($scope) {
    $scope.users = [
      { place: 1, name: 'James', car: 'Porsche Panamera Turbo' },
      { place: 2, name: 'Michael', car: 'Porsche Carrera GT' },
      { place: 3, name: 'Stephen', car: 'Lamborghini Gallardo' },
      { place: 4, name: 'Dad', car: 'Chevy Corvette' },
      { place: 5, name: 'Sarah', car: 'Dodge Neon' },
      { place: 6, name: 'Calee', car: 'Geo Tracker' },
    ];
  };

  return DisplayCtrl;
});