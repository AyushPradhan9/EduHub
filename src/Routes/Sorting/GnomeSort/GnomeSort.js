import React from 'react'

function GnomeSorting(arr)
{
  const anim=[];
  function moveBack(i)
  {
    for( ; i > 0 && arr[i-1] > arr[i]; i--)
    {
      var t = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = t;
      anim.push([i,i-1]);
      anim.push([i,i-1]);
      anim.push([i,arr[i],i-1,arr[i-1]]);
    }
  }

  for (var i = 1; i < arr.length; i++)
  {
    if (arr[i-1] > arr[i])
    {
      moveBack(i);
    }
  }
  return anim;
}

export default GnomeSorting
