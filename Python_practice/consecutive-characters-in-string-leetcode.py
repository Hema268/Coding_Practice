class Solution:
    def maxPower(self, s: str) -> int:
        c,res = 1,1
        for ch in range(len(s) - 1):
            if s[ch] == s[ch+1]:
                c += 1
                res = max(c,res)
            else:
                c = 1
        return res
