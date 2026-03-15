function binarySearch(nums, target) {
  let si = 0;
  let ei = nums.length - 1;
  while (si <= ei) {
    let midx = Math.floor((si + ei) / 2);
    if (nums[midx] == target) {
      return midx;
    } else if (nums[midx] < target) {
      si = midx + 1;
    } else {
      ei = midx - 1;
    }
  }
  return -1;
}

// Tc - O(logn) because index divide by 2
