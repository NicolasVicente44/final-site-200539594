console.log("JavaScript Portion of the Test");

// Step 1: Write a multi-line comment detailing your name and student number

/*
Nicolas Vicente
200539594
*/

// Step 2: Create a block scoped, immutable variable that stores an empty array

const emptyArray = [];

// Step 3: Add the 3 people's names to the array

emptyArray.push("john", "james", "david");

// Step 4: Remove the second array item from the array

emptyArray.splice(1, 1);

// Step 5: Using array map, iterate over the array items and make them all uppercase. Store the result in a new, block scoped, mutable variable

let newArray = emptyArray.map(element => {
      return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });

// Step 6: Create an event listener that fires a callback function when the aside h2 is clicked. It should alert "Hello from Boo the World's Cutest Dog!";

const h2Element = document.querySelector('aside h2');

h2Element.addEventListener('click', function() {
  alert("Hello from Boo the World's Cutest Dog!");
});

