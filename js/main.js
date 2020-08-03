let number = '';
let number1 = '';
let number2 = '';
let sign = '';
let formula = '';

$(function(){
$('.num').click(function(){
    number = $(this).text();
    if(sign !== ''){
        number1 += number;
        number = '';
    }else{
        number2 += number
    }
    display_result(number2 + sign + number1);
    formula = eval(number2 + sign + number1);
});

   //Belgilarni bosganda bajariladigan harakat
   $('.sign').click(function(){
    //Bosilgan belgini topish
    sign = $(this).text(); 
    //Belgilarni HTML entity formatida oddiy matematik operator
    //belgisiga konvertatsiya qilish
    if(sign === '/'){
        sign = '/';
    } 
    if(sign === '*'){
        sign = '*'
    }
    if(sign === '-'){
        sign = '-';
    }
    if(sign === '%'){
        sign = '%';
    }
    if(sign == 'C'){
        A_button();
    }
    if(sign == '='){
        display_result(formula);
        A_button(false);
    }
  });     
}); 

function display_result(num) {
$('.result').html(num); 
}

function A_button(reset = true){
number = '';
number1 = '';
number2 = ''; 
sign = ''; 

if(reset){
display_result(0);  
}
}