let fibonacci = function(n){
    if(n == 0) return 0;

    else if(n == 1) return 1;

    else return fibonacci(n-1) + fibonacci(n-2);
    // for (var i=2; i<=n; i++){
    //     var f_new = f_older + f_old;
    //     console.log("F"+ i+":"+f_new);
    //     f_older = f_old;
    //     f_old = f_new;
    // }

    // return f_new;

}

let f_older = 0;
let f_old = 1;
let num =10;
console.log("F"+ num+":"+fibonacci(num));


// let n = 10;

// for (var i=2; i<=n; i++){
//     let f_new = f_older + f_old;
//     console.log("F"+ i+":"+f_new);
//     f_older = f_old;
//     f_old = f_new;
// }
