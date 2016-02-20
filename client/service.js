(function (angular) {
    "use strict"; 

    angular.module('app.services')
        .factory('ApiService', ApiService);

    ApiService.$inject = ['$http'];
    function ApiService($http) {

        var service = {
           
            Load: Load
        };

        function Load(param) {

            var _url = '' + param;

            return $http({
                method: 'GET',
                url: _url,
                cache: true,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }
      
        return service;
    }

})(window.angular);