var app = angular.module("codebyStephanie", ["ngRoute"]);

app.config(["$routeProvider", function ($routeProvider){

  $routeProvider.
    when('/codebyStephanie/home', {
      templateUrl: '/partials/home.html'
    }).
    when('/codebyStephanie/work', {
      templateUrl: '/partials/work.html'
    }).
    otherwise('/codebyStephanie/home');



}]);