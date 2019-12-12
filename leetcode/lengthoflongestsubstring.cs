using System.Linq;

public class Solution {
    public int LengthOfLongestSubstring(string s) {

        if(s.Length < 2) return s.Length;
        int longest = 0;
        for(int start = 0; start<s.Length; start++)
        {
            for(int length = 1; length < (s.Length - start); length ++)
            {
                string subString = s.Substring(start, length);
                if(length == subString.Distinct().Count())
                {
                    if(length > longest) longest = length;
                }
                else{
                    break;
                } 
            }
        }
        return longest;
    }
}