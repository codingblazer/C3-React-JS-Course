
var fullname = 'Sachin Aggarwal';
if(fullname){
    var first = fullname.split(' ')[0];
    console.log(first);
}
console.log(first);
var fullname = 'Sachin'; //this is redefination

//1) var is function scoped or global scoped => above since fullname is not inside any function => it is global (unlike java, var is not bblock scoped => if declared inside if block, it can still be used outside if like above => only 2 types of scope exist - global or function)=> if it is global, it can be used anywhere in the program
//=> if var is declared inside any function, then var becomes function scoped and can't be used outside function 

//2) var can be both redefined and reassigned unlike java  

let fullna = 'sachin aggarwal';
//let and const both are block scoped => like any java variable i.e. there scope ends outside any nearest brackets 
//let cannot be redefined but it can be reassigned 
//const cannot be both redefined and reassigned 

//we will be using let or const only in the projects as var is bad practice and redefinin can cause bugs 
 