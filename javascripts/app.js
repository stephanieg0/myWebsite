var app = angular.module("codebyStephanie", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider){

  $routeProvider.
    when('/', {
      templateUrl: '/partials/home.html'
    }).
    otherwise('/');



}]);