// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'modemHealth.Forms', 'ion-floating-menu'])

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

  .controller('TheCtrl', function ($scope, Forms) {

    $scope.viewForms = true;
    $scope.viewStaticDoc = false;
    $scope.viewEditDoc = false;

    $scope.forms = Forms.all();
    $scope.varWord = "say this";

    $scope.transmitData = function () {

      // for (i = 0; i < $scope.forms.length; i++) {
      //   console.log("oh fug");
      // }
      var formsToSend = [];

      console.log($scope.forms[0]);
      // for (form in $scope.forms) {
      //   console.log(form.isShared);
      //   console.log(form);
      //   if (form.isShared) {
      //     console.log("FOUND ONE!?!?!?");
      //     formsToSend.push(form);
      //   }
      // }

      for (i = 0; i < $scope.forms.length; i++) {
        var form = $scope.forms[i];
        if (form.isShared) {
          console.log("FOUND ONE!?!?!?");
          formsToSend.push(form);
        }
      }


      console.log($scope.forms.length);
      console.log(formsToSend.length);
      // var dataToSend = JSON.stringify(formsToSend);
      var dataToSend = angular.toJson(formsToSend);
      console.log(dataToSend);

      var onFinish = function () { console.log("finished transmitting!") };
      var transmit = Quiet.transmitter({ profile: "audible", onFinish: onFinish });
      transmit.transmit(Quiet.str2ab(dataToSend));
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
    $scope.setViewDoc = function(item) {
      //$scope.mainDoc = $scope.forms[item];

      $scope.viewForms = false;
      $scope.viewStaticDoc = true;
      $scope.viewEditDoc = false;


      $scope.mainDoc = item;
      //console.log(item);
    };

    $scope.setEditDoc = function(item) {
      //$scope.mainDoc = $scope.forms[item];

      $scope.viewForms = false;
      $scope.viewStaticDoc = false;
      $scope.viewEditDoc = true;
    };


    $scope.setViewForms = function() {
      $scope.viewForms = true;
      $scope.viewStaticDoc = false;
      $scope.viewEditDoc = false;
    };

    $scope.toggleShare = function(item) {
      item.isShared = !item.isShared;
    };


    $scope.myEvent = function (index) {
      console.log("I HAVE YOU NOW");
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


  