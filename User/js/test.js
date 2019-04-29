'use strict';
let dataReload = document.querySelectorAll("[data-reload]");
let hi = document.getElementById('hi');
let language = {
    eng:{
        welcome: "Hello world!"
    },
    rus:{
        welcome: "Зкшмуе ьшк!"
    }
};

if(window.location.hash){
    if(window.location.hash === "#rus"){
        hi.textContent = language.rus.welcome;
    }
}

for(let i=0; i <= dataReload.length; i++){
    dataReload[i].onclick = function(){
        location.reload(true);
    };
}