/**
 * Created by Aki Mäkinen on 28.2.2016.
 */

var message1 = function() {
  this.greeting = this.content;
};

var component = {
  templateUrl: 'components/Message1/message1.html',
  controller: message1,
  transclude: true,
  bindings: {
    content: '<'
  }
};

export default component;