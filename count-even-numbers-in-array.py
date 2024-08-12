def count_even(arr):
    count = 0
    for n in arr:
        if n % 2 == 0:
            count += 1
    return count
arr = [2,4,3,44,57,67,33,66,43]
print(count_even(arr))