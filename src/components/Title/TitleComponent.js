/**
 * Created by Aki Mäkinen on 28.2.2016.
 */

var title = function() {
  'ngInject';
  this.title = this.content + " (template)";
};

var component = {
  templateUrl: 'components/Title/title.html',
  controller: title,
  bindings: {
    content: '@'
  }
};

export default component;