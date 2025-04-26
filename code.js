const submitHandler=(event)=>{
    
    event.preventDefault();
    let  a=document.getElementById("Num1").value;
    let b=document.getElementById("Num2").value;
    let sum=parseInt(a)+parseInt(b);

document.getElementById("result").textContent="Result is "+sum ;
    
}


