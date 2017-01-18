angular.module('contenteditableDirective', [])
        .directive('contenteditable', function ($filter, $sce) {
            return {
                restrict: 'A', // only activate on element attribute
                require: '?ngModel', // get a hold of NgModelController
                link: function (scope, element, attrs, ngModel) {
                    if (!ngModel) return; // do nothing if no ngModel

                    // Specify how UI should be updated
                    ngModel.$render = function () {
                        element.html(ngModel.$viewValue || '');
                    };

                    // Listen for change events to enable binding
                    element.on('blur keyup change', function () {
                        scope.$apply(read);
                    });
                    read(); // initialize

                    // Write data to the model
                    function read() {
                        var oldVal = scope.redlinedata.string;
                        var newVal = element.text();
                        var result = $filter('diff')(oldVal, newVal);
                        result = $sce.getTrustedHtml(result);
                        ngModel.$setViewValue(result);
                    }
                }
            };
        });
