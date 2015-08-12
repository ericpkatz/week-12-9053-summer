angular.module("my_world")
    .directive("mainNav", function(){
        console.log("hello");
        return {
            restrict: 'E',
            templateUrl: '/templates/main_nav.html',
            controller: function($scope){
                var tabs = [
                    {
                        path: "/",
                        title: "Home"
                    },
                    {
                        path: "/things",
                        title: "Things"
                    },
                    {
                        path: "/people",
                        title: "People"
                    }
                ];
                $scope.tabs = tabs;
                
            }
        };
    });