import React from 'react'

let arrlen;

function HeapSorting(array) {
  const anim=[];
  if(array.length <= 1) return array;
  arrlen = array.length;
  for (let i = Math.floor(arrlen / 2); i >= 0; i -= 1){
    maxHeap(array, i,anim);
  }
  for (let i = arrlen-1; i > 0; i--) {

    anim.push([0,i]);
    anim.push([0,i]);
    [array[0],array[i]]=[array[i],array[0]]
    anim.push([0,array[0],i,array[i]]);
    arrlen--;
    maxHeap(array, 0,anim)
  }
  return anim;
}

function maxHeap(array,i,anim) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i

  if (left < arrlen && array[left] > array[max]) {
    max = left
  }

  if (right < arrlen && array[right] > array[max])     {
    max = right
  }

  anim.push([i,max]);
  anim.push([i,max]);

  if (max != i) {
    [array[i],array[max]]=[array[max],array[i]];
    anim.push([i,array[i],max,array[max]]);
    maxHeap(array, max,anim)
  }
  else {
    anim.push([i,array[i],max,array[max]]);
  }
  return ;
}

export default HeapSorting
