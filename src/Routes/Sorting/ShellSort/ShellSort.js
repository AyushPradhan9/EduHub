function ShellSorting(arr) {
  const anim = [];
  var increment = Math.floor(arr.length / 2);
  while (increment > 0) {
    for (let i = increment; i < arr.length; i++) {
      var j = i;
      var temp = arr[i];
      while (j >= increment && arr[j - increment] > temp && j < arr.length) {
        arr[j] = arr[j - increment];
        anim.push([j - increment, j]);
        anim.push([j - increment, j]);
        anim.push([j, arr[j]]);
        j = j - increment;
      }

      arr[j] = temp;
      anim.push([i, j]);
      anim.push([i, j]);
      anim.push([j, arr[j]]);
    }

    if (increment === 2) {
      increment = 1;
    } else {
      increment = parseInt(increment * 5 / 11);
    }
  }
  return anim;
}

export default ShellSorting
