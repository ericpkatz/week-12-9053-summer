angular.module("my_world")
    .controller("ThingsCtrl", function($scope, ThingsSvc, NavSvc){
        NavSvc.setSelectedPath("/things");
        console.log("ThingsCtrl");
        ThingsSvc.getThings()
            .then( function(things){
                $scope.things = things;
            })
    });