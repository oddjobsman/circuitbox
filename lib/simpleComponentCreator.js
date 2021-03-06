/*!
 * circuitbox
 * Copyright (c) 2014-2015 Ranganath Kini <codematix@codematix.me>
 * Copyright (c) 2015 intuitivcloud Systems <engineering@intuitivcloud.com>
 * MIT Licensed
 */

'use strict';

var _ = require('lodash'),
    u = require('./utils'),
    inherits = u.inherits,
    fmt = u.fmt,
    SimpleComponent = require('./simpleComponentDefinition'),
    ComponentCreator = require('./componentCreator');

function SimpleComponentCreator(component, dependencies) {
  if (!(component instanceof SimpleComponent)) throw new Error(fmt('SimpleComponentCreator cannot create %s', component.constructor.name));
  ComponentCreator.call(this, component, dependencies);
}

inherits(SimpleComponentCreator, ComponentCreator);

_.extend(SimpleComponentCreator.prototype, {

  creationSequence: function () {
    var t = this,
        s = [];

    s.push(function (cb) {
      var v = t.component.value;

      t.buildBase(v, function (err, cv) {
        if (err) return cb(err);
        cb(null, (cv || v));
      });

    });

    if (t.component.initializer) s.push(t.initialize);

    return s;
  }

});

module.exports = SimpleComponentCreator;
