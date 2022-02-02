import React from 'react'

function BubbleSorting(array) {
  const anim=[];
  if(array.length <= 1) return array;
  performSorting(array,0,array.length -1,anim);
  return anim;
}

function performSorting(array,low,high,anim) {
  for(let i=0;i<high;++i)
  {
    for(let j=0;j<high-i;++j)
    {
      anim.push([j,j+1]);
      anim.push([j,j+1]);
      if(array[j]>array[j+1]) {
        [array[j],array[j+1]]=[array[j+1],array[j]];
      }
      anim.push([j,array[j],j+1,array[j+1]]);
    }
  }
}

export default BubbleSorting
