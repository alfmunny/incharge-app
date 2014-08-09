import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

var Vehicle = DS.Model.extend({
  type: attr('string'),
  name: attr('string'),
  picture: attr('string'),
  users: hasMany('user'),
  // transactions: hasMany('transaction')
});

Vehicle.reopenClass({
  FIXTURES: [{
    id: 1,
    type: 'Citron',
    name: 'Incharge Vehicle 1',
  },{
    id: 2,
    type: 'Volkswagen',
    name: 'Incharge Vehicle 2',
  },{
    id: 3,
    type: 'Tesla',
    name: 'Incharge Vehicle 3',
  }]
});

export default Vehicle;
