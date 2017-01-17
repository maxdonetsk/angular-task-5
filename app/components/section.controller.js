angular.module('myApp')
        .controller('SectionController', ['$scope', '$sce', 'Documents', function ($scope, $sce, Documents) {
                $scope.redlinedata = {
                    content: '<del>deleted</del> <insacc>accepted</insacc> <ins>inserted</ins>'
                };
                $scope.redlinedata.html = $sce.trustAsHtml($scope.redlinedata.content);

                $scope.postData = function (action) {

                    //check if content is empty and set value
                    var content = $scope.content ? $scope.content : $scope.redlinedata.content;

                    //set data for http request
                    var data = {
                        action: action,
                        content: content
                    };

                    Documents.postData(data)
                            .then(function (data) {
                                console.log(data);
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                };
            }]);