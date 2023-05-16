let eldarkLightBtn = document.getElementById('darkLightBtn');
let elburgerbtn = document.getElementById('burgerBtn');
let elnavbar = document.getElementById('navbar');
let elmenuIcon = document.getElementById('menuIcon');
let elresource = document.getElementById('resourceBody');
let elsendmessage = document.getElementById('sendMessage');
let elbusinessImage = document.getElementById('businessImage');
    
let count = 0;
let qwerty = 0;

elburgerbtn.addEventListener('click' , function(){
    if (qwerty == 0){
        elnavbar.classList.remove("show");   
        elmenuIcon.className = 'bx bx-menu';
        elresource.classList.remove("fixed");
        qwerty++;
    }else{
        qwerty = 0;
        elnavbar.classList.add("show");
        elmenuIcon.className = 'bx bx-x';
        elresource.classList.add("fixed") ;
    }
})
eldarkLightBtn.addEventListener('click' , function(){
    if(count == 0){
        elresource.classList.add("dark");
        elsendmessage.style.background = "#22343D";
        elsendmessage.style.borderColor = "#464646";
        elbusinessImage.src = "../img/Chat-Bot.png";
        count++;
    }else{
        count = 0;
        elresource.classList.remove("dark");
        elsendmessage.style.background = "#fff";
        elbusinessImage.src = "../img/busines-image.svg";
    }
})