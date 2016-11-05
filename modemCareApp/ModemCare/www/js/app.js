// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ion-floating-menu'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .controller('TheCtrl', function ($scope) {

    $scope.viewForms = true;

    $scope.forms = [
      { index: 0, name: "basic medical records", added: true },
      { index: 1, name: "past conditions", added: false },
      { index: 2, name: "eye doctor", added: false }];
    $scope.varWord = "say this";

    $scope.transmitData = function () {
      var onFinish = function () { console.log("finished transmitting!") };
      var transmit = Quiet.transmitter({ profile: "audible", onFinish: onFinish });
      transmit.transmit(Quiet.str2ab("fug xd"));
      $scope.varWord = $scope.varWord + "!";
    };

    $scope.addMe = function (index) {
      $scope.forms[index].added = true;
      // $scope.varWord = $scope.varWord + index;
    };
    $scope.removeMe = function (index) {
      $scope.forms[index].added = false;
      // $scope.varWord = $scope.varWord + index;
    };

    $scope.mainDoc = $scope.forms[0];
    $scope.setViewDoc = function(index) {
      $scope.viewForms = false;
      $scope.mainDoc = $scope.forms[index];
    };


    $scope.myEvent = function (index) {
      console.log("I HAVE YOU NOW MOTHERFUCKER");
    };
  })

//THIS DOES NOT DO SHIT. IT'S OUT OF FUCKING SCOPE. YOU NEED FUCKING SCOPE.
// var myEvent = function () {
//   console.log("fug");
// }

  .controller('StaticPageCtrl', function ($scope, $http, $location) {
    $http.get('medical-record1.json').then(function (data) {
      $scope.formData = data;
    });
    $scope.formName = $scope.formData.name;
    $scope.formFields = $scope.formData.fields;
    $scope.editForm = function (view) {
      $location.path(view);
    }
  })

  .controller('EditPageCtrl', function ($scope, $http, $location) {
    $http.get('medical-record1.json').then(function (data) {
      $scope.formData = data;
    });
    $scope.formName = $scope.formData.name;
    $scope.formFields = $scope.formData.fields;
    $scope.saveForm = function (view) {
      $scope.formData.fields = $scope.formFields;
      $http.post('medical-record1.json', $scope.formData).then(function (data) {
      });
      $location.path(view);
    };
  });
