document.getElementById('screen').readOnly = false;
let display = document.getElementById("screen");
let clearButton = document.getElementById('d');
var num = document.getElementById(e)


function allclear(){
    display.value="";
}

function show(n){
    display.value+=n;
   
}
function cal(){
    debugger;
    if(display.value){
        var notCommas = display.value.replace(/\,/g,'');
        display.value = eval(notCommas);
        var withCommas = display.value.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
         display.value = withCommas;
    }
    // display.value=display.value.replace(/\,/g,'');
    // display.value = eval(display.value).toLocaleString();
    // console.log(display.value)
    // display.onkeyup  = function cal(){
    //     if(display.value){
    //     display.value = eval(display.value);
    //     var formatedNumber = display.value.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
    //     console.log(formatedNumber);
    //     display.value = formatedNumber;
    //     }
    // }
}
clearButton.addEventListener("click", function () {
        var rekensom  = document.getElementById('screen').value;
        document.getElementById('screen').value=rekensom.substring(0,rekensom.length -1);  
} ) 

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if ((charCode < 42 ||  charCode > 57) && charCode !=37 && charCode !=61 && charCode != 13){
        return false;
    }
    else if(evt.keyCode == 13){
        console.log("Enter Pressed");
        if(display.value){
        var notCommas = display.value.replace(/\,/g,'');
        display.value = eval(notCommas);
        var withCommas = display.value.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
         display.value = withCommas;
        }
        return true;
    }
    else {
        console.log("Other Pressed")
        return true;
    }
}
    // else if (evt.keyCode == 13){   
    //     display.onkeyup  = function cal(){
    //         display.value=display.value.replace(/\,/g,'');
    //        //display.value = eval(display.value);
    //         // if(display.value){
    //             if(evt.keyCode == 13){
    //                 display.value = eval(display.value);
    //             }
    //         var formatedNumber = display.value.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
    //         // console.log(formatedNumber);
    //         display.value = formatedNumber;
    //         //}
    //     }
    //     return true;
    // }
//     else {
//         console.log("Other Pressed")
//         return true;
//     }
// }
// display.onkeyup  = function cal(){
//     // input = parseInt(document.getElementById("screen").value)
//     var formatedNumber = display.value.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,");
//     console.log(formatedNumber);
//     display.value = formatedNumber;
// }
// // const number = 123456789;

// const formattedNumber = number.toLocaleString("en-US");

// console.log(formattedNumber); 

    // var formatedNumber = display.value.replace(/\B(?=(\d{3})+(?! \d))/g, ",")
    // display.value = formatedNumber;
// display.onkeyup=function(){
//     var formatedNumber = this.value.replace( /\d{1,3}(?=(\d{3})+(?!\d))/g , "$&,")
//     console.log(formatedNumber); 
//     this.value = formatedNumber
// }
/*function checking(){
    var x = document.calculator.answer.value;  // the value of the input field
    var regex=/[0-9]\b/;  // my failing regex 
      if (x.match(regex) || (x==="+") || (x==="-") || (x==="*") || (x==="/"))
      {
        document.getElementById("problemWithInputMessage").innerHTML="";
        console.log("true, it IS a number");
        return true;
      }
      else if(!(x.match(regex))){
        console.log("false, not a number");
        document.getElementById("problemWithInputMessage").innerHTML="You can only input numbers and the following signs + - * /";
        x = x.substring(0, x.length - 1);   // removing the wrong symbol
        document.calculator.answer.value = x;
        return false;
      }
  }*/

//   var value = document.getElementById("d").value;
//     document.getElementById("d").value = value.substr(0, value.length - 1); 
    //display.value= value.substr(0, value.length - 1);
   // display.value= display.value.substr(0,display.value.length-1);
    // display.value = value.slice(0,-1);   
    
    //   this.currentOperand = this.currentOperand.toString().slice(0, -1)
      
    