'use strict';

describe('Plane', function() {
  var plane;
  beforeEach(function() {
    plane = new Plane();
  });
  describe('It can land in an airport', function() {
    expect(plane.land).not.toBeUndefined();
  });
});
