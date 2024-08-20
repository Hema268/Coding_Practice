class Solution:
    def stringMatching(self, words: List[str]) -> List[str]:
        subarray = []
        for i in words:
            for j in words:
                if i in j and j != i:
                    subarray.append(i)
                    break
        return subarray
