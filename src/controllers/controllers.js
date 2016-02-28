/**
 * Created by Aki Mäkinen on 28.2.2016.
 *
 * Import all components here.
 */

import Hello from './Hello/HelloController';
import World from './World/WorldController';

var module = angular.module('App.controllers', [])
  .controller('Hello', Hello)
  .controller('World', World);

export default module;