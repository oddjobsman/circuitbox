/*!
 * circuitbox
 * Copyright(c) 2014 Ranganath Kini <oddjobsman@ranganathkini.com>
 * MIT Licensed
 */

'use strict';

var _ = require('underscore'),
    fmt = require('./utils').fmt,
    ComponentDefinitionBuilderFactory = require('./componentDefinitionBuilderFactory');

function buildDefinitions(lst) {
  /*jshint validthis: true */

  _.each(lst, function (b) {
    var n = b.name;

    if (~(_.keys(this._defs).indexOf(n)))
      throw new Error(fmt('Another component with the name "%s" has already been registered', n));

    this._defs[n] = b.build();
  }, this);
}

function Registry() {
  this._defs = {};
}

_.extend(Registry.prototype, {

  find: function (name) {
    var def = this._defs[name];
    if (!def) throw new Error(fmt('No definition found for component \'%s\'', name));
    return def;
  },

  registerModule: function (module) {
    // indirection to protect this ComponentRegistry instance
    var cList = [];

    module.call(module, {
      for: function (name) {
        if (_.isEmpty(name))
          throw new Error('A valid component name must be specified');
        return new ComponentDefinitionBuilderFactory(cList, name);
      }
    });

    buildDefinitions.call(this, cList);
    return true;
  },

  hasComponents: function () {
    return !(_.isEmpty(this._defs));
  },

  dependencyListFor: function (name) {
    // start with the definition of target component
    var t = this,
        d = t.find(name),
        r = [ d.name ], // put that in our list
        deps = (d.dependencies || []);

    // for each dependency of the target component
    // trigger a recursive search for all deps
    // TODO: Without TCO, this recursion is vulnerable. Need to rewrite
    _.chain(deps).map(function (dep) {
      return t.dependencyListFor(dep);
    }).each(function (defList) {
      // put the results in front of the list pushing target component to the last
      r.unshift.apply(r, defList);
    });

    return r;
  }

});

module.exports = Registry;