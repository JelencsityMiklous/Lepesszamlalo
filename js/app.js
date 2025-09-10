const AppTitle = 'Lépésszámláló App';
const Author = '13.A Szoftverfejlesztő'
const Company = 'Bajai SZC Türr István Technikum'
const Server = "http://localhost:3000"


let title = document.querySelector('#title')
let company = document.querySelector('#company')
let author = document.querySelector('#author')

title.innerHTML=AppTitle;
company.innerHTML=Company;
author.innerHTML=Author;

let main = document.querySelector('main')
let mainMenu = document.querySelector('#mainMenu')
let userMenu = document.querySelector('#userMenu')


let loggedUser = null

let lightmodeBtn = document.querySelector('#lightmodeBtn')
let darkmodeBtn = document.querySelector('#darkmodeBtn')

lightmodeBtn.addEventListener('click', () =>{

    SetTheme('light');
    saveTheme('light')
    setThemeBtn('light')

})

darkmodeBtn.addEventListener('click', () =>{

    SetTheme('dark');
    saveTheme('dark')
    setThemeBtn('dark')



})

let theme = 'light';

function loadTheme(){

    if(localStorage.getItem('SCTheme')){
        theme=localStorage.getItem('SCTheme');

    }
    SetTheme(theme);
}

function saveTheme(theme){

localStorage.setItem('SCTheme', theme);

}

function SetTheme(theme){

    document.documentElement.setAttribute('data-bs-theme', theme)
    setThemeBtn(theme)

}

function setThemeBtn(theme){
    if(theme=='light'){
        lightmodeBtn.classList.add('hide')
        darkmodeBtn.classList.remove('hide')
    }
    else{
        lightmodeBtn.classList.remove('hide')
        darkmodeBtn.classList.add('hide')
    }
}

loadTheme()
saveTheme()

async function render(view){
    main.innerHTML= await (await fetch(`views/${view}.html`)).text();
}

async function getLoggedUser(){
    if(sessionStorage.getItem('loggedUser')){
        loggedUser=JSON.parse(sessionStorage.getItem('loggedUser'))
        mainMenu.classList.add('hide')
        userMenu.classList.remove('hide')
        await render('main')
    }
    else {
        loggedUser=null
        mainMenu.classList.remove('hide')
        userMenu.classList.add('hide')
        await render('login')
    }
    return loggedUser;
}


getLoggedUser()
