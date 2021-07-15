// CALL BACK HELL TASK 

var h1 = document.createElement('h1');
h1.id = 'text';
h1.style.marginTop='20%';
h1.style.color='red';
h1.style.marginBottom='10px';
h1.style.textAlign='center';

// var button = document.createElement('button');
// button.className='btn btn-info'
// button.setAttribute('onclick','foo()');
// button.innerHTML='Count Down Start';
// button.style.marginLeft='45%';

document.body.append(h1);


    var text = document.querySelector('#text');
    text.innerHTML="";
    text.style.color="red";
    setTimeout(function(){
        text.innerHTML="10";  
        setTimeout(function(){
            text.innerHTML="9";  
            setTimeout(function(){
                text.innerHTML="8"; 
                setTimeout(function(){
                    text.innerHTML="7";  
                    setTimeout(function(){
                        text.innerHTML="6"; 
                        setTimeout(function(){
                            text.innerHTML="5"; 
                            setTimeout(function(){
                                text.innerHTML="4"; 
                                setTimeout(function(){
                                    text.innerHTML="3";    
                                    setTimeout(function(){
                                        text.innerHTML="2"; 
                                        setTimeout(function(){
                                            text.innerHTML="1"; 
                                            setTimeout(function(){
                                                text.innerHTML="0";   
                                                setTimeout(function(){
                                                    text.innerHTML="Happy Independence Day";
                                                    text.style.color="orange";        
                                                },1000);      
                                            },1000);       
                                        },1000);       
                                    },1000);    
                                },1000);       
                            },1000);       
                        },1000);       
                    },1000);      
                },1000);      
            },1000);      
        },1000);      
    },500);


// function foo(){
//     var text = document.querySelector('#text');
//     setTimeout(function(){
//         text.innerHTML="10";        
//     },1000);
//     setTimeout(function(){
//         text.innerHTML="9";
//     },2000);
//     setTimeout(function(){
//         text.innerHTML="8";
//     },3000);
//     setTimeout(function(){
//         text.innerHTML="7";
//     },4000);
//     setTimeout(function(){
//         text.innerHTML="6";
//     },5000);
//     setTimeout(function(){
//         text.innerHTML="5";
//     },6000);
//     setTimeout(function(){
//         text.innerHTML="4";
//     },7000);
//     setTimeout(function(){
//         text.innerHTML="3";
//     },8000);
//     setTimeout(function(){
//         text.innerHTML="2";
//     },9000);
//     setTimeout(function(){
//         text.innerHTML="1";
//     },10000);
//     setTimeout(function(){
//         text.innerHTML="0";
//     },11000);
//     setTimeout(function(){
//         text.innerHTML="Happy Independence Day";
//         text.style.color='Orange';
//     },12000);
// }






// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// function div(a,b){
// return a/b;
// }
// function mul(a,b){
//     return a*b;
// }
// function mod(a,b){
//     return a%b;
// }
// function exp(a,b){
//     return a^b;
// }
// function calculator(a,b,cb){
//     console.log(cb(a,b));
// }

// calculator(4,5,sum);
// calculator(4,5,sub);
// calculator(4,5,div);
// calculator(4,5,mul);
// calculator(2,5,mod);
// calculator(2,5,exp);
