import Ember from 'ember';

var Router = Ember.Router.extend({
  location: InchargeAppENV.locationType
});

Router.map(function() {
  this.resource('users', { path: '/users' }, function () {
    this.resource('user', { path: ':user_id' });
  });
  this.resource('vehicles', { path: 'vehicles' }, function () {
    this.resource('vehicle', { path: ':vehicle_id' });
  });
  this.resource('charge-points');
  this.resource('transactions');
});

export default Router;
