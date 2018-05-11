// Generated by AvoCode VERSION 0.0.1, PLEASE EDIT WITH CARE
/* eslint-disable */

var isDev = process.env.NODE_ENV !== "production";

if (typeof __DEV__ !== 'undefined') {
  isDev = __DEV__;
}


var mixpanel = require("avo-mixpanel-browser");

var mixpanelDevApiKey = "ddf44285cd0e775bd5e52393038b3810";
var mixpanelProdApiKey = "ddf44285cd0e775bd5e52393038b3810";

var asserts;

var gimmeCutestuff = function(gifUrl) {
  if (isDev === true) {
    assertGifUrl(gifUrl);
  }
  
  if (isDev === true) {
    console.log("[avo] Event sent:", "Gimme Cutestuff", {"Gif URL": gifUrl});
  }
  
  mixpanel.logEvent("Gimme Cutestuff", {"Gif URL": gifUrl});
};

var logRevenue = function(productId_, quantity_, price_, revenueType_) {
  if (isDev === true) {
    console.log("[avo] Event sent:", "Log Revenue", {});
  }
  
  mixpanel.logRevenue(productId_, quantity_, price_, revenueType_, {});
};

if (isDev === true) {
  var assertCountry = function(country) {
    asserts.assertString("Country", country);
    if (country !== "Iceland" && country !== "US") {
      console.warn("Country", "should match one of the following values [", 
        "Iceland | US", "] but you provided the value", 
        JSON.stringify(country));
    }
  };
  
  var assertGifUrl = function(gifUrl) {
    asserts.assertString("Gif URL", gifUrl);
  };
  
  var assertNewValue = function(newValue) {
    asserts.assertInt("New Value", newValue);
  };
  
  var assertNumberOfEstatesInSearch = function(numberOfEstatesInSearch) {
    asserts.assertString("Number of estates in Search", 
      numberOfEstatesInSearch);
    if (numberOfEstatesInSearch !== "house" && numberOfEstatesInSearch !== 
        "flat") {
      console.warn("Number of estates in Search", 
        "should match one of the following values [", "house | flat", 
        "] but you provided the value", 
        JSON.stringify(numberOfEstatesInSearch));
    }
    
    asserts.assertMin("Number of estates in Search", 1, 
      numberOfEstatesInSearch);
  };
  
  var assertAnimal = function(animal) {
    asserts.assertString("Animal", animal);
    if (animal !== "Puppy" && animal !== "Kitten") {
      console.warn("Animal", "should match one of the following values [", 
        "Puppy | Kitten", "] but you provided the value", 
        JSON.stringify(animal));
    }
  };
  
  var assertOldValue = function(oldValue) {
    asserts.assertInt("Old Value", oldValue);
  };
  
  var assertTypeOfEstate = function(typeOfEstate) {
    asserts.assertString("Type of estate", typeOfEstate);
    if (typeOfEstate !== "flat" && typeOfEstate !== "house") {
      console.warn("Type of estate", 
        "should match one of the following values [", "flat | house", 
        "] but you provided the value", JSON.stringify(typeOfEstate));
    }
  };
  
  var assertNumberOfGifsInSession = function(numberOfGifsInSession) {
    asserts.assertInt("Number of Gifs in Session", numberOfGifsInSession);
    asserts.assertMin("Number of Gifs in Session", 1, numberOfGifsInSession);
  };
}

exports.gimmeCutestuff = gimmeCutestuff;
exports.logRevenue = logRevenue;


function setup_(options) {
  if (options && !options.validateProperties) {
    isDev = false;
  }

  var mixpanelKeyToUse = (options && options.useProductionKey) ?
    mixpanelProdApiKey :
    mixpanelDevApiKey;
  mixpanel.init(mixpanelKeyToUse);

}

exports.setup_ = setup_;

setup_();

if (isDev === true) {
  asserts = require("avo-assert-js");
}
