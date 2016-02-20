(function(angular) {
    "use strict"; 

    angular.module('app.widgets')
        .directive('directive', directive);

    directive.$inject = [];

    function directive() {

        var link = function(scope, elem, attrs) {
            
        };

        return {
            restrict: 'E',
            replace: true,
            templateUrl: './client//widgets/directive.html',
            scope: {               
            },
            link: link
        };

    }

})
(window.angular);
