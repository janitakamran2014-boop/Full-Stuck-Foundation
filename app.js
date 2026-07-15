// for(var i=0; i <=5; i++){
// console.log(i)
// if(i===5){
//     break
// }
// }

// var str ="Saylani"
// str +=" SMIT"
// console.log(str)

var userName = prompt("Please enter your name");
var output = "";

for (var i = 0; i < userName.length; i++) {

    if (i == 0 || userName[i - 1] == " ") {
        output += userName[i].toUpperCase();
    } else {
        output += userName[i];
    }
}

console.log(output);