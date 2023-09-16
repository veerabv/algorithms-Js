// eg1
// let b;
// console.log(a)
// console.log(b);
// var a = 10;
// b=a  // if i comment this line and but b=a in declaration itself then b's value  undefined 
// console.log(b);

(function(){                 //    b=3     => means js implicit ah global ah declare 
    var a = b = 3;    // ==>var a=b
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));   // ('undefined' !== 'undefined')false
  console.log("b defined? " + (typeof b !== 'undefined'));   //(number !== 'undefined') true
// eg:1(a)
// b=3
// let err = ()=>{
//     var a=b;
//     console.log(a)  //b is not defined
// }
// console.log(a)
// err()

// console.log(a)  //err :a is not defined


// eg2
// function sum(a,b){
// return a+b
// // }

// function sum(x, y) {
//   if (y !== undefined) {
//     return x + y;
//   } else {
//     return function(y) { return x + y; };
//   }
// }


// console.log(sum(4,5))
// console.log(sum(4)(5))

// console.log(function(y){   //clear explanation of above code eg2
//     return y+4
// }(5))

// eg3  =>  how to find the target value if we sum the array elements

function collectPairs(arr,target){   //this to collect all pairs in the array
    let result = []
    const dummy = new Set();
    let complement
    for (i = 0; i<arr.length; i++){
        complement = target - arr[i];
        if(dummy.has(complement)){
            result.push([complement,arr[i]]);
        }
        dummy.add(arr[i])
    }
    console.log(dummy)
    return result
}

function collectTheFirstPair(arr,target){
    let left = 0 ;
    let right = arr.length -1 ;
    while(left<right){
        if(arr[left]+arr[right] === target){
            return [arr[left],arr[right]]
        }
        else if(arr[left]+arr[right] < target){
            ++left;
        }
        else{
            --right;
        }
    }
}

const arr = [2, 5, 11,7, 4, 15];

const target = 9;
console.log(collectPairs(arr,target));
console.log(collectTheFirstPair(arr,target));

// eg 3
function checkFirstNegativeInteger(arr1,k){
    let left = 0;
    // let right = k;
    result = [];

    while(k<=arr1.length){
       result.push(arr1.slice(left,k).find((val)=>val<0));
        ++left;
        ++k

    }
// console.log(arr1)
return result
}

const arr1 = [1, -2, -3, -4, 5, 6, -7];

let windowSize = 3;
  
console.log(checkFirstNegativeInteger(arr1,windowSize));


// eg-4

function findClosestPair(s1,s2,x){
    let strInd = 0;
    let lastInd = s2.length-1
    let nearSum = Infinity;
    let diff
    let closestPair = [];
    while(strInd < s1.length && lastInd >= 0) {
        let sum = s1[strInd] + s2[lastInd];
        diff = Math.abs(sum - x)
        if(diff < nearSum){
            nearSum = diff
            closestPair[0] = s1[strInd] ;
            closestPair[1] = s2[lastInd] ;
        }
        if(sum > x){
            --lastInd;
        }
        else{
            ++strInd;
        }
    }
    
return closestPair
}
let s1 = [1,4,5,7]
let s2 = [10,20,30,40]
let x = 32;
console.log("new")
// console.log(findClosestPair(s1,s2,x));

// eg 5:
function findPairs(arrNum , aim){
    let [ptr1 ,ptr2] = [0 , arrNum.length-1]
    let sumClosest = Infinity;
    let result = [null , null]
    while(ptr1 < ptr2){
        let sum = arrNum[ptr1] + arrNum[ptr2];
        let change = Math.abs(sum - aim);
        if(change < sumClosest){
            sumClosest = change;
            result = [arrNum[ptr1], arrNum[ptr2]]

        }
        if(sum < aim){
            ptr1++
        }
        else{
            ptr2--
        }

    }
    return result;

}
// eg 6: using binarySearch        need to check for different target values
function binarySearch(arrNum , aim){
    let [start, end] = [0, arrNum.length-1];
    let mid = Math.floor((start+end)/2);
    let [closeSum,result] = [Infinity , []];
    while(start < mid){
        let sum = arrNum[start] + arrNum[mid];
        let diff = Math.abs(sum - aim);
        if(diff < closeSum){
            closeSum = diff;
            result = [arrNum[start], arrNum[mid]];
        }
        if(sum < aim){
            if(mid != arrNum.length-2  ){
                mid++
            }
            else{
                start++
            }
          
        }
        else{
            mid--
        }
    } 

    return result


}
const [arrNum , aim ]= [ [10, 22, 28, 29, 30, 40] , 54];
// console.log(findPairs(arrNum, aim));
console.log(binarySearch(arrNum, aim));

// eg7

function sort(arr){
    let p1 = 0;
    let p2 = arr.length-1;
    let index = 0;
    while(index< arr.length-1){
        if(arr[p1] > arr[p2]){
          let temp =arr[p2];
          arr[p2] = arr[p1];
          arr[p1] = temp
          
        }

    }
}
input_arr = [2,5,95,3,87,41,14,4]
