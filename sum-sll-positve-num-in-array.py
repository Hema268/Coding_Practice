#sum of all positive number in a array
def positve_num(arr):
    sum = 0
    for num in arr:
        if num >= 0:
            sum += num
    return sum       
arr = [-2,3,-3,5,6,-6,-4]  
print(positve_num(arr))