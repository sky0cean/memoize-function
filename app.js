// define memoize function
function memoize(n) {
  cache={};
    return function() {
        let values = JSON.stringify(arguments);
    // in cashe or not?
    if (cache[values]){
       // Yes, then return it
    return cache[values];
  }
        //No, then cashe the results of its call 
     else {
      let value = n.apply(this, arguments);
      cache[values] = value;
      return value;
    }
     };
}


let foo = function (x) {
console.log("calculating");
//changed the number to Squared calculation
return x * x;
}


let memoizedFoo = memoize(foo);

console.log(memoizedFoo(5));
// calculating!
// 25

//returns the results from cache
// 25
console.log(memoizedFoo(5));


// 100 (notice how 'calculating!' is not printed this time)

console.log(memoizedFoo(10));
