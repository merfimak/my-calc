window.onload = function(e){



var scrin = document.getElementById('scrin');
var еqual = document.getElementById('еqual');
var c = document.getElementById('c');
var reset = document.getElementById('reset');
let digit = document.getElementsByClassName('digit');
let operanda = document.getElementsByClassName('operanda');



c.addEventListener("click", function(){  
       scrin.innerText  = '';
	});



еqual.addEventListener("click", function(){
	let text = scrin.innerText;


let arr = text.split('');
console.log(arr);

if(text.includes("+")){

scrin.innerText = Number(arr[0]) + Number(arr[2]);


console.log('fff');
	}
     /* 
      let n = event.target.dataset.sign;
       scrin.innerText  = text + ' ' +  n  + ' ';*/
	
	});




for (i = 0; i < operanda.length; i++) {

	//console.log(operanda[i].dataset.sign);

	operanda[i].addEventListener("click", function(){

      let text = scrin.innerText;
      let n = event.target.dataset.sign;
       scrin.innerText  = text + n;//'\u00A0' - браузер затерает пробелыв конце строк, а эта штука значит пробел который не сотрется
	
	});
}








for (i = 0; i < digit.length; i++) {

	//console.log(digit[i].dataset.number);

	digit[i].addEventListener("click", function(){

      let text = scrin.innerText;
      let n = event.target.dataset.number;
       scrin.innerText  = text + n;
	
	});
}

}

