//task 1 chap 21-25

// var a = prompt("enter your first name")
// var b = prompt("enter your last name")


// alert("hellloo  & welcome " a + b )

//task 2 chap 21-25


// var fav = prompt( "enter your favourite mobile name")
// var n = fav.length;
// console.log(n)

//  alert("length of string is " n)


//task 3 chap 21-25


// var a = "pakistan"

// var b = a.indexOf("n")

// document.write( "string pakistan <br> and index of n is :" + b)

//task 4 chap 21-25

// var a = "hello world"

// var b = a.indexOf("n")

// document.write("string hello world <br> and index of n is : "+ b)

//var task 5 chap 21-25


// var a = "pakistan"

// var n = a.search("i")
// var b = a.charAt(n)
// document.write( " string = pakistan <br> " + "character at index "+ n +" :" +b )

//task 6 chap 21-25


// var a = prompt("enter your first name")
//  var b = prompt("enter your last name")

// var c = a.concat(b);

// alert(" hello & welcome" + c )
//task 7 chap 21 -25


// var a= "hyderabad"
// var g= a.substring(5)
// document.write("city = islam"+g +"<br> before "+a)


//task 8 chap 21-25


// var text =" Ali & sami are best friend and they play cicket togther" 
// var indexNum = text.indexOf('and')
// var oof= text.lastIndexOf("r")
// var firsttext = text.slice( 0,indexNum )
// var replace= "&"
// var third = text.slice(indexNum,oof)
// document.write(firsttext+ replace+ third)

//task 9 chap 21-25

// var a= "472"

// var g =parseInt(a)
// console.log (g)

// console.log ( a + " is string " + g + " is integar") 

//task 10 chap 21-25


// var ins=prompt("Enter letter in small letter")
// ins1= ins.toUpperCase()

// alert(ins1)


// task 11 chap 21-25


//  var ins=prompt("Enter letter in small letter")
//  ins1= ins.toLowerCase()

//  alert(ins1)


//task 12 chap 21-25

// var a= 472

// var g =toString(a)
// console.log (g)

// console.log ( a + " is integar " + g + " is string") 



//task 13 chap 21-25

// var ins = prompt("username")
// var a = ins.indexOf("!")
// var b = ins.charAt(a)




// var c = ins.indexOf(",")
// var d = ins.charAt(c)



// var e = ins.indexOf(".")
// var f = ins.charAt(e)



// var g = ins.indexOf("@")
// var h = ins.charAt(g)

// if (b === "!") {
//     alert("change it  @ , . ! in ur username")
// }
//   else if
//     (d === ",") {
//     alert("change it  @ , . ! in ur username")
// }
//     else if
// (f === ".") {
//     alert("change it  @ , . ! in ur username")
// }
//         else if
// (h === "@") {
//     alert("change it dont use @ , . ! in ur username")
// }
// else alert ("your username is ok")

//task 14 chap 21-25

// var city = prompt("enter ")

// city = city.toLowerCase()

// console.log(city)
// var arr = ["cake", "applepie", "cookies", "chips", "patties"]
//  var h = arr.indexOf(city)
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === city)  alert(city + " is available at  in our bakery at index : " + h) 
    

// else alert("sorry " + city + " isnt available in our bakery ")    
// break;  } 



// task 15 chap 21-25


// var  pass= prompt("Enter ur password")


// task 16 chap 21-25


// var uni="university of karachi"

// for (var i=0; i<uni.length; i++){
//  document.write( uni.charAt(i) +"<br>" ) }


// task 17 chap 21-25

// var str = window.prompt("PLEASE ENTER A WORD") ; 
//     var res = str.charAt(str.length-1); 
//    document.write( "User Input:"+" "+ str +"<br>"+ " Last Index:"+" " +res + "<br>" )

// task 18 chap 21-25

// var word= "the quick brown fox jumps over the lazy dog"

// var len= word.match(/the/g);

// var g=len.length
// console.log(len)

// document.write("the word the occured " + g + "times")



//task 1 chap 26-30


// var number2 =prompt("PLEASE ENTER A NUMBER")
//    var number = Math.abs(number2);
//   var number3 = Math.floor(number);
//   var number4 = Math.round(number);
//   var number5 = Math.ceil(number);

//   document.write("Number: "+ number+"<br>"+"Floor "+number3+"<br>"+"Round "+number4+"<br>"+"Ciel "+number5) 
//task 2 chap 26-30


//   var n = window.prompt("PLEASE ENTER A NUMBER")
//   var n2 = Math.sign(n);
//   if(n2==-1)
//   {
//     var number3= Math.round(n);
//  var number4 = Math.floor(n);
//  var number5 = Math.ceil(n);
//  document.write("Number:"+ n+"<br>"+"Floor"+number4+"<br>"+"Round"+number3+"<br>"+"Ciel"+number5)
//   }
//   else{
//     alert("PLease Enter A Negative Number")
   
//   }


//task 3 chap 26-30


// var a= prompt("enter any number")
//  var b = Math.abs(a)

//  document.write(b)


//task 4 chap 26-30


// var a= Math.floor( Math.random() * 6 + 1)
// document.write(a)
// task 6 chap 26-30

// var a= Math.floor( Math.random() * 6 + 1)
// var b= Math.floor( Math.random() * 6 + 1)

//  document.write("random dice 1 value : " +a + "<br>")
//  document.write("random dice 1 value : " +b)


// task 5 chap 26-30
// var a= Math.floor( Math.random() * 2 + 1)
// var b= Math.floor( Math.random() * 2 + 1)


// if ( a > 1)
// document.write("its tails for a <br>")
// else
// document.write("its heads for a <br>") ;
// task 6 chap 26-30
// var a= Math.floor( Math.random() * 100 + 1)

// document.write(a)


// task 6 chap 26-30

// var a= prompt("enter ur weight " , "forr ie, 25 kg")

// parseInt(a)
// document.write("the weight of user is " + a)


//task 7 chap 26 - 30

// var b = prompt("enter anhy number between 1 to 10")
// var a= Math.floor( Math.random() * 10 + 1)
//  var c =parseInt(b)
// if ( c === a) alert("u guessed the number ")
// else alert("try again")  


  