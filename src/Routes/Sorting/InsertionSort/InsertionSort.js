import React from 'react'

function InsertionSorting(array) {
  const anim=[];
  let arrlen = array.length;
  for (let i=1;i<arrlen;i++) {
    let key=array[i];
    let j=i-1;
    while (j>=0 && array[j]>key) {
      anim.push([i,j]);
      anim.push([i,j]);
      anim.push([(j+1),array[j]]);
      array[j+1] = array[j];
      j--;
    }
    anim.push([i,j+1]);
    anim.push([i,j+1]);
    anim.push([(j+1),key]);
    array[j+1] = key;
  }
  return anim;
}

export default InsertionSorting
