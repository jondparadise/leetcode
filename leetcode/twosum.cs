// https://leetcode.com/problems/two-sum/

public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        for(int x=0; x< nums.Length; x++)
        {
            for(int y=x+1; y< nums.Length; y++)
            {
                if(nums[x] + nums[y] == target) return new int[]{x, y};
            }
        }
        return null;
    }
}