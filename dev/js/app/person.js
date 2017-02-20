/*
 * Author  2017@Roda.Wang  
 * QQ      835972558
*/

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('jquery'));
    } else {
        root.Person = factory(root.jQuery);
    }
}(this, function($) {
  'use strict';

  var Say = function(some) {
    this._some = some;
  }
  Say.prototype = {
    constructor: 'Say',
    sayWhat: function(){
      return this._some
    }
  }
  var Person = function(options) {
    this._age      =  options.age      ||     '88';
    this._name     =  options.name     ||     'Alin';
    this._salary   =  options.salary   ||      80000;
    Say.call(this, options.some ? options.some : "what are you say?");
  }
  Person.prototype = new Say();
  Person.prototype.getName = function() {
    return this._name;
  }

  return function(o) {
    return o ? new Person(o) : {};
  };
}));
