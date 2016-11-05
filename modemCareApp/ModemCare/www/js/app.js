// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ion-floating-menu'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('TheCtrl', function($scope) {
  $scope.forms = ["basic medical records", "past conditions", "eye doctor"];
  $scope.varWord = "say this";
  $scope.myEvent = function(){
    console.log("SHIT");
  }


  $scope.changeFn = function() {
    var onFinish = function () { console.log("finished transmitting!") };
    var transmit = Quiet.transmitter({ profile: "audible", onFinish: onFinish });
    transmit.transmit(Quiet.str2ab("fug xd"));
    $scope.varWord = $scope.varWord + "!";
  };
})

var myEvent = function(){
  console.log("fug");
}


