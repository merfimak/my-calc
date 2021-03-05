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
	let arr = text.split('\u00A0');
	console.log(arr)
	console.log(text)
	if(arr[2] == '' || arr.length <= 1){
		scrin.innerHTML = text;
	}else{
			let operandaSign = arr[1];
	console.log(operandaSign)
	scrin.innerHTML = action(operandaSign, arr);
	cancel = true;//флаг для удоления с экранна ответа после того как нажали еqual
	}

	});

//дорабоать равно и внешний вид

//////////////////////////////////////////operanda//////////////////////////////////////////

for (i = 0; i < operanda.length; i++) {

	//console.log(operanda[i].dataset.sign);

	operanda[i].addEventListener("click", function(){
		cancel = false;
		let text = scrin.innerText;
		let arr = text.split('\u00A0');
		let n = event.target.dataset.sign;
		console.log(arr)
		console.log(n)
		if(text == '' && n != '-'){//шоб не нажимали в начале знак
			scrin.innerText  = text;
		}else if(arr.includes(n) && n != '-' && arr.length < 2){//что б не выдовало ошибку при повторном нажатии на ту же самую операнду
			scrin.innerText  = text;
		}
		else if(arr.length == 3 && arr[2] == '' && n != arr[1]){//что б можно было при неполном примере менять операнду.
			scrin.innerText  = arr[0] + '\u00A0' + n  + '\u00A0';
		}
		else if(arr.length > 2){// если уже есть готовая операция то операнда заменяет равоно
			let operandaSign = arr[1];
			scrin.innerHTML = action(operandaSign, arr) + '\u00A0' + n  + '\u00A0';		
		}else{
			
       scrin.innerText  = text + '\u00A0' + n  + '\u00A0';//'\u00A0' - браузер затерает пробелыв конце строк, а эта штука значит пробел который не сотрется
       
		}
      
      
	
	});
}


//////////////////////////////////////////digit//////////////////////////////////////////
for (i = 0; i < digit.length; i++) {

	//console.log(digit[i].dataset.number);

	digit[i].addEventListener("click", function(){

		if(cancel == true){//проверяем есть ли на экране готовое решение от предыдущегей операции


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

reset.addEventListener("click", function(){  
	
	let text = scrin.innerText.trim();

let arr = text.split('');

let pop = arr.pop()//последний элемент массива
if(pop == ' '|| pop == '+' || pop == '-' || pop == '*' || pop == '/'){
	scrin.innerText  = text.slice(0, -2)//Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
}else{
	scrin.innerText  = text.slice(0, -1)
}


	})

function action(operandaSign, arr){
		switch (operandaSign) {
	  case "+":
	    return Number(arr[0]) + Number(arr[2]);//Number приводит строку к числу
	    break;
	  case "-":
	    return Number(arr[0]) - Number(arr[2]);
	    break;
	     case "*":
	    return Number(arr[0]) * Number(arr[2]);
	    break;
	     case "/":
		    if(Number(arr[2] == 0)){
		     	return '<div class="alert_null">на ноль делить нельзя</div>';
		     }else{
		     	return Number(arr[0]) / Number(arr[2]);
		     }   
	    break;
	}
}

}

/*reset.addEventListener("click", function(){  
	
	let text = scrin.innerText.trim();
	
       scrin.innerText  = text.slice(0, -1).trim();//Метод slice() извлекает часть строки и возвращает новую строку без изменения оригинальной строки.
	});*/
