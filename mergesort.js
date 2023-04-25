let arr = [5,9,1,2,4,7,6,3]
function divideArray(arr){
    if (arr.length<=1){
        return arr;
    }
    let middle = Math.floor(arr.length/2)
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
      console.log({left});
     console.log({right});

    return sortedArray(divideArray(left),divideArray(right))
    
}
function sortedArray(left,right){
    let emptyArray=[];
while(left.length && right.length){
    if(left[0]< right[0]){
        emptyArray.push(left.shift())
    }else{
        emptyArray.push(right.shift())
    }
}
return[...emptyArray,...left,...right];
}
console.log(divideArray(arr))

