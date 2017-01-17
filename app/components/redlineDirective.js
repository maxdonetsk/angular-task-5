angular.module('redlineDirective', [])
        .directive('section', function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/section.html',
                link: function (scope, element, attr) {
                    contentElement = angular.element(element[0].getElementsByClassName('content'));
                }
            };
        });
