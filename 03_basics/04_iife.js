(function chai(){
    //named iife
    console.log(`DB connected`);
})();// there is problem with the pollution of global scope so to remove the pollution we use IIFE
// chai()

((name) => {
    console.log(`DB connected two ${name}`); 
})("Priya");
   