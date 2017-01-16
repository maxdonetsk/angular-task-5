(function () {
    'use strict';

    angular
            .module('myApp')
            .factory('DocumentsFactory', ['$http', '$q', 'BaseURL', function ($http, $q, BaseURL) {
                    function postContent(data) {
                        var deferred = $q.defer();
                        $http.post(BaseURL + 'documents/' + data.action, data.content)
                                .success(function (response) {
                                    deferred.resolve(response);
                                })
                                .error(function (error) {
                                    deferred.resolve(error);
                                });
                        return deferred.promise;
                    }

                    return  {
                        postContent: postContent
                    };
                }]);
})();