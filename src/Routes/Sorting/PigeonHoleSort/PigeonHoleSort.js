import React from 'react'

function PigeonHoleSorting(inputArray) {
  const anim=[];
  var max = inputArray[0];
  anim.push([0]);
  anim.push([0]);
  for (var i = 1; i < inputArray.length; i++) {
    if (max < inputArray[i])
      max = inputArray[i];
      anim.push([i]);
      anim.push([i]);
  }

  // Create pigeonholeArray filled with zeros
  var pigeonholeArray = [];
  for (var i = 0; i <= max; i++) {
    pigeonholeArray.push(0);
  }

  // Iterate through inputArray and add 1's to pigeonholeArray
  for (var i = 0; i < inputArray.length; i++) {
    pigeonholeArray[inputArray[i]]++;
  }

  // Iterate through the pigeonholeArray and replace values in inputArray
  var inputArrayIndex = 0;
  for (var i = 0; i < pigeonholeArray.length; i++) {
    // Add to inputArray until the current pigeonholeArray index is 0
    while (pigeonholeArray[i]) {
      inputArray[inputArrayIndex] = i;
      pigeonholeArray[i]--;
      inputArrayIndex++;
      anim.push([inputArrayIndex-1]);
      anim.push([inputArrayIndex-1]);
      anim.push([inputArrayIndex-1,inputArray[inputArrayIndex-1]]);
    }
  }
  return anim;
}

export default PigeonHoleSorting
