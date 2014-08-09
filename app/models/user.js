import DS from 'ember-data';

var attr = DS.attr;
var hasMany = DS.hasMany;

var User = DS.Model.extend({
  firstName: attr('string'),
  lastName: attr('string'),
  expiryDate: attr('date'),
  email: attr('string'),
  company: attr('string'),
  avatar: attr('string'),
  // vehicles: hasMany('vehicle'),
  // chargePoints: hasMany('chargePoint'),
  // transactions: hasMany('transaction')
});

User.reopenClass({
  FIXTURES: [{
    id: 1,
    firstName: 'Yuanchen',
    lastName: 'Zhang',
    expiryDate: new Date('2015-05-05'),
    email: 'alfmunny@gmail.com',
    company: 'Incharge Project'
  },{
    id: 2,
    firstName: 'Ozan',
    lastName: '',
    expiryDate: new Date('2015-05-05'),
    email: 'ozen@gmail.com',
    company: 'Incharge Project'
  },{
    id: 3,
    firstName: 'Richard',
    lastName: '',
    expiryDate: new Date('2015-05-05'),
    email: 'richard@gmail.com',
    company: 'Incharge Project'
  }]
});

export default User;
