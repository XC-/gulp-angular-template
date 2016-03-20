/**
 * Created by Aki Mäkinen on 28.2.2016.
 */

var message2 = function() {
  this.about = this.content;
};

var component = {
  templateUrl: 'components/Message2/message2.html',
  controller: message2,
  bindings: {
    content: '<'
  }
};

export default component;