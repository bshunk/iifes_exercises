// turn this function expression and execution into a single line using the iife pattern

let makeProfile = (function() {
  const name = "Fred Jones";
  const age = 37;
  const likes = ["puppies", "flowers", "pro wrestling"];
  return {
    name, age, likes
  }
}());

// console.log("the results: ", makeProfile);
	
let otherProfile = (function(items) {
	items.newProp = ["Bob Jones", 38, ["trucks", "beer", "hallmark movies"]];
	return items
}(makeProfile));

console.log("the results: ", makeProfile);



// Then augment the iife with a second iife that is 
// configured to accept an argument of an existing 
// object. (edited)



// var globalThing = (function() {
//   let name = "Fred";
//   return { 
//     title: "GlobalThing",
//     printAName: function() {
//       return name + "Smith";
//     }
//   };
// }());

// var globalThing = (function(thing) {
//   thing.newProp = "Now I'm Lost";
//   return thing
// }(globalThing));

// console.log("global var", globalThing);


