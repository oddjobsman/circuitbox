/*!
 * circuitbox
 * Copyright(c) 2013 Ranganath Kini <oddjobsman@ranganathkini.com>
 * MIT Licensed
 */
 
'use strict';

var expect = require('expect.js');

var circuitbox = require('../lib');

describe('circuitbox', function () {

  it('should export ComponentCreationError', function () {
    expect(circuitbox.ComponentCreationError).to.be(require('../lib/componentCreationError'));
  });

  it('should export ComponentDefinitionError', function () {
    expect(circuitbox.ComponentDefinitionError).to.be(require('../lib/componentDefinitionError'));
  });

  it('should export NoSuchComponentDefinitionError', function () {
    expect(circuitbox.NoSuchComponentDefinitionError).to.be(require('../lib/noSuchComponentDefinitionError'));
  });

  it('should export Scopes', function () {
    expect(circuitbox.Scopes).to.be(require('../lib/scopes'));
  });

  it('should export ComponentDefinition', function () {
    expect(circuitbox.ComponentDefinition).to.be(require('../lib/componentDefinition'));
  });

  it('should export SimpleComponentDefinition', function () {
    expect(circuitbox.SimpleComponentDefintion).to.be(require('../lib/simpleComponentDefinition'));
  });

  it('should export ModuleBasedComponentDefinition', function () {
    expect(circuitbox.ModuleBasedComponentDefinition).to.be(require('../lib/moduleBasedComponentDefinition'));
  });

  it('should export ComponentDefinition', function () {
    expect(circuitbox.ComponentDefinition).to.be(require('../lib/componentDefinition'));
  });

  it('should export ComponentAssemblyStrategy', function () {
    expect(circuitbox.ComponentAssemblyStrategy).to.be(require('../lib/componentAssemblyStrategy'));
  });

  it('should export SimpleComponentAssemblyStrategy', function () {
    expect(circuitbox.SimpleComponentAssemblyStrategy).to.be(require('../lib/simpleComponentAssemblyStrategy'));
  });

  it('should export ModuleBasedComponentAssemblyStrategy', function () {
    expect(circuitbox.ModuleBasedComponentAssemblyStrategy).to.be(require('../lib/moduleBasedComponentAssemblyStrategy'));
  });

  it('should create a new circuitbox', function (done) {
    circuitbox.create().done(function (cbox) {
      expect(cbox).to.be.a(require('../lib/kernel'));
      done();
    });
  });

});