angular.module("my_world")
    .factory("NavSvc", function(){
        var selectedPath="/";
        
        function Tab(config){
           this.path = config.path; 
           this.title = config.title;
        }
        
        Tab.prototype.selected = function(){
           return selectedPath == this.path; 
        }
        var tabs = [
            new Tab(
            {
                path: "/",
                title: "Home"
            }),
            new Tab(
            {
                path: "/things",
                title: "Things"
            }),
            new Tab(
            {
                path: "/people",
                title: "People"
            }),
            new Tab(
            {
                path: "/login",
                title: "Login"
            })
        ];
       return {
           tabs: tabs,
           setSelectedPath: function(path){
              selectedPath = path; 
           },
           getSelectedPath: function(path){
               return selectedPath;
           }
       }; 
    });