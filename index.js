function receivesAFunction(cb) {
    cb();
}


function returnsANamedFunction() {
    return function hello() {

    } 
}

function returnsAnAnonymousFunction() {
    return ()=> console.log("anonymous");
}
  