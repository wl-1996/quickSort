// 快速排序
let quickSort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
//   上边这句话末尾加了[0]的意思是将arr.splice删去的元素变为一个数字赋值给pivot。
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
};

quickSort([8, 9, 7, 6, 4, 3, 1, 88, 99, 44, 55, 33, 11, 777, 999]);
