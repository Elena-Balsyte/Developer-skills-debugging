// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*Write a function that given an array of temperatures, will return the amplitude if given temperatures. The array might consist a sensor error as well. */

//UNDESRTANDING THE PROBLEM
//what is an amplitude?
// It is a difference between highest and lowest.
// How to compute highest and lowest temperature?
// What is a sensor error? What to do with it?

// BREAKING INTO SMALLER TASKS
// 1) How to ignore the error?
// 2) Find max value in temp array
// 3) Find min value in temp arry
// 4) Return the difference of max and min - the amplitude

const temperatures = [3, -2, -6, -1, "error", 9, 13, 15, 17, 14, 9, 5];

const calcTempAmplitude = function (temp) {
  let max = temp[0];
  let min = temp[0];
  let amplitude;
  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temp[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  amplitude = max - min;
  console.log(amplitude);
};

//calcTempAmplitude(temperatures);

//Problem 2: The function should now receive two arrays
//of temp.
// - With two arrays, should it implement the funcionality
//twice? NO. It should merge the arrays.

// Breaking it into sub-problems:
// How to merge two arrays? --> using concat() method.

const calcTempAmplitudeNew = function (array1, array2) {
  let temp = array1.concat(array2);
  let max = temp[0];
  let min = temp[0];
  let amplitudeNew;
  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temp[i];
    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  amplitudeNew = max - min;
  console.log(amplitudeNew);
};

//calcTempAmplitudeNew([1, 2, 3, -5], ["errror", -17, 15, 6]);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //value: Number(prompt("Degrees celsius: ")),
    value: 10,
  };
  //   console.log(measurement);
  //   console.table(measurement);
  //   console.log(measurement.value);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};

//console.log(measureKelvin());

// Using debugger

const calcTempAmplitudeBug = function (array1, array2) {
  let temp = array1.concat(array2);
  let max = 0;
  let min = 0;
  let amplitudeBug;
  for (let i = 0; i < temp.length; i++) {
    const currentTemp = temp[i];
    if (typeof currentTemp !== "number") continue;
    //debugger;
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  //console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([1, 3, 5], ["errror", 9, 4, 5]);
//console.log(amplitudeBug);

/* Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4] */

/* Understand - loop through the given array. 
Sub-problems:
1) Write a For loop
2) Console.log a string (concatenated of every index and value) */

const printForecast = function (arr) {
  let forecast = "... ";
  let daysCount = 1;
  for (let i = 0; i < arr.length; i++) {
    //"... 17ºC in 1 days ... 21ºC in 2 days ...
    forecast = forecast + arr[i] + "°C " + "in " + daysCount + " days ... ";
    daysCount++;
  }
  console.log(forecast);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
