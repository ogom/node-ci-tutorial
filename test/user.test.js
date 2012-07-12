
var should = require('chai').should()
var User = require('../lib/user.js');

describe('User', function() {
  describe('#create', function() {
    it('Should create a user.', function() {
      var user = User.create({name:'cinnamon'});
      should.exist(user);
    });

    it('Should return name is cinnamon.', function() {
      var user = User.create({name:'cinnamon'});
      user.should.have.property('name','cinnamon');
    });
  });

  describe('.rename', function() {
    it('Should return name is chiffon.', function() {
      var user = User.create({name:'cinnamon'});
      user.rename('chiffon');
      user.should.have.property('name','chiffon2');
    });
  });
});
