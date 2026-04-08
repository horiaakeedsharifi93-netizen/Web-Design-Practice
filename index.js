let username = prompt("A.Sharifi");
let userpassword = ("7879")
 if (username === "admine") {
     alert ("Welcome admin!");
 }

 let movie = prompt("chose a movie: standard or Imax");
 let tickets = parsenint(prompt("How many tickets?"));


 let price = 0;
 if (movie === "standard") {
    price = 5;
 }

 else if (movie === Imax) {
    price = 10;
 }
 let total = ticket * price;
 
 alert ("show {tickets} {movie} {price per tickets} {price total tickets}");


