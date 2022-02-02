import React from 'react'

function SelectionSorting(array) {
  const anim=[];
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      anim.push([min,j]);
      anim.push([min,j]);
      anim.push([min,array[min],j,array[j]]);
      if (array[min] > array[j])
      {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = array[i];
      array[i] = array[min];
      array[min] = tmp;
    }
    anim.push([i,min]);
    anim.push([i,min]);
    anim.push([i,array[i],min,array[min]]);
  }
  return anim;
}

export default SelectionSorting
