def find_max(arr):
    if not arr:
        return None
    max_value = arr[0]
    for num in arr:
        if num > max_value:
            max_value = num 

    return max_value 

arr = [3, 5, 7, 2, 8, -1, 4, 10, 12]
print("The maximum element in the array is:", find_max(arr))