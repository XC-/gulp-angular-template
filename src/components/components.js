/**
 * Created by Aki Mäkinen on 28.2.2016.
 *
 * Import all components here.
 * For example:
 *
 * import Bar from './Foo/Bar';
 */

import Message1 from './Message1/Message1Component';
import Message2 from './Message2/Message2Component';
import Title from './Title/TitleComponent';

var module = angular.module('App.components', [])
  .component('message1Component', Message1)
  .component('message2Component', Message2)
  .component('titleComponent', Title);

export default module;