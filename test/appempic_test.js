'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('El nombre debe ser Estefania', function () {
    appempic.getName().should.equal('Estefania');
  });
   it('El apellido debe ser Morales', function () {
    appempic.getLastName().should.equal('Morales');
  });

});
