/**
 * Created by Дмитрий on 17.05.2017.
 */

/*var age=20;
var output = "";
    if( age >= 18 && age <= 59)
        output =  " - Вам еще работать и работать";
    else if( age >=59)
        output = " - Вам пора на пенсию";
    else if ( age >= 1 && age <= 17)
        output = " - Вам еще рано работать, учитесь";
    else
        output = "Неизвестный возраст";
console.log(output);*/

/*for( var i=322; i<356; i++){
    if(i % 3 != 0)
        continue;
        console.log(i);

}*/



/*
var num = 23;
var str = "На ветке сидит "+num+" ворон";
var x = "";
if(num%100 < 11 || num%100 > 14){
    switch(num%10){
        case 1: x = "а"; break;
        case 2:
        case 3:
        case 4: x = "ы"; break;
    }
}
console.log(str + x);
*/



/*
function sayHello(name, sign){
    name = name || "Guest";
    sign = sign || "...";
    print( "Hello, " + name + sign);
}
sayHello("John", "!");
var n = "Mike";
sayHello(n);
sayHello();
*/


/*
function abs(num){
    if(num < 0);
    return (num<0) & -num : num;
}
print(abs(5));
print(abs(-5));
*/

/*
var chislo=prompt("Введите число",""),
    stepen=prompt("Введите степень","");

for(var i=0; i<=stepen; i++){
    var result = 1;
    result *= chislo;
}
document.write("Число в степени "+ result);
*/


/*
function sum(n1, n2){
    return n1 + n2;
}
var res = sum(5, 3);
print(res);
*/


/*
function power(base, exp){
    var result=1;
    for(var cnt=0; cnt<exp; cnt++)
     result *= base;
    return result;
}
print(power (3, 10));
*/




/*var x = "X";
var y = "Y";

function outer(){
    var x= "x";
    print("x: " + x); // x
    print("y: " + y); // Y
    y = "y";
    function inner(z){
        var y = "_Y";
        print("x: " + x); // x
        print("y: " + y); // _Y
        print("z: " + z); // z
    }
    inner("z");
}
outer();
print("x: " + x);
print("y: " + y);*/



/*
var y = 0;
function foo(x){
    if(x) {
        y = 1;
        print(y); //
    }else{
        var y = 2;
        print(y);
    }
}
foo(true);
*/



//lab-3-2
/*function compare(x){
    return function(y) {
        if(y==x)
            return null;
        return y>x;
    }
}
var c = compare(10);
print( c (9));
print( c (10));
print( c (11));
*/
