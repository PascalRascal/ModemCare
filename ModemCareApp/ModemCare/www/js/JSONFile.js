/**
 * Adapted from StackOverflow user ssuperczynski
 */
(function () {
    'use strict';

    angular
            .module('app')
            .factory('JSONFile', JSONFile);

    JSONFile.$inject = [];

    function JSONFile() {

        var self = this;

        self.details = [];
        self.get = $http.get('medical-record1.json')
                .then(function (response) {
                    self.details = response.data;
                }).catch(function (error) {
                    // log error
                });

        return self;
    }
})();