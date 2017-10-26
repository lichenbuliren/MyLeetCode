/**
 * 要求：给定由n个整数组成的数组，找到具有最大平均值的给定长度k的连续子阵列。您需要输出最大平均值, K > 0;
 * 思路：通过循环，将数组转化成每个索引的值为当前索引前面所有的数的和，长度为 K, 则平均值在 sums 数组中起始位置为 k - 1 出的索引值
 * nums: [1,2,3,4,5,6,7] => sums: [1,3,6,10,15,21,28]
 * 求出了 k - 1 出的平均值之后，往后推，求出剩余的平均值，取最大的平均值
 */

 /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  var maxAverage;
  var sums = [];
  var res;
  sums[0] = nums[0];
  for (var i = 1; i < nums.length; i++) {
    sums[i] = nums[i] + sums[i - 1];
  }
  console.log(nums);
  console.log(sums);

  // 长度为 K, 则平均值在 sums 数组中起始位置为 k - 1 出的索引值
  // 这里画图会好理解一点
  // 
  res = sums[k - 1] / k;
  for (i = k; i < nums.length; i++) {
    // (sums[i] - sums[i - k]) / k 这里计算第 k 处的平局值，
    res = Math.max(res, (sums[i] - sums[i - k]) / k);
  }
  console.log(res);
  return res;
};