let lunches = [];

addLunchToStart(lunches, "Hot dog");
addLunchToStart(lunches, "Sushi");
addLunchToEnd(lunches, "Kebab");
addLunchToEnd(lunches, "Burger");
addLunchToEnd(lunches, "Pizza");

removeLastLunch(lunches);
removeFirstLunch(lunches);

showLunchMenu(lunches);

getRandomLunch(lunches);

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length > 0) {
    let removedlunch = arr.pop();
    console.log(`${removedlunch} removed from the end of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length > 0) {
    let removedlunch = arr.shift();
    console.log(`${removedlunch} removed from the start of the lunch menu.`);
  } else {
    console.log("No lunches to remove.");
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length > 0) {
    console.log(`Randomly selected lunch: ${arr[Math.floor(Math.random() * arr.length)]}`);
  } else {
    console.log("No lunches available.");
  }
  return arr;
}

function showLunchMenu(arr) {
  if (arr.length > 0) {
    console.log(`Menu items: ${arr.join(", ")}`);
  } else {
    console.log("The menu is empty.");
  }
}
