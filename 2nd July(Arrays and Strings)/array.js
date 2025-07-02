    //remove duplicates
 
    function removeDupli(str) {
        return [...new Set(str)]
    }
    console.log(removeDupli([1,2,2,3,4,4]))

    //flatten an array

    function FlattenArray(arr) {
        let y = [];
        for(let i of arr) {
            if (Array.isArray(i)) {
                for(let j of i) {
                     y.push(j)
                }
            }
            else {
                 y.push(i)
            }
        }
        return y
    }
    console.log(FlattenArray([[1,2], [3,4], 5,6]))

    //find max and min

    function findMax(arr) {
        let max=arr[0]
    for(i in arr)  {
        if(arr[i]>max)
            max=arr[i]
    }
    return max
}
console.log(findMinMax([1,2,3,4,5,6]))
function findMin(arr) {
    let min=arr[0] 
    for(i in arr) {
        if(arr[i]<min) 
            min=arr[i]
    }
    return min
}
console.log(findMin([1,2,3,4,5,6]))

//sum of even numbers in an array

function sumEven(arr){
    let sum =0
    for(let i in arr) {
        if(arr[i]%2==0) {
            sum=sum+arr[i]
        }
    }
    return sum
}
console.log(sumEven([1,2,3,4,5,6,7,8]))

//group by type

function groupByType(arr) {
    let obj = {}
    for(i of arr)
    {
        let type = typeof(i)
    
    if(!obj[type]) {
        obj[type] = []
    }
    obj[type].push(i)
}
return obj }
console.log(groupByType([1, 'a', true, 2, 'b']))