let eldarkLightBtn = document.getElementById('darkLightBtn');
let elburgerbtn = document.getElementById('burgerBtn');
let elnavbar = document.getElementById('navbar');
let elmenuIcon = document.getElementById('menuIcon');
let elcustomer = document.getElementById('customerBody');
let elproduct = document.getElementById('product');
let eloffer  = document.getElementById('offer');
    
let count = 0;
let qwerty = 0;

elburgerbtn.addEventListener('click' , function(){
    if (qwerty == 0){
        elnavbar.classList.remove("show");
        elcustomer.classList.remove("fixed");
        elmenuIcon.className = 'bx bx-menu';
        qwerty++;
    }else{
        qwerty = 0;
        elnavbar.classList.add("show");
        elmenuIcon.className = 'bx bx-x';
        elcustomer.classList.add("fixed") ;
    }
})
eldarkLightBtn.addEventListener('click' , function(){
    if(count == 0){
        elcustomer.classList.add("dark");
        elproduct.style.background = "#22343D";
        eloffer.style.background = "#22343D";
        count++;
    }else{
        count = 0;
        elcustomer.classList.remove("dark");
        elproduct.style.background = "#F5F5F5";
        eloffer.style.background = "linear-gradient(180deg, #F5F5F5 0%, rgba(245, 245, 245, 0) 100%)";
    }
})