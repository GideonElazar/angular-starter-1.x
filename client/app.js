(function (angular) {
    "use strict";

    angular.module('app', [
        'ngResource',
        'app.controllers',
        'app.services',
        'app.filters',
        'app.widgets'
    ]);

    angular.module('app.controllers', []);
    angular.module('app.services', []);
    angular.module('app.filters', []);
    angular.module('app.widgets', []);

})(window.angular);