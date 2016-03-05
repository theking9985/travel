angular.module('travelServices', ['ngResource'])
.factory('travel', ['$resource', "$firebaseAuth", function($resource, $firebaseAuth) {
	var ref = new Firebase("https://shining-torch-3315.firebaseio.com/");
  return { auth: $firebaseAuth(ref)  };

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