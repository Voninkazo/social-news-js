// write your code here
console.log('it works!');
//First, let's create an array contains some objects of links
let myLinks = [
  {
    title: "Banana",
    url: "https://banana.com",
    author: "Guest"
  },
  {
    title: "Orange",
    url: "https://orange.com",
    author: "somebody"
  },
  {
    title: "Pinapple",
    url: "https://pinapple.com",
    author: "Funny"
  },
  {
    title: "Apple",
    url: "https://apple.com",
    author: "Fatman"
  },
]

// We need a new variable to ssign the menues
const choices = `Welcome to my social links!
1 : Show links
2 : Add a link
3 : Remove a link
0 : Quite`;

// Here we will create the prompt for users to enter their choice
let choiceMenue = Number(prompt(choices));
//Here we create a whie loop to wrap all the conditions
while (choiceMenue !== 0) {
  switch(choiceMenue) {
    case 1:
      showLinks();
      break;
    case 2:
      addLinks();
      break;
    case 3:
      removeLinks();
      break;
    case 0:
      alert(`See you!`);
      break;
    default:
      alert(`Choose between 1, 2, 3, 0`);
  }
  choiceMenue = Number(prompt(choices));
}
// Then we will declare a function that lists all the links
function showLinks() {
  for (let i = 0; i < myLinks.length; i++) {
    // Here we show them one at a time
    alert(`Title: ${myLinks[i].title} \n Url: ${myLinks[i].url} \n Author: ${myLinks[i].author}`);
  }
}

// We will create a second function in which the user can add a new link
function addLinks() {
  let newTitle = prompt(`Your link title`);
  let newUrl = prompt(`And its url`);
  let newAthor = prompt(`Then the author`);
}

