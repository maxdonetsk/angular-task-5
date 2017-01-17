(function () {
    'use strict';

    angular
            .module('myApp')
            .factory('Documents', ['$http', '$q', 'BaseURL', function ($http, $q, BaseURL) {
                    function postData(data) {
                        var deferred = $q.defer();
                        var parameters = {
                            content: data.content
                        };

                        $http.post(BaseURL + 'documents/' + data.action, parameters)
                                .success(function (response) {
                                    deferred.resolve(response);
                                })
                                .error(function (error) {
                                    deferred.resolve(error);
                                });
                        return deferred.promise;
                    }

                    return  {
                        postData: postData
                    };
                }]);
})();