(function (angular) {
    "use strict";

    angular.module('app.filters').filter('filter', filter);

    function filter() {

        return function (items, propertyName, filterText) {
            var filtered = [];
            if (items) {
                filtered = items.filter(function (filter) {
                    return filter[propertyName];
                });
            }
            return filtered;
        };
    }
 
})(window.angular);