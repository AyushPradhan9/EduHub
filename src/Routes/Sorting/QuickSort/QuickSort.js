import React from 'react'

function QuickSorting(array) {
  const anim=[];
  if(array.length <= 1) return array;
  for(let i=0;i<array.length;++i)
  {
    console.log(array[i]);
  }
  sortingDivisor(array,0,array.length -1,anim);
  console.log("Sorted");
  for(let i=0;i<array.length;++i)
  {
    console.log(array[i]);
  }
  return anim;
}

function sortingDivisor(mArray,sIdx,eIdx,anim) {
  if(sIdx>=eIdx) {
    return;
  }
  const pi = partition(mArray,sIdx,eIdx,anim)
  sortingDivisor(mArray,sIdx,pi-1,anim);
  sortingDivisor(mArray,pi+1,eIdx,anim);
}

function partition(mArray,sIdx,eIdx,anim) {
  let pivot = mArray[eIdx];
  let i = sIdx-1;
  for(let j=sIdx; j<=eIdx-1;j++)
  {
    if(mArray[j] < pivot) {
      i++;
      anim.push([i,j,sIdx,eIdx]);
      anim.push([i,j,sIdx,eIdx]);
      [mArray[i],mArray[j]]=[mArray[j],mArray[i]];
      anim.push([i,mArray[i],j,mArray[j]]);
    }
    else if(i>=0) {
      anim.push([i,j,sIdx,eIdx]);
      anim.push([i,j,sIdx,eIdx]);
      anim.push([i,mArray[i],j,mArray[j]]);
    }
  }
  i++;
  anim.push([i,eIdx,sIdx,eIdx]);
  anim.push([i,eIdx,sIdx,eIdx]);
  [mArray[i],mArray[eIdx]]=[mArray[eIdx],mArray[i]];
  anim.push([i,mArray[i],eIdx,mArray[eIdx]]);
  return i;
}

export default QuickSorting
