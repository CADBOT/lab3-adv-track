/*********************************************************
LAB 2: Campy Sci-fi

Welcome to Lab 3 =)

Be sure to read all the comments!

All of the instructions are inline with the assignment below.
Look for the word TODO in comments.  Each TODO will have a
description of what is required.

To run this file (in the terminal) use: node lab3.js

*********************************************************/
// SETUP
//*********************************************************

// We're going to use this special assert method again to test our code
function assert(expression, failureMessage) {
  if (!expression) {
    console.log("assertion failure: ", failureMessage);
  }
}

//*********************************************************
// PROBLEM 1: Body Swap. 20 points.
//*********************************************************

function Person () {
  // TODO: modify this constructor to create objects
  // with several properties, some of which model physical
  // attributes, and some of which model mental attributes.
  // Examples might include height (physical) and favorite
  // book (mental). It should take arguments so that each
  // object it creates can be unique.
}

// the parameters a and b are Person objects
function bodySwap(a, b) {
  // TODO: swap all the mental attributes of person a and person b
}

var kirk = new Person(); // TODO: give kirk some unique attributes
var drLester = new Person(); // TODO: give drLester some unique attributes

// TODO: write two assertions, one about kirk and one about drLester
// anything that should be true at this point about them

bodySwap(kirk, drLester);

// TODO: write two more assertions, one about kirk and one about
// drLester. test for things that should have changed during the
// call to bodySwap

//*********************************************************
// PROBLEM 2: The Blob. 20 points
//*********************************************************

/* Dowington, PA had 1000 citizens on the night the blob escaped
 its meteorite. At first, the blob could only find and consume
 pennsylvanians at a rate of 1/hour. However, each time it digested
 someone, it became faster and stronger: adding to its consumption
 rate by 1 person/hour.

 persons consumed  |  rate of consumption
 ------------------|---------------------
        0          |       1/hour
        1          |       2/hour
        2          |       3/hour
        3          |       4/hour

 Use a loop to calculate how long it took the blob to finish
 with Dowington.
*/

var hoursSpentInDowington; // TODO: assign me the value of the
                           // above calculation

// Now, write a method that takes a population for an arbitrary
// town, and the starting consumption rate, and returns the number
// of hours the blob needs to ooze it's way through that town.

function hoursToOoze(population, peoplePerHour) {
  // TODO: implement me based on the instructions above
}

assert(hoursToOoze(0, 1) === 0, "no people means no time needed.");
assert(hoursToOoze(1000, 1) === hoursSpentInDowington,
  "hoursSpentInDowington should match hoursToOoze\"s result for 1000");
// TODO: write three more assertions like the two above, testing out
// the hoursToOoze method.

//*********************************************************
// PROBLEM 3: Universal Translator. 20 points
//*********************************************************

var hello = {
  klingon: "nuqneH",  // home planet is Qo"noS
  romulan: "Jolan\"tru", // home planet is Romulus
  "federation standard": "hello" // home planet is Earth
};

// TODO: define a constructor that creates objects to represent
// sentient beings. They have a home planet, a language that they
// speak, and method called sayHello.

function SentientBeing () {
  // TODO: specify a home planet and a language
  // you'll need to add parameters to this constructor

  // sb is a SentientBeing object
  this.sayHello = function(sb) {
    // TODO: say hello prints out (console.log's) hello in the
    // language of the speaker, but returns it in the language
    // of the listener (the sb parameter above).
    // use the 'hello' object at the beginning of this exercise
    // to do the translating
  };
}

// TODO: create three subclasses of SentientBeing, one for each
// species above (Klingon, Human, Romulan).

assert((new Human()).sayHello(new Klingon()) === "nuqneH",
  "the klingon should hear nuqneH");
// TODO: write five more assertions, to complete all the possible
// greetings between the three types of sentient beings you created above.

//*********************************************************
// PROBLEM 4: Cleanup: 10 points
// Makes sure this file passes jshint and jscs
//
// ./node_modules/.bin/grunt jshint
// ./node_modules/.bin/grunt jscs
//*********************************************************
