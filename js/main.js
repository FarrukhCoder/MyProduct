let eldarkLightBtn = document.getElementById('darkLightBtn');
let elmainBody = document.getElementById('mainBody');
let elspecificially = document.getElementById('specificially');
let elprocess = document.getElementById('process');
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
            elmainBody.classList.remove("fixed");
            elmenuIcon.className = 'bx bx-menu';
            qwerty++;
        }else{
            qwerty = 0;
            elnavbar.classList.add("show");
            elmenuIcon.className = 'bx bx-x';
            elmainBody.classList.add("fixed") ;
        }
    })

    eldarkLightBtn.addEventListener('click' , function(){
    if (count == 0){
        elmainBody.classList.add("dark");
        elspecificially.style.backgroundImage = "url('/img/specificially-dark-bg.svg')";
        elprocess.style.backgroundImage = "url('/img/process-dark-bg.svg')" ;
        count++;
    } else{
        count = 0;
        elmainBody.classList.remove("dark");
        elspecificially.style.backgroundImage = "url('/img/spece-bg.svg')";
        elprocess.style.backgroundImage = "url('/img/linear-bg.svg')" ;
    }
})
