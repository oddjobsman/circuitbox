/*!
 * circuitbox
 * Copyright(c) 2013 Ranganath Kini <oddjobsman@ranganathkini.com>
 * MIT Licensed
 */

/*jshint nonew: false*/
/*jshint expr: true*/

(function () {
  'use strict';

  var context = describe;
  var expect = require('expect.js');

  var ComponentDefinition = require('../lib/componentDefinition');
  var ModuleBasedComponentDefinition = require('../lib/moduleBasedComponentDefinition');

  describe('ModuleBasedComponentDefinition', function () {
    
    it('inherits ComponentDefinition', function () {
      expect(ModuleBasedComponentDefinition.super_).to.be(ComponentDefinition);
    });

    context('when created with name and module id', function () {
      
      it('should return a function that emits the specified module id', function () {
        var d = new ModuleBasedComponentDefinition({
          name: 'myComponent',
          moduleId: './myComponentModule'
        });

        var result = d.emitter();

        expect(result).to.be.a('string');
        expect(result).to.be('./myComponentModule');
      });
      
    });
    
  });
})();