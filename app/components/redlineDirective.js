angular.module('redlineDirective', [])
    .controller('Controller', ['$scope', '$sce', function ($scope, $sce) {
        $scope.redlinedata = {
            content: '<del>deleted</del> <insacc>accepted</insacc> <ins>inserted</ins>'
        };
        $scope.redlinedata.html = $sce.trustAsHtml($scope.redlinedata.content);
    }])
    .directive('section', function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/section.html',
            link: function (scope, element, attr) {
                contentElement = angular.element(element[0].getElementsByClassName('content'));
            }
        };
    });
