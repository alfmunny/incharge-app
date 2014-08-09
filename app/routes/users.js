import Ember from 'ember';
import DS from 'ember-data';

var UsersRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('user');
  }
});

export default UsersRoute;
