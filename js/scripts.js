window.onload = function(e){



var scrin = document.getElementById('scrin');
var еqual = document.getElementById('еqual');
var c = document.getElementById('c');
var reset = document.getElementById('reset');
let digit = document.getElementsByClassName('digit');
let operanda = document.getElementsByClassName('operanda');
let cancel = false;//флаг для удоления с экранна ответа после того как нажали еqual





//////////////////////////////////////////еqual//////////////////////////////////////////
еqual.addEventListener("click", function(){
	let text = scrin.innerText;

	console.log(text);
	let arr = text.split('\u00A0');
	console.log(arr);
	operandaSign = arr[1];

	switch (operandaSign) {
	  case "+":
	    scrin.innerText = Number(arr[0]) + Number(arr[2]);//Number приводит строку к числу
	    break;
	  case "-":
	    scrin.innerText = Number(arr[0]) - Number(arr[2]);
	    break;
	     case "*":
	    scrin.innerText = Number(arr[0]) * Number(arr[2]);
	    break;
	     case "/":
	     if(Number(arr[2] == 0)){
	     	scrin.innerHTML = '<div class="alert_null">на ноль делить нельзя</div>';
	     }else{
	     	scrin.innerText = Number(arr[0]) / Number(arr[2]);
	     }
	    
	    break;
	}



	cancel = true;//флаг для удоления с экранна ответа после того как нажали еqual
	});



//////////////////////////////////////////operanda//////////////////////////////////////////

for (i = 0; i < operanda.length; i++) {

	//console.log(operanda[i].dataset.sign);

	operanda[i].addEventListener("click", function(){

		let text = scrin.innerText;



      
      let n = event.target.dataset.sign;
       scrin.innerText  = text + '\u00A0' + n  + '\u00A0';//'\u00A0' - браузер затерает пробелыв конце строк, а эта штука значит пробел который не сотрется
	
	});
}


//////////////////////////////////////////digit//////////////////////////////////////////
for (i = 0; i < digit.length; i++) {

	//console.log(digit[i].dataset.number);

	digit[i].addEventListener("click", function(){

		if(cancel == true){


			scrin.innerText  = '';
			cancel = false;
			let text = scrin.innerText;
      		let n = event.target.dataset.number;
       		scrin.innerText  = text + n;
		}else{
			let text = scrin.innerText;
      		let n = event.target.dataset.number;
       		scrin.innerText  = text + n;
		}
      
	
	});
}




//////////////////////////////////////////else//////////////////////////////////////////

c.addEventListener("click", function(){  
       scrin.innerText  = '';
	});



}

