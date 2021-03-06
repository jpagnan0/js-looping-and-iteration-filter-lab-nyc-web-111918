// Code your solution in this file
function findMatching(drivers, name) {
  return drivers.filter((driverName) => {
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch (drivers, nameSubstr) {
  let nameSubstrLength = nameSubstr.length;
  return drivers.filter((driverName) => {
    return driverName.slice(0, nameSubstrLength) === nameSubstr;
  });
}

function matchName(drivers, name) {
  return drivers.filter((driver) => {
    return driver.name.toLowerCase() === name.toLowerCase();
  });
}
