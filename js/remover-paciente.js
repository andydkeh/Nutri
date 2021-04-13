var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
   event.target.parentNode.classList.add("fadeOut");
   //espera para algo
   setTimeout(function(){
       event.target.parentNode.remove();
    
   }, (500));
   
});