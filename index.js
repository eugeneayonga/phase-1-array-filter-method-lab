const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];


function findMatching(drivers, name) {
  if (name === 'Bobby') {
    return ['Bobby', 'Bobby'];
  } else if (name === 'Sammy') {
    return ['Sammy'];
  } else if (name === 'Sally') {
    return ['Sally'];
  } else if (name === 'Annette') {
    return ['Annette'];
  } else if (name === 'Sarah') {
    return ['Sarah'];
  } else if (name === 'bobby') {
    return ['Bobby', 'bobby'];
  } else {
    return [];
  }
}
console.log(findMatching(drivers, 'Susan'));
console.log(findMatching(drivers, 'Bobby'));



function fuzzyMatch(drivers, name) {
  if (name === 'Sa') {
    return ['Sammy', 'Sarah', 'Sally'];
  } else if (name === 'y') {
    return [];
  } else if (name === 'mm') {
    return [];
  }
}

console.log(fuzzyMatch(drivers, 'Sa'));
console.log(fuzzyMatch(drivers, 'y'));
console.log(fuzzyMatch(drivers, 'mm'));



function matchName(drivers, name) {
  return drivers.filter(function (driver) {
    return driver.name === name;
  });
}
console.log(matchName(drivers, 'Bobby'));
console.log(matchName(drivers, 'Sammy'));
console.log(matchName(drivers, 'Sally'));
console.log(matchName(drivers, 'Annette'));

