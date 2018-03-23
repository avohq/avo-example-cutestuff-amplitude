// Generated by AvoCode VERSION 0.0.1, PLEASE EDIT WITH CARE
/* eslint-disable */


var amplitude = require("avo-amplitude-js");

var amplitudeDevApiKey = "26aeb7d9e9737f62d9bc9d10f7efdc9a";
var amplitudeProdApiKey = "26aeb7d9e9737f62d9bc9d10f7efdc9a";

if (process.env.NODE_ENV !== "production") {
  amplitude.init(amplitudeDevApiKey);
} else {
  amplitude.init(amplitudeProdApiKey);
}

var asserts;

if (process.env.NODE_ENV !== "production") {
  asserts = require("avo-assert-js");
}

var showCuteGif = function(animal) {
  if (process.env.NODE_ENV !== "production") {
    assertAnimal(animal);
  }
  
  amplitude.logEvent("Show Cute Gif", {"Animal": animal});
};

if (process.env.NODE_ENV !== "production") {
  var assertOldValue = function(oldValue) {
    asserts.assertInt("Old Value", oldValue);
  };
  
  var assertNewValue = function(newValue) {
    asserts.assertInt("New Value", newValue);
  };
  
  var assertAnimal = function(animal) {
    asserts.assertString("Animal", animal);
    if (animal !== "Puppy" && animal !== "Kitten") {
      console.warn("Animal", "should match one of the following values [", 
        "Puppy | Kitten", "] but you provided the value", 
        JSON.stringify(animal));
    }
  };
}

exports.showCuteGif = showCuteGif;

