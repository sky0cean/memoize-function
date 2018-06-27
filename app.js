// define memoize function
function memoize(n) {
  cache={};
    return function() {
        let values = JSON.stringify(arguments);
    // in cashe or not?
    if (cache[values]){
       // If Yes, then return it
    return cache[values];
  }
        //If No, then cashe the results of its call 
     else {
      let value = n.apply(this, arguments);
      cache[values] = value;
      return value;
    }
     };
}


let foo = function (x) {
//Will print "calculating" when the result is not from cache
console.log("calculating");
//Changed the original calculation in sample to square calculation
return x * x;
}


let memoizedFoo = memoize(foo);

console.log(memoizedFoo(5));
// calculating
// 25

console.log(memoizedFoo(5));
// 25

//'calculating' is not printed this time, therefore this returns the results from cache

console.log(memoizedFoo(10));
//calculating
// 100  
