/* 初始化数组 */
const arr: number[] = new Array(5).fill(0);
console.log('数组 arr =', arr);
let nums: number[] = [1, 3, 2, 5, 4];
console.log('数组 nums =', nums);

/* 随机访问元素 */
function randomAccess(nums: number[]): number {
    // 在区间 [0, nums.length) 中随机抽取一个数字
    const random_index = Math.floor(Math.random() * nums.length);
    // 获取并返回随机元素
    const random_num = nums[random_index];
    return random_num;
}

/* 在数组的索引 index 处插入元素 num */
function insert(nums: number[], num: number, index: number): void {
    // 把索引 index 以及之后的所有元素向后移动一位
    for (let i = nums.length - 1; i > index; i--) {
        nums[i] = nums[i - 1];
    }
    // 将 num 赋给 index 处元素
    nums[index] = num;
}

/* 删除索引 index 处元素 */
function remove(nums: number[], index: number): void {
    // 把索引 index 之后的所有元素向前移动一位
    for (let i = index; i < nums.length - 1; i++) {
        nums[i] = nums[i + 1];
    }
}

/* 遍历数组 */
function traverse(nums: number[]): void {
    let count = 0;
    // 通过索引遍历数组
    for (let i = 0; i < nums.length; i++) {
        count++;
    }
    // 直接遍历数组
    for (const num of nums) {
        count += 1;
    }
}

/* 在数组中查找指定元素 */
function find(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return i;
        }
    }
    return -1;
}

/* 扩展数组长度 */
// 请注意，TypeScript 的 Array 是动态数组，可以直接扩展
// 为了方便学习，本函数将 Array 看作是长度不可变的数组
function extend(nums: number[], enlarge: number): number[] {
    // 初始化一个扩展长度后的数组
    const res = new Array(nums.length + enlarge).fill(0);
    // 将原数组中的所有元素复制到新数组
    for (let i = 0; i < nums.length; i++) {
        res[i] = nums[i];
    }
    // 返回扩展后的新数组
    return res;
}