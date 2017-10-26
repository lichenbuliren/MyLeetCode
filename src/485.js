/**
 * 要求：给定二进制数组，找到该数组中连续1的最大数。数组中只包含 0 和 1
 * 思路：
 * 通过两层循环，找到每个 num[i] 的最长连续数，存入数组中
 * 在运到 0 之后，断开计数，跳过改索引，寻找下一个 nums[i] 的计数
 * 最终找出数组中的最大值
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  var arr = [];
  for (var i = 0; i < nums.length; i++) {
    var cur = nums[i];
    var count = 0;

    if (cur === 0) {
      arr.push(0);
      continue;
    }

    // 默认加 1，算上自己
    count++;

    for (var j = i + 1; j < nums.length; j++) {
      
      var sub = nums[j];
      // 如果 nums[i+1] 为 0，则继续下一次循环
      if (sub === 0) break;

      count++;
    }

    arr.push(count);
  }
  console.log(Math.max(...arr));
  return Math.max(...arr);
};