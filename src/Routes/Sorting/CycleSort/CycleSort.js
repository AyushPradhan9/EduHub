function CycleSorting(array) {
  const anim = [];
  for (let currentIndex = 0; currentIndex < array.length - 1; currentIndex++) {
    let item = array[currentIndex];
    let currentIndexCopy = currentIndex;
    for (let i = currentIndex + 1; i < array.length; i++) {
      if (array[i] < item) {
        currentIndexCopy++;
      }
    }
    if (currentIndexCopy === currentIndex) {
      continue;
    }
    while (item === array[currentIndexCopy]) {
      currentIndexCopy++;
    }
    let temp = array[currentIndexCopy];
    array[currentIndexCopy] = item;
    item = temp;
    anim.push([currentIndexCopy, currentIndexCopy]);
    anim.push([currentIndexCopy, currentIndexCopy]);
    anim.push([currentIndexCopy, array[currentIndexCopy], currentIndexCopy, array[currentIndexCopy]]);
    while (currentIndexCopy !== currentIndex) {
      currentIndexCopy = currentIndex;
      for (let i = currentIndex + 1; i < array.length; i++) {
        if (array[i] < item) {
          currentIndexCopy++;
        }
      }
      while (item === array[currentIndexCopy]) {
        currentIndexCopy++;
      }
      temp = array[currentIndexCopy];
      array[currentIndexCopy] = item;
      item = temp;
      anim.push([currentIndex, currentIndexCopy]);
      anim.push([currentIndex, currentIndexCopy]);
      anim.push([currentIndex, array[currentIndex], currentIndexCopy, array[currentIndexCopy]]);
    }
  }
  return anim;
}

export default CycleSorting
