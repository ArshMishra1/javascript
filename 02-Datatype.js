
                                              //  Data type
 // Type of Data type in  js is primitive and non - primitive 
                             
                           // primitive data type
//{1}. Number
 let a = 45;
console.log(a);  
console.log(typeof a);                                  //number

//{2}. string
let b = "Arsh" // string always is write in under single or double
console.log(b);
console.log(typeof b);                                 // string

//{3}.null
let c =null;
console.log(c); 
console.log(typeof c);                               // Object


//{4}.undfined 
let d;
console.log(b);
console.log(typeof d);                                   // undefinde

//{5}.symbol
let sym = Symbol("hello");
console.log(sym);
console.log(typeof sym);
                                                       //symbol

//{6}.Bigint
let bigNumber = 233243535355n;
console.log(bigNumber);
console.log( typeof bigNumber);
                                                        //bigint

//{7.}boolean
let h = 2;
let g = 3;
console.log( h>g );
                                                       //boolean

                                         // Non- primitive
//{1}array
     let E =[ "A","B" ,"c"];
     console.log(E);
     console.log( typeof E);                         //object

//{2}Oject
     let F = {
          name : "Arsh",
          Number : 32,
     }
     console.log(F);
     console.log(typeof F);                           //Object

//{3}Function 
  let myfunction = function()
  {
      console.log("hello sir");
  }
  console.log(typeof myfunction)                       //object function

 // how to run multiple declaration
const dis = {
     arsh : "God",
     pubg : "arsh",
     bgmi : undefined
}
console.log(dis["arsh" , "pubg" , "bgmi"]);            //objrct Function
 