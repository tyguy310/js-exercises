var obj = {
  key: 'value'
};


var person = {
  firstName: 'Tyler',
  preferredName: 'Spaceman Spiff',
  lastName: 'Maier'
};
person.age = 31;
person.address = {
  street: '1 Galaxy Drive',
  planet: 'Jupiter',
  galaxy: 'Milky Way'
}
person.birthday = '9/9/1999';
person.hobbies = [
  { name: 'coding', levelOfInterest: 10},
  { name: 'zaping space slugs', levelOfInterest: 9},
  { name: 'evading aliens', levelOfInterest: 7},
  { name: 'lasering Zorgs', levelOfInterest: 8}
];
person.isAwesome = true;

delete person.isAwesome;
delete person.hobbies;
delete person.address;

for ( var key in person)  {
  console.log('key', key);
  console.log('value', person[key]);
}
