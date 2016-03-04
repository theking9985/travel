angular.module('travelServices', ['ngResource'])
.factory('travel', ['$resource', function($resource) {
  return {    };
}])
.service('Authkey', function(){
  var authkey = "";
  var username = "";
  var id = "";

  return {
  getAuthKey: function(){
        return authkey;
     }, 
  setAuthKey: function(key){
        authkey = key;
     },
  resetAuthKey: function(){
     	authkey = "";
     },
  setUserName: function(name){
		username = name;
	},
	getUserName: function(){
		return username;
	},
	clearUserName: function(){
		username = "";
	},
	setUserId: function(num){
		id = num;
	},
	getUserId: function(){
		return id;
	},
	clearUserId: function(){
		id = "";
	}
 }
});