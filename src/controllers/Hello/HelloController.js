/**
 * Created by Aki Mäkinen on 28.2.2016.
 */

var hello = function($scope) {
  'ngInject';
  console.log('Hello Controller!');
  $scope.message = 'This is a Gulp-AngularJS project template.';
};

export default hello;