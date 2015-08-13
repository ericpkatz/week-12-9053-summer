angular.module("my_world")
    .factory("AuthSvc", function(){
        var _user = {};
        
        return {
           user: _user 
        }
        
        
    });