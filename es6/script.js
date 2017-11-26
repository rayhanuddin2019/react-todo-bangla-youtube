var hello = 'helow';

// variable store
let hello = 'hellow';
const hello = 'hellow';
// object destructuring
var friends = {
  sumon: {
    name: 'sumon',
    email: 'sumon@gmail.com'
  },
  palash: {
    name: 'palash',
    email: 'palash@gmail.com'
  }
}
var sumon = friends.sumon;
var palash = friends.palash;
var {sumon, palash} = friends

// array  destructuring
var fruits = ['apple', 'orange', 'banana'];
newfruits = [...fruits, mango] // ['apple', 'orange', 'banana', 'mango']

// fat arrow
var hello = function () {
  return 'hello';
}
function hello (a1) {
  return a1 * 2;
}

function hello (a1, a2) {
  return a1 * a2;
}
var hello = a1 => a1 * 2;
var hello = (a1, a2) => {
  return a1 * a2;
} 

// class
class Hello extends React.Component {
  hello =  () => {

  }
}
export default Hello;

// export and import















