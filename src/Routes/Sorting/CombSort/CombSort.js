import React from 'react'

function CombSorting(arr)
{
  const anim=[];
  function is_array_sorted(arr) {
    var sorted = true;
    for (var i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1])
      {
        sorted = false;
        break;
      }
    }
    return sorted;
  }

  var iteration_count = 0;
  var gap = arr.length - 2;
  var decrease_factor = 1.25;

  while (!is_array_sorted(arr))
  {
    if (iteration_count > 0)
    gap = (gap == 1) ? gap : Math.floor(gap / decrease_factor);

    var front = 0;
    var back = gap;
    while (back < arr.length)
    {
      if (arr[front] > arr[back])
      {
        var temp = arr[front];
        arr[front] = arr[back];
        arr[back] = temp;
      }
      anim.push([front,back]);
      anim.push([front,back]);
      anim.push([front,arr[front],back,arr[back]]);
      front += 1;
      back += 1;
    }
    iteration_count += 1;
  }
  return anim;
}


export default CombSorting
