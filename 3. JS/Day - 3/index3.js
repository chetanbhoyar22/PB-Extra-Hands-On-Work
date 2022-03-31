console.log("Day - 3  JS Class");
console.log("Arithmetic Operators");
// var x=20
// var y =10;

// var z= x+y; //30   (plus)
// var z= x-y; //10   (minus)
// var z=x*y; //200   (multiplication)
// var z=x/y; //2     (division)
// var z=x%y; //0     (Modulo (integer remainder))

// console.log(z);

console.log("Increment and Decrement Operators");
// var x=15;

// console.log(x--); //15 (Post-Decrement)
// console.log(--x); //14 (Pre-Decrement)
// console.log(x++); //15 (Post-Increment)
// console.log(++x); //16 (Pre-Increment)

console.log("Comparison Operators - (It will gives boolean values - true/false)");
// var a=5, b=10, c= '5'
// console.log(a <= b);  //true                      (less than equal too)
// console.log(a >=b); //false                       (greater than equal too)
// a==c; //true; (It compares only value)            (double equal too)
// a===c; //false; (It compares values & data types) (triple equal too)
// a!=c; //false;                                    (not equal too)
// a!==c; //true;                                    (not double equal too)
// a>b; //false;                                     (greater than)
// a<b; //true;                                      (less than)

console.log("Logical Operators");
// var a=6, b=12;
// console.log( a==b && a<b);  //false     (Logical AND)
// console.log( a==b || a<b);  //true      (Logical OR)
// console.log (!( a==b || a<b));  //false (Logical Not)

console.log("Assignment Operators");
// var x=15 , y=50;
// x = y // y value will be x               (Assign)

// console.log(x);  //50
// console.log( x+=1);  // x=x+1  --> 51    (Add and assign)
// console.log( x-=1);  // x=x-1  --> 50    (Subtract and assign)
// console.log( x*=1);  // x=x*1  --> 50    (Multiply and assign)
// console.log( x/=2);  // x=x/2  --> 25    (Divide and assign)
// console.log( x%=2);  // x=x%2  --> 1     (Modulus and assign)

console.log("Ternary Operators");
// var a=12, b=20;
// var c= (a==b) ? 'true' : 'false';
// console.log(c); //false  (Conditional Operator returns value based on the condition. It is like                         if-else.)

console.log("Bitwise Operators"); //Using Truth Table 
// var a=2 , b=5;  // It checks the truth table by taking 64-bit comparison.
// var c= ~a;  //-3   a=2=0010                   (Bitwise NOT)
// var c=~b; //-6     b=5=0101                   (Bitwise NOT)
// var c= a&b; //0    a=2=0010 & b=5=0101        (Bitwise AND)
// var c= a|b; //7    a=2=0010 & b=5=0101        (Bitwise OR)
// var c= a^b; //7    a=2=0010 & b=5=0101        (Bitwise XOR)
// console.log(c);                             

// var c=a<<b; //64                              (Bitwise Left Shift)
// var c=a>>b; //0,                              (Bitwise Right Shift)
// var c=a>>>b; //0                              (Bitwise Right Shift with Zero)
//console.log(c);

//<<left shift operator
//console.log(1<<4);   //16
// 1* 2^4 = 16

//>>right shift
//console.log(1>>4); //0
// 1/2 ^4 = 0


// In bitwise operators we get values.
// var a=-3;  //0000 0000 0000 0011  
// var b=2;   //0000 0000 0000 0010 

// console.log(~a) //2
// console.log(~b); //-3

// In Not operators --> If the value is positive its incremented by 1 and the value is positive so it will be changed to negative.
// In Not operators --> If the value is negative its decremented by 1 and the value is negative so it will be changed to positive.  

// a=+3 => 3+1==>-4
// a=-3 ==> 3-1==>+2