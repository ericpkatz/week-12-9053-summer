angular.module("my_world")
    .controller('HomeCtrl', function($scope, NavSvc){
       NavSvc.setSelectedPath("/");
       $scope.message = "Welcome to My World. " + new Date();
    });