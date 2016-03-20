/**
 * Created by Aki Mäkinen on 28.2.2016.
 */

var title = function(e) {
  this.title = this.content + " (template)";
  console.log(e); // Dependency injection demo
};

var component = {
  templateUrl: 'components/Title/title.html',
  controller: ['$scope', title],
  bindings: {
    content: '@'
  }
};

export default component;