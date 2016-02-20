(function (angular) {
    'use strict';
    angular.module('app.controllers')
        .controller('HomeController', HomeController);

    HomeController.$inject = [];
    function HomeController() {
        var vm = this;
        vm.Name = 'Hello World';

    }

})(window.angular);