/**
 * 要求：设计一个数据结构
 * 1、插入一个数，如果集合中不存在该数，则返回 true
 * 2、删除集合中的一个数，如果集合包含该数，返回 true
 * 3、随机获取集合的一个数
 */

/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.nums = [];
  this.numsMap = {};
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  this.nums.push(val);
  if (val in this.numsMap) {
    return false;
  }
  this.numsMap[val] = this.nums.length - 1;
  return true;
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (val in this.numsMap) {
    this.nums.splice(this.numsMap[val], 1);
    return true;
  }
  return false;
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  return this.nums[Math.floor(Math.random() * this.nums.length)];
};

/** 
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = Object.create(RandomizedCollection).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */