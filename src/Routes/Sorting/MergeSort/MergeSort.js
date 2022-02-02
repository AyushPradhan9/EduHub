import React from 'react'

function MergeSorting(array) {
  const anim=[];
  if(array.length <= 1) return array;
  const auxArray=array.slice();
  sortingDivisor(array,0,array.length -1,auxArray,anim);
  return anim;
}

function sortingDivisor(mArray,sIdx,eIdx,auxArray,anim) {
  if(sIdx===eIdx) return;
  const mIdx=Math.floor((sIdx+eIdx)/2);
  sortingDivisor(auxArray,sIdx,mIdx,mArray,anim);
  sortingDivisor(auxArray,mIdx+1,eIdx,mArray,anim);
  performMerging(mArray,sIdx,mIdx,eIdx,auxArray,anim);
}

function performMerging(mArray,sIdx,mIdx,eIdx,auxArray,anim) {
  let i=sIdx;
  let j=sIdx;
  let k=mIdx+1;
  while(i<=mIdx && k<=eIdx)
  {
    anim.push([i,k]);
    anim.push([i,k]);
    if(auxArray[i]<=auxArray[k])
    {
      anim.push([j,auxArray[i]]);
      mArray[j++]=auxArray[i++];
    }
    else
    {
      anim.push([j,auxArray[k]]);
      mArray[j++]=auxArray[k++];
    }
  }
  while(i<=mIdx)
  {
    anim.push([i,i]);
    anim.push([i,i]);
    anim.push([j,auxArray[i]]);
    mArray[j++]=auxArray[i++];
  }
  while(k<=eIdx)
  {
    anim.push([k,k]);
    anim.push([k,k]);
    anim.push([j,auxArray[k]]);
    mArray[j++]=auxArray[k++];
  }
}

export default MergeSorting
