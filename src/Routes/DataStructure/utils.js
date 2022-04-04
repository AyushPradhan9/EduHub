export const applyDrag = (type,ax,arr, dragResult) => {

  const { removedIndex, addedIndex, payload } = dragResult;
  if (removedIndex === null && addedIndex === null) return arr;
  
  for (let i = 0; i < ax.length; i++) {
    arr[i].data=(ax[i]);
  }
  const result = [...arr];
  let itemToAdd = payload;

  if (removedIndex !== null) {
    itemToAdd = result.splice(removedIndex, 1)[0];
  }

  if (addedIndex !== null) {
    result.splice(addedIndex, 0, itemToAdd);
  }
  console.log(result);
  const result2 = [];
  for (let i = 0; i < arr.length; i++) {
    result2.push(parseInt(result[i].data));
  }
  console.log(result2);
  if(type==="SortedSet")
  {
    result2.sort(function(a, b){return a-b});
  }
  return result2;
};

export const generateItems = (count, creator) => {
  const result = [];
  for (let i = 0; i < count; i++) {
    result.push(creator(i));
  }
  return result;
};

export const takeNewArr = (arr, fo) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(parseInt(arr[i].data));
  }
  console.log(result);
  return result;
};