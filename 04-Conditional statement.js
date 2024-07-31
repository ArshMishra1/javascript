//                                           //Conditional Statement

// //{1}if    
// let a=12;
// let b=15;                 //if given condition is true than block code is run othewise block code is skip.
// if(a<b){
//     console.log("Hello");
// }

// //{2}else.
// let x=12;
// let y= 13;
// if(x>y){
//     console.log("hey");   // if given condition is true perform operatation ,if given condition is false than perform any other operation.
// }
// else{
//     console.log("hey ram");
// }

// //{3}if else if
// let per=57;
// if(per>=90 && per<100){
//     console.log("Your are in Merit");
// }
// else if(per>=60 && per<79){
//         console.log("Your are in 1st Division");
// }
// else if( per>=45 && per<59){
//      console.log("Your are in 2nd Division");
// } 
// else if(per>=33 && per<44){
//     console.log("your are in 3rd Division");
// }
// else if(per<33){
//     console.log("your are fail")
// }
// else{
//     console.log("Please enter vaild number");
// }


// //quesation 
// //1.Write a program that determines whether a given number is positive or not.
// let  number=-5;
// if( number>0){
//     console.log("its is positive number");
// }
// else{
//     console.log("its is nagitive number");
// }

// // 2.Write a program that checks if a number is even or odd
// let num=5;
// if(num%2==0){
//     console.log("it is even number");
// }
// else{
//     console.log("it is odd number");
// }

// //3 Write a program to determine the greater of two numbers.
// let num1 =5;
// let num2 =3;
// if(num1>num2){
//     console.log("num1 greater number");
// }else{
//     console.log("num2 less number");
// }

// // Conditional Ternary Operator

// let m = 20;
// let n;
// (m == 200)? n="true" :  n= "flase" 
// console.log(n); 

// //question
// let  age = 29;
// let agea;
// (age > 18)? agea ="you can drive" : agea ="you can not drive";
// console.log(agea);


// //switch case

// let D =3;
// switch (D) {
//     case 0:
//             console.log("keyborad order karo");
//         brak;
//         case 1:
//              console.log("Give Pinku 151Rs");
//         break;
//         case 2:
//           console.log("945530699");
//         break;
//         case 3:
//         console.log("Software Engineer sir");
//         break;
//         case 4:
//                    console.log("SOrry Devops Engineer");
//         break;

//     default:
//         console.log("Kuch Mat karo keyborad order Kar do bs");
//         break;
// }


  // if question
   let Y = 14;
   if(Y >= 18){
    console.log("you can");
   }
   
// question

let color = "red"
if( color == "red"){
    console.log("Stop");
}
if( color == "yellow"){
    console.log("slow Down");
}
if( color ==  "Green"){
    console.log("Go")
}

//else if 

  let Mark =30;
  if(Mark >= 90){
    console.log("A+");
  }
  else if (Mark >=80){
    console.log("A");
  }
  else if(Mark>=70){
    console.log("b+");
  }
  else if(Mark >= 30){
    console.log("You can do it");
  }

  //else 
   let boy = 30;
   if (boy > 40){
    console.log("yes");
   }
   else{
    console.log("yes sir sure");
   }

//    question

let Size = "L";

if( Size == "xL"){
    console.log("price is RS 250");
}
else if(Size == "L"){
    console.log("price is RS 200");
}
else if (Size == "M"){
    console.log("price is  Rs100");
}
else if( Size == "S"){
    console.log("Price is RS 50");
}