
let eldarkLightBtn = document.getElementById('darkLightBtn');
let elburgerbtn = document.getElementById('burgerBtn');
let elnavbar = document.getElementById('navbar');
let elmenuIcon = document.getElementById('menuIcon');
let elenterprise = document.getElementById('enterprise');
let elpriceBody = document.getElementById('priceBody');
    
let count = 0;
let qwerty = 0;

elburgerbtn.addEventListener('click' , function(){
    if (qwerty == 0){
        elnavbar.classList.remove("show");
        elpriceBody.classList.remove("fixed");
        elmenuIcon.className = 'bx bx-menu';
        qwerty++;
    }else{
        qwerty = 0;
        elnavbar.classList.add("show");
        elmenuIcon.className = 'bx bx-x';
        elpriceBody.classList.add("fixed") ;
    }
})
eldarkLightBtn.addEventListener('click' , function(){
    if(count == 0){
        elpriceBody.classList.add("dark");
        elenterprise.style.background = "#22343D";
        count++;
    }else{
        count = 0;
        elpriceBody.classList.remove("dark");
        elenterprise.style.background = "linear-gradient(180deg, #F7F7F7 0%, rgba(247, 247, 247, 0) 100%)";
    }
})