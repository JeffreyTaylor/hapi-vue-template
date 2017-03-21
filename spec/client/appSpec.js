const mockery = require('mockery');

var uut;
describe('something', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnUnregistered: false
    });
    mockery.registerMock('Vue', function () {
      return jasmine.createSpy('vue')
    });
    mockery.registerMock('./home/home.vue', {some: 'object'});
    mockery.registerMock('./details/details.vue', {some: 'object'});
    uut = require('./../../client/app.js');
  });
  describe('app.js', () => {
    it('does something', () => {
      expect(true).toBe(true);
    });
  });
});