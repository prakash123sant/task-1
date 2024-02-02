let cvBtn=document.getElementById("cvBtn");
let submit=document.getElementById("submit");

cvBtn.addEventListener("click",function(){
    alart("Downlode Succesfully")
})

submit.addEventListener("click",function(){
    let email=document.getElementById("email");
    let pass=document.getElementById("pass");
    if(email.value==" && pass.value=="){
        alart("Fill Detail")

    }else{
       alart("Logged IN") 
    }
})